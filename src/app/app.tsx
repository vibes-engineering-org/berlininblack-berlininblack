"use client";

import BerlinDirectory from "~/components/BerlinDirectory";

export default function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
      <div className="relative z-10">
        {/* TEMPLATE_CONTENT_START - Replace content below */}
        <BerlinDirectory />
        {/* TEMPLATE_CONTENT_END */}
      </div>
    </div>
  );
}
