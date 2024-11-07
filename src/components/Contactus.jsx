import React from 'react'
import back from "../assets/backg-logo.jpg"
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
    <div className='font-serif text-[#666666]' >
      <div className='contact-main px-[8%] my-[4%] flex  justify-between' >
        <div className='w-1/2'>
          <div className='my-[4%]'>
            <div className='flex items-center achi-title text-[#000000]'>
              <span>
                <ImLocation size={"1.5rem"} />
              </span>
              <div className='contact-heading ml-[2%] text-[120%]'>
                Address
              </div>
            </div>
            <div className='contact-text ml-[5%]'>
              TF-01, Information Retrieval Lab
              Dept. of Computer Science and Engineering<br />
              Indian Institute of Technology (Banaras Hindu University)<br />
              Varanasi - 221005 <br />
              Uttar Pradesh, India<br />
            </div>
          </div>
          <div className='my-[4%]'>
            <div className='flex achi-title text-[#000000]'>
              <span>
                <AiOutlineMail size={"1.5rem"} />
              </span>
              <div className='contact-heading ml-[2%] text-[120%]'>
                Email
              </div>
              
            </div>
            <div className='flex  items-center'><a href="mailto:spal.cse@iitbhu.ac.in" className='contact-text ml-[5%] text-[#67b0d1]'>spal.cse@iitbhu.ac.in</a></div>
          </div>
          <div className='my-[4%]'>
            <div className='flex items-center text-[#000000]'>
              <div className='contact-heading ml-[2%] text-[120%]'>
                Follow us on:
              </div>
              <a href='https://x.com/IReL_iitbhu' target="__blank" rel="noopener noreferrer">
                <img src={twitter} className='ml-2' alt="Twitter" width="20" height="20"/>
              </a>
              <a href='https://www.linkedin.com/company/irel-information-retrieval-lab-iit-bhu-varanasi/' target='__blank' rel="noopener noreferrer">
                <img src={linkedin} className='ml-2' alt="Twitter" width="20" height="20"/>
              </a>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center '>
          <Iframe className=' w-full' url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14432.966329957846!2d82.9934203!3d25.2624575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3152738d05dd%3A0x3c68a89c5a4199c6!2sCSE%20Department%2C%20IIT%20BHU!5e0!3m2!1sen!2sin!4v1685942972560!5m2!1sen!2sin" width="80%" height="80%" referrerPolicy="no-referrer-when-downgrade"></Iframe>
        </div>
      </div>
    </div>
  )
}
