'use client';
import React from "react";

const ResourcesPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Mental Wellness Resources
          </h1>
          <p className="text-gray-600 mt-2">
            Helpful tips and resources to support your mental well-being
          </p>

          {/* Section 1: Stress Management */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              🧘 Stress Management
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Practice deep breathing exercises for 5 minutes daily</li>
              <li>Break large tasks into smaller, manageable steps</li>
              <li>Take short breaks between study sessions</li>
              <li>Avoid multitasking when feeling overwhelmed</li>
            </ul>
          </div>

          {/* Section 2: Study & Academic Balance */}
          <div className="bg-white mt-6 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              📖 Study & Academic Balance
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use techniques like Pomodoro (25 min study + 5 min break)</li>
              <li>Create a realistic daily study schedule</li>
              <li>Prioritize tasks based on deadlines and difficulty</li>
              <li>Seek academic help early instead of delaying</li>
            </ul>
          </div>

          {/* Section 3: Sleep & Health */}
          <div className="bg-white mt-6 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              😴 Sleep & Physical Health
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Aim for 7–9 hours of sleep every night</li>
              <li>Avoid screens at least 30 minutes before bedtime</li>
              <li>Maintain consistent sleep and wake times</li>
              <li>Include light physical activity in your routine</li>
            </ul>
          </div>

          {/* Section 4: When to Seek Help */}
          <div className="bg-white mt-6 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              📞 When to Seek Help
            </h2>
            <p className="text-gray-600 mb-3">
              If you consistently feel overwhelmed, anxious, or unable to cope,
              consider reaching out for professional support.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>University or college counseling services</li>
              <li>Trusted faculty members or mentors</li>
              <li>National mental health helplines</li>
            </ul>
          </div>

          {/* Helpline Info */}
          <div className="bg-orange-50 mt-6 p-6 rounded-xl border border-orange-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              🇮🇳 India – Mental Health Helplines
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Kiran (24x7): <strong>1800-599-0019</strong></li>
              <li>• iCall: <strong>9152987821</strong></li>
              <li>• Snehi: <strong>91-9582208181</strong></li>
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-gray-500 max-w-3xl">
            Disclaimer: The resources provided are for educational and
            self-support purposes only. MindLytica does not provide medical or
            psychological diagnosis or treatment.
          </p>

        </div>
      </div>
    </>
  );
};

export default ResourcesPage;
