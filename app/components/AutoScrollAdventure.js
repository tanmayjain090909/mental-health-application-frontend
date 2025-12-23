"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AutoScrollWellness({ padding }) {
  const slides = [
    {
      img: "/images/mood.jpg",
      title: "Daily Mood Check-Ins",
      desc: "Quick 2-minute check-ins to log mood, sleep quality, energy levels, and academic pressure. Track patterns that impact your mental well-being over time.",
    },
    {
      img: "/images/ml.png",
      title: "ML-Based Stress Prediction",
      desc: "Our machine learning model analyzes your habits and predicts stress levels with confidence scores—helping you take action before burnout hits.",
    },
    {
      img: "/images/chat.png",
      title: "Compassionate AI Assistant",
      desc: "Chat with an ethical AI trained to support student mental health. Get empathetic, evidence-based guidance personalized to your stress patterns.",
    },
    {
      img: "/images/privacy.webp",
      title: "Privacy-First Wellness Platform",
      desc: "Your data is encrypted, never shared, and always under your control. Designed with responsible AI principles at its core.",
    },
  ];

  return (
    <div className="p-5 flex items-center justify-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className={`bg-[#F7FAFC] w-full ${padding} min-h-[600px] flex flex-col gap-12 rounded-2xl overflow-hidden items-center justify-center`}
            >
              {/* Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                height={1000}
                width={1000}
                sizes="px"
                className="rounded-2xl object-cover"
                priority={i === 0}
              />

              {/* Text */}
              <div className="flex flex-col text-center max-w-2xl px-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h1>
                <p className="text-gray-600 text-lg">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
