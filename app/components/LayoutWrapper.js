"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SessionWrapper from "@/app/components/SessionWrapper";
import DesignerLoader from "@/app/components/DesignerLoader";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const allowedPaths = ["/login", "/signup"];

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  // Initial page load
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  // On route change
  useEffect(() => {
    if (!allowedPaths.includes(pathname)) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading && !allowedPaths.includes(pathname)) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      >
        <DesignerLoader />
      </motion.div>
    );
  }

  return (
      <SessionWrapper>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!allowedPaths.includes(pathname) && <Navbar />}
              {children}
              {!allowedPaths.includes(pathname) && <Footer />}
              <ToastContainer />
            </motion.div>
          </AnimatePresence>
      </SessionWrapper>
  );
}
