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
      <motion.section 
        className="py-16 bg-blue-50/20" 
        id="meet"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="flex flex-wrap justify-around items-center w-full">
            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-5">
                <div className="text-center mb-16">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-tight">
                    Meet Dr. Gradzka
                  </h1>
                  <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
                  <h2 className="text-2xl pt-10 pb-5 font-semibold tracking-loose">
                    Dedicated to Excellence in Rheumatology Care
                  </h2>
                </div>
                <p className="max-w-[600px] text-base sm:text-lg md:text-lg text-gray-700 mx-10">
                  Dr. Margaret Gradzka was voted a top doctor by Washingtonian
                  Magazine in 2005, 2008, and 2010, and by Northern Virginia
                  Magazine in 2011. She is board certified in Rheumatology and
                  Internal Medicine, with a focus on inflammatory conditions,
                  autoimmune diseases, and integrative therapies for chronic
                  joint pain.
                </p>
              </div>
              <ul className="space-y-2 text-base sm:text-lg md:text-lg text-gray-700 mx-10">
                <li>
                  <strong>Education:</strong> MD degree - Warsaw Medical School,
                  Poland
                </li>
                <li>
                  <strong>Internship and Residency:</strong> St. Luke's Hospital
                  - Bethlehem, PA
                </li>
                <li>
                  <strong>Fellowship:</strong> Yale University - New Haven, CT
                </li>
                <li>
                  <strong>Professional Distinctions:</strong> Fellow of American
                  College of Rheumatology, American Medical Association,
                  Virginia Rheumatology Society
                </li>
                <li>
                  <strong>Special Procedures/Techniques:</strong> Ultrasound
                  guidance, Platelets Rich Plasma (PRP), Non-surgical treatment
                  for Carpal Tunnel Syndrome
                </li>
              </ul>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 flex justify-center items-center"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="assets/doctorgradzka.jpg"
                alt="Dr. Margaret Gradzka"
                className="rounded-lg object-cover w-[400px] h-auto transform transition duration-500 hover:scale-105 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        className="bg-blue-50 relative flex flex-1 w-full h-full"
        id="hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative z-10 flex flex-1 grid grid-cols-1">
          <div className="container mx-auto my-20 md:my-30 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="ml-2 text-4xl md:text-5xl lg:text-6xl font-extrabold text-center md:text-left text-indigo-700">
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
              <motion.div 
                className="w-full md:w-1/2 flex justify-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://drgradzka.com/assets/img/contact-building.png"
                  alt="Our Mission"
                  className="rounded-xl shadow-lg max-w-full h-auto transform transition duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section 
        className="py-16 bg-blue-50/20" 
        id="mission"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around items-center">
            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-5">
                <motion.div 
                  className="inline-block rounded-lg bg-stone-400 px-3 py-1 mb-3 text-lg text-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Mission
                </motion.div>
                <motion.h2 
                  className="text-2xl pb-2 font-bold tracking-loose sm:text-3xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Dedicated to Excellence in Rheumatology Care
                </motion.h2>
                <motion.p 
                  className="max-w-[600px] text-base sm:text-md md:text-lg text-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  At Advanced Arthritis Solutions, we are committed to providing
                  the highest quality care for our patients. Our mission is to
                  improve the lives of those suffering from rheumatic diseases
                  through innovative and personalized treatments.
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.pexels.com/photos/4262010/pexels-photo-4262010.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4262010.jpg&fm=jpg"
                alt="Our Mission"
                className="rounded-lg object-cover w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </div>
        <div className="container py-10 mt-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-around items-center">
            <motion.div 
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://media.istockphoto.com/id/1049858904/photo/rear-view-of-family-standing-at-top-of-hill-on-hike-through-countryside-in-lake-district-uk.jpg?s=612x612&w=0&k=20&c=eiiL682xNhJ3q1kqlrVr-aobUeBhmSMpoS8qo3gbSPs="
                alt="Our Mission"
                className="rounded-lg object-cover w-[500px] h-auto"
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-5">
                <motion.h2 
                  className="text-2xl pb-2 font-bold tracking-loose sm:text-3xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Pioneering Rheumatology Care
                </motion.h2>
                <motion.p 
                  className="max-w-[600px] text-base sm:text-md md:text-lg text-gray-700"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  At Advanced Arthritis Solutions, we dedicate ourselves to
                  pioneering care for those with rheumatic conditions. Our
                  vision is to transform lives through advanced, individualized
                  treatment strategies.
                </motion.p>
              </div>
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
