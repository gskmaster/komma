"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-[#141B33] to-[#0A0B1A] text-white min-h-screen h-screen py-24">
      <div className="container max-w-full">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column with Image */}
          <div className="hidden md:block w-1/2 h-screen overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column with Tabs */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full max-w-md"> {/* Center the content and limit its width */}
              <Tabs defaultValue="activation" className="flex flex-col md:flex-row gap-8">
                {/* Tab triggers */}
                <TabsList className="flex flex-col h-auto bg-transparent w-full md:w-64 justify-center">
                  <TabsTrigger
                    value="activation"
                    className="data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=inactive]:text-white/60 justify-start px-0 hover:text-white/80 text-xl"
                  >
                    ACTIVATION
                  </TabsTrigger>
                  <TabsTrigger
                    value="pr"
                    className="data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=inactive]:text-white/60 justify-start px-0 hover:text-white/80 text-xl"
                  >
                    PUBLIC RELATIONS
                  </TabsTrigger>
                  <TabsTrigger
                    value="social"
                    className="data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=inactive]:text-white/60 justify-start px-0 hover:text-white/80 text-xl"
                  >
                    SOCIAL MEDIA
                  </TabsTrigger>
                  <TabsTrigger
                    value="digital"
                    className="data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=inactive]:text-white/60 justify-start px-0 hover:text-white/80 text-xl"
                  >
                    DIGITAL CONTENT
                  </TabsTrigger>
                </TabsList>

                {/* Tab content */}
                <div className="flex-1 w-full">
                  <h2 className="text-3xl md:text-5xl font-light mb-20 tracking-wider text-left">SERVICES</h2>
                  <TabsContent value="activation" className="mt-0">
                    <div className="space-y-8">
                      <p className="text-white/90 leading-relaxed text-lg">
                        We craft compelling narratives, manage media relations, and amplify your message through Key Opinion Leaders (KOLs), enhancing your brand's visibility and impact.
                      </p>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Available Services:</h3>
                        <ul className="space-y-2 text-white/80">
                          <li>Media Relations</li>
                          <li>KOL Management</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pr" className="mt-0">
                    <div className="space-y-8">
                      <p className="text-white/90 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      </p>
                      <div className="space-y-2 mt-5">
                        <h3 className="text-lg font-medium">Available Services:</h3>
                        <ul className="space-y-2 text-white/80">
                          <li>Press Release Distribution</li>
                          <li>Crisis Management</li>
                          <li>Media Monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="social" className="mt-0">
                    <div className="space-y-8">
                      <p className="text-white/90 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porta condimentum velit, et tempus lacus finibus eu.
                      </p>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Available Services:</h3>
                        <ul className="space-y-2 text-white/80">
                          <li>Content Strategy</li>
                          <li>Community Management</li>
                          <li>Social Media Analytics</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="digital" className="mt-0">
                    <div className="space-y-8">
                      <p className="text-white/90 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elementum mauris. Praesent vehicula gravida dolor, ac efficitur sem sagittis vel.
                      </p>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Available Services:</h3>
                        <ul className="space-y-2 text-white/80">
                          <li>Content Creation</li>
                          <li>Video Production</li>
                          <li>Digital Strategy</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}