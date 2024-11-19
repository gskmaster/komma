export function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#0A0B1A] to-[#141B33] text-white min-h-screen h-screen py-24">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="relative">
          {/* Speech bubble decoration */}
          <div className="absolute right-0 top-0 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white/10">
              <path
                d="M50,0 A50,50 0 1,1 50,100 L50,85 A35,35 0 1,0 50,15 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-light mb-16">ABOUT US</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                Welcome to KOMMA Project — where brand activation meets creative ideation. We're your go-to agency for integrated solutions through activations, public relations, social media, and digital content.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                With a 360° approach, we empower your brand to engage audiences effectively, creating memorable experiences that resonate both online and offline.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed mb-8">
                At KOMMA Project, we believe in the enduring power of memorable experiences. We don't just activate brands; we craft lasting impressions that connect with your audience on a profound level.
              </p>
              
              <div className="space-y-1">
                <p className="font-medium">THEORIES FADE,</p>
                <p className="font-medium">BUT UNFORGETTABLE MOMENTS</p>
                <p className="font-medium">STAY IN PEOPLE'S MINDS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}