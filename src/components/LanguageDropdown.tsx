"use client";

import { ChevronDown, Languages } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function LanguageDropdown() {
  const handleLanguageChange = (language: string) => {
    if (language === "de") {
      // Create link to German version - using a parameter or different URL
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("lang", "de");
      window.location.href = currentUrl.toString();
    } else if (language === "en") {
      // Remove language parameter for English (default)
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete("lang");
      window.location.href = currentUrl.toString();
    }
  };

  // Check if current page is German version
  const isGerman = typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("lang") === "de";

  const currentLanguage = isGerman ? "de" : "en";
  const currentLanguageText = currentLanguage === "de" ? "Deutsch" : "English";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <Languages className="h-4 w-4" />
          <span>{currentLanguageText}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleLanguageChange("en")}
          className={currentLanguage === "en" ? "bg-accent" : ""}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageChange("de")}
          className={currentLanguage === "de" ? "bg-accent" : ""}
        >
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}