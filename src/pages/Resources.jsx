import React from 'react'
import back from "../assets/backg-logo.jpg"
import { ResourceCard } from '../components/ResourceCard'
import playstore from "../assets/playstore.png"
import parental from "../assets/parental.webp"
import factcheck from "../assets/factcheck.webp"

const apps = [
    {
        title: "PARENTAL KID MAGAZINE",
        members: "Supriya Chanda, Kenny Patel, Podili Varshitha, Rajat Singh",
        supervisor: "Dr. Sukomal Pal",
        desc: "Tansliteration - based projects and android app development",
        type: "Exploratory Project",
        image: playstore,
        logo: parental,
        url: "https://play.google.com/store/apps/details?id=com.irlab.kids_magazine"
    },
    {
        title: "FACT-O-PEDIA",
        image: playstore,
        members: "Mr. Vicky Kumar Nayak and Mr. Hitesh Kumar",
        supervisor: "Dr. Sukomal Pal",
        desc: "People get to know the facts about the news they doubt to be correct or not. The fact-checks are retrieved from the Top Fact-checking websites that use their excellent methodology for fact checking. ",
        type: "Exploratory Project",
        logo: factcheck,
        url: "https://play.google.com/store/apps/details?id=com.exploratory.fact_o_pedia"
    },



]

export const Resources = () => {
    return (
        <div className='font-serif'>
            {/* <img src={back} className='w-full' alt="" /> */}
            {/* <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>RESOURCES</div> */}
            <div className='resource my-[0%] py-[2%] mx-[12%] flex justify-center items-center'>
                <div className='flex flex-col w-full'>
                    <div className='mb-[1%]'>
                        <div className='teaching-heading py-[2%] text-center tracking-wider text-[150%] font-bold bg-gray-200 px-[2%] rounded-xl text-gray-700'>Apps Developed</div>
                        <div className='resource-main flex flex-wrap py-[1%] justify-center'>
                            {
                                apps.map((item) => {
                                    return (
                                        <div className='resource-card  flex w-[30%] justify-between  ' >
                                            <ResourceCard title={item.title} logo={item.logo} desc={item.desc} image={item.image} url={item.url} type={item.type} supervisor={item.supervisor} members={item.members} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className='teaching-heading text-center py-[2%] tracking-wider text-[150%] font-bold bg-gray-200 px-[2%] rounded-s text-gray-700'>Other</div>
                        <div className=' border-4'>
                        <div className='flex justify-between px-[4%] py-[2%] teaching-content border-[1px] text-[120%]' >
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">Language Independent Stemmer</div>
                            <div className='flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://github.com/cse-iitbhu/Language_Independent_Stemmer">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px] text-[120%]' >
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">Sanskrit Stemmer</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://github.com/cse-iitbhu/Sanskrit-Stemmer">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px]  text-[120%]'>
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">Sanskrit Text Collection</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://github.com/cse-iitbhu/Sanskrit-Text-Collection">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px] text-[120%]' >
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200"> iOS Kids Magazine</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://github.com/cse-iitbhu/iOS-Kids-Magazine">
                                    Link
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
