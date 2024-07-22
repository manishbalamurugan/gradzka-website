"use client"

import React, { useState } from "react";
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    trigger: "Our Services",
    content: [
      {
        href: "/services/treatments-offered",
        title: "Treatments Offered",
        description: "Explore the various treatments we offer to manage and alleviate symptoms effectively.",
      },
      {
        href: "/services/diseases-treated",
        title: "Diseases Treated",
        description: "Learn about the different diseases and conditions we specialize in treating.",
      },
    ],
  },
  {
    trigger: "Patient Resources",
    content: [
      {
        href: "/patient-portal",
        title: "Patient Portal",
        description: "View your health records, lab results, and appointment details.",
      },
      {
        href: "/resources/new-patients",
        title: "New Patients",
        description: "Information to get started with our practice.",
        download: true,
      },
      {
        href: "/resources/insurance",
        title: "Insurance and Billing",
        description: "Understanding your options and billing procedures.",
      },
      {
        href: "/resources/faq",
        title: "FAQ",
        description: "Answers to commonly asked questions.",
      },
    ],
  },
  {
    trigger: "Contact & Appointments",
    content: [
      {
        href: "tel:+1234567890",
        title: "Call Us",
        description: "Reach us directly by phone for immediate assistance.",
      },
      {
        href: "/book-appointment",
        title: "Book an Appointment",
        description: "Choose the best time for your schedule with our easy booking tool.",
      },
      {
        href: "/make-a-payment",
        title: "Make a Payment",
        description: "Pay your bills securely online.",
      },
    ],
  },
];

const Navigation = (props: { textBlack: any; }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="w-full py-2 px-4 backdrop-blur-sm flex justify-between items-center z-10">
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>


        {/* Logo */}
        <div className="flex">
          <Link href="/" legacyBehavior passHref>
            <a>
              <img src={props.textBlack ? "/assets/logo-color.png" : "/assets/logo.png"} alt="Logo" className="h-12 w-fit mx-5" />
            </a>
          </Link>
        </div>
  
        <div className={`${isMenuOpen ? "block" : "hidden"} md:block mt-1`}>
          <NavigationMenu>
            <NavigationMenuList className="w-full">
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className={`${props.textBlack ? "text-black" : "text-white"}`}>About Us</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.trigger}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <span className={`${props.textBlack ? "text-black" : "text-white"}`}>{item.trigger}</span>
                      </NavigationMenuLink>
                    </Link>
                  ) : (
                    <>
                      <NavigationMenuTrigger className={`${props.textBlack ? "text-black" : "text-white"}`}>{item.trigger}</NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-[500px] min-h-[200px] absolute inline-block">
                        <ul className={`grid gap-3 p-4 ${item.content.length <= 2 ? "grid-cols-1" : "grid-cols-2"} mx-auto`}>
                          {item.content.map((link) => (
                            <li key={link.href} className={`${item.content.length < 2 ? "col-span-1" : "col-span-2 lg:col-span-1"}`}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={link.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-gray-100 focus:text-accent-foreground"
                                  download={link.download ? true : undefined}
                                >
                                  <div className="text-sm font-medium leading-none">{link.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{link.description}</p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    );
  };

export default Navigation;