import { useState, useMemo } from "react";

export interface SearchableItem {
  id: string;
  title: string;
  description?: string;
  keywords?: string[];
  section: string;
  url?: string;
  icon?: string;
  color?: string;
}

export function useSearch(items: SearchableItem[]) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return items;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);

    return items.filter(item => {
      const searchableText = [
        item.title,
        item.description || "",
        item.section,
        ...(item.keywords || [])
      ].join(" ").toLowerCase();

      // Check if all search terms match (fuzzy matching)
      return searchTerms.every(term => {
        // Exact match
        if (searchableText.includes(term)) {
          return true;
        }

        // Fuzzy matching - check if term is similar to any word
        const words = searchableText.split(/\s+/);
        return words.some(word => {
          if (word.length < 3 || term.length < 3) {
            return word.startsWith(term) || term.startsWith(word);
          }

          // Simple fuzzy matching based on character overlap
          const minLength = Math.min(word.length, term.length);
          const maxLength = Math.max(word.length, term.length);

          // Allow 1-2 character differences based on length
          const allowedDiff = minLength < 5 ? 1 : 2;
          const actualDiff = maxLength - minLength;

          if (actualDiff > allowedDiff) {
            return false;
          }

          // Count matching characters in order
          let matches = 0;
          let termIndex = 0;

          for (let i = 0; i < word.length && termIndex < term.length; i++) {
            if (word[i] === term[termIndex]) {
              matches++;
              termIndex++;
            }
          }

          return matches >= Math.min(term.length, word.length) - allowedDiff;
        });
      });
    });
  }, [items, query]);

  return {
    query,
    setQuery,
    results: filteredItems,
    hasQuery: query.trim().length > 0
  };
}