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
      }, 50);
    }, 150);
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
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Berlin Services Directory</h1>
        <p className="text-lg text-muted-foreground">
          Find the services you need in Berlin
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="cursor-pointer hover:bg-accent transition-all duration-200 hover:scale-105" onClick={() => navigateToSection("berliner", "left")}>
          <CardContent className="p-4">
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 mx-auto text-blue-600" />
              <h2 className="text-lg font-semibold">Berliner</h2>
              <p className="text-sm text-muted-foreground">
                Services for residents
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-accent transition-all duration-200 hover:scale-105" onClick={() => navigateToSection("new-here", "left")}>
          <CardContent className="p-4">
            <div className="text-center space-y-2">
              <Globe className="h-8 w-8 mx-auto text-green-600" />
              <h2 className="text-lg font-semibold">I&apos;m new here</h2>
              <p className="text-sm text-muted-foreground">
                Services for newcomers
              </p>
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

    const shouldUseGrid = links.length <= 4 && links.every(link => link.title.length < 25);

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateToSection(getBackSection() as DirectorySection, "right")}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>

        <div className={shouldUseGrid ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "space-y-3"}>
          {links.map((link, index) => (
            <Card
              key={index}
              className={`transition-all duration-200 ${link.url ? 'cursor-pointer hover:bg-accent hover:scale-105' : 'opacity-75'}`}
              onClick={() => handleLinkClick(link)}
            >
              <CardContent className={shouldUseGrid ? "p-3 text-center" : "p-4"}>
                {shouldUseGrid ? (
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">{link.title}</h3>
                    {link.description && (
                      <p className="text-xs text-muted-foreground">
                        {link.description}
                      </p>
                    )}
                    {link.url && <ExternalLink className="h-3 w-3 mx-auto text-muted-foreground" />}
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{link.title}</h3>
                      {link.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </p>
                      )}
                    </div>
                    {link.url && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Short term funds and housing</h1>
        <p className="text-sm text-muted-foreground">Emergency financial assistance and temporary housing resources</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Frauenraum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Support services for women in difficult situations
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">Website</p>
                <a 
                  href="https://www.frauenraum.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  www.frauenraum.de
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:+493044845828"
                  className="text-sm text-green-600 hover:underline"
                >
                  (030) 448 45 28
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bora E.v</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Women&apos;s projects and support services
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">Website</p>
                <a 
                  href="https://www.frauenprojekte-bora.de/en/mainpage/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  www.frauenprojekte-bora.de
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium">Phone</p>
                <a 
                  href="tel:+49306110300"
                  className="text-sm text-green-600 hover:underline"
                >
                  030 6110300
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Marie Frauenzentrum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Women&apos;s center providing support and services
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">Website</p>
                <a 
                  href="https://frauenzentrum-marie.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Affordable German language classes</h1>
        <p className="text-sm text-muted-foreground">German language learning opportunities</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Offene Tur</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            German language classes - 25 Euro per month
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">Website</p>
                <a 
                  href="https://offenetuer.net/de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  offenetuer.net/de
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">KUB</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Free German language classes
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <Globe className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium">Website</p>
                <a 
                  href="https://kub-berlin.org/en/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">House Registration Requirements</h1>
        <p className="text-sm text-muted-foreground">Checklist for online registration (Anmeldung)</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Required Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Identification Document</p>
              <p className="text-sm text-muted-foreground mt-1">
                An identification document with activated online ID and the associated PIN.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">NFC-enabled Device</p>
              <p className="text-sm text-muted-foreground mt-1">
                A suitable smartphone with NFC interface or a card reader. The free ID App of the Federal Government for the smartphone or PC.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">User Account</p>
              <p className="text-sm text-muted-foreground mt-1">
                A user account, for example, the BundID.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h3 className="font-medium text-blue-900 mb-2">Need Help?</h3>
          <div className="space-y-2 text-sm">
            <p className="text-blue-800">
              Don&apos;t have the ID App? You can find the download options on the website of the ID App.
            </p>
            <p className="text-blue-800">
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Communities</h1>
        <p className="text-sm text-muted-foreground">Connect with community groups and social networks</p>
      </div>

      <div className="space-y-3">
        {communitiesLinks.map((link, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {link.title === "Sports" && <Users className="h-6 w-6 text-blue-600" />}
                  {link.title === "Parenthood" && <Heart className="h-6 w-6 text-pink-600" />}
                  {link.title === "Arts and Culture" && <Palette className="h-6 w-6 text-purple-600" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{link.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {link.description}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold tracking-tight">Sports</h1>
        </div>
        <p className="text-sm text-muted-foreground">Sports clubs and athletic communities in Berlin</p>
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6 text-center">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="font-medium text-blue-900 mb-2">Sports Communities</h3>
          <p className="text-sm text-blue-800">
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Heart className="h-8 w-8 text-pink-600" />
          <h1 className="text-2xl font-bold tracking-tight">Parenthood</h1>
        </div>
        <p className="text-sm text-muted-foreground">Parenting groups and family support networks</p>
      </div>

      <Card className="bg-pink-50 border-pink-200">
        <CardContent className="p-6 text-center">
          <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
          <h3 className="font-medium text-pink-900 mb-2">Parenting Support</h3>
          <p className="text-sm text-pink-800">
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-3">
          <Palette className="h-8 w-8 text-purple-600" />
          <h1 className="text-2xl font-bold tracking-tight">Arts and Culture</h1>
        </div>
        <p className="text-sm text-muted-foreground">Cultural groups and artistic communities</p>
      </div>

      <Card className="bg-purple-50 border-purple-200">
        <CardContent className="p-6 text-center">
          <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="font-medium text-purple-900 mb-2">Arts & Culture</h3>
          <p className="text-sm text-purple-800">
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Family and Kids</h1>
        <p className="text-sm text-muted-foreground">Services and resources for families with children</p>
      </div>

      <div className="space-y-3">
        {familyKidsLinks.map((link, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{link.title}</h3>
                  {link.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
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
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Unemployment</h1>
        <p className="text-sm text-muted-foreground">Where to go for monetary support</p>
      </div>

      <div className="space-y-3">
        {unemploymentLinks.map((link, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleLinkClick(link)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{link.title}</h3>
                  {link.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {link.description}
                    </p>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 min-h-screen">
      <div className={`transition-all duration-300 ease-in-out ${
        isAnimating
          ? animationDirection === "left"
            ? "transform translate-x-[-100%] opacity-0"
            : "transform translate-x-[100%] opacity-0"
          : "transform translate-x-0 opacity-100"
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