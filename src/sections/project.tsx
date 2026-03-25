"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IoT Device Simulation Platform",
    type: "Final Year Project (PFE) — RIADVICE",
    description:
      "Full-stack platform simulating up to 1,500 IoT devices simultaneously, sending real telemetry to ThingsBoard over MQTT, HTTP, and CoAP. Features a React Flow visual scenario builder, live WebSocket console, bulk device spin-up, and Toxiproxy-powered network fault injection.",
    stack: ["Node.js", "Express", "React", "React Flow", "Chakra UI", "PostgreSQL", "Docker", "MQTT", "ThingsBoard", "Toxiproxy"],
    github: "https://github.com/SiwarKhalfaoui/pfe_project",
  },
{
    title: "FleetCart — E-Commerce Platform",
    type: "Internship — RIADVICE",
    description:
      "Contributed to FleetCart, a production Laravel + Vue.js e-commerce platform. Delivered new features including product badge management and custom unit of measure support, resolved critical bugs, and integrated Google Analytics into the admin panel.",
    stack: ["Laravel 11", "Vue.js 3", "PHP", "MySQL", "Google Analytics"],
    github: null,
  },
  {
    title: "Zumind — AI-Powered Zulip Bot",
    type: "Internship — RIADVICE",
    description:
      "Contributed to Zumind, a production AI bot for Zulip integrating multiple LLM providers (OpenAI, OVHcloud , Stability AI) behind a unified interface. Built with Python/Django, PostgreSQL, and Redis. Migrated the frontend config page from HTML/JS to React/TypeScript using django-webpack-loader. Wrote unit tests covering core bot functionalities.",
    stack: ["Python", "Django", "PostgreSQL", "Redis","RAG", "pgvector",  "OpenAI", "OVHcloud", "Stability AI" , "React", "TypeScript", "Docker"],
    github: null,
  },
  {
    title: "VoyagePlatform — Intelligent Travel Assistant",
    type: "Academic Project — ESPRIT",
    description:
      "Full-stack travel platform centralising transport, accommodation, destinations, guided tours, and reservations in one application. Led the Transport module end-to-end — multi-modal booking (planes, trains, buses, ferries, car rentals) with advanced filters, availability scheduling, and a dedicated admin back-office. Integrated OpenAI and Groq AI for personalised travel recommendations, Stripe for payments, and Google/Facebook OAuth2 for social login.",
    stack: ["Symfony 6.4", "PHP 8.1", "Doctrine ORM", "MySQL", "OpenAI API", "Groq AI", "Stripe", "Twig", "PHPUnit", "PHPStan"],
    github: "https://github.com/SiwarKhalfaoui/Esprit-PIDEV-3A59-2026-VoyagePlatform",
  },
  {
    title: "Enterprise Network Infrastructure",
    type: "Academic Project — ESPRIT",
    description:
      "Designed and simulated a multi-department enterprise network with OSPF mesh routing for high availability. Implemented VPN IPsec tunnels, VLAN segmentation, NAT, ACL security, and pfSense firewall. Automated provisioning and monitoring with Shell scripts and Prometheus + Grafana. Validated via GNS3 simulations on virtual machines.",
    stack: ["GNS3", "pfSense", "OSPF", "VPN IPsec", "VLAN", "NAT", "VirtualBox", "Prometheus", "Grafana", "Shell"],
    github: null,
  },
];

export default function Project() {
  return (
    <div id="projects">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm">
          Things I've built — in internships and at school.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-fuchsia-500/10 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Project type label */}
            <span className="text-xs font-semibold text-fuchsia-500 uppercase tracking-widest">
              {project.type}
            </span>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-fuchsia-500 transition-colors duration-200">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-fuchsia-500 hover:text-fuchsia-400 transition-colors mt-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}