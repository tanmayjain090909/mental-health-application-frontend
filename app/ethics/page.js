'use client';
import React from "react";

const EthicsPage = () => {
  return (
    <>

      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">

          <h1 className="text-3xl font-semibold text-gray-800">
            Privacy, Ethics & Limitations
          </h1>
          <p className="text-gray-600 mt-2">
            Our commitment to responsible and ethical AI usage
          </p>

          {/* Privacy */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🔐 Data Privacy
            </h2>
            <p className="text-gray-600">
              All user data is securely stored and accessible only to the
              authenticated user. No personal data is shared with third parties.
              Synthetic data was used for model training to preserve privacy.
            </p>
          </section>

          {/* Ethics */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ⚖️ Ethical Use of AI
            </h2>
            <p className="text-gray-600">
              MindLytica is designed to support self-awareness and reflection. It
              does not provide medical diagnosis or psychological treatment.
              Predictions are probabilistic and should be interpreted with
              caution.
            </p>
          </section>

          {/* Bias */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ⚠️ Bias & Fairness
            </h2>
            <p className="text-gray-600">
              The machine learning model is trained on a limited synthetic
              dataset and may not generalize to all individuals or populations.
              Bias may exist due to subjective self-reported inputs.
            </p>
          </section>

          {/* Limitations */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              📌 System Limitations
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Relies on self-reported user data</li>
              <li>Not a replacement for professional mental health services</li>
              <li>Intended for educational and awareness purposes only</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-gray-500">
            Disclaimer: MindLytica is an academic project and should not be used
            for clinical decision-making or diagnosis.
          </p>

        </div>
      </div>
    </>
  );
};

export default EthicsPage;
