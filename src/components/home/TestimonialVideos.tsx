
import React from 'react';
import { Play, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; 

interface Testimonial {
  id: string;
  company: string;
  logo: string;
  videoThumbnail: string;
  quote: string;
  author: string;
  position: string;
  videoId?: string;
}

const testimonials: Testimonial[] = [{
  id: "1",
  company: "B2B SaaS",
  logo: "/lovable-uploads/fb2a31db-2e35-4af0-90aa-405488af2d05.png",
  videoThumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  quote: "We saved 15 hours/month by integrating Stripe and Airtable with Slack notifications via AWS Lambda. Now our finance ops run hands-off and in real-time.",
  author: "Michael Reynolds",
  position: "Operations Manager"
}, {
  id: "2",
  company: "Marketing Agency",
  logo: "/lovable-uploads/fb2a31db-2e35-4af0-90aa-405488af2d05.png",
  videoThumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  quote: "The real-time dashboard with Google Cloud unified our CRM data, project timelines, and client status into one live interface. Eliminated manual weekly updates.",
  author: "Sarah Jennings",
  position: "Agency Director"
}, {
  id: "3",
  company: "Tech Startup",
  logo: "/lovable-uploads/fb2a31db-2e35-4af0-90aa-405488af2d05.png",
  videoThumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  quote: "JointUp.ai built our customer onboarding automation that integrates with our product, payment system, and support tools. Reduced manual setup time by 80%.",
  author: "David Chen",
  position: "Founder & CEO"
}];

const VideoCard: React.FC<{
  testimonial: Testimonial;
}> = ({
  testimonial
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  
  const handleCloseVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };
  
  return (
    <Card className="h-full flex flex-col bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer mb-6" onClick={handlePlayVideo}>
          {!isPlaying ? (
            <>
              <img 
                src={testimonial.videoThumbnail} 
                alt={`${testimonial.company} testimonial`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-primary rounded-full p-2 hover:bg-primary/90 transition-colors">
                  <Play className="text-black" size={20} />
                </div>
              </div>
              {testimonial.company === "Marketing Agency" && (
                <div className="absolute top-4 left-4">
                  <img src={testimonial.logo} alt={testimonial.company} className="h-8" />
                </div>
              )}
              {testimonial.company === "Tech Startup" && (
                <div className="absolute top-4 left-4">
                  <div className="text-white font-bold text-2xl">TechFly</div>
                </div>
              )}
            </>
          ) : (
            <div className="relative w-full h-full bg-gray-900">
              <div className="absolute top-2 right-2 z-10">
                <button 
                  className="bg-black/40 rounded-full p-2 hover:bg-black/60 transition-colors" 
                  onClick={handleCloseVideo}
                >
                  <X className="text-white" size={20} />
                </button>
              </div>
              <div className="flex items-center justify-center h-full">
                <p className="text-white">Video player would appear here</p>
              </div>
            </div>
          )}
        </div>
        <p className="text-gray-800 mb-4 text-lg leading-relaxed font-light">"{testimonial.quote}"</p>
        <div className="mt-auto">
          <p className="font-medium text-gray-900">{testimonial.author}</p>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
          <Button variant="outline" className="mt-4 rounded-full text-sm px-6 py-2 h-auto border border-gray-300 hover:bg-gray-100">
            Read customer story
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialVideos: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Case Studies</h2>
          <p className="text-lg text-gray-600">
            See how we've helped businesses automate, integrate, and scale their operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <VideoCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
