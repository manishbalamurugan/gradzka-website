"use client"


import React, { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/custom/nav";

const diseases = [
  {
    href: "/services/rheumatoid-arthritis",
    title: "Rheumatoid Arthritis",
    description: "We offer expert care for rheumatoid arthritis, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/47/ds00020_im02689_r7_rheumatoidarthritisthu_jpg.jpg" 
  },
  {
    href: "/services/arthritis",
    title: "Arthritis",
    description: "Our clinic provides comprehensive care for various types of arthritis, utilizing a combination of medications, physical therapy, and innovative treatments to alleviate pain and improve joint function.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/44/ds01122_ds00020_im03689_mcdc7_arthritis_typesthu_jpg.jpg" 
  },
  {
    href: "/services/ankylosing-spondylitis",
    title: "Ankylosing Spondylitis",
    description: "We specialize in the diagnosis and management of ankylosing spondylitis, offering advanced treatments and personalized care plans to improve spinal health and reduce inflammation.",
    image: "https://assets.mayoclinic.org/content/dam/media/en/images/2023/02/10/ankylosing-spondylitis.jpg" 
  },
  {
    href: "/services/gout",
    title: "Gout",
    description: "We provide specialized care for gout, including dietary recommendations, medications, and lifestyle modifications to prevent flare-ups and manage symptoms effectively.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/12/06/17/46/r7_gout-8col.jpg"  
  },
  {
    href: "/services/osteoporosis",
    title: "Osteoporosis",
    description: "We specialize in the diagnosis and management of osteoporosis, offering advanced treatments and personalized care plans to improve bone health and reduce the risk of fractures.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/55/ds00128_im02980_mcdc7_osteoporosis-_comparethu_jpg.jpg"  
  },
  {
    href: "/services/psoriatic-arthritis",
    title: "Psoriatic Arthritis",
    description: "Our clinic offers comprehensive care for psoriatic arthritis, utilizing a combination of medications, physical therapy, and innovative treatments to alleviate pain and improve joint function.",
    image: "https://assets.mayoclinic.org/content/dam/media/global/images/2023/02/09/plaque-psoriasis.jpg"  
  },
  {
    href: "/services/scleroderma",
    title: "Scleroderma",
    description: "We provide expert care for scleroderma, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/8979-scleroderma"  
  },
  {
    href: "/services/sjogrens-syndrome",
    title: "Sjögren's Syndrome",
    description: "Our team is experienced in diagnosing and treating Sjögren's syndrome, providing tailored care to manage symptoms and improve overall health.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/43/ds00125_-ds00147_-ds00708_-ha00034_im02997_mcdc7_salivarythu_jpg.jpg"  
  },
  {
    href: "/services/mixed-connective-tissue-disease",
    title: "Mixed Connective Tissue Disease",
    description: "We offer specialized care for mixed connective tissue disease, utilizing a combination of medications and therapies to manage symptoms and improve quality of life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFifkNh2wWNIXXREEIgGu3M7_e2MKsV3hMFQ&s"  
  },
  {
    href: "/services/fibromyalgia",
    title: "Fibromyalgia",
    description: "Our clinic provides comprehensive care for fibromyalgia, including medications, physical therapy, and lifestyle modifications to manage pain and improve overall well-being.",
    image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2019/6/shutterstock_280967747.jpg"  
  },
  {
    href: "/services/raynauds-syndrome",
    title: "Raynaud's Syndrome",
    description: "We offer expert care for Raynaud's syndrome, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://www.wwmedgroup.com/wp-content/uploads/raynauds-with-fingers-pointing-up.png"  
  },
  {
    href: "/services/polymyalgia-rheumatica",
    title: "Polymyalgia Rheumatica",
    description: "Our team provides specialized care for polymyalgia rheumatica, utilizing a combination of medications and therapies to manage symptoms and improve quality of life.",
    image: "https://images.everydayhealth.com/images/arthritis/rheumatic-diseases/how-polymyalgia-rheumatica-affects-the-body-opt-2.jpg"  
  },
  {
    href: "/services/spinal-stenosis",
    title: "Spinal Stenosis",
    description: "We offer comprehensive care for spinal stenosis, including advanced treatments and personalized care plans to alleviate pain and improve spinal health.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2017/05/19/16/32/herniated-disk-bone-spurs-8col.jpg"  
  },
  {
    href: "/services/lupus",
    title: "Lupus",
    description: "Our clinic provides expert care for lupus, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323653/lupus-symptoms.jpg"  
  },
  {
    href: "/services/vasculitis",
    title: "Vasculitis",
    description: "We specialize in the diagnosis and management of vasculitis, offering advanced treatments and personalized care plans to improve vascular health and reduce inflammation.",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/12101-vasculitis"  
  },
  {
    href: "/services/back-pain",
    title: "Back Pain",
    description: "Our clinic offers comprehensive care for back pain, utilizing a combination of medications, physical therapy, and innovative treatments to alleviate pain and improve spinal health.",
    image: "https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2022/hands-on-lower-back.jpg?sc_lang=en&la=en&h=370&w=660&hash=56188747AD3BAACCD7DE60145BC252E4"  
  },
  {
    href: "/services/hypermobility",
    title: "Hypermobility (Ehlers-Danlos Syndrome)",
    description: "We provide specialized care for hypermobility and Ehlers-Danlos syndrome, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://images.ctfassets.net/btlq0oep24gl/3aWWoINQR0igdENTJ04bZv/aa883fa8e3569c817ed0e2957ccb1370/20-myths-of-Ehlern-Derlos-Syndrome-1.jpg"  
  },
  {
    href: "/services/neuropathy",
    title: "Neuropathy",
    description: "Our team is experienced in diagnosing and treating neuropathy, providing tailored care to manage symptoms and improve overall health.",
    image: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/14737-peripheral-neuropathy.jpg"  
  },
  {
    href: "/services/myositis",
    title: "Myositis",
    description: "We offer expert care for myositis, including state-of-the-art therapies and personalized treatment plans to manage symptoms and enhance quality of life.",
    image: "https://assets.lybrate.com/imgs/tic/enadp/what-is-myositis.webp"  
  },
];

export default function Diseases() {
  const [activeDisease, setActiveDisease] = useState(diseases[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen font-ui-sans-serif bg-gray-50">
      <Navigation textBlack={true} />
      <div className="w-full bg-indigo-700 text-white py-4 px-6 mt-5">
        <h1 className="text-3xl font-medium">Diseases We Treat</h1>
      </div>
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-50/20 flex flex-col md:flex-row gap-2" id="diseases">
        <div className="w-full md:w-1/4 p-4 bg-white shadow-md rounded-lg max-h-[60vh] overflow-y-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 mb-4 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul className="space-y-2">
            {filteredDiseases.map((disease) => (
              <li
                key={disease.href}
                className={`p-2 cursor-pointer rounded ${activeDisease === disease ? "bg-blue-100" : ""} hover:bg-blue-50`}
                onClick={() => setActiveDisease(disease)}
              >
                {disease.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 p-4 bg-white shadow-md rounded-lg">
          {activeDisease ? (
             <div className="p-6">
             <h2 className="text-2xl font-bold mb-5 text-blue-900">{activeDisease.title}</h2>
             <div className="flex flex-wrap">
               <img src={activeDisease.image} alt={activeDisease.title} className="w-96 h-96 object-cover mb-4 rounded mr-4" />
               <p className="text-gray-700 mb-4 flex-1">
                 {activeDisease.description}
                 <Link href={activeDisease.href} legacyBehavior>
                   <a className="text-indigo-600 hover:text-indigo-800 font-semibold ml-2">
                     Learn More →
                   </a>
                 </Link>
               </p>
             </div>
           </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-2xl font-bold text-center text-blue-900 mb-4">
                Select a disease on the left to see more information about it.
              </p>
            </div>
          )}
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t bg-blue-50/50">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Advanced Arthritis Solutions. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" legacyBehavior>
            <a className="text-xs hover:text-indigo-600">
              Terms of Service
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="text-xs hover:text-indigo-600">
              Privacy
            </a>
          </Link>
        </nav>
      </footer>
    </div>
  );
}