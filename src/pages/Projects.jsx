import React ,{useEffect}from 'react'
import AOS from "aos"
const tableData = [
  {
    title: "Development of a Disaster Response System for Collecting and Disseminating Information through Social Media Text Processing",
    role: "Principal Investigator",
    status: " 2023-26 (completed)",
    funding: "INR 07,94,000.00",
    fundingAgency: "UP CST, Govt of UP"
  },
  {
    title: "National Post-Doctoral Fellowship (N-PDF)",
    role: "Mentor",
    status: "2021-23 (completed)",
    funding: "INR 21,31,200.00",
    fundingAgency: "SERB, GoI"
  },
    {
    title: "Optimization of Capacity Utilization of Draglines deployed in NCL through Big Data Analytics",
    role: "Co-Principal Investigator",
    status: "2020-23 (completed)",
    funding: "INR 83,97,000.00",
    fundingAgency: "NCL, Coal India Ltd"
  },
  {
    title: "Development of an Information Access System for Heritage and Contemporary Sanskrit Text",
    role: "Principal Investigator",
    status: "approved in 2022",
    funding: "INR 25,00,000.00",
    fundingAgency: "CSU, Govt of India"
  },
  {
    title: "Development of Text-based Matching Algorithms for Bartering Software",
    role: "Principal Investigator",
    status: "2020-21 (completed)",
    funding: "INR 11,62,500.00",
    fundingAgency: "ASCONSOFTECH"
  },

  {
    title: "Cross-Lingual Information Access",
    role: "Team Member",
    status: "2007-10 (completed)",
    funding: "Not known",
    fundingAgency: "Ministry of IT, GoI"
  },
  {
    title: "Development and Enhancement of CARES Job JAR System for GE Medical Systems, USA",
    role: "Module Leader",
    status: "Sep 2002- Jul 2003 (completed)",
    funding: "Not known",
    fundingAgency: "GE Medical Systems, USA"
  },
  {
    title: "Development and Enhancement of Scottish Equitable Life Assurance and Pensions Systems, UK",
    role: "Developer",
    status: "Feb 2001- Aug 2002 (completed)",
    funding: "Not known",
    fundingAgency: "Scottish Equitable, UK"
  },
  {
    title: "Design and Development of PayOrder (PO) Management Systems",
    role: "Developer",
    status: "Oct 2000- Jan 2001 (completed)",
    funding: "Not known",
    fundingAgency: "PostBank (AIPB), Netherlands"
  },
  {
    title: "Development of Banking Data Warehouse for the BILPA, Turkey",
    role: "Developer",
    status: "Jul 2000- Sep 2000 (completed)",
    funding: "Not known",
    fundingAgency: "BILPA, Turkey"
  }
];


export const Projects = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    AOS.init()
  }, [])



return (
  <div
    className="font-serif bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300"
    data-aos="zoom-in"
  >
    <div className="mx-[5%] py-8">

      

      <div className="overflow-x-auto rounded-3xl shadow-2xl border border-sky-200 dark:border-gray-700">

        <table className="w-full text-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">

          <thead>
            <tr className="bg-sky-100 dark:bg-gray-700 text-[115%]">

              <th className="p-5 border-r border-sky-200 dark:border-gray-600">
                Project Title
              </th>

              <th className="p-5 border-r border-sky-200 dark:border-gray-600">
                Role in the Project
              </th>

              <th className="p-5 border-r border-sky-200 dark:border-gray-600">
                Status
              </th>

              <th className="p-5 border-r border-sky-200 dark:border-gray-600">
                Quantum of Funding
              </th>

              <th className="p-5">
                Funding Agency
              </th>

            </tr>
          </thead>

          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`
                  transition-all duration-300
                  hover:bg-sky-100 dark:hover:bg-gray-700
                  ${
                    index % 2 === 0
                      ? "bg-sky-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  }
                `}
              >

                <td className="p-5 border-r border-b border-sky-200 dark:border-gray-700 font-medium">
                  {item.title}
                </td>

                <td className="p-5 border-r border-b border-sky-200 dark:border-gray-700">
                  {item.role}
                </td>

                <td className="p-5 border-r border-b border-sky-200 dark:border-gray-700">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status.toLowerCase().includes("completed")
                        ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

<td className="p-5 border-r border-b border-sky-200 dark:border-gray-700">

                 <span
    className={
      item.funding.toLowerCase().includes("not known")
        ? "text-yellow-600 dark:text-yellow-400 font-bold"
        : "text-emerald-600 dark:text-emerald-400 font-bold"
    }
  >
    {item.funding}
  </span>

</td>
   

                <td className="p-5 border-b border-sky-200 dark:border-gray-700">
                  {item.fundingAgency}
                </td>
                  


              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  </div>
);
}
