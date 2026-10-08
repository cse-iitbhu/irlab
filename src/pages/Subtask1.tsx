import React, { useState } from "react";

type Subtask1Result = {
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

type Subtask1LanguageResults = {
  [key: string]: Subtask1Result[];
};

const subtask1Results: Subtask1LanguageResults = {
  English: [
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 2.775,
      humanConsistency: 2.700,
      humanVisualQuality: 3.275,
      vlmRelevance: 2.800,
      vlmConsistency: 1.800,
      vlmVisualQuality: 2.770,
      clipI: 0.7618,
      clipT: 0.5766,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
    {
      team: "VisionForge",
      run: "Run 1",
      humanRelevance: 2.700,
      humanConsistency: 2.250,
      humanVisualQuality: 3.425,
      vlmRelevance: 2.600,
      vlmConsistency: 2.150,
      vlmVisualQuality: 3.550,
      clipI: 0.8496,
      clipT: 0.6286,
      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 2.425,
      humanConsistency: 1.950,
      humanVisualQuality: 3.575,
      vlmRelevance: 2.018,
      vlmConsistency: 1.650,
      vlmVisualQuality: 3.652,
      clipI: 0.7152,
      clipT: 0.5528,
      eligible: true,
    },
    {
      team: "Tasker",
      run: "Run 1",
      humanRelevance: 2.200,
      humanConsistency: 1.400,
      humanVisualQuality: 3.200,
      vlmRelevance: 2.106,
      vlmConsistency: 3.800,
      vlmVisualQuality: 3.165,
      clipI: 0.7598,
      clipT: 0.5721,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.870,
      humanConsistency: 1.500,
      humanVisualQuality: 2.425,
      vlmRelevance: 3.024,
      vlmConsistency: 1.650,
      vlmVisualQuality: 3.385,
      clipI: 0.7032,
      clipT: 0.6003,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.650,
      humanConsistency: 1.400,
      humanVisualQuality: 2.375,
      vlmRelevance: 2.920,
      vlmConsistency: 1.500,
      vlmVisualQuality: 3.850,
      clipI: 0.7047,
      clipT: 0.6256,
      eligible: true,
    },
    // ENGLISH
    {
      team: "NLPFusion",
      run: "Run 1",

      humanRelevance: 1.475,
      humanConsistency: 1.250,
      humanVisualQuality: 3.125,

      vlmRelevance: 2.250,
      vlmConsistency: 3.900,
      vlmVisualQuality: 4.450,

      clipI: 0.9638,
      clipT: 0.5924,

      eligible: true,
    },
  ],

  Hindi: [
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 2.225,
      humanConsistency: 2.275,
      humanVisualQuality: 2.400,
      vlmRelevance: 2.110,
      vlmConsistency: 1.550,
      vlmVisualQuality: 2.620,
      clipI: 0.7542,
      clipT: 0.5996,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.700,
      humanConsistency: 1.250,
      humanVisualQuality: 2.450,
      vlmRelevance: 1.842,
      vlmConsistency: 1.250,
      vlmVisualQuality: 3.279,
      clipI: 0.7181,
      clipT: 0.6268,
      eligible: true,
    },
    // HINDI
    {
      team: "NLPFusion",
      run: "Run 1",

      humanRelevance: 1.400,
      humanConsistency: 1.450,
      humanVisualQuality: 1.975,

      vlmRelevance: 1.540,
      vlmConsistency: 3.350,
      vlmVisualQuality: 3.500,

      clipI: 0.9042,
      clipT: 0.6123,

      eligible: true,
    },
    {
      team: "Tasker",
      run: "Run 1",
      humanRelevance: 1.175,
      humanConsistency: 1.725,
      humanVisualQuality: 1.375,
      vlmRelevance: 1.528,
      vlmConsistency: 1.882,
      vlmVisualQuality: 3.218,
      clipI: 0.8621,
      clipT: 0.5597,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.025,
      humanConsistency: 1.025,
      humanVisualQuality: 1.675,
      vlmRelevance: 1.000,
      vlmConsistency: 1.000,
      vlmVisualQuality: 3.397,
      clipI: 0.6206,
      clipT: 0.4657,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.025,
      humanConsistency: 1.000,
      humanVisualQuality: 2.050,
      vlmRelevance: 1.020,
      vlmConsistency: 1.150,
      vlmVisualQuality: 3.650,
      clipI: 0.5999,
      clipT: 0.5079,
      eligible: true,
    },
  ],

  Bengali: [
    {
      team: "TeamIllusions",
      run: "Run 1",
      humanRelevance: 3.050,
      humanConsistency: 3.000,
      humanVisualQuality: 3.000,
      vlmRelevance: 2.090,
      vlmConsistency: 1.140,
      vlmVisualQuality: 2.600,
      clipI: 0.7493,
      clipT: 0.6007,
      eligible: false,
      note:
        "Not considered for official ranking because the submission generated four images irrespective of the required number specified in the mapping file.",
    },
    // BENGALI
    {
      team: "NLPFusion",
      run: "Run 1",

      humanRelevance: 1.175,
      humanConsistency: 1.125,
      humanVisualQuality: 2.475,

      vlmRelevance: 1.820,
      vlmConsistency: 3.110,
      vlmVisualQuality: 3.770,

      clipI: 0.9133,
      clipT: 0.5893,

      eligible: true,
    },
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.000,
      vlmRelevance: 1.616,
      vlmConsistency: 1.850,
      vlmVisualQuality: 3.564,
      clipI: 0.6891,
      clipT: 0.5702,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.000,
      vlmRelevance: 1.200,
      vlmConsistency: 1.850,
      vlmVisualQuality: 3.552,
      clipI: 0.7275,
      clipT: 0.5120,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.000,
      vlmRelevance: 1.080,
      vlmConsistency: 1.630,
      vlmVisualQuality: 3.540,
      clipI: 0.5427,
      clipT: 0.4735,
      eligible: true,
    },
    {
      team: "Tasker",
      run: "Run 1",
      humanRelevance: 1.000,
      humanConsistency: 1.000,
      humanVisualQuality: 1.000,
      vlmRelevance: 1.075,
      vlmConsistency: 2.150,
      vlmVisualQuality: 2.959,
      clipI: 0.8817,
      clipT: 0.5229,
      eligible: true,
    },
  ],

  Marathi: [
    {
      team: "VaraPrabha",
      run: "Run 1",
      humanRelevance: 1.525,
      humanConsistency: 1.300,
      humanVisualQuality: 1.650,
      vlmRelevance: 1.454,
      vlmConsistency: 1.750,
      vlmVisualQuality: 3.527,
      clipI: 0.7327,
      clipT: 0.5699,
      eligible: true,
    },
    {
      team: "Tasker",
      run: "Run 1",
      humanRelevance: 1.400,
      humanConsistency: 1.875,
      humanVisualQuality: 2.025,
      vlmRelevance: 1.425,
      vlmConsistency: 2.300,
      vlmVisualQuality: 2.925,
      clipI: 0.8730,
      clipT: 0.5845,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 1",
      humanRelevance: 1.150,
      humanConsistency: 1.100,
      humanVisualQuality: 2.525,
      vlmRelevance: 1.100,
      vlmConsistency: 1.800,
      vlmVisualQuality: 3.620,
      clipI: 0.5599,
      clipT: 0.5224,
      eligible: true,
    },
    {
      team: "TokenX",
      run: "Run 2",
      humanRelevance: 1.025,
      humanConsistency: 1.025,
      humanVisualQuality: 2.150,
      vlmRelevance: 1.073,
      vlmConsistency: 1.600,
      vlmVisualQuality: 3.137,
      clipI: 0.5000,
      clipT: 0.5114,
      eligible: true,
    },
  ],
};

const Subtask1: React.FC = () => {
      const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Hindi", "Bengali", "Marathi"];

  const results = subtask1Results[selectedLanguage] || [];

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
             Culturally Grounded Story-to-Image Sequence Generation
          </h2>

          {/* USE CASE */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold mb-4">Use Case</h3>

            <p className="leading-8 text-slate-700 dark:text-slate-300">
              Illustrated storybooks are among the most important tools for
              early childhood literacy, particularly in multilingual and
              low-resource educational settings. In India, a vast collection of
              folk literature, moral fables, and regional narratives exists in
              Hindi, Bengali, and other languages but lacks visual
              representation.
            </p>

            <p className="leading-8 text-slate-700 dark:text-slate-300 mt-5">
              Manually commissioning illustrations is expensive and difficult
              to scale. Automated story illustration can democratize access to
              culturally grounded visual content for children's education,
              digital libraries, and community storytelling.
            </p>
          </div>

          {/* INPUT OUTPUT EVALUATION */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Input</h3>

              <ul className="space-y-4">
                <li>✓ Full Story Text</li>
                <li>✓ Integer N (Number of Images)</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Output</h3>

              <p className="leading-7">
                An ordered sequence of N culturally grounded generated images.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Evaluation</h3>

              <ul className="space-y-3">
                <li>Human Evaluation</li>
                <li>VLM-Based Evaluation</li>
                <li>CLIP-I</li>
                <li>CLIP-T</li>
              </ul>
            </div>

          </div>

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
                Cultural Grounding
              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Image Generation
              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">
                Evaluation
              </div> */}

            {/* </div>
          </div> */}

          {/* METRICS */}
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
                    <strong>VLM-Based Evaluation:</strong> Visual Quality, Relevance, Consistency
                  </li>

                  <li>
                    <strong>CLIP-I:</strong> Visual Similarity across Images
                  </li>

                  <li>
                    <strong>CLIP-T:</strong> Text-to-Image Similarity
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
                  <li>Cross-Panel Consistency</li>
                </ul>
              </div>

            </div>
          </div>

   {/* DATASETS */}
<div className="mt-12 rounded-2xl border border-slate-700 dark:bg-slate-800 p-8 shadow-xl">

  <div className="mb-8">
    <h3 className="text-3xl font-bold dark:text-white">
      📂 Datasets
    </h3>

    <p className="mt-2 dark:text-slate-400">
      Download the official datasets for the shared task.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2">

    {/* Training Data */}
    <div className="rounded-xl border border-slate-600 dark:bg-slate-700/40 p-6">

      <h4 className="mb-5 text-2xl font-semibold dark:text-white">
        Training Data
      </h4>

      <div className="space-y-4">

        <a
          href="https://drive.google.com/file/d/1j19oKrJMqQZt14FVrexiS3KuU_oEyFkm/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            English Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1bUoahhgCYfC-pWfK3CzIcG97vVnIAiwq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            Hindi Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1kHshDkoFPTdzDc6M6SM4BBnjy2ybujin/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            Bengali Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

      </div>
    </div>

    {/* Test Data */}
    <div className="rounded-xl border border-slate-600 dark:bg-slate-700/40 p-6">

      <h4 className="mb-5 text-2xl font-semibold dark:text-white">
        Test Data
      </h4>

      <div className="space-y-4">

        <a
          href="https://drive.google.com/file/d/1o7DovRNsGM8MwGtbFJSYas_SRb7jCsKs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            English Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1vk5ESZVUY6e74KK0chM8hKL4RXvyKkc0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            Hindi Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1oCuuBLGFtCSvfxT1O9CYgPPybER4f3Kt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            Bengali Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

        <a
          href="https://drive.google.com/file/d/1irvR3AJ0ij1LIEAg3J1IiEkHlVarCGV0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-5 py-4 transition-all duration-300 hover:border-blue-500 dark:hover:bg-slate-700 hover:shadow-lg"
        >
          <span className="dark:text-slate-200">
            Marathi Stories
          </span>

          <span className="font-semibold dark:text-blue-400 group-hover:text-blue-300">
            Download ↗
          </span>
        </a>

      </div>

    


    </div>

            </div>
          </div>

{/* ========================================================= */}
{/* SUBTASK 1 RESULTS */}
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
      Subtask 1 Leaderboard
    </h3>

    <p className="max-w-5xl mx-auto text-center text-slate-600 dark:text-slate-300 leading-7">
      Ranking is primarily determined by human evaluation.
      Relevance is considered first, followed by Consistency and
      Visual Quality. If runs are tied across all three human-evaluation
      criteria, VLM-based Relevance, Consistency, and Visual Quality
      are used sequentially as tie-breakers. CLIP-I and CLIP-T are
      reported as supplementary metrics and do not affect the ranking.
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


  {/* RESULT HEADING */}
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">

    <div>
      <h4 className="text-2xl font-bold">
        {selectedLanguage} Results
      </h4>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Culturally Grounded Story-to-Image Sequence Generation
      </p>
    </div>

    <div className="text-sm text-slate-500 dark:text-slate-400">
      {results.length} submitted{" "}
      {results.length === 1 ? "run" : "runs"}
    </div>

  </div>


  {/* RESULTS TABLE */}
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


              {/* HUMAN */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center font-semibold text-blue-700 dark:text-blue-300">
                {result.humanRelevance?.toFixed(3) ?? "—"}
              </td>

              <td className="px-4 py-5 text-center">
                {result.humanConsistency?.toFixed(3) ?? "—"}
              </td>

              <td className="px-4 py-5 text-center">
                {result.humanVisualQuality?.toFixed(3) ?? "—"}
              </td>


              {/* VLM */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center">
                {result.vlmRelevance?.toFixed(3) ?? "—"}
              </td>

              <td className="px-4 py-5 text-center">
                {result.vlmConsistency?.toFixed(3) ?? "—"}
              </td>

              <td className="px-4 py-5 text-center">
                {result.vlmVisualQuality?.toFixed(3) ?? "—"}
              </td>


              {/* CLIP */}
              <td className="border-l border-slate-200 dark:border-slate-700 px-4 py-5 text-center">
                {result.clipI?.toFixed(4) ?? "—"}
              </td>

              <td className="px-4 py-5 text-center">
                {result.clipT?.toFixed(4) ?? "—"}
              </td>

            </tr>
          );

        })}

      </tbody>

    </table>

  </div>


  {/* TEAMILLUSIONS NOTE */}
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

            TeamIllusions is shown for completeness and its
            evaluation scores are reported. However, the run is not
            considered for the official leaderboard ranking because
            it generated four images irrespective of the required
            number of images specified in the mapping file.
            Therefore, the official ranking begins with the next
            eligible submission.

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

export default Subtask1;