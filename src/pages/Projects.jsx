import React, { useEffect, useState } from "react";
import AOS from "aos";

const tableData = [
  {
    title:
      "Development of a Disaster Response System for Collecting and Disseminating Information through Social Media Text Processing",
    role: "Principal Investigator",
    status: "2023-26 (completed)",
    funding: "INR 07,94,000.00",
    fundingAgency: "UP CST, Govt of UP",
  },
  {
    title: "National Post-Doctoral Fellowship (N-PDF)",
    role: "Mentor",
    status: "2021-23 (completed)",
    funding: "INR 21,31,200.00",
    fundingAgency: "SERB, GoI",
  },
  {
    title:
      "Optimization of Capacity Utilization of Draglines deployed in NCL through Big Data Analytics",
    role: "Co-Principal Investigator",
    status: "2020-23 (completed)",
    funding: "INR 83,97,000.00",
    fundingAgency: "NCL, Coal India Ltd",
  },
  {
    title:
      "Development of an Information Access System for Heritage and Contemporary Sanskrit Text",
    role: "Principal Investigator",
    status: "approved in 2022",
    funding: "INR 25,00,000.00",
    fundingAgency: "CSU, Govt of India",
  },
  {
    title: "Development of Text-based Matching Algorithms for Bartering Software",
    role: "Principal Investigator",
    status: "2020-21 (completed)",
    funding: "INR 11,62,500.00",
    fundingAgency: "ASCONSOFTECH",
  },
  {
    title: "Cross-Lingual Information Access",
    role: "Team Member",
    status: "2007-10 (completed)",
    funding: "Not known",
    fundingAgency: "Ministry of IT, GoI",
  },
  {
    title:
      "Development and Enhancement of CARES Job JAR System for GE Medical Systems, USA",
    role: "Module Leader",
    status: "Sep 2002- Jul 2003 (completed)",
    funding: "Not known",
    fundingAgency: "GE Medical Systems, USA",
  },
  {
    title:
      "Development and Enhancement of Scottish Equitable Life Assurance and Pensions Systems, UK",
    role: "Developer",
    status: "Feb 2001- Aug 2002 (completed)",
    funding: "Not known",
    fundingAgency: "Scottish Equitable, UK",
  },
  {
    title: "Design and Development of PayOrder (PO) Management Systems",
    role: "Developer",
    status: "Oct 2000- Jan 2001 (completed)",
    funding: "Not known",
    fundingAgency: "PostBank (AIPB), Netherlands",
  },
  {
    title: "Development of Banking Data Warehouse for the BILPA, Turkey",
    role: "Developer",
    status: "Jul 2000- Sep 2000 (completed)",
    funding: "Not known",
    fundingAgency: "BILPA, Turkey",
  },
];

export const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-900
        transition-colors
        duration-300
        font-serif
      "
      data-aos="zoom-in"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-3
          sm:px-6
          lg:px-8
          py-8
        "
      >
                {/* ================= Desktop Table ================= */}

        <div
          className="
            hidden
            lg:block
            overflow-x-auto
            rounded-2xl
            lg:rounded-3xl
            shadow-2xl
            border
            border-sky-200
            dark:border-gray-700
            bg-white
            dark:bg-gray-800
          "
        >
          <table
            className="
              w-full
              border-collapse
              text-center
              text-gray-700
              dark:text-gray-200
            "
          >
            {/* ================= Header ================= */}

            <thead>
              <tr
                className="
                  bg-sky-100
                  dark:bg-gray-700
                  text-sm
                  md:text-base
                  lg:text-lg
                  font-bold
                "
              >
                <th className="px-4 py-5 border-r border-sky-200 dark:border-gray-600">
                  Project Title
                </th>

                <th className="px-4 py-5 border-r border-sky-200 dark:border-gray-600">
                  Role in the Project
                </th>

                <th className="px-4 py-5 border-r border-sky-200 dark:border-gray-600">
                  Status
                </th>

                <th className="px-4 py-5 border-r border-sky-200 dark:border-gray-600">
                  Quantum of Funding
                </th>

                <th className="px-4 py-5">
                  Funding Agency
                </th>
              </tr>
            </thead>

            {/* ================= Body ================= */}

            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={`
                    transition-all
                    duration-300
                    hover:bg-sky-100
                    dark:hover:bg-gray-700

                    ${
                      index % 2 === 0
                        ? "bg-sky-50 dark:bg-gray-800"
                        : "bg-white dark:bg-gray-900"
                    }
                  `}
                >
                  {/* Project Title */}

                  <td
                    className="
                      px-4
                      py-5
                      border-r
                      border-b
                      border-sky-200
                      dark:border-gray-700
                      text-left
                      text-sm
                      md:text-base
                      font-semibold
                    "
                  >
                    {item.title}
                  </td>

                  {/* Role */}

                  <td
                    className="
                      px-4
                      py-5
                      border-r
                      border-b
                      border-sky-200
                      dark:border-gray-700
                      text-sm
                      md:text-base
                    "
                  >
                    {item.role}
                  </td>

                  {/* Status */}

                  <td
                    className="
                      px-4
                      py-5
                      border-r
                      border-b
                      border-sky-200
                      dark:border-gray-700
                    "
                  >
                    <span
                      className={`
                        inline-block
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        sm:text-sm
                        font-semibold

                        ${
                          item.status.toLowerCase().includes("completed")
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Funding */}

                  <td
                    className="
                      px-4
                      py-5
                      border-r
                      border-b
                      border-sky-200
                      dark:border-gray-700
                      text-sm
                      md:text-base
                    "
                  >
                    <span
                      className={`
                        font-bold

                        ${
                          item.funding.toLowerCase().includes("not known")
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-emerald-600 dark:text-emerald-400"
                        }
                      `}
                    >
                      {item.funding}
                    </span>
                  </td>

                  {/* Funding Agency */}

                  <td
                    className="
                      px-4
                      py-5
                      border-b
                      border-sky-200
                      dark:border-gray-700
                      text-sm
                      md:text-base
                    "
                  >
                    {item.fundingAgency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

                {/* ================= Mobile Accordion ================= */}

        <div className="lg:hidden space-y-4">

          {tableData.map((item, index) => (

            <div
              key={index}
              className="
                rounded-2xl
                bg-white
                dark:bg-gray-800
                shadow-lg
                border
                border-gray-200
                dark:border-gray-700
                overflow-hidden
              "
            >

              {/* Project Title */}

              <button
                onClick={() => toggleCard(index)}
                className="
                  w-full
                  px-5
                  py-4
                  flex
                  justify-between
                  items-start
                  text-left
                  hover:bg-sky-50
                  dark:hover:bg-gray-700
                  transition
                "
              >

                <h2
                  className="
                    text-sm
                    font-semibold
                    text-sky-700
                    dark:text-sky-400
                    pr-3
                  "
                >
                  {item.title}
                </h2>

                <span
                  className="
                    text-2xl
                    font-bold
                    text-sky-600
                    dark:text-sky-400
                  "
                >
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              {/* Details */}

              <div
                className={`
                  transition-all
                  duration-300
                  overflow-hidden

                  ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >

                <div className="px-5 pb-5 border-t border-gray-200 dark:border-gray-700">

                  {/* Role */}

                  <div className="mt-4">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Role
                    </p>

                    <p className="mt-1 font-medium text-gray-800 dark:text-gray-200">
                      {item.role}
                    </p>

                  </div>

                  {/* Status */}

                  <div className="mt-4">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Status
                    </p>

                    <span
                      className={`
                        inline-block
                        mt-2
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          item.status.toLowerCase().includes("completed")
                            ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                        }
                      `}
                    >
                      {item.status}
                    </span>

                  </div>

                  {/* Funding */}

                  <div className="mt-4">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Quantum of Funding
                    </p>

                    <p
                      className={`
                        mt-1
                        font-bold

                        ${
                          item.funding.toLowerCase().includes("not known")
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-emerald-600 dark:text-emerald-400"
                        }
                      `}
                    >
                      {item.funding}
                    </p>

                  </div>

                  {/* Funding Agency */}

                  <div className="mt-4">

                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Funding Agency
                    </p>

                    <p className="mt-1 text-gray-800 dark:text-gray-200">
                      {item.fundingAgency}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};