
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Reliability First",
      description: "We build systems that don't break. Period. Your business depends on automation that works 24/7."
    },
    {
      title: "Real Engineering",
      description: "No low-code hacks or temporary fixes. We write proper, maintainable code that scales with your business."
    },
    {
      title: "Founder-Focused",
      description: "We understand the challenges of running a lean business. Our solutions are built to reduce your operational burden."
    },
    {
      title: "Transparent Process",
      description: "Clear communication, predictable timelines, and fixed pricing. No surprises or hidden costs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built by Devs. Focused on Results.
            </h1>
            <p className="text-xl text-gray-300">
              We're engineers who believe your business deserves better than brittle automation tools.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed">
                👋 Hey, I'm Alex — founder of JointUp.ai. I specialize in AWS Lambda automation for 
                startups and lean businesses. I built this agency to help founders skip the duct-tape 
                phase and build workflows that scale like real software.
              </p>
              
              <p className="text-xl leading-relaxed">
                After years of watching startups struggle with fragile automation tools that constantly 
                break at scale, I decided to create a service that delivers what growing businesses 
                actually need: reliable, custom automation that works as well at 10,000 users as it 
                does at 10.
              </p>
              
              <p className="text-xl leading-relaxed">
                Your business deserves better than Zapier. Let's automate it right.
              </p>

              <div className="my-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">The JointUp Difference</h2>
              <p className="text-xl leading-relaxed">
                While other automation services focus on quick fixes using visual builders or 
                templates, we take a fundamentally different approach. We write actual code 
                that runs in your AWS environment, giving you complete ownership and control.
              </p>
              
              <p className="text-xl leading-relaxed">
                This means your automations don't just work today—they keep working as your 
                business scales, your needs evolve, and your user base grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">AWS Lambda</h3>
                <p className="text-gray-600">
                  Specialized in serverless architectures that scale automatically with your usage.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">API Integration</h3>
                <p className="text-gray-600">
                  Expert in connecting disparate systems through robust API middleware.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3">Workflow Design</h3>
                <p className="text-gray-600">
                  Engineering automation flows that reduce manual steps and eliminate bottlenecks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to learn more about how we work?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a call with our team to discuss your automation needs and see if we're a good fit.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Schedule a Call <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
