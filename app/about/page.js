'use client'
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../../components/About";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-light text-gray-900 dark:text-white mb-4">
              About
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
              Educational background, research interests, and academic contributions.
            </p>
          </div>
        </div>
        <About isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}