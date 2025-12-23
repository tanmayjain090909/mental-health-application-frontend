'use client';
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import FeatureCard from "@/app/components/FeatureCard";


export default function HomePage() {
  const { data: session } = useSession();

  return (
    <>
      <main className="bg-gradient-to-b from-orange-50 via-white to-white">

        {/* ================= HERO SECTION ================= */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-800">
              🎓 Built by students, for students
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-orange-700">
              MindLytica
            </h1>
            
            <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-3xl font-medium">
              Your personal AI companion for mental wellness
            </p>
            
            <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl">
              Track stress patterns, understand your habits, and build better self-awareness 
              with machine learning and compassionate AI support.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center">
              {session ? (
                <>
                  <Link href="/dashboard">
                    <button className="bg-[#F99262] hover:bg-[#e8814d] transition-colors text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                      Go to Dashboard
                    </button>
                  </Link>
                  <Link href="/assistant">
                    <button className="border-2 border-[#F99262] text-[#F99262] hover:bg-orange-50 transition-colors px-8 py-4 rounded-xl font-semibold">
                      Talk to AI Assistant
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="bg-[#F99262] hover:bg-[#e8814d] transition-colors text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                      Get Started Free
                    </button>
                  </Link>
                  <Link href="/resources">
                    <button className="border-2 border-[#F99262] text-[#F99262] hover:bg-orange-50 transition-colors px-8 py-4 rounded-xl font-semibold">
                      Explore Resources
                    </button>
                  </Link>
                </>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                ✓ 100% Private
              </span>
              <span className="flex items-center gap-2">
                ✓ Non-Clinical
              </span>
              <span className="flex items-center gap-2">
                ✓ Evidence-Based
              </span>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="py-16 bg-gradient-to-r from-orange-100 to-orange-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#F99262]">5+</div>
                <div className="text-gray-700 mt-2">Key Wellness Metrics</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F99262]">AI</div>
                <div className="text-gray-700 mt-2">Powered Insights</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F99262]">24/7</div>
                <div className="text-gray-700 mt-2">Available Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#F99262]">100%</div>
                <div className="text-gray-700 mt-2">Privacy Protected</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="min-h-screen px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Comprehensive Mental Wellness Support
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Combining cutting-edge machine learning with empathetic AI to help you 
                understand and manage your mental well-being
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="📝 Daily Mood Check-In"
                desc="Log your mood, sleep quality, study hours, energy levels, and academic pressure. Track patterns over time to identify what affects your mental state."
              />
              <FeatureCard
                title="🤖 ML-Based Stress Prediction"
                desc="Our machine learning model analyzes your daily habits and predicts stress levels with confidence scores, helping you stay ahead of burnout."
              />
              <FeatureCard
                title="📊 Interactive Dashboard"
                desc="Visualize your wellness journey with beautiful charts and graphs. See trends, identify triggers, and celebrate progress over days, weeks, and months."
              />
              <FeatureCard
                title="💬 Compassionate AI Assistant"
                desc="Chat with an ethical AI that understands your stress patterns and provides supportive, evidence-based guidance tailored to student life."
              />
              <FeatureCard
                title="📚 Curated Resources"
                desc="Access a library of mental health resources, study techniques, stress management tips, and campus support information."
              />
              <FeatureCard
                title="🔐 Privacy First Design"
                desc="Your data is encrypted, never shared, and you maintain complete control. Built with ethical AI principles and responsible design at its core."
              />
              <FeatureCard
                title="📈 Progress Tracking"
                desc="Set personal wellness goals and track your progress. Celebrate small wins and see how your habits evolve over time."
              />
              <FeatureCard
                title="🎯 Personalized Insights"
                desc="Receive customized recommendations based on your unique patterns, helping you discover what works best for your mental wellness."
              />
              <FeatureCard
                title="⚡ Quick Check-Ins"
                desc="Simple, fast daily entries take less than 2 minutes. No overwhelming forms—just the essentials to track your well-being."
              />
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                How MindLytica Works
              </h2>
              <p className="text-xl text-gray-600">
                A simple, science-backed approach to mental wellness tracking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">
                  1️⃣
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Check-In Daily</h3>
                <p className="text-gray-600 text-sm">
                  Submit your mood, sleep, and study habits in under 2 minutes
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">
                  2️⃣
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Secure Processing</h3>
                <p className="text-gray-600 text-sm">
                  Your data is encrypted and processed with privacy-first technology
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">
                  3️⃣
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">AI Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Machine learning models predict stress levels and identify patterns
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">
                  4️⃣
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Visual Insights</h3>
                <p className="text-gray-600 text-sm">
                  View trends and patterns through interactive charts and graphs
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl mb-4">
                  5️⃣
                </div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Get Support</h3>
                <p className="text-gray-600 text-sm">
                  Receive personalized guidance from our compassionate AI assistant
                </p>
              </div>
            </div>

            <div className="mt-16 bg-orange-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                The Science Behind MindLytica
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
                Our approach combines established psychological research on stress and well-being 
                with modern machine learning techniques. We track evidence-based indicators like 
                sleep quality, mood patterns, and lifestyle factors that research has shown correlate 
                with mental wellness.
              </p>
              <p className="text-sm text-gray-600 text-center">
                All predictions are probabilistic and designed for self-awareness, not diagnosis.
              </p>
            </div>

            {!session && (
              <div className="mt-12 text-center">
                <Link href="/signup">
                  <button className="bg-[#F99262] hover:bg-[#e8814d] transition-colors text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                    Start Your Wellness Journey Today
                  </button>
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  No credit card required • Free forever
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= WHY STUDENTS CHOOSE US ================= */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Why Students Choose MindLytica
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Built for Student Life
                    </h3>
                    <p className="text-gray-600">
                      Designed specifically for the unique stressors of academic life—exams, 
                      deadlines, social pressures, and the transition to independence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Learn About Yourself
                    </h3>
                    <p className="text-gray-600">
                      Gain deeper self-awareness by understanding your patterns, triggers, 
                      and what truly affects your mental well-being.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    ⏰
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Quick & Easy
                    </h3>
                    <p className="text-gray-600">
                      No time-consuming therapy sessions or complicated apps. Just 2 minutes 
                      a day to check in and track your wellness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🤝
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Non-Judgmental Support
                    </h3>
                    <p className="text-gray-600">
                      Our AI assistant provides compassionate, unbiased support without 
                      the fear of judgment or stigma.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Completely Free
                    </h3>
                    <p className="text-gray-600">
                      No subscriptions, no hidden costs. Mental wellness support should 
                      be accessible to every student.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                    🔒
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      Your Data, Your Control
                    </h3>
                    <p className="text-gray-600">
                      Complete privacy and security. Your personal information stays yours—
                      we never share or sell your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ETHICS & RESPONSIBILITY ================= */}
        <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-orange-100">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                  <span className="text-4xl">⚕️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Commitment to Ethics & Safety
                </h2>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Educational Purpose Only</h3>
                    <p>
                      MindLytica is an academic project designed for self-awareness and education. 
                      It does not provide medical diagnosis, treatment, or replace professional mental health services.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">🏥</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">When to Seek Professional Help</h3>
                    <p>
                      If you're experiencing severe distress, thoughts of self-harm, or mental health 
                      crisis, please contact a mental health professional, campus counseling services, 
                      or crisis helpline immediately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">🔬</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Evidence-Based Approach</h3>
                    <p>
                      Our models are trained on established psychological research and validated metrics. 
                      All predictions include confidence scores and are presented as probabilities, not certainties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Responsible AI Design</h3>
                    <p>
                      We've built safeguards into our AI to ensure it provides supportive, ethical guidance 
                      and always encourages professional help when appropriate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                <p className="text-sm text-gray-700 text-center">
                  <strong>Crisis Resources:</strong> If you need immediate help, contact your campus 
                  counseling center or call the National Suicide Prevention Lifeline at 988.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        {!session && (
          <section className="px-6 py-20 bg-gradient-to-r from-orange-100 to-orange-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Take Control of Your Mental Wellness?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join students who are building better self-awareness and healthier habits 
                with MindLytica.
              </p>
              <Link href="/signup">
                <button className="bg-[#F99262] hover:bg-[#e8814d] transition-colors text-white px-12 py-5 rounded-xl font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                  Get Started Free Today
                </button>
              </Link>
              <p className="mt-6 text-sm text-gray-600">
                Takes less than 60 seconds to set up • No credit card required
              </p>
            </div>
          </section>
        )}

      </main>
    </>
  );
}