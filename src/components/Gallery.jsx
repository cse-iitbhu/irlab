import {React, useEffect} from 'react'
import { Carousel } from 'react-carousel-minimal';
import AOS from "aos"
import lab from "../assets/lab.jpg"
// import Adobe_group from "../assets/Adobe_group.JPG"
import lab1 from "../assets/lab1.jpg"
import lab2 from "../assets/lab2.jpg"
import lab3 from "../assets/lab3.jpg"
import IITG from "../assets/IITG.jpg"
import finalphd1 from "../assets/finalphd1.jpg"
import finalphd2 from "../assets/finalphd2.jpg"
import th_01 from "../assets/th_01.jpg"
import datascience from "../assets/datascience.jpg"
import datascience1 from "../assets/datascience1.jpg"
import datascience2 from "../assets/datascience2.jpg"
import Dr_T_Pradhan_1 from "../assets/Dr_T_Pradhan_1.jpg"
import Dr_T_Pradhan_2 from "../assets/Dr_T_Pradhan_2.jpg"
import teachday from "../assets/teachday.jpg"
import convocation from "../assets/convocation.jpg"
import fire from "../assets/FIRE.jpeg"
import idd from "../assets/idd.jpeg"
import pp1 from "../assets/irlab.jpeg"
import osbook from "../assets/Capture.JPG"
import lab15 from "../assets/LAB1 (1).jpeg"
import lab22 from "../assets/LAB1 (2).jpeg"
import lab33 from "../assets/LAB1 (3).jpeg"
import lab4 from "../assets/LAB1 (4).jpeg"
import lab5 from "../assets/LAB1 (5).jpeg"
import lab6 from "../assets/LAB1 (6).jpeg"
import lab7 from "../assets/LAB1 (7).jpeg"
import lab8 from "../assets/LAB1 (8).jpeg"
import lab9 from "../assets/LAB1 (9).jpeg"
import lab10 from "../assets/LAB1 (10).jpeg"
import lab11 from "../assets/LAB1 (11).jpeg"
import Adobe_group from "../assets/Adobe_group.JPG" 
import Adobe_krishna from "../assets/Adobe_krishna.JPG"





export const Gallery = () => {
  const data = [
    
    {
      image: osbook,
      caption: "Operating Systems Book by Dr. Sukomal Pal"
    },
    {
    image: Adobe_group,
      caption: "Adobe India AI Fellowship Felicitation ceremony at Adobe Bengaluru, 2026"
    },
    {
    image: Adobe_krishna,
      caption: "Adobe India AI Fellowship Felicitation"
    },
    {
      image: fire,
      caption: ""
    },
     {
      image: idd,
      caption: "IDD Graduates Thesis Submission."
    },
    {
      image: pp1,
      caption: "IREL Members"
    },
      {
      image: finalphd1,
      caption: "FINAL Ph.D SUBMISSION BY MRS. ANITA SAROJ"
    },
    {
      image: finalphd2,
      caption: "FINAL Ph.D SUBMISSION BY MRS. ANITA SAROJ"
    },

     {
      image: lab,
      caption: "Information Retrieval Lab"
    },


    {
      image: lab1,
      caption: "INFORMATION RETRIEVAL LAB"
    },
    {
      image: lab2,
      caption: "INFORMATION RETRIEVAL LAB"
    },
    {
      image: lab3,
      caption: "INFORMATION RETRIEVAL LAB"
    },
       {
      image: Dr_T_Pradhan_1,
      caption: "CONVOCATION @DR. TRIBIKRAM PRADHAN"
    },
    {
      image: Dr_T_Pradhan_2,
      caption: "CONVOCATION @DR. TRIBIKRAM PRADHAN"
    },

       {
      image: datascience,
      caption: "DATA SCIENCE WORKSHOP"
    },
    {
      image: datascience1,
      caption: "DATA SCIENCE WORKSHOP"
    },
    {
      image: datascience2,
      caption: "DATA SCIENCE WORKSHOP"
    },
      {
      image: IITG,
      caption: "TALK BY PROF. ARBIN KUMAR DEY ON DEEP LEARNING (LSTM) "
    },

       
    {
      image: th_01,
      caption: "DR. THOMAS MANDL'S VISIT"
    },
    
    {
      image: teachday,
      caption: "Teachers' Day Celebration, 2023."
    },
    {
      image: convocation,
      caption: "Convocation with M.Tech, IDD & Ph.D Students."
    },

    {
      image: lab15,
      caption: "Teachers' Day Celebration, 2025."
    },
     {
      image: lab22,
      caption: "IR Lab at FIRE 2025."
    },
     {
      image: lab33,
      caption: "FINAL Ph.D SUBMISSION BY DR. SUSHIL KULKARNI."
    },

    {
      image: lab4,
      caption: "CONVOCATION @DR. SUPRIYA CHANDA"
    },
    {
      image: lab5,
      caption: "CONVOCATION @DR. SIBA SANKAR SAHU"
    },
    {
      image: lab6,
      caption: "CONVOCATION MR. AMIT YADAV (M.TECH) "
    },
    {
      image: lab7,
      caption: "IR Lab at RecSys, 2025"
    },
    {
      image: lab8,
      caption: "Current and Past Members at FIRE 2025"
    },
     {
      image: lab9,
      caption: "Successful FIRE 2025 Celebration"
    },
     {
      image: lab10,
      caption: "Keynote Speakers during FIRE 2025 Celebration"
    },
     {
      image: lab11,
      caption: "IR Lab at FIRE 2024"
    },
    
 
 
  
 


  
    



  ]

  const captionStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#fff",
    background: "rgba(0,0,0,.55)",
    padding: "12px 18px",
    borderRadius: "8px",
  };

  const slideNumberStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#fff",
    background: "rgba(0,0,0,.6)",
    borderRadius: "30px",
    padding: "5px 12px",
  };

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-slate-950 py-14 px-4 transition-colors duration-300"
      data-aos="fade-up"
    >
      
     

      {/* Carousel Card */}

      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-5 md:p-8">
        <Carousel
          data={data}
          time={3500}
          width="100%"
          height="550px"
          radius="16px"
          automatic={true}
          dots={true}
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionStyle={captionStyle}
          captionPosition="bottom"
          pauseIconColor="white"
          pauseIconSize="45px"
         slideImageFit="contain"
          thumbnails={true}
          thumbnailWidth="110px"
          thumbnailHeight="75px"
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    </section>
  );
};
