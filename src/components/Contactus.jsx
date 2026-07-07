import React from 'react'
import { ImLocation } from "react-icons/im"
import { AiOutlineMail } from "react-icons/ai"
import Iframe from 'react-iframe'
import { useEffect } from 'react'
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin-logo.png"
export const Contactus = () => {
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])


  return (

<div className="contact-main px-[8%] py-[4%] flex flex-col lg:flex-row gap-12 items-center">

  {/* Left Section */}
  <div className="w-full lg:w-1/2">

    {/* Address Card */}
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-sky-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">

      <div className="flex items-center text-black dark:text-white mb-4">
        <ImLocation size={"1.7rem"} className="text-sky-500" />

        <div className="contact-heading ml-3 text-[150%] font-semibold">
          Address
        </div>
      </div>

      <div className="contact-text leading-8 text-[105%] dark:text-gray-300">
        TF-01, Information Retrieval Lab
        <br />
        Dept. of Computer Science and Engineering
        <br />
        Indian Institute of Technology (Banaras Hindu University)
        <br />
        Varanasi - 221005
        <br />
        Uttar Pradesh, India
      </div>

    </div>

    {/* Email Card */}
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-sky-100 dark:border-gray-700 mt-8 hover:shadow-2xl transition-all duration-300">

      <div className="flex items-center text-black dark:text-white mb-4">

        <AiOutlineMail
          size={"1.7rem"}
          className="text-sky-500"
        />

        <div className="contact-heading ml-3 text-[150%] font-semibold">
          Email
        </div>

      </div>

      <a
        href="mailto:spal.cse@iitbhu.ac.in"
        className="text-lg text-sky-600 dark:text-sky-400 hover:underline"
      >
        spal.cse@iitbhu.ac.in
      </a>

    </div>

    {/* Social Media */}
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-sky-100 dark:border-gray-700 mt-8 hover:shadow-2xl transition-all duration-300">

      <div className="flex items-center">

        <div className="text-black dark:text-sky-400 text-[150%] font-semibold mr-4 ">
          Follow us on :
        </div>

        <a
          href="https://x.com/IReL_iitbhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitter}
            className="ml-2 hover:scale-125 transition-all duration-300 dark:invert"
            alt="Twitter"
            width="24"
            height="24"
          />
        </a>

        <a
          href="https://www.linkedin.com/company/irel-information-retrieval-lab-iit-bhu-varanasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            className="ml-4 hover:scale-125 transition-all duration-300 dark:invert"
            alt="LinkedIn"
            width="24"
            height="24"
          />
        </a>

      </div>

    </div>

  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">

    <div className="w-full bg-white dark:bg-gray-800 p-3 rounded-3xl shadow-2xl border border-sky-100 dark:border-gray-700 hover:scale-[1.01] transition-all duration-500">

      <Iframe
        className="w-full rounded-2xl"
        url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.966329957846!2d82.9934203!3d25.2624575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3152738d05dd%3A0x3c68a89c5a4199c6!2sCSE%20Department%2C%20IIT%20BHU!5e0!3m2!1sen!2sin!4v1685942972560!5m2!1sen!2sin"
        width="100%"
        height="500px"
        referrerPolicy="no-referrer-when-downgrade"
      />

    </div>

  </div>

</div>
);
}
