'use client';
import React, { useEffect, useState } from 'react';
import { FaBrain, FaSmile, FaClock } from 'react-icons/fa';
import ReactMarkdown from "react-markdown";
import withAuth from "@/lib/withAuth";
import { api } from '@/lib/api';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [insightsLoading, setInsightsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const result = await api('/dashboard');
        setData(result);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const result = await api('/dashboard-insights');
        setInsights(result);
      } catch (err) {
        console.error("Dashboard insights fetch error:", err);
      } finally {
        setInsightsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </>
    );
  }

  return (
    <>

      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Your mental wellness overview
          </p>

          {/* If no data */}
          {!data || data.message ? (
            <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">
                No mood check-in found. Start with your first check-in.
              </p>
              <a
                href="/mood-checkin"
                className="inline-block mt-4 bg-[#F99262] text-white px-6 py-2 rounded-lg"
              >
                Daily Mood Check-In
              </a>
            </div>
          ) : (
            <>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* Stress Level */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FaBrain className="text-[#F99262] text-2xl" />
                    <h2 className="text-lg font-medium text-gray-800">
                      Stress Level
                    </h2>
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-gray-700">
                    {data.stressLevel}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Confidence: {(data.confidence * 100).toFixed(0)}%
                  </p>
                </div>

                {/* Mood */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FaSmile className="text-[#F99262] text-2xl" />
                    <h2 className="text-lg font-medium text-gray-800">
                      Mood Today
                    </h2>
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-gray-700">
                    {data.mood}
                  </p>
                </div>

                {/* Last Check-In */}
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-[#F99262] text-2xl" />
                    <h2 className="text-lg font-medium text-gray-800">
                      Last Check-In
                    </h2>
                  </div>
                  <p className="mt-4 text-gray-700">
                    {new Date(data.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Recommendation */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  Suggested Action
                </h2>
                <p className="mt-3 text-gray-600">
                  {data.stressLevel === "Low" &&
                    "Maintain your routine and healthy habits."}
                  {data.stressLevel === "Moderate" &&
                    "Take short breaks and try breathing exercises."}
                  {data.stressLevel === "High" &&
                    "Consider reaching out to support resources or taking a break."}
                </p>
              </div>

              {/* AI Mental Health Report */}
              <div className="mt-10 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  AI Mental Health Report
                </h2>

                {insightsLoading ? (
                  <p className="mt-3 text-gray-500">Generating daily summary...</p>
                ) : insights?.report ? (
                  <div className="mt-3 prose prose-sm max-w-none text-gray-700">
                    <ReactMarkdown>
                      {insights.report}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="mt-3 text-gray-500">
                    Not enough data to generate a report yet.
                  </p>
                )}
              </div>

              {/* AI Suggested Actions */}
              <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">
                  AI Suggested Actions
                </h2>

                {insightsLoading ? (
                  <p className="mt-3 text-gray-500">Preparing suggestions...</p>
                ) : insights?.suggestedActions ? (
                  <div className="mt-3 prose prose-sm max-w-none text-gray-700">
                    <ReactMarkdown>
                      {insights.suggestedActions}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="mt-3 text-gray-500">
                    Suggestions will appear after more check-ins.
                  </p>
                )}
              </div>


              {/* Quick Actions */}
              <div className="mt-8 flex gap-4">
                <a
                  href="/mood-checkin"
                  className="bg-[#F99262] text-white px-6 py-3 rounded-lg"
                >
                  Daily Mood Check-In
                </a>
                <a
                  href="/assistant"
                  className="border border-[#F99262] text-[#F99262] px-6 py-3 rounded-lg"
                >
                  Talk to AI Assistant
                </a>
              </div>
            </>
          )}

          {/* Disclaimer */}
          <p className="mt-10 text-xs text-gray-500 max-w-xl">
            MindLytica is not a medical diagnosis tool. The information provided is
            for self-support and educational purposes only.
          </p>

        </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
