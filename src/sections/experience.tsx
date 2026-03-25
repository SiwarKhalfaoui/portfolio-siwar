"use client";

import React from "react";
import { Timeline } from "@/components/timeline";

const experiences = [
  {
    date: "Oct 2025 – Jan 2026",
    title: "Full-Stack Developer Intern",
    company: "RIADVICE",
    project: "FleetCart (Laravel 11 / Vue.js 3)",
    stack: ["Laravel 11", "Vue.js 3", "PHP", "MySQL", "Google Tag Manager"],
   bullets: [
      {
        bold: "Feature development:",
        rest: " implemented product badge management and custom unit of measure support across the product and order modules.",
      },
      {
        bold: "Bug fixing & optimization:",
        rest: " resolved critical issues, improving platform stability and UI consistency.",
      },
      {
        bold: "Analytics:",
        rest: " integrated Google Analytics settings into the admin panel.",
      },
    ],
  },
  {
    date: "Jun 2025 – Sep 2025",
    title: "AI Developer Intern",
    company: "RIADVICE",
    project: "Zumind — AI-Powered Zulip Bot",
    stack: ["Python", "Django", "PostgreSQL", "Redis", "OpenAI", "OVHcloud", "Stability AI" , "React", "TypeScript", "Docker"],
    bullets: [
      {
        bold: "Multi-provider AI bot:",
        rest: " contributed to Zumind, a production Zulip bot integrating OpenAI , Stability AI and OVHcloud behind a unified interface.",
      },
      {
        bold: "Frontend migration:",
        rest: " refactored the config page to React/TypeScript, unified with the help page using django-webpack-loader.",
      },
      {
        bold: "Testing:",
        rest: " wrote unit tests covering core bot functionalities.",
      },
    ],
  },
  {
    date: "Feb 2025 – Jun 2025",
    title: "Full-Stack Developer — PFE",
    company: "RIADVICE",
    project: "IoT Device Simulation Platform",
    stack: [
      "Node.js",
      "Express",
      "React",
      "Chakra UI",
      "PostgreSQL",
      "Docker Compose",
      "MQTT",
      "ThingsBoard",
      "Toxiproxy",
    ],
    bullets: [
      {
        bold: "Simulation engine:",
        rest: " designed a system supporting 1,500 simultaneous virtual IoT devices — traffic generation and network condition simulation via Toxiproxy.",
      },
      {
        bold: "Backend:",
        rest: " built a REST API (Node.js/Express), dynamic device orchestration, PostgreSQL persistence, containerized with Docker Compose.",
      },
      {
        bold: "Frontend & monitoring:",
        rest: " integrated ThingsBoard for real-time monitoring and developed the frontend (React + Chakra UI) for device configuration and scenario building.",
      },
    ],
  },
];

// Build Timeline-compatible data from the experiences array
const timelineData = experiences.map((exp) => ({
  title: exp.date,
  content: (
    <div className="flex flex-col gap-4">
      {/* Title + Company */}
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
          {exp.title}
        </h3>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
          {exp.company} — <span className="italic">{exp.project}</span>
        </p>
      </div>

      {/* Stack badges */}
      <div className="flex flex-wrap gap-2">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-950/40 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-200 dark:border-fuchsia-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2">
        {exp.bullets.map((b, j) => (
          <li
            key={j}
            className="flex items-start gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400"
          >
            <span className="mt-1 shrink-0 text-fuchsia-500">▸</span>
            <span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {b.bold}
              </span>
              {b.rest}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ),
}));

export default function Experience() {
  return (
    <div id="experience">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
          Experience
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm">
          Where I've worked and what I built there.
        </p>
      </div>

      <Timeline data={timelineData} />
    </div>
  );
}