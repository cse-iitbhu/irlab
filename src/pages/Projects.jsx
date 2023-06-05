import React from 'react'
const tableData = [
  {
    "title": "Development of an Information Access System for Heritage and Contemporary Sanskrit Text",
    "role": "PI",
    "status": "2023-26 (approved in 2022)",
    "funding": "INR 25,00,000.00",
    "fundingAgency": "CSU, Govt of India"
  },
  {
    "title": "Development of a Disaster Response System for Collecting and Disseminating Information through Social Media Text Processing",
    "role": "PI",
    "status": "2023-26 (ongoing)",
    "funding": "INR 07,94,000.00",
    "fundingAgency": "UP CST, Govt of UP"
  },
  {
    "title": "National Post-Doctoral Fellowship (N-PDF)",
    "role": "Mentor",
    "status": "2021-23 (complete)",
    "funding": "INR 21,31,200.00",
    "fundingAgency": "SERB, GoI"
  },
  {
    "title": "Development of Text-based Matching Algorithms for Bartering Software",
    "role": "Principal Investigator (PI)",
    "status": "May 2020 - May 21 (Completed)",
    "funding": "INR 11,62,500.00",
    "fundingAgency": "ASCONSOFTECH"
  },
  {
    "title": "Optimization of Capacity Utilization of Draglines deployed in NCL through Big Data Analytics",
    "role": "Co-PI",
    "status": "2020-23 (Ongoing)",
    "funding": "INR 83,97,000.00",
    "fundingAgency": "NCL, Coal India Ltd"
  }
];


export const Projects = () => {
  return ( <div className='font-serif' data-aos="zoom-in" >
  {/* <div className='heading py-[4%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>PROJECTS</div> */}
  <div className='projects-div mx-[8%] py-[1%] my-[2%] '>

  <table className='bg-sky-50 py-[5%] border-2 border-sky-200 text-center'>
      <thead className='  border-b-2  border-b-sky-200'>
        <tr className='table-head text-[120%]'>
          <th className='border-r-2 border-sky-200'>Project Title</th>
          <th className='border-r-2 border-sky-200'>Role in the project</th>
          <th className='border-r-2 border-sky-200'>Status</th>
          <th className='border-r-2 border-sky-200'>Quantum of funding</th>
          <th className='border-r-2 border-sky-200'>Funding agency</th>
        </tr>
      </thead>
      <tbody className=' mx-3'>
        {tableData.map((item)=>{
          return(<tr className='table-body py-2 text-[105%]'>
            <td className='border-r-2 border-b-2 border-sky-200'>
              <div className='my-2'>
              {item.title}
              </div>
              </td>
            <td className='border-r-2 border-b-2 border-sky-200'><div className='my-2'>
              {item.role}
              </div></td>
            <td className='border-r-2 border-b-2 border-sky-200'><div className='my-2'>
              {item.status}
              </div></td>
            <td className='border-r-2 border-b-2 border-sky-200'><div className='my-2'>
              {item.funding}
              </div></td>
            <td className=' border-b-2 border-sky-200'><div className='my-2'>
              {item.fundingAgency}
              </div></td>
          </tr>)
        })}
      </tbody>
    </table>
 
            </div>
  </div>
  )
}
