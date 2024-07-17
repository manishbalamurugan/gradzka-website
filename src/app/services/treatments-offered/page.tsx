"use client"

import React, { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/custom/nav";

const diseases = [
  {
    href: "/services/infusion-center",
    title: "State of the Art Infusion Center",
    description: "Our infusion center is a major referral hub for the treatment of Rheumatoid Arthritis and Psoriatic Arthritis. We offer cutting-edge therapies, including biologics and immunosuppressants, and personalized care plans to manage and alleviate symptoms effectively. Our team of specialists ensures that each patient receives the highest standard of care in a comfortable and supportive environment.",
    image: "https://www.arthritisvirginia.com/wp-content/uploads/2021/03/infusion-center-1.jpg"
  },
  {
    href: "/services/musculoskeletal-ultrasound",
    title: "Musculoskeletal Ultrasound",
    description: "We provide advanced musculoskeletal ultrasound imaging for precise diagnosis and guided treatment of various conditions, such as tendonitis, bursitis, and arthritis. This non-invasive imaging technique allows for real-time visualization of muscles, tendons, ligaments, and joints, ensuring accurate assessments and targeted interventions for optimal patient outcomes.",
    image: "https://ysm-res.cloudinary.com/image/upload/ar_1:1,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/a3b05f8e-064f-40e4-a60d-ff74b4130b5d"
  },
  {
    href: "/services/tenectomy",
    title: "Tenectomy",
    description: "Our tenectomy services involve minimally invasive procedures designed to relieve pain and improve joint function. By removing damaged portions of tendons, we utilize the latest techniques to ensure quick recovery and long-lasting results. This procedure is particularly beneficial for patients suffering from chronic tendon injuries that have not responded to conservative treatments.",
    image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2023/04/10/14/44/fascia_surgical_teneotomy-8col.jpg"
  },
  {
    href: "/services/joint-injections",
    title: "Joint Injections & Drainage",
    description: "We offer joint injections and drainage procedures that are minimally invasive, providing significant pain relief and enhanced joint function. Our expertly administered treatments include corticosteroid injections, hyaluronic acid injections, and aspiration of excess joint fluid, all aimed at reducing inflammation and improving mobility.",
    image: "https://assets.clevelandclinic.org/transform/fb6f569d-6a23-4e12-9c4a-baabcee9386d/Joint-Pain-Knee-Injection-650x450_jpg"
  },
  {
    href: "/services/prp-therapy",
    title: "Platelet Rich Plasma (PRP)",
    description: "Our PRP therapy is a regenerative treatment for knee arthritis, utilizing the body's own platelets to promote healing and reduce the effects of aging. This natural and effective solution for joint pain involves concentrating platelets from the patient's blood and injecting them into the affected area to stimulate tissue repair and regeneration.",
    image: "https://www.hss.edu/images/socialmedia/prp-injection-platelet-rich-plasma-knee-500X262.jpg"
  },
  {
    href: "/services/hyaluronic-injections",
    title: "Gel Injections",
    description: "We provide hyaluronic acid gel injections to lubricate knee joints affected by arthritis. These injections enhance mobility and reduce pain through a series of expertly administered treatments, helping to restore the natural cushioning and lubrication in the joint, thereby improving function and quality of life.",
    image: "https://www.oakbrookmedicalgroup.com/wp-content/uploads/2022/08/knee-gel-injections.jpg"
  },
  {
    href: "/services/laser-therapy",
    title: "Elbow Tendonitis - Nonsurgical Option",
    description: "Our laser therapy for elbow tendonitis offers a non-surgical solution for pain relief and improved joint function. Using advanced laser technology, we promote healing and reduce inflammation in the affected tendons, providing a safe and effective alternative to surgical intervention.",
    image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2294412.jpg"
  },
  {
    href: "/services/infusions",
    title: "Noninvasive Treatment for Carpal Tunnel Syndrome",
    description: "We utilize hydrodissection techniques with ultrasound guidance to provide noninvasive treatment for Carpal Tunnel Syndrome. This method involves injecting a solution around the median nerve to separate it from surrounding tissues, offering effective relief from symptoms without the need for surgery.",
    image: "https://painfreehealth.ca/axedelty/2023/12/Carpal-Tunnel-Syndrome.png"
  },
  {
    href: "/services/diet",
    title: "Special Diets, Supplements, & Exercises",
    description: "Our comprehensive approach includes tailored nutrition and fitness plans, along with supplements, to promote optimal health and well-being. Designed to meet the unique needs of each patient, our programs focus on reducing inflammation, improving joint function, and enhancing overall quality of life through balanced diets, targeted exercises, and appropriate supplementation.",
    image: "https://www.nutrigility.com/wp-content/uploads/2020/09/Powder-and-pill-supplements-on-counter-with-shaker-ball.jpg"
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
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-50/20 flex flex-col md:flex-row gap-8" id="diseases">
        <div className="w-full md:w-1/4 p-4 bg-white shadow-md rounded-lg">
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
                className={`p-2 cursor-pointer rounded ${activeDisease === disease ? "bg-blue-100" : ""}`}
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
              <h2 className="text-2xl font-bold mb-2 text-blue-900">{activeDisease.title}</h2>
              <img src={activeDisease.image} alt={activeDisease.title} className="w-96 h-96 object-cover mb-4 rounded" />
              <p className="text-gray-700 mb-4">{activeDisease.description}</p>
              <Link href={activeDisease.href} legacyBehavior>
                <a className="text-indigo-600 hover:text-indigo-800 font-semibold">
                  Learn More
                </a>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-2xl font-bold text-center text-blue-900 mb-4">
                Select a treatment option on the left to see more information.
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
