import React from 'react'
import { ResourceCard } from '../components/ResourceCard'
import book from "../assets/book.jpg"
import playstore from "../assets/playstore.png"
import appstore from "../assets/appstore.png"
import download from "../assets/download.png"
import factcheck from "../assets/factcheck.webp"
import img from "../assets/img.png"
import { useEffect } from 'react'

const apps = [
    {
        title: "OPERATING SYSTEMS",
        author: "Dr. Sukomal Pal",
        desc: "A beginner level easy, short and fun-filled trip to learn Operating Systems - meant for UG CS students. With lot of MCQs for GATE and other competitive examinations and links for further in-depth study.",
        type: "Book",
        image: download,
        logo: book,
        url: "https://ekumbh.aicte-india.org/allbook.php"
    },
    {
        title: "PARENTAL KID MAGAZINE",
        members: "Kenny Patel, Rajat Pratap Singh, Podili Varshitha, Abhay Saxena, Abhay Singh, Sudhanshu Ranjan",
        supervisor: "Dr. Sukomal Pal",
        guidance: "Supriya Chanda",
        desc: "Tansliteration - based projects and android app development",
        type: "Exploratory Project",
        image: playstore,
        logo: img,
        url: "https://play.google.com/store/apps/details?id=com.irlab.kids_magazine",
        appstore: appstore,
        appleUrl: "https://apps.apple.com/in/app/parental-kids-magazine/id6499124926"
    },
    {
        title: "FACT-o-PEDIA",
        image: playstore,
        members: "Vicky Kumar Nayak, Hitesh Kumar, Manas Jayaswal",
        supervisor: "Dr. Sukomal Pal",
        guidance: "Dr. Sukomal Pal",
        desc: "People get to know the facts about the news they doubt to be correct or not. The fact-checks are retrieved from the Top Fact-checking websites that use their excellent methodology for fact checking. ",
        type: "Exploratory Project",
        logo: factcheck,
        url: "https://play.google.com/store/apps/details?id=com.explo.fact_o_pedia&pcampaignid=web_share"
    },
    

]


export const Resources = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    return (
        <div className='font-serif'>
            {/* <img src={back} className='w-full' alt="" /> */}
            {/* <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>RESOURCES</div> */}
            <div className='resource my-[0%] py-[2%] mx-[8%] flex justify-center items-center'>
                <div className='flex flex-col w-full'>
                    <div className='mb-[1%]'>
                        <div className='teaching-heading py-[2%] text-center tracking-wider text-[150%] font-bold bg-gray-200 px-[2%] rounded-xl text-gray-700'>Books Written/Apps Developed</div>
                        <div className='resource-main flex flex-wrap py-[1%] justify-center'>
                            {
                                apps.map((item) => {
                                    return (
                                        <div className='resource-card  flex w-[33%] justify-between  ' >
                                        <ResourceCard title={item.title} author={item.author} logo={item.logo} guidance={item.guidance} desc={item.desc} image={item.image} url={item.url} appstore={item.appstore} appleUrl={item.appleUrl} type={item.type} supervisor={item.supervisor} members={item.members} />
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
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px]  text-[120%]'>
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">IR Datasets</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://ir-datasets.com/">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px]  text-[120%]'>
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">HuggingFace Datasets</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://huggingface.co/datasets">
                                    Link
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-between px-[4%]  py-[2%] teaching-content border-[1px]  text-[120%]'>
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">Kaggle Datasets</div>
                            <div className=' flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://www.kaggle.com/datasets">
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
