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

      <DaimoPayTransferButton
        text="Pay with DaimoPay"
        toChainId={baseUSDC.chainId}
        toAddress={getAddress("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")}
        tokenAddress={baseUSDC.token as `0x${string}`}
        amount="1"
        onPaymentStarted={() => console.log("Payment started")}
        onPaymentCompleted={() => console.log("Payment completed")}
      />
      <FileUploadCard />
      <VisitorCounter />
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
