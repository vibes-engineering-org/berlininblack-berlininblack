"use client";

import FileUploadCard from "~/components/FileUploadCard";
import { useMiniAppSdk } from "~/hooks/use-miniapp-sdk";
import { baseUSDC } from "@daimo/contract";
import { getAddress } from "viem";
import { DaimoPayTransferButton } from "~/components/daimo-pay-transfer-button";
import VisitorCounter from "~/components/VisitorCounter";
import { Users, Globe, Heart, Palette, Phone, CheckCircle2, ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export default function App() {
  const { isSDKLoaded } = useMiniAppSdk();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[400px] mx-auto py-2 px-2 space-y-4">
      {/* TEMPLATE_CONTENT_START - Replace content below */}

      {/* Symbols Display */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-4 text-center">Available Symbols</h3>
          <div className="grid grid-cols-4 gap-4 items-center justify-items-center">
            <Users className="h-6 w-6 text-blue-600" />
            <Globe className="h-6 w-6 text-green-600" />
            <Heart className="h-6 w-6 text-pink-600" />
            <Palette className="h-6 w-6 text-purple-600" />
            <Phone className="h-6 w-6 text-emerald-600" />
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <ExternalLink className="h-6 w-6 text-gray-600" />
          </div>
        </CardContent>
      </Card>

      {/* Berlin Directory Landing Page */}
      <Card>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Berlin Services Directory</h1>
          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-medium transition-colors">
              I&apos;m new here
            </button>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-colors">
              Berliner
            </button>
          </div>
        </CardContent>
      </Card>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
