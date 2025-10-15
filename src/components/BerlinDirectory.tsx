"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { ArrowLeft, ExternalLink, CheckCircle2, Phone, Globe, Users, Heart, Palette, DollarSign, Shield, GraduationCap, Handshake, Baby, PiggyBank, Building2, Banknote, Search, X, MapPin, Calendar, Languages, Shield as ShieldIcon } from "lucide-react";
import { useSearch, type SearchableItem } from "~/hooks/useSearch";
import LanguageDropdown from "~/components/LanguageDropdown";
import { getTranslations, type Language } from "~/lib/translations";

type DirectorySection = "main" | "new-here" | "berliner" | "house-registration" | "gender-violence" | "short-term-funds" | "language-classes" | "communities" | "sports" | "parenthood" | "arts-culture" | "family-kids" | "unemployment";

interface LinkItem {
  title: string;
  url?: string;
  description?: string;
  icon?: string;
  color?: string;
}

export default function BerlinDirectory() {
  const [currentSection, setCurrentSection] = useState<DirectorySection>("main");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right">("left");
  const [language, setLanguage] = useState<Language>("en");

  // Detect language from URL on mount and when URL changes
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang") as Language;
    setLanguage(langParam === "de" ? "de" : "en");
  }, []);

  const t = getTranslations(language);

  // Create searchable items from all links
  const searchableItems: SearchableItem[] = [
    // Main sections
    {
      id: "berliner",
      title: "Berliner",
      description: "Services for residents",
      section: "Main",
      keywords: ["resident", "local", "citizen"]
    },
    {
      id: "new-here",
      title: "I'm new here",
      description: "Services for newcomers",
      section: "Main",
      keywords: ["newcomer", "immigrant", "new", "arrival"]
    },
    // New here links
    {
      id: "immigration",
      title: "Immigration",
      description: "Immigration services and information",
      section: "I'm new here",
      keywords: ["visa", "permit", "immigration"]
    },
    {
      id: "house-registration",
      title: "House Registration",
      description: "Residential registration (Anmeldung)",
      section: "I'm new here",
      url: "house-registration-checklist",
      keywords: ["anmeldung", "registration", "address", "residence"]
    },
    {
      id: "health-insurance",
      title: "Health Insurance",
      description: "Health insurance providers and guidance",
      section: "I'm new here",
      url: "https://allaboutberlin.com/guides/german-health-insurance",
      keywords: ["health", "insurance", "medical", "krankenversicherung"]
    },
    {
      id: "tax-registration",
      title: "Tax Registration",
      description: "Tax number and registration services",
      section: "I'm new here",
      keywords: ["tax", "steuer", "number", "registration"]
    },
    {
      id: "co-tasker",
      title: "Co-tasker",
      description: "Task and service marketplace",
      section: "I'm new here",
      url: "https://www.co-tasker.com/",
      keywords: ["tasks", "services", "marketplace", "work", "jobs"]
    },
    // Berliner links
    {
      id: "unemployment",
      title: "Unemployment",
      description: "Where to go for monetary support",
      section: "Berliner",
      url: "unemployment",
      icon: "DollarSign",
      color: "green",
      keywords: ["jobless", "support", "money", "benefits", "arbeitslos"]
    },
    {
      id: "gender-violence",
      title: "Gender Violence and Divorce",
      description: "Support for finding a safe home",
      section: "Berliner",
      url: "gender-violence",
      icon: "Shield",
      color: "slate",
      keywords: ["violence", "abuse", "divorce", "safety", "women", "help"]
    },
    {
      id: "language-classes",
      title: "Language Classes",
      description: "German language learning opportunities",
      section: "Berliner",
      url: "language-classes",
      icon: "GraduationCap",
      color: "blue",
      keywords: ["german", "language", "learn", "deutsch", "classes"]
    },
    {
      id: "communities",
      title: "Communities",
      description: "Community groups and social connections",
      section: "Berliner",
      url: "communities",
      icon: "Handshake",
      color: "purple",
      keywords: ["community", "social", "groups", "connect", "people"]
    },
    {
      id: "family-kids",
      title: "Family and Kids",
      description: "Services for families with children",
      section: "Berliner",
      url: "family-kids",
      icon: "Baby",
      color: "pink",
      keywords: ["family", "children", "kids", "parents", "parenting"]
    },
    // Unemployment sub-links
    {
      id: "save-money",
      title: "Save money",
      description: "Tips and resources for saving money while unemployed",
      section: "Unemployment",
      icon: "PiggyBank",
      color: "blue",
      keywords: ["save", "money", "budget", "finances", "tips"]
    },
    {
      id: "start-business",
      title: "Start a business",
      description: "Resources and support for starting your own business",
      section: "Unemployment",
      url: "https://www.ibbventures.de/de/news/impact-funding-map",
      icon: "Building2",
      color: "green",
      keywords: ["business", "startup", "entrepreneur", "company", "grants"]
    },
    {
      id: "get-money",
      title: "Get money",
      description: "Financial support and assistance programs",
      section: "Unemployment",
      icon: "Banknote",
      color: "yellow",
      keywords: ["money", "financial", "support", "assistance", "benefits"]
    },
    // Language classes
    {
      id: "offene-tur",
      title: "Offene Tur",
      description: "25 Euro per month",
      section: "Language Classes",
      url: "https://offenetuer.net/de",
      keywords: ["german", "cheap", "affordable", "language"]
    },
    {
      id: "kub",
      title: "KUB",
      description: "Free",
      section: "Language Classes",
      url: "https://kub-berlin.org/en/",
      keywords: ["german", "free", "language"]
    },
    // Gender violence
    {
      id: "short-term-funds",
      title: "Short term funds and housing",
      description: "Emergency financial assistance and temporary housing",
      section: "Gender Violence and Divorce",
      url: "short-term-funds",
      keywords: ["emergency", "housing", "funds", "temporary", "help"]
    },
    {
      id: "frauenraum",
      title: "Frauenraum",
      description: "Support services for women",
      section: "Short term funds and housing",
      url: "https://www.frauenraum.de/",
      keywords: ["women", "support", "help", "services"]
    },
    // Communities sub-links
    {
      id: "sports",
      title: "Sports",
      description: "Sports clubs and athletic communities",
      section: "Communities",
      url: "sports",
      keywords: ["sports", "athletic", "clubs", "fitness", "exercise"]
    },
    {
      id: "parenthood",
      title: "Parenthood",
      description: "Parenting groups and family support",
      section: "Communities",
      url: "parenthood",
      keywords: ["parenting", "parents", "family", "support", "groups"]
    },
    {
      id: "arts-culture",
      title: "Arts and Culture",
      description: "Cultural groups and artistic communities",
      section: "Communities",
      url: "arts-culture",
      keywords: ["arts", "culture", "artistic", "creative", "cultural"]
    },
    // Family and kids
    {
      id: "himbeer",
      title: "Himbeer Magazine weekly activity guide",
      description: "Weekly activities and events for families",
      section: "Family and Kids",
      url: "https://berlinmitkind.de/",
      keywords: ["activities", "events", "families", "weekly", "guide"]
    },
    {
      id: "black-parents",
      title: "Black Parents Germany",
      description: "Community and support for Black parents",
      section: "Family and Kids",
      url: "https://www.blackparents.de",
      keywords: ["black", "parents", "community", "support", "germany"]
    }
  ];

  const { query, setQuery, results, hasQuery } = useSearch(searchableItems);

  const navigateToSection = (section: DirectorySection, direction: "left" | "right" = "left") => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimationDirection(direction);

    setTimeout(() => {
      setCurrentSection(section);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 200);
  };

  const newHereLinks: LinkItem[] = [
    { title: "Immigration", description: "Immigration services and information" },
    {
      title: "House Registration",
      description: "Residential registration (Anmeldung)",
      url: "house-registration-checklist"
    },
    {
      title: "Health Insurance",
      description: "Health insurance providers and guidance",
      url: "https://allaboutberlin.com/guides/german-health-insurance"
    },
    { title: "Tax Registration", description: "Tax number and registration services" },
    {
      title: "Co-tasker",
      description: "Task and service marketplace",
      url: "https://www.co-tasker.com/"
    }
  ];

  const berlinerLinks: LinkItem[] = [
    {
      title: "Unemployment",
      description: "Where to go for monetary support",
      url: "unemployment",
      icon: "DollarSign",
      color: "green"
    },
    {
      title: "Gender Violence and Divorce",
      description: "Support for finding a safe home",
      url: "gender-violence",
      icon: "Shield",
      color: "slate"
    },
    {
      title: "Language Classes",
      description: "German language learning opportunities",
      url: "language-classes",
      icon: "GraduationCap",
      color: "blue"
    },
    {
      title: "Communities",
      description: "Community groups and social connections",
      url: "communities",
      icon: "Handshake",
      color: "purple"
    },
    {
      title: "Family and Kids",
      description: "Services for families with children",
      url: "family-kids",
      icon: "Baby",
      color: "pink"
    }
  ];

  const genderViolenceLinks: LinkItem[] = [
    { 
      title: "Short term funds and housing", 
      description: "Emergency financial assistance and temporary housing",
      url: "short-term-funds"
    }
  ];

  const shortTermFundsLinks: LinkItem[] = [
    { 
      title: "Frauenraum", 
      description: "Support services for women",
      url: "https://www.frauenraum.de/"
    }
  ];

  const languageClassesLinks: LinkItem[] = [
    { 
      title: "Offene Tur", 
      description: "25 Euro per month",
      url: "https://offenetuer.net/de"
    },
    { 
      title: "KUB", 
      description: "Free",
      url: "https://kub-berlin.org/en/"
    }
  ];

  const communitiesLinks: LinkItem[] = [
    {
      title: "Sports",
      description: "Sports clubs and athletic communities",
      url: "sports"
    },
    {
      title: "Parenthood",
      description: "Parenting groups and family support",
      url: "parenthood"
    },
    {
      title: "Arts and Culture",
      description: "Cultural groups and artistic communities",
      url: "arts-culture"
    }
  ];

  const familyKidsLinks: LinkItem[] = [
    {
      title: "Himbeer Magazine weekly activity guide",
      description: "Weekly activities and events for families",
      url: "https://berlinmitkind.de/"
    },
    {
      title: "Black Parents Germany",
      description: "Community and support for Black parents",
      url: "https://www.blackparents.de"
    }
  ];

  const unemploymentLinks: LinkItem[] = [
    {
      title: "Save money",
      description: "Tips and resources for saving money while unemployed",
      icon: "PiggyBank",
      color: "blue"
    },
    {
      title: "Start a business",
      description: "Resources and support for starting your own business",
      icon: "Building2",
      color: "green",
      url: "https://www.ibbventures.de/de/news/impact-funding-map"
    },
    {
      title: "Get money",
      description: "Financial support and assistance programs",
      icon: "Banknote",
      color: "yellow"
    }
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.url === "house-registration-checklist") {
      navigateToSection("house-registration", "left");
    } else if (link.url === "gender-violence") {
      navigateToSection("gender-violence", "left");
    } else if (link.url === "short-term-funds") {
      navigateToSection("short-term-funds", "left");
    } else if (link.url === "language-classes") {
      navigateToSection("language-classes", "left");
    } else if (link.url === "communities") {
      navigateToSection("communities", "left");
    } else if (link.url === "sports") {
      navigateToSection("sports", "left");
    } else if (link.url === "parenthood") {
      navigateToSection("parenthood", "left");
    } else if (link.url === "arts-culture") {
      navigateToSection("arts-culture", "left");
    } else if (link.url === "family-kids") {
      navigateToSection("family-kids", "left");
    } else if (link.url === "unemployment") {
      navigateToSection("unemployment", "left");
    } else if (link.url) {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleSearchResultClick = (item: SearchableItem) => {
    // Clear search first
    setQuery("");

    // Navigate based on item ID
    if (item.id === "berliner") {
      navigateToSection("berliner", "left");
    } else if (item.id === "new-here") {
      navigateToSection("new-here", "left");
    } else if (item.url === "house-registration-checklist") {
      navigateToSection("house-registration", "left");
    } else if (item.url === "gender-violence") {
      navigateToSection("gender-violence", "left");
    } else if (item.url === "short-term-funds") {
      navigateToSection("short-term-funds", "left");
    } else if (item.url === "language-classes") {
      navigateToSection("language-classes", "left");
    } else if (item.url === "communities") {
      navigateToSection("communities", "left");
    } else if (item.url === "sports") {
      navigateToSection("sports", "left");
    } else if (item.url === "parenthood") {
      navigateToSection("parenthood", "left");
    } else if (item.url === "arts-culture") {
      navigateToSection("arts-culture", "left");
    } else if (item.url === "family-kids") {
      navigateToSection("family-kids", "left");
    } else if (item.url === "unemployment") {
      navigateToSection("unemployment", "left");
    } else if (item.url && item.url.startsWith("http")) {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  const renderSearchResults = () => (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold dark:text-white">{t.searchResults}</h2>
        <p className="text-sm text-muted-foreground dark:text-gray-400">
          {t.foundResults} {results.length} {results.length !== 1 ? t.results : t.result} {t.for} &quot;{query}&quot;
        </p>
      </div>

      <div className="space-y-2">
        {results.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:bg-accent dark:hover:bg-slate-700 transition-colors dark:bg-slate-800/90 dark:border-slate-700"
            onClick={() => handleSearchResultClick(item)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {item.icon && item.color && (
                    <div className="flex-shrink-0">
                      {getIconComponent(item.icon, item.color)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className={`font-medium ${item.color ? `text-${item.color}-800 dark:text-${item.color}-200` : 'dark:text-white'}`}>
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className={`text-sm mt-1 ${item.color ? `text-${item.color}-700 dark:text-${item.color}-300` : 'text-muted-foreground dark:text-gray-400'}`}>
                        {item.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground dark:text-gray-500 mt-1">
                      {t.in} {item.section}
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMainPage = () => (
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground dark:text-gray-400" />
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 dark:bg-slate-800/50 dark:border-slate-700 dark:text-white dark:placeholder-gray-400"
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery("")}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent dark:text-gray-400 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Show search results or main content */}
      {hasQuery ? (
        renderSearchResults()
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-blue-100 dark:bg-blue-800/30 border-0 shadow-xl" onClick={() => navigateToSection("berliner", "left")}>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-200 dark:bg-blue-700/50 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-700 dark:text-blue-300" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200">{t.berliner}</h2>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  {t.berlinerDesc}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-green-100 dark:bg-green-800/30 border-0 shadow-xl" onClick={() => navigateToSection("new-here", "left")}>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-200 dark:bg-green-700/50 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-green-700 dark:text-green-300" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-green-800 dark:text-green-200">{t.newHere}</h2>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  {t.newHereDesc}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      )}
    </div>
  );

  const getIconComponent = (iconName: string, color: string) => {
    const iconProps = {
      className: `h-6 w-6 text-${color}-600 dark:text-${color}-400`
    };

    switch (iconName) {
      case "DollarSign": return <DollarSign {...iconProps} />;
      case "Shield": return <Shield {...iconProps} />;
      case "GraduationCap": return <GraduationCap {...iconProps} />;
      case "Handshake": return <Handshake {...iconProps} />;
      case "Baby": return <Baby {...iconProps} />;
      case "PiggyBank": return <PiggyBank {...iconProps} />;
      case "Building2": return <Building2 {...iconProps} />;
      case "Banknote": return <Banknote {...iconProps} />;
      default: return <ExternalLink {...iconProps} />;
    }
  };

  const renderLinkSection = (title: string, links: LinkItem[]) => {
    const getBackSection = () => {
      if (title === "Gender Violence and Divorce") return "berliner";
      if (title === "I'm new here") return "main";
      return "main";
    };

    // Use grid layout for most sections to make pages more compact
    const shouldUseGrid = links.length > 1;
    const gridCols = links.length === 2 ? "grid-cols-1 sm:grid-cols-2" :
                     links.length === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" :
                     links.length >= 4 ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3" :
                     "grid-cols-1";

    const isBerlinerSection = title === "Berliner";

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToSection(getBackSection() as DirectorySection, "right")}
            className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t.back}</span>
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h1>
        </div>

        <div className={shouldUseGrid ? `grid ${gridCols} gap-3` : "space-y-3"}>
          {links.map((link, index) => {
            const cardColorClass = isBerlinerSection && link.color
              ? `bg-${link.color}-50 dark:bg-${link.color}-900/20 border-${link.color}-200 dark:border-${link.color}-800 hover:bg-${link.color}-100 dark:hover:bg-${link.color}-900/30`
              : 'dark:bg-slate-800/90 dark:border-slate-700';

            return (
              <Card
                key={index}
                className={`transition-all duration-200 ${cardColorClass} ${link.url ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-75'}`}
                onClick={() => handleLinkClick(link)}
              >
                <CardContent className={shouldUseGrid ? "p-3 text-center" : "p-4"}>
                  {shouldUseGrid ? (
                    <div className="space-y-2 min-h-[80px] flex flex-col justify-center">
                      {isBerlinerSection && link.icon && link.color && (
                        <div className="mb-2">
                          {getIconComponent(link.icon, link.color)}
                        </div>
                      )}
                      <h3 className={`font-medium text-sm leading-tight ${isBerlinerSection && link.color ? `text-${link.color}-800 dark:text-${link.color}-200` : 'dark:text-white'}`}>
                        {link.title}
                      </h3>
                      {link.description && (
                        <p className={`text-xs line-clamp-2 ${isBerlinerSection && link.color ? `text-${link.color}-700 dark:text-${link.color}-300` : 'text-muted-foreground dark:text-gray-400'}`}>
                          {link.description}
                        </p>
                      )}
                      {link.url && !isBerlinerSection && <ExternalLink className="h-3 w-3 mx-auto text-muted-foreground dark:text-gray-400 mt-auto" />}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {isBerlinerSection && link.icon && link.color && (
                          <div className="flex-shrink-0">
                            {getIconComponent(link.icon, link.color)}
                          </div>
                        )}
                        <div>
                          <h3 className={`font-medium ${isBerlinerSection && link.color ? `text-${link.color}-800 dark:text-${link.color}-200` : 'dark:text-white'}`}>
                            {link.title}
                          </h3>
                          {link.description && (
                            <p className={`text-sm mt-1 ${isBerlinerSection && link.color ? `text-${link.color}-700 dark:text-${link.color}-300` : 'text-muted-foreground dark:text-gray-400'}`}>
                              {link.description}
                            </p>
                          )}
                        </div>
                      </div>
                      {link.url && !isBerlinerSection && <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-gray-400" />}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  const renderShortTermFunds = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("gender-violence", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Short term funds and housing</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Emergency financial assistance and temporary housing resources</p>
      </div>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Temporäre Unterkunft für Geflüchtete</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Weekdays</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Monday, Wednesday, Friday
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                  This service does not happen every week.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <MapPin className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Locations</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Oranienstr. 159<br />
                  10969 Berlin
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Languages className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Languages</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  German, English, French
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <ShieldIcon className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Accessibility</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400">
                  Without membership, Without papers, For free / donation
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Frauenraum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Support services for women in difficult situations
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Website</p>
                <a
                  href="https://www.frauenraum.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  www.frauenraum.de
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Phone</p>
                <a
                  href="tel:+493044845828"
                  className="text-sm text-green-600 dark:text-green-400 hover:underline"
                >
                  (030) 448 45 28
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Bora E.v</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Women&apos;s projects and support services
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Website</p>
                <a
                  href="https://www.frauenprojekte-bora.de/en/mainpage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  www.frauenprojekte-bora.de
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Phone</p>
                <a
                  href="tel:+49306110300"
                  className="text-sm text-green-600 dark:text-green-400 hover:underline"
                >
                  030 6110300
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Marie Frauenzentrum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Women&apos;s center providing support and services
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Website</p>
                <a
                  href="https://frauenzentrum-marie.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  frauenzentrum-marie.de
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderLanguageClasses = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("berliner", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Affordable German language classes</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">German language learning opportunities</p>
      </div>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Offene Tur</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            German language classes - 25 Euro per month
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Website</p>
                <a
                  href="https://offenetuer.net/de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  offenetuer.net/de
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">KUB</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            Free German language classes
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="flex-1">
                <p className="font-medium dark:text-white">Website</p>
                <a
                  href="https://kub-berlin.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  kub-berlin.org/en
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderHouseRegistrationChecklist = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("new-here", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">House Registration Requirements</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Checklist for online registration (Anmeldung)</p>
      </div>

      <Card className="dark:bg-slate-800/90 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-lg dark:text-white">Required Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium dark:text-white">Identification Document</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                An identification document with activated online ID and the associated PIN.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium dark:text-white">NFC-enabled Device</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                A suitable smartphone with NFC interface or a card reader. The free ID App of the Federal Government for the smartphone or PC.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium dark:text-white">User Account</p>
              <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                A user account, for example, the BundID.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-4">
          <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <p className="text-blue-800 dark:text-blue-300">
              Don&apos;t have the ID App? You can find the download options on the website of the ID App.
            </p>
            <p className="text-blue-800 dark:text-blue-300">
              You don&apos;t have a user account yet? You can set up your BundID on the website of BundID.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCommunities = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("berliner", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Communities</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Connect with community groups and social networks</p>
      </div>

      <div className="space-y-3">
        {communitiesLinks.map((link, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:bg-accent dark:hover:bg-slate-700 transition-colors dark:bg-slate-800/90 dark:border-slate-700"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {link.title === "Sports" && <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
                  {link.title === "Parenthood" && <Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />}
                  {link.title === "Arts and Culture" && <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium dark:text-white">{link.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSports = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("communities", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-2xl font-bold tracking-tight dark:text-white">Sports</h1>
        </div>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Sports clubs and athletic communities in Berlin</p>
      </div>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
        <CardContent className="p-6 text-center">
          <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Sports Communities</h3>
          <p className="text-sm text-blue-800 dark:text-blue-300">
            Connect with local sports clubs and athletic groups to stay active and meet new people in Berlin.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderParenthood = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("communities", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
          <h1 className="text-2xl font-bold tracking-tight dark:text-white">Parenthood</h1>
        </div>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Parenting groups and family support networks</p>
      </div>

      <Card className="bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800">
        <CardContent className="p-6 text-center">
          <Heart className="h-12 w-12 text-pink-600 dark:text-pink-400 mx-auto mb-4" />
          <h3 className="font-medium text-pink-900 dark:text-pink-300 mb-2">Parenting Support</h3>
          <p className="text-sm text-pink-800 dark:text-pink-300">
            Find parenting groups, family activities, and support networks for parents in Berlin.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderArtsCulture = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("communities", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Palette className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-2xl font-bold tracking-tight dark:text-white">Arts and Culture</h1>
        </div>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Cultural groups and artistic communities</p>
      </div>

      <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
        <CardContent className="p-6 text-center">
          <Palette className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h3 className="font-medium text-purple-900 dark:text-purple-300 mb-2">Arts & Culture</h3>
          <p className="text-sm text-purple-800 dark:text-purple-300">
            Discover Berlin&apos;s vibrant arts scene and connect with creative communities and cultural groups.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderFamilyKids = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("berliner", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Family and Kids</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Services and resources for families with children</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {familyKidsLinks.map((link, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:bg-accent dark:hover:bg-slate-700 transition-all duration-200 hover:scale-[1.02] dark:bg-slate-800/90 dark:border-slate-700"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-3 text-center">
              <div className="space-y-2 min-h-[100px] flex flex-col justify-center">
                <h3 className="font-medium text-sm leading-tight dark:text-white">{link.title}</h3>
                {link.description && (
                  <p className="text-xs text-muted-foreground dark:text-gray-400 line-clamp-3">
                    {link.description}
                  </p>
                )}
                <ExternalLink className="h-3 w-3 mx-auto text-muted-foreground dark:text-gray-400 mt-auto" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderUnemployment = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateToSection("berliner", "right")}
          className="flex items-center space-x-2 dark:text-white dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight dark:text-white">Unemployment</h1>
        <p className="text-sm text-muted-foreground dark:text-gray-400">Where to go for monetary support</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {unemploymentLinks.map((link, index) => {
          const cardColorClass = link.color
            ? `bg-${link.color}-50 dark:bg-${link.color}-900/20 border-${link.color}-200 dark:border-${link.color}-800 hover:bg-${link.color}-100 dark:hover:bg-${link.color}-900/30`
            : 'dark:bg-slate-800/90 dark:border-slate-700';

          return (
            <Card
              key={index}
              className={`transition-all duration-200 ${cardColorClass} ${link.url ? 'cursor-pointer hover:scale-[1.02]' : 'opacity-75'}`}
              onClick={() => handleLinkClick(link)}
            >
              <CardContent className="p-3 text-center">
                <div className="space-y-2 min-h-[80px] flex flex-col justify-center">
                  {link.icon && link.color && (
                    <div className="mb-2">
                      {getIconComponent(link.icon, link.color)}
                    </div>
                  )}
                  <h3 className={`font-medium text-sm leading-tight ${link.color ? `text-${link.color}-800 dark:text-${link.color}-200` : 'dark:text-white'}`}>
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className={`text-xs line-clamp-2 ${link.color ? `text-${link.color}-700 dark:text-${link.color}-300` : 'text-muted-foreground dark:text-gray-400'}`}>
                      {link.description}
                    </p>
                  )}
                  {link.url && <ExternalLink className="h-3 w-3 mx-auto text-muted-foreground dark:text-gray-400 mt-auto" />}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-lg mx-auto py-12 px-6 min-h-screen relative">
      {/* Language Dropdown - Fixed at top right */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageDropdown />
      </div>

      <div className={`transition-all duration-500 ease-out ${
        isAnimating
          ? animationDirection === "left"
            ? "transform translate-x-[-100%] opacity-0 scale-95"
            : "transform translate-x-[100%] opacity-0 scale-95"
          : "transform translate-x-0 opacity-100 scale-100"
      }`}>
        {currentSection === "main" && renderMainPage()}
        {currentSection === "new-here" && renderLinkSection("I'm new here", newHereLinks)}
        {currentSection === "berliner" && renderLinkSection("Berliner", berlinerLinks)}
        {currentSection === "house-registration" && renderHouseRegistrationChecklist()}
        {currentSection === "gender-violence" && renderLinkSection("Gender Violence and Divorce", genderViolenceLinks)}
        {currentSection === "short-term-funds" && renderShortTermFunds()}
        {currentSection === "language-classes" && renderLanguageClasses()}
        {currentSection === "communities" && renderCommunities()}
        {currentSection === "sports" && renderSports()}
        {currentSection === "parenthood" && renderParenthood()}
        {currentSection === "arts-culture" && renderArtsCulture()}
        {currentSection === "family-kids" && renderFamilyKids()}
        {currentSection === "unemployment" && renderUnemployment()}
      </div>
    </div>
  );
}