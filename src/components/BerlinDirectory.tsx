"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2, Phone, Globe, Users, Heart, Palette } from "lucide-react";

type DirectorySection = "main" | "new-here" | "berliner" | "house-registration" | "gender-violence" | "short-term-funds" | "language-classes" | "communities" | "sports" | "parenthood" | "arts-culture" | "family-kids" | "unemployment";

interface LinkItem {
  title: string;
  url?: string;
  description?: string;
}

export default function BerlinDirectory() {
  const [currentSection, setCurrentSection] = useState<DirectorySection>("main");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right">("left");

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
      title: "Startup grants",
      description: "Funding opportunities for startups",
      url: "https://www.ibbventures.de/de/news/impact-funding-map"
    },
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
      url: "unemployment"
    },
    {
      title: "Gender Violence and Divorce",
      description: "Support for finding a safe home",
      url: "gender-violence"
    },
    {
      title: "Language Classes",
      description: "German language learning opportunities",
      url: "language-classes"
    },
    {
      title: "Communities",
      description: "Community groups and social connections",
      url: "communities"
    },
    {
      title: "Family and Kids",
      description: "Services for families with children",
      url: "family-kids"
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
      title: "Migrapreneur",
      description: "Advice for migrants starting businesses",
      url: "https://migrapreneur.notion.site/Migrapreneur-Community-gUG-5b29d02a86d4491498744fef4d748ec1"
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

  const renderMainPage = () => (
    <div className="space-y-8">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Berlin Services Directory
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find the services you need in Berlin
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-blue-100 dark:bg-blue-800/30 border-0 shadow-xl" onClick={() => navigateToSection("berliner", "left")}>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-200 dark:bg-blue-700/50 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-700 dark:text-blue-300" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200">Berliner</h2>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  Services for residents
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
                <h2 className="text-xl font-bold text-green-800 dark:text-green-200">I&apos;m new here</h2>
                <p className="text-green-700 dark:text-green-300 leading-relaxed">
                  Services for newcomers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

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
            <span>Back</span>
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight dark:text-white">{title}</h1>
        </div>

        <div className={shouldUseGrid ? `grid ${gridCols} gap-3` : "space-y-3"}>
          {links.map((link, index) => (
            <Card
              key={index}
              className={`transition-all duration-200 dark:bg-slate-800/90 dark:border-slate-700 ${link.url ? 'cursor-pointer hover:bg-accent dark:hover:bg-slate-700 hover:scale-[1.02]' : 'opacity-75'}`}
              onClick={() => handleLinkClick(link)}
            >
              <CardContent className={shouldUseGrid ? "p-3 text-center" : "p-4"}>
                {shouldUseGrid ? (
                  <div className="space-y-2 min-h-[80px] flex flex-col justify-center">
                    <h3 className="font-medium text-sm leading-tight dark:text-white">{link.title}</h3>
                    {link.description && (
                      <p className="text-xs text-muted-foreground dark:text-gray-400 line-clamp-2">
                        {link.description}
                      </p>
                    )}
                    {link.url && <ExternalLink className="h-3 w-3 mx-auto text-muted-foreground dark:text-gray-400 mt-auto" />}
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium dark:text-white">{link.title}</h3>
                      {link.description && (
                        <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                          {link.description}
                        </p>
                      )}
                    </div>
                    {link.url && <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-gray-400" />}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
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

      <div className="grid grid-cols-1 gap-3">
        {unemploymentLinks.map((link, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:bg-accent dark:hover:bg-slate-700 transition-all duration-200 hover:scale-[1.02] dark:bg-slate-800/90 dark:border-slate-700"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium dark:text-white">{link.title}</h3>
                  {link.description && (
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-lg mx-auto py-12 px-6 min-h-screen">
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