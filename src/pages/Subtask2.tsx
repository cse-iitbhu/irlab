import React, { useState } from "react";

type Subtask2Result = {
  team: string;
  run: string;

  humanRelevance: number | null;
  humanConsistency: number | null;
  humanVisualQuality: number | null;

  vlmRelevance: number | null;
  vlmConsistency: number | null;
  vlmVisualQuality: number | null;

  clipI: number | null;
  clipT: number | null;

  eligible: boolean;
  note?: string;
};

type Subtask2LanguageResults = {
  [key: string]: Subtask2Result[];
};

const subtask2Results: Subtask2LanguageResults = {
  // =========================================================
  // ENGLISH
  // =========================================================
  English: [
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 2.100,
      humanConsistency: 2.250,
      humanVisualQuality: 2.200,
      vlmRelevance: 2.317,
      vlmConsistency: 2.400,
      vlmVisualQuality: 4.175,
      clipI: 0.9826,
      clipT: 0.6140,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 2.050,
      humanConsistency: 2.200,
      humanVisualQuality: 2.075,
      vlmRelevance: 2.183,
      vlmConsistency: 2.350,
      vlmVisualQuality: 4.050,
      clipI: 1.0000,
      clipT: 0.6127,
      eligible: true,
    },
    {
      team: "VisionForge",
      run: "Run 1",
      humanRelevance: 1.975,
      humanConsistency: 1.700,
      humanVisualQuality: 2.475,
      vlmRelevance: 2.730,
      vlmConsistency: 2.850,
      vlmVisualQuality: 3.780,
      clipI: 0.8463,
      clipT: 0.6102,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.650,
      humanConsistency: 1.325,
      humanVisualQuality: 3.075,
      vlmRelevance: 2.225,
      vlmConsistency: 1.700,
      vlmVisualQuality: 3.990,
      clipI: 0.7204,
      clipT: 0.5625,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 2",
      humanRelevance: 1.650,
      humanConsistency: 1.325,
      humanVisualQuality: 3.075,
      vlmRelevance: 2.000,
      vlmConsistency: 1.550,
      vlmVisualQuality: 3.950,
      clipI: 0.7204,
      clipT: 0.5625,
      eligible: true,
    },
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 1.325,
      humanConsistency: 1.250,
      humanVisualQuality: 1.775,
      vlmRelevance: 1.040,
      vlmConsistency: 1.150,
      vlmVisualQuality: 1.640,
      clipI: 0.7618,
      clipT: 0.5400,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
  ],

  // =========================================================
  // HINDI
  // =========================================================
  Hindi: [
    {
      team: "VaraPrabha",
      run: "Run 2",
      humanRelevance: 1.300,
      humanConsistency: 1.100,
      humanVisualQuality: 1.775,
      vlmRelevance: 1.790,
      vlmConsistency: 1.350,
      vlmVisualQuality: 3.530,
      clipI: 0.7160,
      clipT: 0.6017,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.300,
      humanConsistency: 1.100,
      humanVisualQuality: 1.775,
      vlmRelevance: 1.767,
      vlmConsistency: 1.300,
      vlmVisualQuality: 3.575,
      clipI: 0.7160,
      clipT: 0.6017,
      eligible: true,
    },
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 1.175,
      humanConsistency: 1.575,
      humanVisualQuality: 2.125,
      vlmRelevance: 1.000,
      vlmConsistency: 1.000,
      vlmVisualQuality: 1.190,
      clipI: 0.7542,
      clipT: 0.5000,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.800,
      vlmRelevance: 1.900,
      vlmConsistency: 2.650,
      vlmVisualQuality: 4.450,
      clipI: 1.0000,
      clipT: 0.6807,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.800,
      vlmRelevance: 1.850,
      vlmConsistency: 2.100,
      vlmVisualQuality: 4.750,
      clipI: 1.0000,
      clipT: 0.6632,
      eligible: true,
    },
  ],

  // =========================================================
  // BENGALI
  // =========================================================
  Bengali: [
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 2.025,
      humanConsistency: 2.000,
      humanVisualQuality: 3.000,
      vlmRelevance: 1.020,
      vlmConsistency: 2.050,
      vlmVisualQuality: 3.250,
      clipI: 1.0000,
      clipT: 0.6062,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 2.025,
      humanConsistency: 2.000,
      humanVisualQuality: 3.000,
      vlmRelevance: 0.820,
      vlmConsistency: 1.550,
      vlmVisualQuality: 3.200,
      clipI: 1.0000,
      clipT: 0.6062,
      eligible: true,
    },
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 1.200,
      humanConsistency: 1.175,
      humanVisualQuality: 1.125,
      vlmRelevance: 1.090,
      vlmConsistency: 1.290,
      vlmVisualQuality: 1.640,
      clipI: 0.7493,
      clipT: 0.5210,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
    {
      team: "VaraPrabha",
      run: "Run 2",
      humanRelevance: 1.075,
      humanConsistency: 1.100,
      humanVisualQuality: 2.125,
      vlmRelevance: 1.860,
      vlmConsistency: 1.440,
      vlmVisualQuality: 3.810,
      clipI: 0.6971,
      clipT: 0.5556,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.075,
      humanConsistency: 1.100,
      humanVisualQuality: 2.125,
      vlmRelevance: 1.730,
      vlmConsistency: 1.250,
      vlmVisualQuality: 3.820,
      clipI: 0.6971,
      clipT: 0.5556,
      eligible: true,
    },
  ],

  // =========================================================
  // MARATHI
  // =========================================================
  Marathi: [
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.250,
      humanConsistency: 1.250,
      humanVisualQuality: 1.675,
      vlmRelevance: 1.880,
      vlmConsistency: 1.310,
      vlmVisualQuality: 3.390,
      clipI: 0.7557,
      clipT: 0.5929,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 2",
      humanRelevance: 1.250,
      humanConsistency: 1.250,
      humanVisualQuality: 1.675,
      vlmRelevance: 1.700,
      vlmConsistency: 1.310,
      vlmVisualQuality: 3.460,
      clipI: 0.7557,
      clipT: 0.5929,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.250,
      vlmRelevance: 1.360,
      vlmConsistency: 2.150,
      vlmVisualQuality: 3.100,
      clipI: 1.0000,
      clipT: 0.6113,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.225,
      vlmRelevance: 1.700,
      vlmConsistency: 2.400,
      vlmVisualQuality: 3.200,
      clipI: 1.0000,
      clipT: 0.6113,
      eligible: true,
    },
  ],
};

const Subtask2: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Hindi", "Bengali", "Marathi"];

  const results = subtask2Results[selectedLanguage] || [];

  const displayResults = [
    ...results.filter((result) => !result.eligible),
    ...results.filter((result) => result.eligible),
  ];

  const getOfficialRank = (rowIndex: number) => {
    const current = displayResults[rowIndex];

    if (!current.eligible) {
      return null;
    }

    return (
      displayResults
        .slice(0, rowIndex)
        .filter((result) => result.eligible).length + 1
    );
  };
  
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1D439C] via-[#12497F] to-[#084F63] text-white">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm mb-6">
            FIRE 2026 Shared Task
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MUSIA 2026
          </h1>

          <h2 className="text-2xl md:text-4xl font-light mb-8">
            Multilingual Story Illustration
            <br />
            Bridging Cultures through AI Artistry
          </h2>

          <p className="max-w-4xl mx-auto text-lg text-blue-100">
            Advancing multilingual multimodal AI through culturally grounded
            story understanding, illustration generation, and narrative
            consistency across English, Hindi, Bengali, and Marathi.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-2xl p-8 md:p-12">

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">
              FIRE 2026
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-medium">
              Shared Task
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-10">
             Anchor-Conditioned Sequence Completion
          </h2>

          {/* USE CASE */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold mb-4">
              Use Case
            </h3>

            <p className="leading-8 text-slate-700 dark:text-slate-300">
              In the production of illustrated books, educational comics, and
              narrative graphic content, visual consistency across panels is
              not just aesthetic; it is essential for readers to track
              characters, follow the story, and build comprehension.
            </p>

            <p className="leading-8 text-slate-700 dark:text-slate-300 mt-5">
              In practice, an illustrator establishes a visual identity for a
              story with an initial image and maintains that identity
              throughout the narrative. This subtask directly models that
              real-world workflow and focuses on preserving visual coherence
              across generated illustrations.
            </p>
          </div>

          {/* INPUT OUTPUT EVALUATION */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Input
              </h3>

              <ul className="space-y-4">
                <li>✓ Full Story Text</li>
                <li>✓ First Ground Truth Image</li>
                <li>✓ Integer N</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Output
              </h3>

              <p className="leading-7">
                An ordered sequence of N−1 images that remain visually
                consistent with the anchor image while faithfully representing
                the remaining story.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Evaluation
              </h3>

              <ul className="space-y-3">
                <li>Human Evaluation</li>
                <li>VLM-Based Evaluation</li>
                <li>CLIP-I</li>
                <li>CLIP-T</li>
              </ul>
            </div>

          </div>
{/* 
          {/* PIPELINE */}
          {/* <div className="mb-16">

            <h3 className="text-3xl font-bold text-center mb-10">
              Task Pipeline
            </h3>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Story Text
              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Anchor Image
              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Sequence Completion
              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Evaluation
              </div>

            </div>
          </div> */} 

          {/* EVALUATION */}
          <div className="mb-14">

            <h3 className="text-3xl font-bold mb-8">
              Evaluation Metrics
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl border dark:border-slate-700 p-6">
                <h4 className="text-xl font-bold mb-4">
                  Automatic Evaluation
                </h4>

                <ul className="space-y-3">
                  <li>
                    <strong>VLM-Based Evaluation for visual quality, consistency and relevance</strong> 
                  </li>

                  <li>
                    <strong>CLIP-I:</strong> Similarrity between images
                  </li>

                  <li>
                    <strong>CLIP-T:</strong> Similarrity between image and text
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border dark:border-slate-700 p-6">
                <h4 className="text-xl font-bold mb-4">
                  Human Evaluation
                </h4>

                <ul className="space-y-3">
                  <li>Visual Quality</li>
                  <li>Narrative Relevance</li>
                  <li>Consistency</li>
                </ul>
              </div>

            </div>
          </div>

        {/* DATASETS */}
<div className="rounded-2xl border border-slate-700 dark:bg-slate-800 shadow-lg p-8 mt-12">
  <div className="flex items-center justify-between mb-8">
    <div>
      <h3 className="text-3xl font-bold dark:text-white">
        📂 Datasets
      </h3>
      <p className="dark:text-slate-400 mt-2">
        Download the official datasets for the shared task.
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Training */}
    <div className="rounded-xl border border-slate-600 dark:bg-slate-700/40 p-6">
      <h4 className="text-xl font-semibold dark:text-white mb-5">
        Training Data
      </h4>

      <div className="space-y-3">

        <a
          href="https://drive.google.com/file/d/1j19oKrJMqQZt14FVrexiS3KuU_oEyFkm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">English Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1bUoahhgCYfC-pWfK3CzIcG97vVnIAiwq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">Hindi Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1kHshDkoFPTdzDc6M6SM4BBnjy2ybujin/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">Bengali Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

      </div>
    </div>

    {/* Test */}
    <div className="rounded-xl border border-slate-600 dark:bg-slate-700/40 p-6">
      <h4 className="text-xl font-semibold dark:text-white mb-5">
        Test Data
      </h4>

      <div className="space-y-3">

        <a
          href="https://drive.google.com/file/d/1PQIxzgdcn_NKqsg351TyfD0NvvHj6dDJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">English Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1m_oHKLMNq9CTbTDR7GDm3ZCz7UuacZDx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">Hindi Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1dF3sA-ydJkY8ZqYzuOXXbV3FF7FKRHDD/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">Bengali Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

        <a
          href="https://drive.google.com/file/d/1-_Ejns2xbKMoZdsRoAPAFqkV77Ve75Rd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">Marathi Stories</span>
          <span className="dark:text-blue-400 font-medium">Download ↗</span>
        </a>

      </div>
    

              </div>

            </div>
          </div>


{/* ========================================================= */}
{/* SUBTASK 2 RESULTS */}
{/* ========================================================= */}

<div className="mt-16 w-full col-span-full">

  {/* HEADER */}
  <div className="mb-10">

    <div className="flex justify-center mb-5">
      <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-5 py-2 text-sm font-semibold">
        Official Results
      </span>
    </div>

    <h3 className="text-3xl md:text-4xl font-bold text-center mb-5">
      Subtask 2 Leaderboard
    </h3>

    <p className="max-w-5xl mx-auto text-center text-slate-600 dark:text-slate-300 leading-7">
      Ranking is primarily determined by human evaluation.
      Relevance is considered first, followed by Consistency and
      Visual Quality. If runs are tied across all three
      human-evaluation criteria, VLM-based Relevance, Consistency,
      and Visual Quality are used sequentially as tie-breakers.
      CLIP-I and CLIP-T are reported as supplementary metrics and
      do not affect the ranking.
    </p>

  </div>


  {/* LANGUAGE TABS */}
  <div className="flex flex-wrap justify-center gap-3 mb-10">

    {languages.map((language) => (
      <button
        key={language}
        onClick={() => setSelectedLanguage(language)}
        className={`px-7 py-3 rounded-full font-semibold transition-all duration-300 ${
          selectedLanguage === language
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        }`}
      >
        {language}
      </button>
    ))}

  </div>


  {/* RESULTS HEADER */}
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">

    <div>

      <h4 className="text-2xl font-bold">
        {selectedLanguage} Results
      </h4>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Story-to-Image Generation Conditioned on the First Illustration
      </p>

    </div>

    <div className="text-sm text-slate-500 dark:text-slate-400">
      {results.length} submitted{" "}
      {results.length === 1 ? "run" : "runs"}
    </div>

  </div>


  {/* TABLE */}
  <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">

    <table className="w-full min-w-[1250px] border-collapse text-sm">

      <thead>

        {/* GROUP HEADERS */}
        <tr className="bg-slate-200 dark:bg-slate-700">

          <th
            rowSpan={2}
            className="px-4 py-4 text-center font-bold"
          >
            Rank
          </th>

          <th
            rowSpan={2}
            className="px-5 py-4 text-left font-bold"
          >
            Team
          </th>

          <th
            rowSpan={2}
            className="px-4 py-4 text-center font-bold"
          >
            Run
          </th>

          <th
            colSpan={3}
            className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-bold"
          >
            Human Evaluation
          </th>

          <th
            colSpan={3}
            className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-bold"
          >
            VLM Evaluation
          </th>

          <th
            colSpan={2}
            className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center font-bold"
          >
            Additional Metrics
          </th>

        </tr>


        {/* METRIC HEADERS */}
        <tr className="bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200">

          <th className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
            Relevance ↑
          </th>

          <th className="px-4 py-3 text-center">
            Consistency ↑
          </th>

          <th className="px-4 py-3 text-center">
            Visual Quality ↑
          </th>

          <th className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
            Relevance ↑
          </th>

          <th className="px-4 py-3 text-center">
            Consistency ↑
          </th>

          <th className="px-4 py-3 text-center">
            Visual Quality ↑
          </th>

          <th className="border-l border-slate-300 dark:border-slate-600 px-4 py-3 text-center">
            CLIP-I ↑
          </th>

          <th className="px-4 py-3 text-center">
            CLIP-T ↑
          </th>

        </tr>

      </thead>


      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">

        {displayResults.map((result, index) => {

          const rank = getOfficialRank(index);

          return (
            <tr
              key={`${result.team}-${result.run}`}
              className={`
                transition-colors
                hover:bg-slate-50
                dark:hover:bg-slate-700/40
                ${
                  !result.eligible
                    ? "bg-red-50/70 dark:bg-red-900/10"
                    : rank === 1
                    ? "bg-amber-50/70 dark:bg-amber-900/10"
                    : ""
                }
              `}
            >

              {/* RANK */}
              <td className="px-4 py-5 text-center">

                {!result.eligible ? (

                  <div className="flex flex-col items-center justify-center gap-1">

                    <span className="text-lg">
                      ⚠️
                    </span>

                    <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                      Not Ranked
                    </span>

                  </div>

                ) : (

                  <div className="flex items-center justify-center gap-2">

                    {rank === 1 && (
                      <span className="text-xl">🥇</span>
                    )}

                    {rank === 2 && (
                      <span className="text-xl">🥈</span>
                    )}

                    {rank === 3 && (
                      <span className="text-xl">🥉</span>
                    )}

                    <span className="font-bold">
                      {rank}
                    </span>

                  </div>

                )}

              </td>


              {/* TEAM */}
              <td className="px-5 py-5">

                <div>

                  <span className="font-semibold text-slate-900 dark:text-white">
                    {result.team}
                  </span>

                  {!result.eligible && (
                    <div className="mt-1">
                      <span className="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                        Ineligible for ranking
                      </span>
                    </div>
                  )}

                </div>

              </td>


              {/* RUN */}
              <td className="px-4 py-5 text-center text-slate-600 dark:text-slate-300">
                {result.run}
              </td>


              {/* HUMAN RELEVANCE */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center font-semibold text-blue-700 dark:text-blue-300">
                {result.humanRelevance?.toFixed(3) ?? "—"}
              </td>


              {/* HUMAN CONSISTENCY */}
              <td className="px-4 py-5 text-center">
                {result.humanConsistency?.toFixed(3) ?? "—"}
              </td>


              {/* HUMAN VISUAL QUALITY */}
              <td className="px-4 py-5 text-center">
                {result.humanVisualQuality?.toFixed(3) ?? "—"}
              </td>


              {/* VLM RELEVANCE */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center">
                {result.vlmRelevance?.toFixed(3) ?? "—"}
              </td>


              {/* VLM CONSISTENCY */}
              <td className="px-4 py-5 text-center">
                {result.vlmConsistency?.toFixed(3) ?? "—"}
              </td>


              {/* VLM VISUAL QUALITY */}
              <td className="px-4 py-5 text-center">
                {result.vlmVisualQuality?.toFixed(3) ?? "—"}
              </td>


              {/* CLIP-I */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center">
                {result.clipI?.toFixed(4) ?? "—"}
              </td>


              {/* CLIP-T */}
              <td className="px-4 py-5 text-center">
                {result.clipT?.toFixed(4) ?? "—"}
              </td>

            </tr>
          );

        })}

      </tbody>

    </table>

  </div>


  {/* TEAMILLUSIONS RANKING NOTE */}
  {displayResults.some((result) => !result.eligible) && (

    <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/50 dark:bg-red-900/10">

      <div className="flex items-start gap-3">

        <span className="text-xl">
          ⚠️
        </span>

        <div>

          <h5 className="font-semibold text-red-800 dark:text-red-300">
            Ranking Note
          </h5>

          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">

            TeamIllusions is shown for completeness and its evaluation
            scores are reported. However, the run is not considered
            for the official leaderboard ranking because it generated
            four images irrespective of the required number of images
            specified in the mapping file. Therefore, the official
            ranking begins with the next eligible submission.

          </p>

        </div>

      </div>

    </div>

  )}

</div>
        </div>

      </section>

    </div>
  );
};

export default Subtask2;