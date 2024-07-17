// ServicesSection.tsx
"use client"
import React from 'react';
import { JSX, SVGProps} from "react";
import { motion } from "framer-motion";
import ChatWindow from './chat';

export default function ServicesSection() {
  return (
      <div className="container grid grid-cols-2 px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <motion.div 
              className="inline-block rounded-lg bg-stone-400 px-3 py-1 mb-3 text-lg text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold tracking-loose sm:text-4xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Innovative Treatment Options
            </motion.h2>
            <motion.p 
              className="h-full leading-8 py-5 md:text-xl text-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We offer cutting-edge nonsurgical techniques and breakthrough therapies to restore functionality and improve quality of life for patients with musculoskeletal conditions.
            </motion.p>
          </div>
          <div className="grid grid-cols-2 gap-5 text-lg mx-auto">
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CheckIcon className="h-5 w-5 text-indigo-600" />
              <span>Inflammatory Disorder Management</span>
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CheckIcon className="h-5 w-5 text-indigo-600" />
              <span>Chronic Pain Treatment</span>
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CheckIcon className="h-5 w-5 text-indigo-600" />
              <span>Alternative Medicine Integration</span>
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CheckIcon className="h-5 w-5 text-indigo-600" />
              <span>Osteoporosis Diagnosis and Treatment</span>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="p-5 m-5 mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <ChatWindow/>
          </motion.div>
      </div>
  );
}



function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }