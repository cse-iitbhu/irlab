import React from "react";

const Subtask1: React.FC = () => {
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
                <li>CLIPScore</li>
                <li>DreamSim</li>
                <li>Sequence Consistency</li>
                <li>Human Evaluation</li>
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
                    <strong>CLIPScore:</strong> Semantic Alignment
                  </li>

                  <li>
                    <strong>DreamSim:</strong> Visual Similarity
                  </li>

                  <li>
                    <strong>Sequence Consistency:</strong> Cross-Panel
                    Consistency
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

        </div>
      </section>
    </div>
  );
};

export default Subtask1;