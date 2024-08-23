"use client"

import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Navigation from "@/components/custom/nav";
import { JSX, SVGProps } from "react";
import ServicesSection from "@/components/custom/services";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen font-ui-sans-serif">
      <Navigation textBlack={true} />
      <div className="w-full bg-indigo-700 text-white py-4 px-6 mt-5">
        <h1 className="text-3xl font-medium">Dedicated to Excellence in Rheumatology Care</h1>
      </div>
      <motion.section
        className="bg-blue-50 relative flex flex-1 w-full h-full"
        id="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-1 grid grid-cols-1">
          <div className="container mx-auto my-20 md:my-30 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex w-full md:flex-row items-center justify-between">
              <motion.div 
                className="w-full items-center space-y-6"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="ml-2 mx-auto w-full text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left text-indigo-700">
                  Mission & Values
                </h1>
                <p className="text-base sm:text-lg md:text-lg font-medium text-gray-700 ml-3">
                  At Advanced Arthritis Solutions, we are dedicated to helping
                  patients achieve maximum functionality through personalized,
                  nonsurgical treatments. Our compassionate team delivers
                  high-quality, comprehensive care for all joint-related needs,
                  working closely with your healthcare providers to ensure the
                  best possible outcomes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section 
        className="py-16 bg-blue-50/20" 
        id="meet"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around items-center w-full">
            <motion.div 
              className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="assets/office/images/Gradzka.jpg"
                alt="Dr. Margaret Gradzka"
                className="rounded-lg object-cover w-full max-w-[300px] h-auto transform transition duration-500 hover:scale-105 shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 space-y-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <div className="text-center md:text-left mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700 tracking-tight">
                    Meet Dr. Gradzka
                  </h1>
                  <div className="w-20 h-1 bg-indigo-500 mt-3 mx-auto md:mx-0"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  Dr. Margaret Gradzka, a distinguished rheumatologist, has been recognized as a top doctor by Washingtonian
                  Magazine and Northern Virginia Magazine. Board certified in Rheumatology and
                  Internal Medicine, she specializes in inflammatory conditions,
                  autoimmune diseases, and integrative therapies for chronic
                  joint pain.
                </p>
              </div>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-center">
                  <MedalIcon className="mr-2 text-indigo-600 w-6 h-6" />
                  <span className="text-base"><strong>Education:</strong> MD degree - Warsaw Medical School, Poland</span>
                </li>
                <li className="flex items-center">
                  <MedalIcon className="mr-2 text-indigo-600 w-6 h-6" />
                  <span className="text-base"><strong>Internship and Residency:</strong> St. Luke's Hospital - Bethlehem, PA</span>
                </li>
                <li className="flex items-center pb-5">
                  <MedalIcon className="mr-2 text-indigo-600 w-6 h-6" />
                  <span className="text-base"><strong>Fellowship:</strong> Yale University - New Haven, CT</span>
                </li>
                <li className="flex items-center">
                  <MedalIcon className="mr-2 text-indigo-600 w-6 h-6" />
                  <span className="text-base text-xs"><strong>Professional Distinctions:</strong> Fellow of American College of Rheumatology, American Medical Association, Virginia Rheumatology Society</span>
                </li>
                <li className="flex items-center">
                  <MedalIcon className="mr-2 text-indigo-600 w-6 h-6" />
                  <span className="text-base text-xs"><strong>Special Procedures:</strong> Ultrasound guidance, Platelets Rich Plasma (PRP), Non-surgical treatment for Carpal Tunnel Syndrome</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bg-blue-50/50">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Advanced Arthritis Solutions. All rights
          reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:text-indigo-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:text-indigo-600">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MedalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
