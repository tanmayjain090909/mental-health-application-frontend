import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* About */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">MindLytica</h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            MindLytica is an AI-powered mental wellness assistant designed to help
            students track stress, reflect on daily habits, and improve
            self-awareness in an ethical and responsible way.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-6">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/mood-checkin" className="hover:underline">
            Mood Check-In
          </Link>
          <Link href="/history" className="hover:underline">
            History
          </Link>
          <Link href="/resources" className="hover:underline">
            Resources
          </Link>
          <Link href="/ethics" className="hover:underline">
            Privacy & Ethics
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} MindLytica. For educational purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
