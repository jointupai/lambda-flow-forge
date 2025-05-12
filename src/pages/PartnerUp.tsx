
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

export default function PartnerUp() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    toast.success("Form submitted successfully!");
    console.log(data);
    // Here you would normally send the data to your backend
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column - Headings and Stats */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Talk to our Sales team.
            </h1>
            
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8233 20.3226 20.9355 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06445 3.67744 3.17667 3.44101 3.36182 3.26841C3.54697 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Get a custom demo.</p>
                  <p className="text-gray-400">Discover the value of JointUp for your enterprise and explore our custom plans and pricing.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-base font-medium text-white">Set up your Enterprise trial.</p>
                  <p className="text-gray-400">See for yourself how JointUp Enterprise speeds up your workflow & impact.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-800 pt-6">
              <div>
                <p className="text-xl font-bold text-white">6x faster</p>
                <p className="text-gray-400">to build and deploy.</p>
                <div className="mt-3">
                  <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.3046 14.5C35.3046 12.1281 33.3765 10.2 31.0046 10.2C28.6326 10.2 26.7046 12.1281 26.7046 14.5C26.7046 16.8719 28.6326 18.8 31.0046 18.8C33.3765 18.8 35.3046 16.8719 35.3046 14.5Z" fill="white"/>
                    <path d="M41.0377 18.7149C39.6578 18.7149 38.8678 17.8019 38.8678 16.3249V11.2579H40.1478V16.2279C40.1478 17.1319 40.5598 17.5349 41.2468 17.5349C41.9428 17.5349 42.3638 17.1229 42.3638 16.2279V11.2579H43.6438V16.3249C43.6438 17.8109 42.8408 18.7149 41.0377 18.7149Z" fill="white"/>
                    <path d="M47.1257 17.5259H50.0787V18.7059H45.5537V11.2579H47.1257V17.5259Z" fill="white"/>
                    <path d="M53.1125 18.7059V11.2579H54.6845V18.7059H53.1125Z" fill="white"/>
                    <path d="M61.8046 11.2579V12.4289H59.5756V18.7059H58.0036V12.4289H55.7746V11.2579H61.8046Z" fill="white"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <p className="text-xl font-bold text-white">98% faster</p>
                <p className="text-gray-400">time to market.</p>
                <div className="mt-3">
                  <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.6805 14.5C53.6805 20.5751 48.7556 25.5 42.6805 25.5C36.6053 25.5 31.6805 20.5751 31.6805 14.5C31.6805 8.42487 36.6053 3.5 42.6805 3.5C48.7556 3.5 53.6805 8.42487 53.6805 14.5Z" stroke="white"/>
                    <circle cx="42.6805" cy="14.5" r="3" fill="white"/>
                    <circle cx="42.6805" cy="14.5" r="10.5" stroke="white"/>
                    <path d="M81.1805 19.5L83.6805 14.5L81.1805 9.5H88.1805L90.6805 14.5L88.1805 19.5H81.1805Z" stroke="white" stroke-linejoin="round"/>
                    <path d="M60.1805 19.5V15C60.1805 14.1716 60.8521 13.5 61.6805 13.5H67.1805C67.733 13.5 68.1805 13.9477 68.1805 14.5V15.5C68.1805 16.0523 67.733 16.5 67.1805 16.5H62.6805" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M75.1805 13.5V19.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M75.1805 9.5V10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zinc-800 pt-6">
              <p className="text-gray-200 italic">"JointUp makes our developers happier and lets us go to market quicker."</p>
              <div className="mt-4">
                <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="100" height="10" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-black border border-zinc-800 rounded-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Company email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-black border-zinc-700 text-white focus:ring-blue-500 focus:border-blue-500"
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                  onFocus={() => !emailSubmitted && setEmailSubmitted(true)}
                />
                {errors.email && <span className="text-red-500 text-xs">Please enter a valid email address</span>}
              </div>

              <div className={`space-y-6 transition-all duration-300 ease-in-out ${emailSubmitted ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    How can we help?
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your company needs"
                    className="bg-black border-zinc-700 text-white h-32 focus:ring-blue-500 focus:border-blue-500"
                    {...register("message")}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full name
                    </label>
                    <Input
                      id="name"
                      className="bg-black border-zinc-700 text-white focus:ring-blue-500 focus:border-blue-500"
                      {...register("name", { required: emailSubmitted })}
                    />
                    {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company name
                    </label>
                    <Input
                      id="company"
                      className="bg-black border-zinc-700 text-white focus:ring-blue-500 focus:border-blue-500"
                      {...register("company", { required: emailSubmitted })}
                    />
                    {errors.company && <span className="text-red-500 text-xs">This field is required</span>}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-gray-400 mb-4">
                    By clicking "Talk to JointUp", I acknowledge I have read and understand the <a href="#" className="text-blue-400 underline">Privacy Notice</a>.
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md px-8"
                  >
                    Talk to JointUp
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
