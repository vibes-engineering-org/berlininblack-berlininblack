"use client";

import { useState } from "react";
import { useMiniAppSdk } from "~/hooks/use-miniapp-sdk";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

type View = "main" | "berliner" | "new-here" | "unemployment" | "gender-violence" | "short-term-funds" | "language-classes" | "communities" | "family-kids";
type SubView = "save-money" | "start-business" | "get-money";

export default function App() {
  const { isSDKLoaded } = useMiniAppSdk();
  const [currentView, setCurrentView] = useState<View>("main");
  const [currentSubView, setCurrentSubView] = useState<SubView | null>(null);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const BackButton = () => (
    <button
      onClick={() => {
        if (currentSubView) {
          setCurrentSubView(null);
        } else {
          setCurrentView("main");
        }
      }}
      className="flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-800 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );

  const LinkButton = ({ url, children }: { url: string; children: React.ReactNode }) => (
    <button
      onClick={() => openLink(url)}
      className="flex items-center justify-between w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <span className="text-left">{children}</span>
      <ExternalLink className="h-4 w-4 text-gray-500" />
    </button>
  );

  if (currentView === "main") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Berlin Services Directory</h1>
            <div className="space-y-4">
              <button
                onClick={() => setCurrentView("berliner")}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors"
              >
                Berliner
              </button>
              <button
                onClick={() => setCurrentView("new-here")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors"
              >
                I&apos;m new here
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "new-here") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">I&apos;m new here</h2>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium">Immigration</h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium">House registration</h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Health insurance</h3>
                <LinkButton url="https://allaboutberlin.com/guides/german-health-insurance">
                  All About Berlin Guide
                </LinkButton>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium">Tax registration</h3>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Startup grants</h3>
                <LinkButton url="https://www.ibbventures.de/de/news/impact-funding-map">
                  IBB Ventures Impact Funding
                </LinkButton>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Co-tasker</h3>
                <LinkButton url="https://www.co-tasker.com/">
                  Co-tasker Platform
                </LinkButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "berliner") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Berliner Services</h2>
            <div className="space-y-3">
              <button
                onClick={() => setCurrentView("unemployment")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Service 1: Unemployment</h3>
                <p className="text-sm text-gray-600 mt-1">Where to go for monetary support</p>
              </button>
              <button
                onClick={() => setCurrentView("gender-violence")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Service 2: Gender violence and divorce</h3>
                <p className="text-sm text-gray-600 mt-1">Support for finding a safe home</p>
              </button>
              <button
                onClick={() => setCurrentView("language-classes")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Service 3: Language Classes</h3>
                <p className="text-sm text-gray-600 mt-1">Affordable German language classes</p>
              </button>
              <button
                onClick={() => setCurrentView("communities")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Service 4: Communities</h3>
              </button>
              <button
                onClick={() => setCurrentView("family-kids")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Service 5: Family and Kids</h3>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "unemployment") {
    if (currentSubView) {
      return (
        <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
          <Card>
            <CardContent className="p-6">
              <BackButton />
              <h2 className="text-xl font-bold mb-4 capitalize">{currentSubView.replace("-", " ")}</h2>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Information and resources for {currentSubView.replace("-", " ")} will be added here.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Unemployment</h2>
            <p className="text-gray-600 mb-4">Where to go for monetary support</p>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => setCurrentSubView("save-money")}
                className="w-full p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg font-medium text-blue-800 transition-colors"
              >
                Save money
              </button>
              <button
                onClick={() => setCurrentSubView("start-business")}
                className="w-full p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg font-medium text-green-800 transition-colors"
              >
                Start a business
              </button>
              <button
                onClick={() => setCurrentSubView("get-money")}
                className="w-full p-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg font-medium text-purple-800 transition-colors"
              >
                Get money
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "gender-violence") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Gender violence and divorce</h2>
            <p className="text-gray-600 mb-4">Support for finding a safe home</p>
            <div className="space-y-3">
              <button
                onClick={() => setCurrentView("short-term-funds")}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
              >
                <h3 className="font-medium">Short term funds and housing</h3>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "short-term-funds") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Short term funds and housing</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Frauenraum</h3>
                <div className="space-y-2">
                  <LinkButton url="https://www.frauenraum.de/">
                    Visit Website
                  </LinkButton>
                  <div className="p-2 bg-white rounded border">
                    <p className="text-sm font-medium">Phone: (030) 448 45 28</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Bora E.V.</h3>
                <div className="space-y-2">
                  <LinkButton url="https://www.frauenprojekte-bora.de/en/mainpage/">
                    Visit Website
                  </LinkButton>
                  <div className="p-2 bg-white rounded border">
                    <p className="text-sm font-medium">Phone: 030 6110300</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Marie Frauenzentrum</h3>
                <LinkButton url="https://frauenzentrum-marie.de/">
                  Visit Website
                </LinkButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "language-classes") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Language Classes</h2>
            <p className="text-gray-600 mb-4">Affordable German language classes</p>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Offene Tür</h3>
                <p className="text-sm text-gray-600 mb-2">25 Euro per month</p>
                <LinkButton url="https://offenetuer.net/de">
                  Visit Website
                </LinkButton>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">KUB</h3>
                <p className="text-sm text-gray-600 mb-2">Free</p>
                <LinkButton url="https://kub-berlin.org/en/">
                  Visit Website
                </LinkButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "communities") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Communities</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Community resources will be added here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentView === "family-kids") {
    return (
      <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
        <Card>
          <CardContent className="p-6">
            <BackButton />
            <h2 className="text-xl font-bold mb-4">Family and Kids</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Himbeer Magazine</h3>
                <p className="text-sm text-gray-600 mb-2">Weekly activity guide</p>
                <LinkButton url="https://berlinmitkind.de/">
                  Visit Website
                </LinkButton>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Black Parents Germany</h3>
                <LinkButton url="https://www.blackparents.de">
                  Visit Website
                </LinkButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
