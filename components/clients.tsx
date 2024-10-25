export function Clients() {
  const clients = [
    // Row 1
    { name: "YSL", logo: "/logos/ysl.svg" },
    { name: "LOEWE", logo: "/logos/loewe.svg" },
    { name: "LE LABO", logo: "/logos/lelabo.svg" },
    { name: "SANDRO", logo: "/logos/sandro.svg" },
    { name: "JO MALONE", logo: "/logos/jomalone.svg" },
    { name: "TUMI", logo: "/logos/tumi.svg" },
    { name: "BOSS", logo: "/logos/boss.svg" },
    { name: "HENDRICK'S", logo: "/logos/hendricks.svg" },
    // Row 2
    { name: "Spotify", logo: "/logos/spotify.svg" },
    { name: "LACOSTE", logo: "/logos/lacoste.svg" },
    { name: "ELLE", logo: "/logos/elle.svg" },
    { name: "MaxMara", logo: "/logos/maxmara.svg" },
    { name: "GANT", logo: "/logos/gant.svg" },
    { name: "SWATCH", logo: "/logos/swatch.svg" },
    { name: "LANEIGE", logo: "/logos/laneige.svg" },
    { name: "H&M", logo: "/logos/hm.svg" },
    // Row 3
    { name: "COTTON ON", logo: "/logos/cotton-on.svg" },
    { name: "SADA", logo: "/logos/sada.svg" },
    { name: "ALEZA", logo: "/logos/aleza.svg" },
    { name: "KAMI", logo: "/logos/kami.svg" },
    { name: "HARRYLALIM", logo: "/logos/harrylalim.svg" },
    { name: "MORAL", logo: "/logos/moral.svg" },
    { name: "BEF", logo: "/logos/bef.svg" },
    { name: "INDONESIA", logo: "/logos/indonesia.svg" },
    // Row 4
    { name: "RANCH MARKET", logo: "/logos/ranch-market.svg" },
    { name: "FARMERS MARKET", logo: "/logos/farmers-market.svg" },
    { name: "SANITARIUM", logo: "/logos/sanitarium.svg" },
    { name: "BANK INDONESIA", logo: "/logos/bank-indonesia.svg" },
    { name: "INDIVIDUAL", logo: "/logos/individual.svg" },
    { name: "PAVILION", logo: "/logos/pavilion.svg" },
    { name: "ISSEI", logo: "/logos/issei.svg" },
    { name: "SENAYAN CITY", logo: "/logos/senayan-city.svg" },
    // Row 5
    { name: "REUNO", logo: "/logos/reuno.svg" },
    { name: "BRAINFIT", logo: "/logos/brainfit.svg" },
    { name: "UNIPREP", logo: "/logos/uniprep.svg" },
    { name: "KOHICHA", logo: "/logos/kohicha.svg" },
    { name: "FUKUMARU", logo: "/logos/fukumaru.svg" },
    { name: "KOPI KILA", logo: "/logos/kopi-kila.svg" }
  ];

  return (
    <section id="clients" className="bg-[#0A0B1A] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-center tracking-wider">
          CLIENTS
        </h2>
        
        <p className="text-center text-white/80 mb-16 max-w-3xl mx-auto">
          We Partner With Businesses Of All Sizes, From Local Startups To Global Brands Seeking Growth.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 md:gap-12 max-w-[1400px] mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 transition-opacity hover:opacity-80"
            >
              <div className="relative w-full h-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Fallback to text if logo is not available */}
                  <span className="text-white/60 text-sm whitespace-nowrap">
                    {client.name}
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