export function Hero() {
  return (
    <div id="home" className="relative h-screen w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=3270&auto=format&fit=crop')] 
        bg-cover bg-center bg-no-repeat"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider">
          CONNECTING DOTS<br />
          ONLINE & OFFLINE
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          KOMMA PROJECT is a brand activation agency,<br />
          providing an integrated creative solution
        </p>
      </div>
    </div>
  );
}