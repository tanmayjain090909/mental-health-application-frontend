'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ hideBorder = false }) => {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`w-full ${hideBorder ? '' : 'border-b border-gray-200'} px-4 py-3`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image width={200} height={40} src="/images/wellMind_Logo.png" alt="MindLytica logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link href="/dashboard">
              <button className="nav-btn">Dashboard</button>
            </Link>
          </li>
          <li>
            <Link href="/mood-checkin">
              <button className="nav-btn">Mood Check-In</button>
            </Link>
          </li>
          <li>
            <Link href="/assistant">
              <button className="nav-btn">AI Assistant</button>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <button className="nav-btn">History</button>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <button className="nav-btn">Resources</button>
            </Link>
          </li>

          {/* Profile */}
          <li className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Image width={32} height={32} src="/images/profile-user.png" alt="Profile" />
              {status === 'authenticated' && (
                <span className="text-sm">{session?.user?.username}</span>
              )}
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                {status === 'authenticated' ? (
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Log in
                  </Link>
                )}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-center">
          {[
            { label: 'Dashboard', path: '/dashboard' },
            { label: 'Mood Check-In', path: '/mood-checkin' },
            { label: 'AI Assistant', path: '/assistant' },
            { label: 'Resources', path: '/resources' },
          ].map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)}>
              <button className="mobile-btn">{item.label}</button>
            </Link>
          ))}

          {status === 'authenticated' ? (
            <button
              onClick={() => {
                handleSignOut();
                setMenuOpen(false);
              }}
              className="mobile-btn bg-gray-100 text-gray-700"
            >
              Sign out
            </button>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <button className="mobile-btn">Log in</button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
