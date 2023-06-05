import React from 'react'
import { ResearchCard } from './ResearchCard'
import ribhav from "../assets/ribhav.jpg"
import anita from "../assets/anita.jpg"
import tribikram from "../assets/Tribikram_Pradhan.jpg"
import pradeepika from "../assets/pradeepika_pic.jpg"

const alumni=[
    {
        name:"Mr. Ribhav Soni",
        url:"https://scholar.google.co.in/citations?user=80Bcnq8AAAAJ&hl=en&oi=ao",
        google:"https://scholar.google.co.in/citations?user=80Bcnq8AAAAJ&hl=en&oi=ao",
        image:ribhav,
        email:"",
        desg:"IDD",
        year:"Received IDD in 2018"
    },
    {
        name:"Dr. Tribikram Pradhan",
        url:"tpradhan.html",
        desg:"Research Scholar",
        image:tribikram,
        email:"tpradhan.rs.cse16@itbhu.ac.in",
        year:"Received PhD in 2020",
        google:"https://scholar.google.co.in/citations?user=UBrLgeMAAAAJ&hl=en",
        researchgate:"https://www.researchgate.net/profile/Tribikram-Pradhan",
        dplb:"https://dblp.uni-trier.de/pid/168/3232.html",
        linkedin:"https://www.linkedin.com/in/tribikram-pradhan-39a67290/",
        github:"https://github.com/riteshiitbhu17",
        publons:"https://publons.com/wos-op/author/650906/tribikram-pradhan#profile"
    },
    {
        name:"Dr. Pradeepika Verma",
        url:"pradeepika.html",
        image:pradeepika,
        desg:"Post Doctoral Fellow",
        email:"Pradeepika.pf.cse21@itbhu.ac.in",
        year:"Completed PDF in 2022"
    },
    {
        name:"Ms. Anita Saroj",
        url:"anita.html",
        image:anita,
        year:"Received PhD in 2022",
        desg:"Research Scholar",
        dplb:"https://dblp.org/pid/231/4810.html",
        google:"https://scholar.google.co.in/citations?hl=en&user=8hNcIk8AAAAJ",
        researchgate:"https://www.researchgate.net/profile/Anita-Saroj",
        email:"anitas.rs.cse16@itbhu.ac.in"
    },
]

export const Alumni = () => {
    return (
        <div className='member-rex-box flex justify-center items-center w-full px-[12%] my-[2%]'>
              <div className='flex flex-col w-full member-res '>
                {alumni.map(item => {
                  return (<ResearchCard name={item.name} desg={item.desg} image={item.image} url={item.url} email={item.email} year={item.year} github={item.github} google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin} facebook={item.facebook} publons={item.publons} twitter={item.twitter}  />)
                })}
              </div>
            </div>
      )
}
