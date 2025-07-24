import React from 'react';
import Link from 'next/link'; // Changed from react-router-dom

function Footer() {
  const currentYear = new Date().getFullYear();
  const placeholderAddress = "123 Outdoor Trail Ave, Adventure City, CA 98765";
  const contactEmail = "contact@californiosmfg.com";

  return (
    // Reduced vertical padding, adjusted text opacity/size
    <footer className="w-full bg-[#2A5041] text-[#FEF8E7] text-opacity-90 py-8 md:py-12 mt-auto text-sm">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Constrain max width of the grid and center it */}
        <div className="max-w-6xl mx-auto">
          {/* Further reduced gap between columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            
            {/* Column 1: Branding (Optional) */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-3">Joe Outside</h3>
              <p className="text-xs text-opacity-70">Your guide to the outdoors.</p>
            </div>

            {/* Column 2: Navigation */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold uppercase tracking-wider text-white mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" legacyBehavior><a className="font-medium nav-link-hover">Home</a></Link></li>
                <li><Link href="/info" legacyBehavior><a className="font-medium nav-link-hover">Info</a></Link></li>
                <li><Link href="/contact" legacyBehavior><a className="font-medium nav-link-hover">Contact</a></Link></li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold uppercase tracking-wider text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/guides" legacyBehavior><a className="font-medium nav-link-hover">Guides</a></Link></li>
                <li><Link href="/tips" legacyBehavior><a className="font-medium nav-link-hover">Tips & Tricks</a></Link></li>
                <li><Link href="/gear-reviews" legacyBehavior><a className="font-medium nav-link-hover">Gear Reviews</a></Link></li>
                <li><Link href="/newsletter" legacyBehavior><a className="font-medium nav-link-hover">Newsletter</a></Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-white mb-3">Contact</h4>
              <address className="not-italic space-y-2">
                <p>{placeholderAddress}</p>
                <p>
                  <a href={`mailto:${contactEmail}`} className="font-medium nav-link-hover">
                    {contactEmail}
                  </a>
                </p>
              </address>
            </div>

          </div>
        </div>

        {/* Copyright - Centered below columns */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-opacity-70">
          <p>&copy; {currentYear} Joe Outside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
