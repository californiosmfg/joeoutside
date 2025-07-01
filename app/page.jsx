import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section 
        className="relative flex items-center bg-[#FEF8E7]"
        style={{ minHeight: 'calc(100vh - 68px)' }}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#A13C20]">
                "We go outside so you don't have to"
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10">
                Your expert source for outdoor guides & tips.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4">
                <Link 
                  href="/contact"
                  legacyBehavior
                >
                  <a className="inline-block bg-transparent text-[#A13C20] font-semibold hover:text-white hover:bg-[#A13C20] py-3 px-8 border border-[#A13C20] hover:border-transparent rounded transition duration-300">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides & Tips Section (Placeholder) */}
      <section className="py-16 md:py-20 bg-[#FEF8E7]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#A13C20]">
            Featured Guides & Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="font-bold text-2xl mb-3 text-[#2A5041]">Guide Title 1</h3>
              <p className="text-gray-600 leading-relaxed">Brief description of the guide or tip goes here. Placeholder text providing more detail.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="font-bold text-2xl mb-3 text-[#2A5041]">Guide Title 2</h3>
              <p className="text-gray-600 leading-relaxed">Brief description of the guide or tip goes here. Placeholder text providing more detail.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="font-bold text-2xl mb-3 text-[#2A5041]">Guide Title 3</h3>
              <p className="text-gray-600 leading-relaxed">Brief description of the guide or tip goes here. Placeholder text providing more detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 md:py-20 bg-[#FEF8E7]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#A13C20]">Ready to Explore?</h2>
          <p className="text-lg mb-10 text-gray-700">
            Check out our latest guides and tips.
          </p>
          <Link 
            href="/contact"
            legacyBehavior
          >
            <a className="inline-block bg-[#2A5041] text-[#FEF8E7] font-bold py-4 px-10 rounded-lg hover:bg-[#1e3a2f] transition duration-300 shadow hover:shadow-md text-lg">Get In Touch</a>
          </Link>
        </div>
      </section>
    </>
  );
}