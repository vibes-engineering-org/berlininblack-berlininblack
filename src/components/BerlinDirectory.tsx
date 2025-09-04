"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

type DirectorySection = "main" | "new-here" | "berliner";

interface LinkItem {
  title: string;
  url?: string;
  description?: string;
}

export default function BerlinDirectory() {
  const [currentSection, setCurrentSection] = useState<DirectorySection>("main");

  const newHereLinks: LinkItem[] = [
    { title: "Immigration", description: "Immigration services and information" },
    { title: "House Registration", description: "Residential registration (Anmeldung)" },
    { title: "Health Insurance", description: "Health insurance providers and guidance" },
    { title: "Tax Registration", description: "Tax number and registration services" }
  ];

  const berlinerLinks: LinkItem[] = [
    { title: "Service 1", description: "Coming soon" },
    { title: "Service 2", description: "Coming soon" },
    { title: "Service 3", description: "Coming soon" },
    { title: "Service 4", description: "Coming soon" },
    { title: "Service 5", description: "Coming soon" }
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.url) {
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

  const renderLinkSection = (title: string, links: LinkItem[]) => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentSection("main")}
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

  return (
    <div className="w-full max-w-md mx-auto py-8 px-4 min-h-screen">
      {currentSection === "main" && renderMainPage()}
      {currentSection === "new-here" && renderLinkSection("I'm new here", newHereLinks)}
      {currentSection === "berliner" && renderLinkSection("Berliner", berlinerLinks)}
    </div>
  );
}