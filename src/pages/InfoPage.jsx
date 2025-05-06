import React from 'react';

function InfoPage() {
  return (
    // Consistent page container styling
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Increased max-width for better layout with image */}
      <div className="container mx-auto max-w-4xl">
        
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#A13C20]">
          About Joe Outside
        </h1>

        {/* Intro Section with Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Image Placeholder (Spans 1 column on medium screens) */}
          <div className="md:col-span-1">
            <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md flex items-center justify-center text-gray-500">
              (Placeholder Image)
            </div>
          </div>
          {/* Intro Text (Spans 2 columns on medium screens) */}
          <div className="md:col-span-2 space-y-4 text-lg text-gray-700 leading-relaxed">
             <p>
               Welcome to Joe Outside, your trusted companion for navigating the great outdoors! Whether you're a seasoned trekker or just starting to dip your toes into the world of adventure, we're here to provide reliable guides, practical tips, and inspiration for your next journey.
             </p>
             <p>
               We tackle the research, the planning, and sometimes even the mud, so you can feel confident and prepared. Our philosophy is simple: preparation and knowledge are key to a safe and enjoyable outdoor experience. 
             </p>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-t-2 border-[#A13C20]/30 my-12 md:my-16" />

        {/* Main Content Sections */}
        <div className="space-y-10 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"> {/* Limit width for text sections */} 
          
          {/* Our Mission Section */}
          <div>
            <h2 className="text-3xl font-semibold text-[#2A5041] mb-4">Our Mission</h2>
            <p>
              To empower individuals with the confidence and skills needed to explore the outdoors responsibly and joyfully. We strive to be the go-to resource for clear, concise, and dependable outdoor information, ensuring you spend less time worrying and more time experiencing.
            </p>
          </div>

          {/* Our Approach Section (New) */}
          <div>
            <h2 className="text-3xl font-semibold text-[#2A5041] mb-4">Our Approach</h2>
            <p>
              We believe in practical advice grounded in real-world experience. Our guides are meticulously researched and often tested firsthand. We break down complex topics into easy-to-understand steps, focusing on safety, sustainability, and maximizing your enjoyment of nature. No fluff, just the essentials.
            </p>
          </div>

          {/* What You'll Find Section (New) */}
          <div>
            <h2 className="text-3xl font-semibold text-[#2A5041] mb-4">What You'll Find Here</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>**In-Depth Guides:** Comprehensive resources for various outdoor activities and skills.</li>
              <li>**Actionable Tips:** Quick hacks and essential knowledge for common outdoor challenges.</li>
              <li>**Honest Gear Reviews:** Unbiased assessments to help you choose the right equipment.</li>
              <li>**Inspiring Content:** Ideas and motivation for your next adventure (coming soon!).</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InfoPage; 