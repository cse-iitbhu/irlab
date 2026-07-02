import React from "react";

const Subtask2: React.FC = () => {
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
                <li>CLIPScore</li>
                <li>Anchor Consistency</li>
                <li>Human Evaluation</li>
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
                    <strong>CLIPScore:</strong> Semantic Alignment
                  </li>

                  <li>
                    <strong>Anchor Consistency Score:</strong> Average
                    DreamSim similarity between generated images and the
                    anchor image.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border dark:border-slate-700 p-6">
                <h4 className="text-xl font-bold mb-4">
                  Human Evaluation
                </h4>

                <ul className="space-y-3">
                  <li>Cultural Alignment</li>
                  <li>Narrative Relevance</li>
                  <li>Anchor Adherence</li>
                </ul>
              </div>

            </div>
          </div>

                    {/* DATASETS */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-8 mt-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  📂 Datasets
                </h3>
                <p className="text-gray-600 mt-2">
                  Download the official datasets for the shared task.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Training */}
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-5">
                  Training Data
                </h4>

                <div className="space-y-3">

                  <a
                    href="https://drive.google.com/file/d/1j19oKrJMqQZt14FVrexiS3KuU_oEyFkm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
                  >
                    <span>English Stories</span>
                    <span className="text-blue-600 font-medium">Download ↗</span>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1bUoahhgCYfC-pWfK3CzIcG97vVnIAiwq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
                  >
                    <span>Hindi Stories</span>
                    <span className="text-blue-600 font-medium">Download ↗</span>
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1kHshDkoFPTdzDc6M6SM4BBnjy2ybujin/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
                  >
                    <span>Bengali Stories</span>
                    <span className="text-blue-600 font-medium">Download ↗</span>
                  </a>

                </div>
              </div>

              {/* Test */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-5">
                  Test Data
                </h4>

                <div className="flex items-center justify-center h-48 rounded-lg border-2 border-dashed border-gray-300 bg-white">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🔒</p>
                    <p className="font-medium text-gray-700">
                      To be released
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      The test set will be released soon.
                    </p>
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

export default Subtask2;