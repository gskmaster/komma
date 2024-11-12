export function Clients() {
  const clients = [
    // Row 1
    { name: "YSL", logo: "/logos/1 - YSL.png" },
    { name: "LOEWE", logo: "/logos/2 - LOEWE.png" },
    { name: "LE LABO", logo: "/logos/3 - LE LABO.png" },
    { name: "SANDRO", logo: "/logos/4 - SANDRO.png" },
    { name: "JO MALONE", logo: "/logos/5 - JO MALONE.png" },
    { name: "TUMI", logo: "/logos/6 - TUMI.png" },
    { name: "BOSS", logo: "/logos/7 - BOSS.png" },
    { name: "HENDRICK'S", logo: "/logos/8 - HENDRICK'S.png" },
    // Row 2
    { name: "Spotify", logo: "/logos/9 - Spotify.png" },
    { name: "LACOSTE", logo: "/logos/10 - LACOSTE.png" },
    { name: "ELLE", logo: "/logos/11 - ELLE.png" },
    { name: "MaxMara", logo: "/logos/12 - Maxmara.png" },
    { name: "GANT", logo: "/logos/13 - GANT.png" },
    { name: "SWATCH", logo: "/logos/14 - SWATCH.png" },
    { name: "LANEIGE", logo: "/logos/15 - LANEIGE.png" },
    { name: "H&M", logo: "/logos/16 - H&M.png" },
    // Row 3
    { name: "COTTON ON", logo: "/logos/17 - COTTON ON.png" },
    { name: "SADA", logo: "/logos/18 - SADA.png" },
    { name: "ALEZA", logo: "/logos/19 - ALEZA.png" },
    { name: "KAMI", logo: "/logos/20 - KAMI.png" },
    { name: "HARRYLALIM", logo: "/logos/21 - HARRYHALIM.png" },
    { name: "MORAL", logo: "/logos/22 - MORAL.png" },
    { name: "TDW", logo: "/logos/23 - TDW.png" },
    { name: "PLAZAINDONESIA", logo: "/logos/24 - PLAZA INDO.png" },
    // Row 4
    { name: "RANCH MARKET", logo: "/logos/25 - RANCH MARKET.png" },
    { name: "FARMERS MARKET", logo: "/logos/26 - FARMERS MARKET.png" },
    { name: "SANITARIUM", logo: "/logos/27 - SANITARIUM.png" },
    { name: "BANK INDONESIA", logo: "/logos/28 - BI.png" },
    { name: "INDOVISUAL", logo: "/logos/29 - INDOVISUAL.png" },
    { name: "HAVILLA", logo: "/logos/30 - HAVILLA.png" },
    { name: "ISSEI", logo: "/logos/31 - ISSEI.png" },
    { name: "SENAYAN CITY", logo: "/logos/32 - SENAYAN CITY.png" },
    // Row 5
    { name: "REUNO", logo: "/logos/33 - REUNO.png" },
    { name: "BRAINFIT", logo: "/logos/34 - BRAINFIT.png" },
    { name: "UNIPREP", logo: "/logos/35 - UNIPREP.png" },
    { name: "KOHICHA", logo: "/logos/36 - KOHICHA.png" },
    { name: "FUKUMARU", logo: "/logos/37 - FUKUMARU.png" },
    { name: "KOPI KILA", logo: "/logos/38 - KOPI KILA.png" }
  ];

  return (
    <section id="clients" className="relative bg-gradient-to-b from-[#141B33] to-[#0A0B1A] text-white min-h-screen h-screen py-24">
      <div className="container mx-auto px-4 max-w-[1920px]">
        <h2 className="text-4xl md:text-5xl font-light mt-16 mb-8 text-center tracking-wider">
          CLIENTS
        </h2>

        <p className="text-center text-white/80 mb-16 max-w-3xl mx-auto">
          We Partner With Businesses Of All Sizes, From Local Startups To Global Brands Seeking Growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 max-w-[1400px] mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 transition-opacity hover:opacity-80"
            >
              <div className="relative w-full h-8">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  {/* Fallback to text if logo is not available */}
                  <span className="text-white/60 text-sm whitespace-nowrap">
                    <img src={client.logo} alt={client.name} className="w-full h-full" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}