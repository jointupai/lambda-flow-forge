
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "🔌",
      title: "Stripe Integration",
      description: "Connect payment processes to your backend systems with robust error handling and comprehensive tracking.",
      features: [
        "Webhook handling and verification",
        "Payment confirmation workflows",
        "Custom subscription management",
        "Invoice and receipt automation"
      ]
    },
    {
      icon: "📦",
      title: "Twilio Workflows",
      description: "Automate SMS and voice communications with your customers at scale.",
      features: [
        "Appointment reminders",
        "Order status notifications",
        "Two-factor authentication",
        "Marketing campaign delivery"
      ]
    },
    {
      icon: "📬",
      title: "Postmark/SendGrid Setup",
      description: "Reliable transactional email delivery with perfect formatting and delivery tracking.",
      features: [
        "Custom email templates",
        "Delivery status tracking",
        "Rich HTML email design",
        "Automated follow-ups"
      ]
    },
    {
      icon: "🧠",
      title: "Supabase / Firestore Data Triggers",
      description: "React to database changes instantly with automated workflows and data processing.",
      features: [
        "Real-time data listeners",
        "Automated data synchronization",
        "Notification systems",
        "Cross-platform data consistency"
      ]
    },
    {
      icon: "🔗",
      title: "Third-party API Pipelines",
      description: "Connect any external service to your application with reliable middleware and data transformation.",
      features: [
        "API authentication handling",
        "Rate limit management",
        "Data format normalization",
        "Error handling and retries"
      ]
    },
    {
      icon: "⚙️",
      title: "Internal Workflow Automation",
      description: "Eliminate repetitive tasks and streamline operations with custom automation.",
      features: [
        "Team notifications",
        "Reporting automation",
        "Task assignment",
        "Business process automation"
      ]
    },
    {
      icon: "💻",
      title: "Serverless Dashboards",
      description: "Build lightweight monitoring and control dashboards without managing servers.",
      features: [
        "Real-time data visualization",
        "Usage statistics and metrics",
        "System health monitoring",
        "Admin control panels"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API & Lambda Integrations That Power Modern Ops
            </h1>
            <p className="text-xl text-gray-300">
              Custom serverless solutions that connect your tools and automate your business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-brand-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our custom AWS Lambda integrations can help you scale more efficiently.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                Book Your Free Integration Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
