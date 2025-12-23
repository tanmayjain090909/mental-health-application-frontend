'use client';
import React, { useState } from 'react';
import withAuth from "@/lib/withAuth";
import { api } from '@/lib/api';

const MoodCheckIn = () => {
    const [form, setForm] = useState({
        mood: '',
        sleepHours: '',
        studyHours: '',
        screenTime: '',
        energyLevel: '',
        academicPressure: '',
        notes: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await api("/mood-checkin", {
            method: "POST",
            body: form,
        });

        if (data.error) {
            alert(data.error);
        } else {
            alert("Check-in saved successfully!");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4 py-12">
            <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100">

                {/* Title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F99262] to-orange-400 rounded-2xl mb-4 shadow-lg">
                        <span className="text-3xl">💭</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Daily Mood Check-In
                    </h1>
                    <p className="text-gray-600">
                        Help us understand how you're feeling today
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Mood */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            How is your mood today?
                        </label>
                        <select
                            name="mood"
                            value={form.mood}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-700 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-white"
                        >
                            <option value="">Select mood</option>
                            <option value="Happy">😊 Happy</option>
                            <option value="Neutral">😐 Neutral</option>
                            <option value="Stressed">😟 Stressed</option>
                            <option value="Anxious">😰 Anxious</option>
                        </select>
                    </div>

                    {/* Sleep */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Hours of sleep last night
                        </label>
                        <input
                            type="number"
                            name="sleepHours"
                            value={form.sleepHours}
                            onChange={handleChange}
                            min="0"
                            max="12"
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                            placeholder="e.g. 7"
                        />
                    </div>

                    {/* Study */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Study hours today
                        </label>
                        <input
                            type="number"
                            name="studyHours"
                            value={form.studyHours}
                            onChange={handleChange}
                            min="0"
                            max="16"
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                            placeholder="e.g. 5"
                        />
                    </div>

                    {/* Screen */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Screen time (hours)
                        </label>
                        <input
                            type="number"
                            name="screenTime"
                            value={form.screenTime}
                            onChange={handleChange}
                            min="0"
                            max="24"
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                            placeholder="e.g. 6"
                        />
                    </div>

                    {/* Energy Level */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Energy level (1–5)
                        </label>
                        <input
                            type="number"
                            name="energyLevel"
                            value={form.energyLevel}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                            placeholder="e.g. 3"
                        />
                    </div>

                    {/* Academic Pressure */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Academic pressure today
                        </label>
                        <select
                            name="academicPressure"
                            value={form.academicPressure}
                            onChange={handleChange}
                            required
                            className="w-full border-2 border-gray-200 rounded-xl p-3 text-gray-700 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-white"
                        >
                            <option value="">Select pressure</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    {/* Notes */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-800 mb-2">
                            Notes (optional)
                        </label>
                        <textarea
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-[#F99262] focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                            placeholder="Exam week, deadlines, etc."
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#F99262] to-orange-400 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                    >
                        Submit Check-In
                    </button>
                </form>

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-500 text-center">
                    This check-in is for self-support only and not a medical assessment.
                </p>
            </div>
        </div>
    );
};

export default withAuth(MoodCheckIn);
