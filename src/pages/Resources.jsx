import React, { useState } from 'react'
import { ResourceCard } from '../components/ResourceCard'
import book from "../assets/book.jpg"
import playstore from "../assets/playstore.png"
import appstore from "../assets/appstore.png"
import download from "../assets/download.png"
import factcheck from "../assets/factcheck.webp"
import img from "../assets/img.png"
import { useEffect } from 'react'
import { Link } from 'react-router-dom';





const apps = [
    {
        title: "OPERATING SYSTEMS",
        author: "Dr. Sukomal Pal",
        desc: "A beginner level easy, short and fun-filled trip to learn Operating Systems - meant for UG CS students. With lot of MCQs for GATE and other competitive examinations and links for further in-depth study.",
        type: "Book & Slides",
        image: download,
        logo: book,
        url: "/os-book"
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

const sharedTasks = [
  {
    title: "Multilingual Story Illustration: Bridging Cultures through AI Artistry (MUSIA)",
    desc: "MUSIA shared task organized under Forum for Information Retrieval Evaluation.",
    url: "/musia",
    external: false,
  },
  {
    title: "Code-Mixed Information Retrieval (CMIR)",
    desc: "CMIR shared task organized under Forum for Information Retrieval Evaluation.",
    url: "https://cmir-iitbhu.github.io/cmir/",
    external: true,
  }
];




export const Resources = () => {

    const [Open,SetOpen] = useState(false);

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    },[])

    
    return (
       <div className='font-serif bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300'>
            {/* <img src={back} className='w-full' alt="" /> */}
            {/* <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>RESOURCES</div> */}
            <div className='resource my-[0%] py-[2%] mx-[8%] flex justify-center items-center'>
                <div className='flex flex-col w-full'>
                    <div className='mb-[1%]'>
                        <div className='teaching-heading py-[2%] text-center tracking-wider text-[150%] font-bold bg-gray-200 dark:bg-gray-800 px-[2%] rounded-xl text-gray-700 dark:text-white'>Books Written/Apps Developed</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 py-[2%] w-full">
                            {
                                apps.map((item) => {
                                    return (
                                        <div className='resource-card w-full'>
                                        <ResourceCard title={item.title} author={item.author} logo={item.logo} guidance={item.guidance} desc={item.desc} image={item.image} url={item.url} appstore={item.appstore} appleUrl={item.appleUrl} type={item.type} supervisor={item.supervisor} members={item.members} />
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>

<div className="mt-8">
  <div className="text-center py-[2%] text-[180%] font-bold bg-gray-200 dark:bg-gray-800 rounded-t-xl text-gray-700 dark:text-white">
    Shared Tasks
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
    {sharedTasks.map((task, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {task.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {task.desc}
            </p>
          </div>

          <div className="mt-6">
            {task.external ? (
              <a
                href={task.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors duration-300"
              >
                Visit →
              </a>
            ) : (
              <Link
                to={task.url}
                className="inline-flex items-center px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-colors duration-300"
              >
                Visit →
              </Link>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="mt-12">
  <div className="text-center py-4 text-3xl font-bold tracking-wide bg-gray-200 dark:bg-gray-800 rounded-2xl text-gray-700 dark:text-white">
    Other Resources
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

    {/* Language Independent Stemmer */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        🌐 Language Independent Stemmer
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        A multilingual stemming framework for language-independent text processing.
      </p>

      <a
        href="https://github.com/cse-iitbhu/Language_Independent_Stemmer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

    {/* Sanskrit Stemmer */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        🕉 Sanskrit Stemmer
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Stemming tool designed specifically for Sanskrit language processing tasks.
      </p>

      <a
        href="https://github.com/cse-iitbhu/Sanskrit-Stemmer"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

    {/* Sanskrit Text Collection */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        📜 Sanskrit Text Collection
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Collection of Sanskrit texts useful for NLP and linguistic research.
      </p>

      <a
        href="https://github.com/cse-iitbhu/Sanskrit-Text-Collection"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

    {/* IR Datasets */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        🔍 IR Datasets
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Benchmark datasets widely used in Information Retrieval research.
      </p>

      <a
        href="https://ir-datasets.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

    {/* HuggingFace */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        🤗 Hugging Face Datasets
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Large collection of datasets for NLP, ML and AI research.
      </p>

      <a
        href="https://huggingface.co/datasets"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

    {/* Kaggle */}
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        📊 Kaggle Datasets
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Community-driven datasets for data science and machine learning projects.
      </p>

      <a
        href="https://www.kaggle.com/datasets"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
      >
        Open Resource →
      </a>
    </div>

  </div>
</div>
</div>
</div>
</div>
    )
}
