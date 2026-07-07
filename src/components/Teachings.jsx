import React from 'react'
import { useState,useEffect } from 'react'

const data = [
   {
    name: "Compiler",
    current: true,
    year: "2026",
    url: "",
  },
  {
    name: "Compiler",
    current: false,
    year: "2025",
    
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2025",
    
  },

  {
    name: "Compiler",
    current: false,
    year: "2024",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2024",
  },
  {
    name: "Compiler",
    current: false,
    year: "2023",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2023",
  },
  {
    name: "Compiler",
    current: false,
    year: "2022",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2022",
  },
  {
    name: "Compiler",
    current: false,
    year: "2021",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2021",
  },
  {
    name: "Compiler",
    current: false,
    year: "2020",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2020",
  },
  {
    name: "Compiler",
    current: false,
    year: "2019",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2019",
  },
  {
    name: "Compiler",
    current: false,
    year: "2018",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2018",
  },
  {
    name: "Compiler",
    current: false,
    year: "2017",
  },
  {
    name: "Information Retrieval",
    current: false,
    year: "2017",
  },
  {
    name: "Compiler",
    current: false,
    year: "2016",
  },
]

export const Teachings = () => {

  const currentCourses = data.filter(item => item.current)

  const previousCourses = data.filter(item => !item.current)

  const grouped = previousCourses.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = []
    }

    acc[item.name].push(item.year)
    return acc
  }, {})

return (
  <div
    className="font-serif px-[8%] py-[3%] min-h-screen
    bg-gray-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
    text-gray-800 dark:text-white transition-colors duration-300"
    data-aos="zoom-in"
    data-aos-duration="1200"
  >

    {/* Current Courses */}
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800 dark:text-white">
        Current Courses
      </h1>

      <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
        Courses offered in the current academic session.
      </p>
    </div>

    <div
      className="
      bg-white dark:bg-slate-800/60
      dark:backdrop-blur-md
      border border-gray-200 dark:border-slate-700
      rounded-2xl shadow-lg overflow-hidden"
    >
      {currentCourses.map((item, index) => (
        <div
          key={index}
          className="
          flex flex-col md:flex-row
          md:justify-between md:items-center
          gap-4
          p-6
          border-b border-gray-200 dark:border-slate-700
          last:border-b-0"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              📘 {item.name}
            </h2>

            <span
              className="
              inline-block mt-3
              px-3 py-1 rounded-full
              bg-sky-100 text-sky-700 border border-sky-200
              dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-700
              text-sm"
            >
              {item.year}
            </span>
          </div>

          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="
            px-5 py-2.5
            bg-sky-600 hover:bg-sky-700
            text-white
            rounded-xl
            font-medium
            shadow-md
            hover:shadow-lg
            transition-all duration-300"
          >
            🎓 Google Classroom
          </a>
        </div>
      ))}
    </div>

    {/* Previous Courses */}
    <div className="mt-16 mb-8">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800 dark:text-white">
        Previous Courses Taught
      </h1>

      <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
        Courses offered in previous academic years.
      </p>
    </div>

    <div
      className="
      bg-white dark:bg-slate-800/60
      dark:backdrop-blur-md
      border border-gray-200 dark:border-slate-700
      rounded-2xl shadow-lg p-8"
    >
      {Object.entries(grouped).map(([course, years], index) => (
        <div
          key={index}
          className="
          mb-8 pb-8
          border-b border-gray-200 dark:border-slate-700
          last:border-b-0"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            📚 {course}
          </h2>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <span
                key={year}
                className="
                px-3 py-1 rounded-full
                bg-sky-100 text-sky-700 border border-sky-200
                dark:bg-slate-700 dark:text-sky-300 dark:border-slate-600
                text-sm"
              >
                {year}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div>
);
}