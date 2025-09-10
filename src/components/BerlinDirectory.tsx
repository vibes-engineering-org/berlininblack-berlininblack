"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle2, Phone, Globe } from "lucide-react";

type DirectorySection = "main" | "new-here" | "berliner" | "house-registration" | "gender-violence" | "short-term-funds";

interface LinkItem {
  title: string;
  url?: string;
  description?: string;
}

export default function BerlinDirectory() {
  const [currentSection, setCurrentSection] = useState<DirectorySection>("main");

  const newHereLinks: LinkItem[] = [
    { title: "Immigration", description: "Immigration services and information" },
    { 
      title: "House Registration", 
      description: "Residential registration (Anmeldung)",
      url: "house-registration-checklist"
    },
    { title: "Health Insurance", description: "Health insurance providers and guidance" },
    { title: "Tax Registration", description: "Tax number and registration services" }
  ];

  const berlinerLinks: LinkItem[] = [
    { title: "Unemployment", description: "Where to go for monetary support" },
    { 
      title: "Gender Violence and Divorce", 
      description: "Support for finding a safe home.",
      url: "gender-violence"
    },
    { title: "Service 3", description: "Coming soon" },
    { title: "Service 4", description: "Coming soon" },
    { title: "Service 5", description: "Coming soon" }
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

  const handleLinkClick = (link: LinkItem) => {
    if (link.url === "house-registration-checklist") {
      setCurrentSection("house-registration");
    } else if (link.url === "gender-violence") {
      setCurrentSection("gender-violence");
    } else if (link.url === "short-term-funds") {
      setCurrentSection("short-term-funds");
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
      
      <div className="space-y-4">
        <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => setCurrentSection("new-here")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">I&apos;m new here</h2>
                <p className="text-muted-foreground mt-1">
                  Essential services for newcomers to Berlin
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:bg-accent transition-colors" onClick={() => setCurrentSection("berliner")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Berliner</h2>
                <p className="text-muted-foreground mt-1">
                  Services and resources for Berlin residents
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
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

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentSection(getBackSection() as DirectorySection)}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => (
          <Card 
            key={index} 
            className={`transition-colors ${link.url ? 'cursor-pointer hover:bg-accent' : 'opacity-75'}`}
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
                {link.url && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
              </div>
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
          onClick={() => setCurrentSection("gender-violence")}
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
    </div>
  );

  const renderHouseRegistrationChecklist = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentSection("new-here")}
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

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 min-h-screen">
      {currentSection === "main" && renderMainPage()}
      {currentSection === "new-here" && renderLinkSection("I'm new here", newHereLinks)}
      {currentSection === "berliner" && renderLinkSection("Berliner", berlinerLinks)}
      {currentSection === "house-registration" && renderHouseRegistrationChecklist()}
      {currentSection === "gender-violence" && renderLinkSection("Gender Violence and Divorce", genderViolenceLinks)}
      {currentSection === "short-term-funds" && renderShortTermFunds()}
    </div>
  );
}