import React, { useState } from "react";

type Result = {
  team: string;
  run: string;
  pmr: number;
  kendall: number;
  spearman: number;
};

type LanguageResults = {
  [key: string]: Result[];
};

const leaderboardData: LanguageResults = {

  // =========================================================
  // HINDI
  // =========================================================

  Hindi: [
    {
      team: "Tasker",
      run: "Run 1",
      pmr: 0.6000,
      kendall: 0.7222,
      spearman: 0.7633,
    },
    {
      team: "Darcarys",
      run: "Run 1",
      pmr: 0.5667,
      kendall: 0.4889,
      spearman: 0.5000,
    },
    {
      team: "Darcarys",
      run: "Run 2",
      pmr: 0.4667,
      kendall: 0.4778,
      spearman: 0.5167,
    },
    {
      team: "Varaprabha",
      run: "Run 2",
      pmr: 0.4000,
      kendall: 0.2111,
      spearman: 0.2133,
    },
    {
      team: "Varaprabha",
      run: "Run 1",
      pmr: 0.3667,
      kendall: 0.0778,
      spearman: 0.0900,
    },
    {
      team: "TeamIllusions",
      run: "Run 1",
      pmr: 0.3000,
      kendall: 0.0778,
      spearman: 0.0633,
    },
    {
      team: "TokenX",
      run: "Run 1",
      pmr: 0.2667,
      kendall: 0.1889,
      spearman: 0.2367,
    },
  ],


  // =========================================================
  // BENGALI
  // =========================================================

  Bengali: [
    {
      team: "Tasker",
      run: "Run 1",
      pmr: 0.6364,
      kendall: 0.7667,
      spearman: 0.7779,
    },
    {
      team: "Darcarys",
      run: "Run 2",
      pmr: 0.5455,
      kendall: 0.6606,
      spearman: 0.6909,
    },
    {
      team: "Darcarys",
      run: "Run 1",
      pmr: 0.4091,
      kendall: 0.6303,
      spearman: 0.7071,
    },
    {
      team: "Varaprabha",
      run: "Run 1",
      pmr: 0.2727,
      kendall: 0.4121,
      spearman: 0.4448,
    },
    {
      team: "TokenX",
      run: "Run 1",
      pmr: 0.2273,
      kendall: 0.2303,
      spearman: 0.2526,
    },
    {
      team: "TeamIllusions",
      run: "Run 1",
      pmr: 0.2273,
      kendall: 0.2091,
      spearman: 0.2208,
    },
    {
      team: "Varaprabha",
      run: "Run 2",
      pmr: 0.1818,
      kendall: 0.2576,
      spearman: 0.3195,
    },
  ],


  // =========================================================
  // TO BE ADDED
  // =========================================================

  English: [
  {
    team: "Tasker",
    run: "Run 1",
    pmr: 0.7667,
    kendall: 0.7778,
    spearman: 0.7833,
  },
  {
    team: "Varaprabha",
    run: "Run 1",
    pmr: 0.3667,
    kendall: 0.3444,
    spearman: 0.3900,
  },
  {
    team: "Darcarys",
    run: "Run 1",
    pmr: 0.3333,
    kendall: 0.3867,
    spearman: 0.4133,
  },
  {
    team: "TokenX",
    run: "Run 1",
    pmr: 0.3000,
    kendall: 0.2511,
    spearman: 0.2867,
  },
  {
    team: "Varaprabha",
    run: "Run 2",
    pmr: 0.3000,
    kendall: 0.1444,
    spearman: 0.1733,
  },
  {
    team: "Darcarys",
    run: "Run 2",
    pmr: 0.2667,
    kendall: 0.2444,
    spearman: 0.2833,
  },
  {
    team: "VisionForge",
    run: "Run 1",
    pmr: 0.2333,
    kendall: 0.0067,
    spearman: -0.0033,
  },
  {
    team: "TeamIllusions",
    run: "Run 1",
    pmr: 0.1667,
    kendall: -0.0356,
    spearman: -0.0400,
  },
],

  Marathi: [
  {
    team: "Tasker",
    run: "Run 1",
    pmr: 0.6000,
    kendall: 0.4822,
    spearman: 0.4933,
  },
  {
    team: "Varaprabha",
    run: "Run 1",
    pmr: 0.4667,
    kendall: 0.4689,
    spearman: 0.4914,
  },
  {
    team: "Varaprabha",
    run: "Run 2",
    pmr: 0.4333,
    kendall: 0.3578,
    spearman: 0.3900,
  },
  {
    team: "Darcarys",
    run: "Run 1",
    pmr: 0.4000,
    kendall: 0.4622,
    spearman: 0.5076,
  },
  {
    team: "TokenX",
    run: "Run 1",
    pmr: 0.4000,
    kendall: 0.3089,
    spearman: 0.3214,
  },
  {
    team: "TeamIllusions",
    run: "Run 1",
    pmr: 0.4000,
    kendall: 0.1222,
    spearman: 0.0929,
  },
  {
    team: "Darcarys",
    run: "Run 2",
    pmr: 0.3667,
    kendall: 0.3378,
    spearman: 0.3657,
  },
],
};
const Subtask3: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Hindi", "Bengali", "Marathi"];

  const results = [...(leaderboardData[selectedLanguage] || [])].sort(
  (a, b) => {
    // Primary metric: PMR
    if (b.pmr !== a.pmr) {
      return b.pmr - a.pmr;
    }

    // First tie-breaker: Kendall's Tau
    if (b.kendall !== a.kendall) {
      return b.kendall - a.kendall;
    }

    // Second tie-breaker: Spearman's Rho
    return b.spearman - a.spearman;
  }
);
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

             Narrative Image Ordering

          </h2>

          {/* USE CASE */}
          <div className="mb-14">

            <h3 className="text-2xl font-bold mb-4">

              Use Case

            </h3>

            <p className="leading-8 text-slate-700 dark:text-slate-300">

              Large collections of illustrated folk stories, archival

              storybooks, and community-contributed children's literature often

              exist as unordered or partially ordered sets of images with

              accompanying text, particularly when digitized from physical

              sources where page order has been lost.

            </p>

            <p className="leading-8 text-slate-700 dark:text-slate-300 mt-5">

              Automatically recovering the correct narrative order of

              illustrations from story text is directly applicable to digital

              archiving, library digitization pipelines, and the organization

              of visual heritage content, a critical need for Indian language

              archives.

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

                <li>✓ Shuffled Set of N Images</li>

                <li>✓ Shuffle Indices</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 text-white p-8 shadow-xl">

              <h3 className="text-2xl font-bold mb-6">

                Output

              </h3>

              <p className="leading-7">

                A permutation of N images representing the predicted narrative

                order as a ranked list of original image indices.

              </p>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 shadow-xl">

              <h3 className="text-2xl font-bold mb-6">

                Evaluation

              </h3>

              <ul className="space-y-3">

                <li>Kendall's τ</li>

                <li>Spearman's ρ</li>

                <li>Perfect Match Rate</li>

              </ul>

            </div>

          </div>

          {/* DETAILED EVALUATION PROTOCOL */}
<div className="mt-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 md:p-8">

  <h4 className="text-xl font-bold mb-4">
    Evaluation Protocol
  </h4>

  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-7">
    Evaluation is performed independently for each story. For a story
    containing <em>n</em> images, the ground-truth and predicted
    sequences are represented using ranks from 1 to <em>n</em>.
    Perfect Match Rate (PMR) measures exact sequence reconstruction,
    while Kendall&apos;s τ and Spearman&apos;s ρ measure partial
    ordering agreement. Kendall&apos;s τ and Spearman&apos;s ρ are
    calculated independently for each story and then macro-averaged
    across all stories, giving equal weight to every story.
  </p>

  <div className="space-y-7">

    {/* PMR */}
    <div>
      <h5 className="font-bold text-lg mb-2">
        Perfect Match Rate (PMR)
      </h5>

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        A story is considered a perfect match only when the complete
        predicted image sequence exactly matches the ground-truth
        sequence. If even one image is assigned an incorrect position,
        the story is not counted as a perfect match. PMR is the
        proportion of stories for which the complete ordering is
        correctly predicted.
      </p>

      <div className="mt-3 rounded-lg bg-white dark:bg-slate-900 p-4 text-center font-mono text-sm md:text-base">
        PMR = Number of perfectly ordered stories / Total number of stories
      </div>
    </div>


    {/* KENDALL'S TAU */}
    <div>
      <h5 className="font-bold text-lg mb-2">
        Kendall&apos;s Tau (τ)
      </h5>

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Kendall&apos;s τ measures pairwise ordering agreement between
        the ground-truth and predicted sequence. For each story, a pair
        of images is concordant when its relative order is the same in
        both sequences and discordant when its relative order is
        reversed.
      </p>

      <div className="mt-3 rounded-lg bg-white dark:bg-slate-900 p-4 text-center font-mono text-sm md:text-base">
        τ = (C − D) / (C + D)
      </div>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        C and D denote the numbers of concordant and discordant image
        pairs, respectively. The score ranges from −1 to 1, where
        1 indicates perfect ordering agreement.
      </p>
    </div>


    {/* SPEARMAN'S RHO */}
    <div>
      <h5 className="font-bold text-lg mb-2">
        Spearman&apos;s Rank Correlation (ρ)
      </h5>

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Spearman&apos;s ρ measures the agreement between the
        ground-truth rank and predicted rank assigned to each image,
        capturing how closely the predicted positions correspond to
        their correct positions in the sequence.
      </p>

      <div className="mt-3 rounded-lg bg-white dark:bg-slate-900 p-4 text-center font-mono text-sm md:text-base">
        ρ = 1 − [6 Σ dᵢ² / n(n² − 1)]
      </div>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        Here, dᵢ is the difference between the ground-truth and
        predicted rank of image i, and n is the number of images in
        the story. The score ranges from −1 to 1, where 1 indicates
        perfect rank agreement.
      </p>
    </div>

  </div>

</div>

          {/* PIPELINE

          <div className="mb-16">

            <h3 className="text-3xl font-bold text-center mb-10">

              Task Pipeline

            </h3>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">

                Story Text

              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">

                Shuffled Images

              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">

                Narrative Reasoning

              </div>

              <div className="text-2xl">→</div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-6 py-4 font-semibold">

                Ordered Sequence

              </div>

            </div>

          </div> */}

          {/* DATASET */}
          <div className="rounded-2xl border border-slate-700 dark:bg-slate-800 shadow-lg p-8 mt-12">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h3 className="text-3xl font-bold dark:text-white">

                  📂 Dataset

                </h3>

                <p className="dark:text-slate-400 mt-2">

                  Download the official datasets for the shared task.

                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-1 gap-8">

              <div className="rounded-xl border border-slate-600 dark:bg-slate-700/40 p-6">

                <div className="space-y-3">

                  <a
                    href="https://drive.google.com/file/d/1qqTLv7ttsb92GuWknKGljiWqZq03SjnR/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
                  >

                    <span className="dark:text-slate-200">English Stories</span>

                    <span className="dark:text-blue-400 font-medium">Download ↗</span>

                  </a>

                  <a
                    href="https://drive.google.com/file/d/1IxBI06IFIiRQ47EtMcdeNoG58rorVhDN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
                  >

                    <span className="dark:text-slate-200">Hindi Stories</span>

                    <span className="dark:text-blue-400 font-medium">Download ↗</span>

                  </a>

                  <a
                    href="https://drive.google.com/file/d/1Txc8w_gE468vamuHaYCj06M-sH5vg5rc/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-600 dark:bg-slate-800 px-4 py-3 transition-all duration-300 dark:hover:bg-slate-700 hover:border-blue-500 hover:shadow-lg"
                  >

                    <span className="dark:text-slate-200">Bengali Stories</span>

                    <span className="dark:text-blue-400 font-medium">Download ↗</span>

                  </a>

                  <a
                    href="https://drive.google.com/file/d/1iyJYIXcAhpH_LZOebUqU6ImjpQST5k7H/view?usp=sharing"
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
          {/* RESULTS */}
<div className="mb-16">
  <div className="text-center mb-10">
    <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-4 py-2 text-sm font-semibold mb-4">
      Official Results
    </div>

    <h3 className="text-3xl md:text-4xl font-bold mb-4">
      Leaderboard
    </h3>

    <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
      Systems are ranked primarily by Perfect Match Rate (PMR).
      Kendall&apos;s τ is used as the first tie-breaking criterion,
      followed by Spearman&apos;s ρ.
    </p>
  </div>

  {/* LANGUAGE TABS */}
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {languages.map((language) => (
      <button
        key={language}
        onClick={() => setSelectedLanguage(language)}
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          selectedLanguage === language
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        }`}
      >
        {language}
      </button>
    ))}
  </div>

  {/* LANGUAGE TITLE */}
  <div className="flex items-center justify-between mb-5">
    <div>
      <h4 className="text-2xl font-bold">
        {selectedLanguage} Results
      </h4>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Narrative Image Ordering
      </p>
    </div>

    {results.length > 0 && (
      <div className="text-sm text-slate-500 dark:text-slate-400">
        {results.length} submitted runs
      </div>
    )}
  </div>

  {/* RESULTS */}
  {results.length > 0 ? (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
      <table className="w-full text-left">
        <thead className="bg-slate-100 dark:bg-slate-700">
          <tr>
            <th className="px-6 py-4 font-bold">
              Rank
            </th>

            <th className="px-6 py-4 font-bold">
              Team
            </th>

            <th className="px-6 py-4 font-bold">
              Run
            </th>

            <th className="px-6 py-4 font-bold text-center">
              PMR ↑
            </th>

            <th className="px-6 py-4 font-bold text-center">
              Kendall&apos;s τ ↑
            </th>

            <th className="px-6 py-4 font-bold text-center">
              Spearman&apos;s ρ ↑
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {results.map((result, index) => (
            <tr
              key={`${result.team}-${result.run}`}
              className={`transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                index === 0
                  ? "bg-amber-50/70 dark:bg-amber-900/10"
                  : ""
              }`}
            >
              {/* RANK */}
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  {index === 0 && (
                    <span className="text-xl">
                      🥇
                    </span>
                  )}

                  {index === 1 && (
                    <span className="text-xl">
                      🥈
                    </span>
                  )}

                  {index === 2 && (
                    <span className="text-xl">
                      🥉
                    </span>
                  )}

                  <span className="font-bold">
                    {index + 1}
                  </span>
                </div>
              </td>

              {/* TEAM */}
              <td className="px-6 py-5">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {result.team}
                </span>
              </td>

              {/* RUN */}
              <td className="px-6 py-5 text-slate-600 dark:text-slate-300">
                {result.run}
              </td>

              {/* PMR */}
              <td className="px-6 py-5 text-center">
                <span
                  className={
                    index === 0
                      ? "font-bold text-blue-600 dark:text-blue-400"
                      : "font-medium"
                  }
                >
                  {result.pmr.toFixed(4)}
                </span>
              </td>

              {/* KENDALL */}
              <td className="px-6 py-5 text-center">
                {result.kendall.toFixed(4)}
              </td>

              {/* SPEARMAN */}
              <td className="px-6 py-5 text-center">
                {result.spearman.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    /* NO RESULTS YET */
    <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 p-12 text-center">
      <div className="text-4xl mb-4">
        📊
      </div>

      <h4 className="text-xl font-bold mb-2">
        Results Coming Soon
      </h4>

      <p className="text-slate-500 dark:text-slate-400">
        The {selectedLanguage} leaderboard will be published here
        after evaluation is complete.
      </p>
    </div>
  )}
</div>

        </div>

      </section>

    </div>

  );

};

export default Subtask3;