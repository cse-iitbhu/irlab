import React from "react";
import { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import krishna from "../assets/krishna.jpeg";
import arjun from "../assets/arjun.jpg";
import spal from "../assets/spalsir.jpg";
import jasvindar from "../assets/jasvindar.jpg"
import ishita from "../assets/ishita.png"
import supriya from "../assets/supriya.jpg"
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Calendar,
  Users,
  Database,
  Languages,
  Image,
  BookOpen,
  Trophy,
  ArrowRight,
} from "lucide-react";

const timeline = [
  ["12 June 2026", "Track Website Opens"],
  ["25 June 2026", "Training Data Release"],
  ["17 July 2026", "Subtask 1 & 2 Test Release"],
  ["30 July 2026", "Subtask 1 & 2 Submission Deadline"],
  ["30 July 2026", "Subtask 3 Test Release"],
  ["10 Aug 2026", "Subtask 3 Submission Deadline"],
  ["15 Aug 2026", "Results Announcement"],
  ["30 Aug 2026", "Working Notes Due"],
  ["30 Sep 2026", "Camera Ready Due"],
  ["Dec 2026", "FIRE 2026 Conference"],
];


const organizers = [
  {
    name: "Krishna Tewari",
    role: "Research Scholar",
    affiliation: "Department of Computer Science & Engineering, IIT (BHU) Varanasi",
    image: krishna,
  },
  {
    name: "Supriya Chanda",
    role: "Assistant Professor",
    affiliation: "Bennett University, Greater Noida",
    image: supriya,
  },
  {
    name: "Arjun Mukherjee",
    role: "Research Scholar",
    affiliation: "Department of Computer Science & Engineering, IIT (BHU) Varanasi",
    image: arjun,
  },
  {
    name: "Jasvindar Singh",
    role: "Research Scholar",
    affiliation: "Department of Mining Engineering, IIT (BHU) Varanasi",
    image: jasvindar,
  },
  {
    name: "Ishita Mandal",
    role: "Student Collaborator",
    affiliation: "Banaras Hindu University, Varanasi",
    image: ishita,
  },
  {
    name: "Sukomal Pal",
    role: "Associate Professor",
    affiliation: "Department of Computer Science & Engineering, IIT (BHU) Varanasi",
    image: spal,
  },
];

const Musia: React.FC = () => {

    const navigate = useNavigate();
 

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">



    {/* HERO */}
    <section className="bg-gradient-to-r from-[#1D439C] via-[#12497F] to-[#084F63] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="mb-4 text-lg font-medium">
          FIRE 2026 Shared Task
        </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MUSIA 2026
          </h1>

          <h2 className="text-2xl md:text-4xl font-light mb-8">
            Multilingual Story Illustration:
            <br />
            Bridging Cultures through AI Artistry
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-purple-100">
            Advancing multilingual multimodal AI through culturally grounded
            story understanding, illustration generation, and narrative
            consistency across English, Hindi, Bengali, and Marathi.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">


           <a
  href="
https://docs.google.com/forms/d/e/1FAIpQLScXYu8wlXJjmzHRQ_MablPc-xqs-O6dIwTPdRKwCtulLqeAVA/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold inline-block"
>
  Register
</a>
            {/* <button className="border border-white px-6 py-3 rounded-lg">
              Dataset
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Baseline
            </button> */}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
          <h2 className="text-4xl font-bold mb-8">
            About MUSIA
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-8 text-lg">
            MUSIA focuses on culturally grounded multimodal story understanding
            and generation for multilingual narratives. Participants are
            required to generate coherent visual illustrations from stories
            written in English, Hindi, Bengali, and Marathi while preserving
            narrative flow, cultural context, character identity, and artistic
            consistency.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-8 text-lg mt-5">
            The task aims to support applications in digital storytelling,
            illustrated children's books, educational content generation,
            archival preservation, and AI-assisted creative workflows.
          </p>
        </div>
      </section>

   {/* SUBTASKS */}
<section className="max-w-7xl mx-auto px-6 pb-24">
  <h2 className="text-4xl font-bold text-center mb-14">
    Shared Tasks
  </h2>

  <div className="grid lg:grid-cols-3 gap-8">

    {/* Subtask 1 */}
    <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <Image className="h-12 w-12 text-blue-600 mb-5" />

      <h3 className="text-3xl font-bold mb-3">
        Subtask 1
      </h3>

      <h4 className="font-semibold text-xl mb-4">
        Story-to-Image Sequence Generation
      </h4>

      <p className="text-gray-600 dark:text-gray-300 leading-7 flex-grow">
        Generate a coherent sequence of illustrations from a complete
        story while preserving narrative flow, visual consistency,
        and character identity across all generated images.
      </p>

      <button
        onClick={() => navigate("/subtask1")}
        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:scale-105 transition"
      >
        Go to Subtask 1 →
      </button>
    </div>

    {/* Subtask 2 */}
    <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <BookOpen className="h-12 w-12 text-blue-600 mb-5" />

      <h3 className="text-3xl font-bold mb-3">
        Subtask 2
      </h3>

      <h4 className="font-semibold text-xl mb-4">
        Anchor-Conditioned Sequence Completion
      </h4>

      <p className="text-gray-600 dark:text-gray-300 leading-7 flex-grow">
        Given the story and the first illustration as an anchor,
        generate the remaining illustrations while maintaining
        stylistic coherence and character consistency.
      </p>

      <button
        onClick={() => navigate("/subtask2")}
        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:scale-105 transition"
      >
        Go to Subtask 2 →
      </button>
    </div>

    {/* Subtask 3 */}
    <div className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col border border-transparent hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <Trophy className="h-12 w-12 text-blue-600 mb-5" />

      <h3 className="text-3xl font-bold mb-3">
        Subtask 3
      </h3>

      <h4 className="font-semibold text-xl mb-4">
        Narrative Image Ordering
      </h4>

      <p className="text-gray-600 dark:text-gray-300 leading-7 flex-grow">
        Recover the correct narrative order of shuffled illustrations
        by understanding story progression, temporal structure,
        and visual narrative cues.
      </p>

      <button
        onClick={() => navigate("/subtask3")}
        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:scale-105 transition"
      >
        Go to Subtask 3 →
      </button>
    </div>

  </div>
</section>

      {/* DATASET */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Dataset Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="shadow rounded-xl p-6 text-center bg-white dark:bg-gray-600">
              <Languages className="mx-auto h-10 w-10 text-blue-800" />
              <h3 className="text-3xl font-bold mt-4">4</h3>
              <p>Languages</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center bg-white dark:bg-gray-600">
              <Database className="mx-auto h-10 w-10 text-blue-800" />
              <h3 className="text-3xl font-bold mt-4">3</h3>
              <p>Subtasks</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center bg-white dark:bg-gray-600">
              <BookOpen className="mx-auto h-10 w-10 text-blue-800" />
              <h3 className="text-3xl font-bold mt-4">1000+</h3>
              <p>Stories</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center bg-white dark:bg-gray-600">
              <Image className="mx-auto h-10 w-10 text-blue-800" />
              <h3 className="text-3xl font-bold mt-4">5000+</h3>
              <p>Illustrations</p>
            </div>

          </div>
        </div>
      </section>

 {/* IMPORTANT DATES */}
<section className="max-w-4xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    Important Dates
  </h2>

  <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
    <table className="w-full">
      <thead>
        <tr className="bg-blue-700 text-white">
          <th className="px-6 py-4 text-left font-semibold">
            Event
          </th>
          <th className="px-6 py-4 text-left font-semibold">
            Date
          </th>
        </tr>
      </thead>

      <tbody>
        {timeline.map(([date, event], idx) => (
          <tr
            key={idx}
            className="
              border-b border-gray-200 dark:border-gray-700
              last:border-b-0
              hover:bg-blue-50 dark:hover:bg-gray-700
              transition-colors duration-200
            "
          >
            <td className="px-6 py-5 font-medium">
              {event}
            </td>

            <td className="px-6 py-5">
              <span className="
                inline-flex
                px-3 py-1
                rounded-full
                bg-blue-100
                text-blue-700
                dark:bg-blue-900/40
                dark:text-blue-300
                font-semibold
                text-sm
              ">
                {date}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* ORGANIZERS */}
        <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-14">
            Organizers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((person) => (
                <div
                key={person.name}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                <div className="flex flex-col items-center p-8">

                    <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                    />

                    <h3 className="mt-5 text-2xl font-bold text-center">
                    {person.name}
                    </h3>

                    <p className="text-blue-800 dark:text-blue-300 font-medium mt-1 text-center">
                    {person.role}
                    </p>

                    <p className="text-gray-600 dark:text-white text-center mt-3 leading-relaxed">
                    {person.affiliation}
                    </p>

                  
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>

        {/* CONTACT / QUERIES */}
        <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-8">

  {/* LEFT PANEL */}
  <div className="rounded-3xl bg-gradient-to-r from-[#1D439C] via-[#12497F] to-[#084F63] text-white p-8 md:p-10 shadow-lg flex flex-col justify-between">
    
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Stay Updated
      </h2>

      <p className="text-base md:text-lg text-blue-100 leading-relaxed">
        Join the MUSIA 2026 WhatsApp Group to receive updates about dataset
        releases, evaluation scripts, deadlines, results, and workshop
        announcements.
      </p>
    </div>

    <button className="mt-8 w-fit px-6 py-3 bg-white/20 border border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300">
      Registration Opening Soon →
    </button>

  </div>

  {/* RIGHT PANEL */}
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-10 shadow-lg">
    
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      Get in Touch
    </h2>

    <p className="text-gray-600 dark:text-gray-300 mb-8">
      For any queries, write us at:
    </p>

    <div className="space-y-4">

      <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 rounded-2xl p-4">
        <div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center flex-shrink-0">
          <BsEnvelope className="text-white text-xl" />
        </div>

        <a
          href="mailto:irel.iitbhu@gmail.com"
          className="text-blue-700 dark:text-blue-300 hover:underline break-all"
        >
          irel.iitbhu@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 rounded-2xl p-4">
        <div className="w-12 h-12 rounded-xl bg-blue-800 flex items-center justify-center flex-shrink-0">
          <BsEnvelope className="text-white text-xl" />
        </div>

        <a
          href="mailto:krishnatewari.rs.cse24@iitbhu.ac.in"
          className="text-blue-700 dark:text-blue-300 hover:underline break-all"
        >
          krishnatewari.rs.cse24@iitbhu.ac.in
        </a>
      </div>

    </div>

  </div>

</div>
 </div>
</section>

<div className="mt-8 text-center border-t border-gray-700 pt-6">
  <h4 className="text-2xl  text-black dark:text-gray-400 mb-2 underline">
    Past Editions
  </h4>
  <br />

     <a
    href="https://cse-iitbhu.github.io/MUSIA/"
    target="_blank"
    rel="noreferrer"
    className="dark:text-blue-400 text-blue-700 hover:underline text-xl"
  >
    MUSIA 2025
  </a>

 
</div>

      

    </div>
  );
};

export default Musia;