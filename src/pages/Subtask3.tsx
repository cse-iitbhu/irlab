import React from "react";

const Subtask3: React.FC = () => {

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

          {/* METRICS */}
          <div className="mb-14">

            <h3 className="text-3xl font-bold mb-8">

              Evaluation Metrics

            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl border dark:border-slate-700 p-6">

                <h4 className="font-bold text-xl mb-3">

                  Kendall's τ

                </h4>

                <p className="text-slate-600 dark:text-slate-300">

                  Measures ranking correlation between predicted and ground

                  truth image order.

                </p>

              </div>

              <div className="rounded-2xl border dark:border-slate-700 p-6">

                <h4 className="font-bold text-xl mb-3">

                  Spearman's ρ

                </h4>

                <p className="text-slate-600 dark:text-slate-300">

                  Evaluates the monotonic relationship between two rankings.

                </p>

              </div>

              <div className="rounded-2xl border dark:border-slate-700 p-6">

                <h4 className="font-bold text-xl mb-3">

                  PMR

                </h4>

                <p className="text-slate-600 dark:text-slate-300">

                  Perfect Match Rate measures exact sequence recovery.

                </p>

              </div>

            </div>

          </div>

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

        </div>

      </section>

    </div>

  );

};

export default Subtask3;