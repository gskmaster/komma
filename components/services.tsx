"use client";

import { useState } from "react"; // Import useState
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Services() {
  const [selectedTab, setSelectedTab] = useState("activation"); // State to track the selected tab

  // Function to handle tab change
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  // Image source mapping based on selected tab
  const images = {
    activation: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    pr: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHB1YmxpYyUyMHJlbGF0aW9uc3xlbnwwfHx8fDE2NzgyNjQ3NjQ&ixlib=rb-1.2.1&q=80&w=1080", // Replace with actual PR image URL
    social: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRpZ2l0YWwlMjBjb250ZW50fGVufDB8fHx8MTY3ODI2NDc2NA&ixlib=rb-1.2.1&q=80&w=1080", // Replace with actual Social Media image URL
    digital: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRpZ2l0YWwlMjBjb250ZW50fGVufDB8fHx8MTY3ODI2NDc2NA&ixlib=rb-1.2.1&q=80&w=1080", // Replace with actual Digital Content image URL
  };

  return (
    <section id="services" className="relative bg-gradient-to-b from-[#141B33] to-[#0A0B1A] text-white min-h-screen h-screen py-24">
      <div className="container max-w-full">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column with Image */}
          <div className="hidden md:block w-1/2 h-screen overflow-hidden">
            <img
              src={images[selectedTab]} // Use the selected tab to determine the image
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column with Tabs */}
          <div className="flex flex-col md:block w-1/2">
            {/* First Row */}
            <div className="flex-1 py-28 px-[18rem]">
              <h2 className="text-3xl md:text-5xl font-light tracking-wider text-left">SERVICES</h2>
            </div>

            {/* Second Row */}
            <div className="flex-1">
              <div className="w-full max-w-2xl flex items-center">

                <div className="w-full min-h-screen justify-center "> {/* Center the content and limit its width */}
                  <Tabs defaultValue="activation" onValueChange={handleTabChange} className="flex flex-col md:flex-row gap-8">
                    {/* Tab triggers */}
                    <TabsList className="flex flex-col h-auto bg-transparent w-full md:w-64 mt-5">
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
                      <TabsContent value="activation" className="mt-5">
                        <div className="space-y-8">
                          <p className="text-white/90 leading-relaxed text-lg">
                            We craft compelling narratives, manage media relations, and amplify your message through Key Opinion Leaders (KOLs), enhancing your brand's visibility and impact.
                          </p>
                          <div className="space-y-2">
                            <h3 className="text-lg">Available Services:</h3>
                            <ul className="text-white text-xl font-bold">
                              <li>Media Relations</li>
                              <li>KOL Management</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="pr" className="mt-5">
                        <div className="space-y-8">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                          </p>
                          <div className="space-y-2 mt-5">
                            <h3 className="text-lg">Available Services:</h3>
                            <ul className="text-white text-xl font-bold">
                              <li>Press Release Distribution</li>
                              <li>Crisis Management</li>
                              <li>Media Monitoring</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="social" className="mt-5">
                        <div className="space-y-8">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porta condimentum velit, et tempus lacus finibus eu.
                          </p>
                          <div className="space-y-2">
                            <h3 className="text-lg">Available Services:</h3>
                            <ul className="text-white text-xl font-bold">
                              <li>Content Strategy</li>
                              <li>Community Management</li>
                              <li>Social Media Analytics</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="digital" className="mt-5">
                        <div className="space-y-8">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elementum mauris. Praesent vehicula gravida dolor, ac efficitur sem sagittis vel.
                          </p>
                          <div className="space-y-2">
                            <h3 className="text-lg">Available Services:</h3>
                            <ul className="text-white text-xl font-bold">
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



        </div>
      </div>
    </section>
  );
}