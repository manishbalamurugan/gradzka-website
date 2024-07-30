"use client"

import Link from "next/link";
import * as React from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils"
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import  Navigation  from "@/components/custom/nav"
import { JSX, SVGProps} from "react";
import ServicesSection from "@/components/custom/services";
import OscillateSvg from "@/components/ui/oscillate";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-ui-sans-serif">
        <section className="relative flex flex-1 w-full h-[120vh]" id="hero">
            <div className="absolute z-0 w-full h-full">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src="assets/stock-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            </div>
            <div className="relative z-10 flex flex-1 grid grid-cols-1 mb-10">
                <Navigation  textBlack={false}/>
                <div className="container w-5/6 my-16 md:my-36">
                    <div className="grid gap-1 lg:gap-12">
                        <motion.div 
                          className="flex flex-col space-y-4 text-white items-center text-center"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-2">
                                <h1 className="text-3xl md:text-8xl font-bold tracking-loose">Advanced Arthritis Solutions</h1>
                                <p className="max-w-[800px] mx-auto md:text-3xl">Providing personalized care with a state-of-the-art approach. Schedule your appointment today!</p>
                            </div>
                            <div className="flex flex-col gap-2 md:flex-row justify-center">
                                <Link href="https://drgradzka.com/contact-us.html" className="inline-flex items-center justify-center h-10 px-8 text-xl mt-2 font-bold bg-white/40 text-black rounded-md shadow-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                    Schedule Appointment
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-blue-50/75 py-16" id="about">
          <div className="container  mx-auto px-4 md:px-12">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-800">Our services for a Healthy Body</h2>
              <p className="mt-4 text-xl text-gray-600">Our mission is to deliver cutting-edge care with a personalized, patient-focused approach.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                className="flex flex-col items-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-64 bg-gray-200"></div>
                <p className="text-lg text-gray-600">Dr. Gradzka and her team employ advanced, nonsurgical techniques to enhance patient functionality. Our treatments include medications, joint injections, and physical therapy.</p>
                <p className="text-lg text-gray-600">We strive to alleviate pain through a blend of personalized, traditional, and alternative methods.</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-gray-600">We offer comprehensive joint care, working closely with your medical team to achieve the best outcomes.</p>
                <p className="text-lg text-gray-600">Our dedicated staff provides respectful, compassionate, and confidential care, always prioritizing your health and well-being.</p>
                <div className="w-full h-64 bg-gray-200"></div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="relative" id="services">
          <div className="pt-16 pb-8 min-h-[300px] justify-center items-center relative">
            <div className="w-full h-full relative z-10 px-10">
              <ServicesSection/>
            </div>
          </div>
        </section>
        <section className="py-10 bg-blue-50/75" id="contact">
          <div className="container px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-lg bg-stone-400 px-3 py-1 mb-3 text-lg text-white">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] md:text-xl text-gray-700">If you have any questions or would like to schedule an appointment, please feel free to contact us. We look forward to hearing from you.</p>
                <motion.form 
                  className="space-y-4 my-2 w-3/4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Input id="name" placeholder="Your Name" required />
                  <Input id="email" placeholder="Your Email" required type="email" />
                  <Textarea className="" id="message" placeholder="Your Message" required />
                  <Button type="submit">Submit</Button>
                </motion.form>
              </motion.div>
              <div id="contact" className="mt-[4rem] text-sm">
                <h3 className="text-2xl font-bold">Advanced Arthritis Solutions</h3>
                <p>3620 Joseph Siewick Drive, Suite 200</p>
                <p>Fairfax, VA 22033</p>
                <p className="mt-5">Tel: (703) 648-9800</p>
                <p>Fax: (703) 648-9898</p>
                <p className="mb-5">Email: drgradzka.office@gmail.com</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.143547850579!2d-77.366353684653!3d38.8776612795703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b1e8e7a9a7d%3A0x1f7f9bcb4c6c1f40!2s3620%20Joseph%20Siewick%20Dr%20STE%20200%2C%20Fairfax%2C%20VA%2022033%2C%20USA!5e0!3m2!1sen!2sus!4v1667493628554!5m2!1sen!2sus"
                  width="400"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bg-blue-50/50">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Advanced Arthritis Solutions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:text-indigo-600">Terms of Service</Link>
          <Link href="#" className="text-xs hover:text-indigo-600">Privacy</Link>
        </nav>
      </footer>
    </div>
  )
}

