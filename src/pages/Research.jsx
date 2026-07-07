import React, { useEffect,useState} from 'react'

import { Rtopics } from '../components/Rtopics'



const currentResearch = [
  {
    title: "Explainable AI",
    desc: "",
    members: "Mr. Arjun Mukherjee",
  },
  {
    title: " Fairness And BIAS In AI",
    desc: "",
    members: "Mr. Arjun Mukherjee",
  },
  {
    title: "Human Emotions",
    desc: "",
    members: "Mr. Arjun Mukherjee",
  },
  {
    title: "Story Illustration : Generation & Evaluation",
    desc: "",
    members: "Ms. Krishna Tewari",
  },
  {
 title: "Multimodal Medical Image Analysis",
    desc: "",
    members: "Ms. Krishna Tewari",
  },
  {
   title: "LLM-as-a-Judge",
    desc: "",
    members: "Mr. Jasvindar Singh",
  },

];

const Pastresearch = [
  {
    title: "Academic Recommendation System",
    desc: "An academic recommendation system is a tool or software application designed to assist students, educators, and researchers in finding relevant academic resources such as research papers, articles, books, or courses.",
    members: "Mr. Tribikram Pradhan",
  },
  {
    title: "Disaster Management using Social Media",
    desc: "Disaster management using social media involves the utilization of social media platforms and tools to improve preparedness, response, and recovery efforts during natural or man-made disasters.",
    members: "Ms. Anita Saroj, Mr. Amit Yadav",
  },
  {
    title: "Indian Language Information Retrieval",
    desc: "Indian Language Information Retrieval (ILIR) refers to the process of retrieving and accessing information written in various languages spoken in India, such as Hindi, Bengali, Tamil, Telugu, Marathi, and others.",
    members: "Mr. Siba Sankar Sahu",
  },
  {
    title: "Spoken Document Retrieval",
    desc: "Spoken Document Retrieval (SDR) is a branch of information retrieval that focuses on retrieving and processing spoken language content instead of written text.",
    members: "Mr. Sushil Kulkarni",
  },
  {
    title: "Code-Mixed Information Retrieval",
    desc: "Code-mixed information retrieval refers to the retrieval and processing of text or speech data that contains a mixture of multiple languages or language varieties within the same communication.",
    members: "Mr. Supriya Chanda",
  },
  {
    title: "Sentiment Analysis on Code-Mixed Data",
    desc: "Sentiment analysis on code-mixed data involves the task of determining the sentiment or emotion expressed in text or speech data that contains a mixture of multiple languages or language varieties.",
    members: "Mr. Supriya Chanda",
  },
  {
    title: "Hate Speech Recognition on Code-Mixed Data",
    desc: "Hate speech recognition on code-mixed data involves the task of identifying and classifying instances of hate speech or offensive language in text or speech data that contains a mixture of multiple languages or language varieties.",
    members: "Mr. Supriya Chanda",
  },
  {
    title: "Sanskrit Text Processing",
    desc: "Sanskrit text processing refers to the set of techniques and methodologies used to analyze, manipulate, and extract information from texts written in the Sanskrit language.",
    members: "Mr. Siba Sankar Sahu",
  },
  {
    title: "Abstractive and Extractive Document Summarization",
    desc: "Abstractive and extractive document summarization are two approaches used in natural language processing to generate concise summaries of longer texts, such as articles, documents, or news stories.",
    members: "Dr. Pradeepika Verma",
  },
  {
    title: "Product Recommendation System",
    desc: "A product recommendation system is a technology or software application that analyzes user preferences, behavior, and historical data to provide personalized recommendations for products or services.",
    members: "Mr. Shivam Solanki",
  },
  {
    title: "Group Fairness in Information Retrieval",
    desc: "Group fairness in Information Retrieval (IR) focuses on reducing biases to ensure equitable representation of diverse groups in search results by creating fairer ranking models.",
    members: "Mr. Narendra Kumar",
  },
  {
    title: "Untargeted Attacks on Federated Recommendation Systems",
    desc: "An untargeted attack on a federated recommendation system involves manipulating the system's training process to degrade recommendation accuracy without targeting specific users or items.",
    members: "Ms. Yamini Jha",
  },
  {
    title: "Sarcasm Detection & Sentiment Analysis on Code-Mixed Data",
    desc: "This study focuses on using a Dravidian code-mixed dataset for sentiment analysis and sarcasm detection in Tamil-English, Malayalam-English, and Kannada-English language pairs.",
    members: "Mr. K Abhinay Paul",
  },
  {
    title: "Explainable IR for Recommender Systems",
    desc: "Our work on Explainable Information Retrieval (IR) for recommender systems explores methods that provide transparent reasoning behind recommendations, enhancing user understanding and fairness.",
    members: "Mr. Abhijeet Panihar",
  },
]

export const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="font-serif bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">

      <div className="py-8 text-center">
        {/* <h1 className="text-[250%] tracking-widest text-5xl text-extrabold underline text-[#666666]">
          
        </h1> */}
      </div>

      <div className="mx-[3%] mb-8">

      <div className="bg-white dark:bg-gray-800 rounded-xl border-green-600 shadow-md p-6 border-4 dark:border-green-300 mb-8 transition-all duration-300">

<h2 className="text-4xl font-bold text-center text-green-600 dark:text-green-300 mb-6 underline">
    Current Research
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

    {currentResearch.map((item, index) => (
      <div
        key={index}
        className="cursor-pointer"
        onClick={() => setSelectedResearch(item)}
      >
        <Rtopics
          title={item.title}
          desc={item.desc}
          members={item.members}
        />
      </div>
    ))}

  </div>

</div>

</div>

      

      <div className="mx-[3%] mb-10">

        <div className="bg-white dark:bg-gray-800 border-sky-600 rounded-xl shadow-md p-6 border-4 dark:border-sky-200 transition-all duration-300">

<h2 className="text-4xl font-bold text-center text-sky-600 dark:text-sky-200 mb-6 underline">
            Past Research
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

            {Pastresearch.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => setSelectedResearch(item)}
              >
                <Rtopics
                  title={item.title}
                  desc={item.desc}
                  members={item.members}
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {selectedResearch && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedResearch(null)}
        >
        <div
  className="
    bg-white dark:bg-gray-800
    text-gray-800 dark:text-white
    w-[90%] md:w-[700px]
    max-h-[80vh] overflow-y-auto
    p-6 rounded-xl shadow-xl
  "
  onClick={(e) => e.stopPropagation()}
>
           <h2 className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-4">
              {selectedResearch.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedResearch.desc}
            </p>

            <div className="mt-4 text-sky-600 dark:text-sky-200 font-semibold">
              👥 {selectedResearch.members}
            </div>

            <button
              onClick={() => setSelectedResearch(null)}
              className="mt-6 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};