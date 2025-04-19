import React from "react";
export default function USACarTagsCaseStudy() {
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              USACarTags Case Study
            </h1>
            <p className="text-xl text-gray-300">
              Automated Backend Infrastructure for Scale
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <p className="text-xl text-gray-700 mb-8">in</p>
            
            {/* Embedded Video */}
            <div id="howdygo-embed" className="w-full max-w-[2183px] bg-white border border-[#e2e8f0] rounded-xl overflow-hidden shadow-[0px_0px_1px_rgba(45,55,72,0.05),0px_4px_8px_rgba(45,55,72,0.1)]">
              <script src="https://js.howdygo.com/v1.2.1/index.js"></script>
              <div id="howdygo-wrapper" className="relative w-full h-0" style={{
              paddingBottom: "calc(56.5277141548328% + 40px)"
            }}>
                <iframe id="howdygo-frame" src="https://app.howdygo.com/embed/d687ca5a-a1e4-41e0-87c9-54d858400bca" frameBorder="0" scrolling="no" allowFullScreen allow="clipboard-write" className="absolute top-0 left-0 w-full h-full"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}