export function PartnerBrands() {
  const brands = [
    {
      name: "Schüco",
      svg: (
        <svg viewBox="0 0 120 40" className="h-10 md:h-12 w-auto fill-current" aria-hidden="true">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="28" letterSpacing="-1">SCHÜCO</text>
        </svg>
      )
    },
    {
      name: "Reynaers Aluminium",
      svg: (
        <svg viewBox="0 0 160 40" className="h-10 md:h-12 w-auto fill-current" aria-hidden="true">
          <text x="0" y="55%" textAnchor="start" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24" letterSpacing="-0.5">REYNAERS</text>
          <text x="0" y="85%" textAnchor="start" fontFamily="Arial, sans-serif" fontWeight="400" fontSize="10" letterSpacing="2">ALUMINIUM</text>
        </svg>
      )
    },
    {
      name: "Deceuninck",
      svg: (
        <svg viewBox="0 0 140 40" className="h-10 md:h-12 w-auto fill-current" aria-hidden="true">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" letterSpacing="0">deceuninck</text>
        </svg>
      )
    },
    {
      name: "Veka",
      svg: (
        <svg viewBox="0 0 100 40" className="h-10 md:h-12 w-auto fill-current" aria-hidden="true">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="30" fontStyle="italic" letterSpacing="-1.5">VEKA</text>
        </svg>
      )
    },
    {
      name: "Rehau",
      svg: (
        <svg viewBox="0 0 110 40" className="h-10 md:h-12 w-auto fill-current" aria-hidden="true">
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="28" letterSpacing="1">REHAU</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 bg-[#0a0c10] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
          Wij installeren premium merken
        </p>
        
        {/* We use a simple infinite scroll ticker animation or wrap flex container */}
        <div className="group relative flex overflow-hidden">
          <div className="flex w-full min-w-full shrink-0 flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-20">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="text-gray-200 opacity-90 hover:opacity-100 hover:text-white transition-all duration-300 transform hover:scale-110"
                title={brand.name}
              >
                {brand.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
