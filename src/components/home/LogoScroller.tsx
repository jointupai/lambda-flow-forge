
import React from 'react';

const LogoScroller = () => {
  const logos = [
    '/logos/stripe.svg',
    '/logos/twilio.svg',
    '/logos/supabase.svg',
    '/logos/postmark.svg',
    '/logos/zapier.svg',
    '/logos/slack.svg',
    '/logos/aws.svg',
    '/logos/gcp.svg',
  ];

  return (
    <div className="w-full bg-gray-50/50 py-10 overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div className="flex space-x-16 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 h-12 w-32 flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="max-h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/120x40?text=Logo';
                }}
              />
            </div>
          ))}
        </div>
        {/* Duplicate set of logos for seamless scrolling */}
        <div className="flex space-x-16 items-center">
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 h-12 w-32 flex items-center justify-center">
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="max-h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/120x40?text=Logo';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoScroller;
