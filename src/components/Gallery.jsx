import {React, useEffect} from 'react'
import { Carousel } from 'react-carousel-minimal';
import AOS from "aos"
import lab from "../assets/lab.jpg"
import lab1 from "../assets/lab1.jpg"
import lab2 from "../assets/lab2.jpg"
import lab3 from "../assets/lab3.jpg"
import IITG from "../assets/IITG.jpg"
import finalphd1 from "../assets/finalphd1.jpg"
import finalphd2 from "../assets/finalphd2.jpg"
import th_01 from "../assets/th_01.jpg"
import teachersday from "../assets/teachersday.jpg"
import datascience from "../assets/datascience.jpg"
import datascience1 from "../assets/datascience1.jpg"
import datascience2 from "../assets/datascience2.jpg"
import Dr_T_Pradhan_1 from "../assets/Dr_T_Pradhan_1.jpg"
import Dr_T_Pradhan_2 from "../assets/Dr_T_Pradhan_2.jpg"

export const Gallery = () => {
  const data = [
    {
      image: finalphd1,
      caption: "FINAL PhD SUBMISSION BY MRS. ANITA SAROJ"
    },
    {
      image: finalphd2,
      caption: "FINAL PhD SUBMISSION BY MRS. ANITA SAROJ"
    },
    {
      image: lab,
      caption: "INFORMATION RETRIEVAL LAB"
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
    // {
    //   image: teachersday,
    //   caption: "TEACHERS DAY OUTING AT CCD "
    // },
    {
      image: th_01,
      caption: "DR. THOMAS MANDL'S VISIT"
    },
    {
      image: finalphd1,
      caption: "FINAL PhD SUBMISSION BY MRS. ANITA SAROJ"
    },
    {
      image: finalphd2,
      caption: "DR. THOMAS MANDL'S VISIT"
    },
  ]
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div  className='font-serif ' data-aos-duration="1200" data-aos="zoom-in">
      <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>GALLERY</div>
      <div className='px-[8%] font-bold' >
        <Carousel
          data={data}
          time={3000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          // slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          thumbnailHeight="75px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "600px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  )
}
