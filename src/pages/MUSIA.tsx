import React from "react";
import { BsEnvelope } from "react-icons/bs";
import krishna from "../assets/krishna.jpeg";
import arjun from "../assets/arjun.jpg";
import spal from "../assets/spalsir.jpg";
import jasvindar from "../assets/jasvindar.jpg";
import supriya from "../assets/supriya.jpg";
import ishita from "../assets/ishita.png";

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
  ["17 June 2026", "Training Data Release"],
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

const MUSIA: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 text-white">
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
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold">
              Register
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Dataset
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Baseline
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-4xl font-bold mb-8">
            About MUSIA
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            MUSIA focuses on culturally grounded multimodal story understanding
            and generation for multilingual narratives. Participants are
            required to generate coherent visual illustrations from stories
            written in English, Hindi, Bengali, and Marathi while preserving
            narrative flow, cultural context, character identity, and artistic
            consistency.
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-5">
            The task aims to support applications in digital storytelling,
            illustrated children's books, educational content generation,
            archival preservation, and AI-assisted creative workflows.
          </p>
        </div>
      </section>

      {/* SUBTASKS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Edition
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Image className="h-10 w-10 text-indigo-600 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Subtask 1
            </h3>

            <h4 className="font-semibold mb-4">
              Story-to-Image Sequence Generation
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>Full story text</li>
              <li>Number of images (N)</li>
              <li>Generate ordered sequence of N illustrations</li>
              <li>Maintain narrative coherence</li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold">Evaluation</p>
              <p>CLIPScore</p>
              <p>DreamSim</p>
              <p>Sequence Consistency Score</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Subtask 2
            </h3>

            <h4 className="font-semibold mb-4">
              Anchor-Conditioned Sequence Completion
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>Story text</li>
              <li>First illustration as anchor</li>
              <li>Generate remaining N-1 images</li>
              <li>Preserve style and character identity</li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold">Evaluation</p>
              <p>CLIPScore</p>
              <p>Anchor Consistency Score</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Trophy className="h-10 w-10 text-indigo-600 mb-4" />

            <h3 className="text-2xl font-bold mb-4">
              Subtask 3
            </h3>

            <h4 className="font-semibold mb-4">
              Narrative Image Ordering
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>Story text</li>
              <li>Shuffled illustrations</li>
              <li>Recover correct narrative sequence</li>
              <li>Rank image order</li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold">Evaluation</p>
              <p>Kendall τ</p>
              <p>Spearman ρ</p>
              <p>Perfect Match Rate</p>
            </div>
          </div>

        </div>
      </section>

      {/* DATASET */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Dataset Overview
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="shadow rounded-xl p-6 text-center">
              <Languages className="mx-auto h-10 w-10 text-indigo-600" />
              <h3 className="text-3xl font-bold mt-4">4</h3>
              <p>Languages</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center">
              <Database className="mx-auto h-10 w-10 text-indigo-600" />
              <h3 className="text-3xl font-bold mt-4">3</h3>
              <p>Subtasks</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-indigo-600" />
              <h3 className="text-3xl font-bold mt-4">1000+</h3>
              <p>Stories</p>
            </div>

            <div className="shadow rounded-xl p-6 text-center">
              <Image className="mx-auto h-10 w-10 text-indigo-600" />
              <h3 className="text-3xl font-bold mt-4">5000+</h3>
              <p>Illustrations</p>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
        <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
            Important Dates
        </h2>

        <div className="overflow-hidden rounded-xl shadow-lg bg-white">
            <table className="w-full">
            <thead>
                <tr className="bg-indigo-600 text-white">
                <th className="px-6 py-4 text-left">Event</th>
                <th className="px-6 py-4 text-left">Date</th>
                </tr>
            </thead>

            <tbody>
                {timeline.map(([date, event], idx) => (
                <tr
                    key={idx}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                >
                    <td className="px-6 py-4">{event}</td>
                    <td className="px-6 py-4 font-semibold text-indigo-600">
                    {date}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </section>

      {/* ORGANIZERS */}
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-14">
            Organizers
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((person) => (
                <div
                key={person.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                <div className="flex flex-col items-center p-8">

                    <img
                    src={person.image}
                    alt={person.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100"
                    />

                    <h3 className="mt-5 text-2xl font-bold text-center">
                    {person.name}
                    </h3>

                    <p className="text-indigo-600 font-medium mt-1 text-center">
                    {person.role}
                    </p>

                    <p className="text-gray-600 text-center mt-3 leading-relaxed">
                    {person.affiliation}
                    </p>

                    {person.email && (
                    <a
                        href={`mailto:${person.email}`}
                        className="mt-4 text-sm text-blue-600 hover:underline"
                    >
                        {person.email}
                    </a>
                    )}
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>

        {/* CONTACT / QUERIES */}
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-8">

            {/* LEFT PANEL */}
            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-12 shadow-lg">

                <h2 className="text-5xl font-bold mb-6">
                Stay Updated
                </h2>

                <p className="text-xl text-indigo-100 mb-10">
                Join the MUSIA 2026 WhatsApp Group to receive updates about dataset
                releases, evaluation scripts, deadlines, results, and workshop
                announcements.
                </p>

                <button className="px-8 py-4 bg-white/20 border border-white/30 rounded-xl hover:bg-white/30 transition-all">
                Registration Opening Soon →
                </button>

            </div>

            {/* RIGHT PANEL */}
            <div className="bg-gray-50 border rounded-3xl p-12 shadow-sm">

                <h2 className="text-5xl font-bold mb-6 text-gray-800">
                Get in Touch
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                For any queries, write us at:
                </p>

                <div className="space-y-5">

                <div className="flex items-center gap-5 bg-gray-100 rounded-2xl p-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
  <BsEnvelope className="text-white text-2xl" />
</div>

                    <div>
                    <a
                        href="mailto:irel.iitbhu@gmail.com"
                        className="text-indigo-600 hover:underline"
                    >
                        irel.iitbhu@gmail.com
                    </a>
                    </div>
                </div>

                <div className="flex items-center gap-5 bg-gray-100 rounded-2xl p-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
  <BsEnvelope className="text-white text-2xl" />
</div>

                    <div>
                    <a
                        href="mailto:krishnatewari.rs.cse24@iitbhu.ac.in"
                        className="text-indigo-600 hover:underline"
                    >
                        krishnatewari.rs.cse24@iitbhu.ac.in
                    </a>
                    </div>
                </div>

                </div>

            </div>

            </div>

        </div>
        </section>

    </div>
  );
};

export default MUSIA;