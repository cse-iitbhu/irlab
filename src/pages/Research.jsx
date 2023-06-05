import React, { useEffect } from 'react'
import back from "../assets/backg-logo.jpg"
import { Rtopics } from '../components/Rtopics'
import p1 from "../assets/pp1.jpg"
import p2 from "../assets/pp2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/pp4.jpg"
import p5 from "../assets/pp5.jpg"
import p6 from "../assets/pp6.jpg"
import p7 from "../assets/p7.jpg"
import p8 from "../assets/pp8.jpg"
import p9 from "../assets/pp9.jpg"
import p10 from "../assets/pp10.jpg"


const research=[
  {
    title:"Academic Recommendation System",
    image:p1,
    desc:"An academic recommendation system is a tool or software application designed to assist students, educators, and researchers in finding relevant academic resources such as research papers, articles, books, or courses.",
    members:"Mr. Tribikram Pradhan",
  },
  {
    title:"Disaster Management using Social Media",
    image:p2,
    desc:"Disaster management using social media involves the utilization of social media platforms and tools to improve preparedness, response, and recovery efforts during natural or man-made disasters.",
    members:"Ms. Anita Saroj, Mr. Amit Yadav",
  },
  {
    title:"Indian Language Information Retrieval ",
    image:p3,
    desc:"Indian Language Information Retrieval (ILIR) refers to the process of retrieving and accessing information written in various languages spoken in India, such as Hindi, Bengali, Tamil, Telugu, Marathi, and others.",
    members:"Mr. Siba Sankar Sahu ",
  },
  {
    title:"Spoken Document Retrieval",
    image:p4,
    desc:"Spoken Document Retrieval (SDR) is a branch of information retrieval that focuses on retrieving and processing spoken language content instead of written text.",
    members:"Mr. Sushil Kulkarni",
  },
  {
    title:"Code - Mixed Information Retrieval",
    image:p5,
    desc:"Code-mixed information retrieval refers to the retrieval and processing of text or speech data that contains a mixture of multiple languages or language varieties within the same communication. ",
    members:"Mr. Supriya Chanda",
  },
  {
    title:"Sentiment Analysis on Code - Mixed Data",
    image:p6,
    desc:"Sentiment analysis on code-mixed data involves the task of determining the sentiment or emotion expressed in text or speech data that contains a mixture of multiple languages or language varieties.",
    members:"Mr. Supriya Chanda",
  },
  {
    title:"Hate Speech Recognition on Code - Mixed Data",
    image:p7,    
    desc:"Hate speech recognition on code-mixed data involves the task of identifying and classifying instances of hate speech or offensive language in text or speech data that contains a mixture of multiple languages or language varieties.  ",
    members:"Mr. Supriya Chanda",
  },
  {
    title:"Sanskrit Text Processing",
    image:p8,
    desc:"Sanskrit text processing refers to the set of techniques and methodologies used to analyze, manipulate, and extract information from texts written in the Sanskrit language. ",
    members:"Mr. Siba Sankar Sahu",
  },
  {
    title:"Abstractive and Extractive Document Summmarization",
    image:p9,
    desc:"Abstractive and extractive document summarization are two approaches used in natural language processing to generate concise summaries of longer texts, such as articles, documents, or news stories.",
    members:"Dr. Pradeepika Verma",
  },
  {
    title:"Product Recommendation System",
    image:p10,
    desc:"A product recommendation system is a technology or software application that analyzes user preferences, behavior, and historical data to provide personalized recommendations for products or services.  ",
    members:"Mr. Shivam Solanki",
  },
]


export const Research = () => {
  
  return (<div className='font-serif' >
    {/* <img src={back} className='w-full ' alt="" /> */}
    {/* <div className=' heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>
      RESEARCH
      </div> */}
    <div className='research my-[01%] py-[1%] mx-[12%] flex justify-center items-center'>
      <div className='research-main flex flex-wrap justify-between'>
          {
            research.map((item)=>{
              return(
                <div className='research-card flex w-[45%]  p-[3%]' >
                  <Rtopics title={item.title} image={item.image} desc={item.desc} members={item.members} />

                </div>
                  )
                
            })
          }
      </div>

    </div>
  </div>
  )
}
