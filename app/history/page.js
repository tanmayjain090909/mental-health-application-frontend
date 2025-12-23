'use client';
import React, { useEffect, useState } from "react";
import withAuth from "@/lib/withAuth";
import { api } from '@/lib/api';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const stressMap = {
  Low: 1,
  Moderate: 2,
  High: 3,
};

const HistoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api("/history")
      .then((result) => {
        setData(result || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-gray-500">Loading history...</p>
        </div>
      </>
    );
  }

  // Graph Data
  const chartData = {
    labels: data.map((d) =>
      new Date(d.createdAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Stress Level",
        data: data.map((d) => stressMap[d.stressLevel]),
        fill: false,
        borderWidth: 2,
      },
    ],
  };

  return (
    <>

      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            Mood & Stress History
          </h1>
          <p className="text-gray-600 mt-1">
            Track your mental wellness over time
          </p>

          {/* Graph */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Stress Trend
            </h2>
            {data.length === 0 ? (
              <p className="text-gray-500">No data available.</p>
            ) : (
              <Line data={chartData} />
            )}
            <p className="text-xs text-gray-500 mt-3">
              Low = 1, Moderate = 2, High = 3
            </p>
          </div>

          {/* Table */}
          <div className="bg-white mt-8 p-6 rounded-xl shadow-sm overflow-x-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Check-In History
            </h2>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b text-left text-gray-600">
                  <th className="py-2">Date</th>
                  <th>Mood</th>
                  <th>Stress</th>
                  <th>Sleep (hrs)</th>
                  <th>Study (hrs)</th>
                  <th>Screen (hrs)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id} className="border-b text-gray-700">
                    <td className="py-2">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td>{item.mood}</td>
                    <td>{item.stressLevel}</td>
                    <td>{item.sleepHours}</td>
                    <td>{item.studyHours}</td>
                    <td>{item.screenTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-gray-500 max-w-xl">
            The history shown is for self-reflection and educational purposes
            only and should not be considered a medical assessment.
          </p>

        </div>
      </div>
    </>
  );
};

export default withAuth(HistoryPage);
