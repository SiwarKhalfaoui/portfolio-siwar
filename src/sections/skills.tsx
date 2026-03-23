"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { motion } from "framer-motion";

import logoReact from "@/assets/skills/logo-react.svg";
import logoNode from "@/assets/skills/logo-node.svg";
import logoExpress from "@/assets/skills/logo-express.svg";
import ts from "@/assets/skills/ts.svg";
import logoVue from "@/assets/skills/logo-vue.svg";
import logoPython from "@/assets/skills/logo-python.svg";
import logoDjango from "@/assets/skills/logo-django.svg";
import logoLaravel from "@/assets/skills/logo-laravel.svg";
import logoDocker from "@/assets/skills/logo-docker.svg";
import logoPostgres from "@/assets/skills/logo-postgres.svg";
import logoNextjs from "@/assets/skills/logo-nextjs.svg";

const scrollLogos = [
  logoReact, logoNode, logoExpress, ts,
  logoVue, logoPython, logoDjango, logoLaravel,
  logoDocker, logoPostgres, logoNextjs,
];

const skillCategories = [
  {
    title: "Frontend",
    items: [
      "React · React Flow · Next.js",
      "Vue.js · TypeScript · JavaScript (ES6+)",
      "Chakra UI · Tailwind CSS · Bootstrap",
      "Redux Toolkit · React Hook Form",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js · Express.js",
      "Django (Python) · Laravel (PHP) · Symfony",
      "REST APIs · WebSockets · Socket.io",
      "Sequelize ORM · JWT · Rate limiting",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL · MySQL",
      "pgvector (vector embeddings)",
      "Sequelize ORM",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: [
      "Docker · Docker Compose",
      "Toxiproxy (network fault injection)",
      "Prometheus · Grafana",
      "pfSense · VPN IPsec · GNS3",
    ],
  },
  {
    title: "AI & Emerging Tech",
    items: [
      "LangChain · RAG pipelines",
      "pgvector · semantic search",
      "OpenAI · OVHcloud · Stability AI",
      "IoT: MQTT · CoAP · ThingsBoard",
    ],
  },
  {
    title: "Tools & Methods",
    items: [
      "Git · GitHub · Postman · Swagger",
      "Agile / Scrum · Jira",
      "Shell scripting",
      "Technical specification writing",
    ],
  },
];

const aboutParagraphs = [
  <>
    Hi, <span className="font-semibold dark:text-white">I'm Siwar</span> — a
    Full Stack Developer and 3rd-year Engineering student at{" "}
    <span className="font-semibold dark:text-white">
      ESPRIT School of Engineering
    </span>
    , based in Tunis, Tunisia.
  </>,
  <>
    I care about building software that{" "}
    <span className="font-semibold dark:text-white">actually works well</span>{" "}
    — not just software that compiles. That means clean architecture, readable
    code, and thinking through the user's experience before writing the first
    line.
  </>,
  <>
    I'm comfortable{" "}
    <span className="font-semibold dark:text-white">
      across the entire stack
    </span>{" "}
    — from designing and building APIs to crafting responsive interfaces. I
    adapt quickly to new environments and have delivered across multiple
    paradigms, from real-time systems to AI-integrated platforms.
  </>,
  <>
    What drives me is{" "}
    <span className="font-semibold dark:text-white">
      solving the right problem
    </span>
    , not just the obvious one. I ask why before I ask how, and I'm not
    satisfied until the solution is both correct and maintainable.
  </>,
  <>
    <span className="font-semibold dark:text-white">Languages: </span>
    Arabic (native) · English (fluent) · French (fluent)
  </>,
];

export default function Skills() {
  return (
    <div id="skills">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
          What I do
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm">
          Technologies I work with & skills I bring to a team.
        </p>
      </div>

      <div className="relative w-[96vw] max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <InfiniteMovingCards logos={scrollLogos} direction="right" />

        <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 align-center justify-between pt-20">

          {/* Left — About */}
          <div className="flex flex-col gap-5 w-full lg:w-[45%] text-lg md:text-xl text-gray-500 dark:text-gray-300">
            {aboutParagraphs.map((paragraph, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {paragraph}
              </motion.div>
            ))}
          </div>

          {/* Right — Skills grid */}
          <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-3 text-base md:text-lg">
                  {category.title}
                </div>
                <ul className="flex flex-col gap-2">
                  {category.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.08 + j * 0.04 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckIcon = () => (
  <svg
    className="shrink-0 w-3.5 h-3.5 mt-1 text-fuchsia-500 dark:text-fuchsia-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 12"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5.917 5.724 10.5 15 1.5"
    />
  </svg>
);