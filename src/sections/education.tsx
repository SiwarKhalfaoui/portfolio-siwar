"use client";

import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Cycle d'ingénieur — Software Engineering",
    school: "ESPRIT School of Engineering",
    location: "Tunis, Tunisia",
    date: "2025 – 2028 · In progress",
    description:
      "Engineering degree in software engineering. Coursework covers software architecture, distributed systems, DevOps, algorithms, and project management.",
    link: "https://esprit.tn",
  },
  {
    degree: "Bachelor's — Computer Systems Engineering",
    school: "Faculté des Sciences de Tunis",
    location: "Tunis, Tunisia",
    date: "2022 – 2025",
    description:
      "Bachelor's degree in computer systems engineering. Foundations in programming, networking, databases, operating systems, and web development.",
    link: "https://fst.rnu.tn",
  },
];

export default function Education() {
  return (
    <div id="education">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
          Education
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm">
          Academic background and qualifications.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.a
            key={i}
            href={edu.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-3 hover:shadow-xl hover:shadow-fuchsia-500/10 hover:border-fuchsia-300 dark:hover:border-fuchsia-700 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 p-2 rounded-lg bg-fuchsia-50 dark:bg-fuchsia-950/40 border border-fuchsia-200 dark:border-fuchsia-800">
                <GraduationCapIcon />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                  {edu.degree}
                </h3>
                <p className="text-sm text-fuchsia-500 dark:text-fuchsia-400 font-medium">
                  {edu.school}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {edu.location} · {edu.date}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {edu.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

const GraduationCapIcon = () => (
  <svg
    className="w-5 h-5 text-fuchsia-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);