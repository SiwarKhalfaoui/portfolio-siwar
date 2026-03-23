"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/background-beams";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    window.location.href = `mailto:siouarkhalfaoui@gmail.com?subject=Contact from ${name}&body=${message}%0A%0AFrom: ${email}`;
    setSubmitted(true);
  };

  return (
    <div id="contact" className="relative min-h-screen w-full overflow-hidden">
      <BackgroundBeams>
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white font-bold">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm mb-16">
            Open to internship and junior developer opportunities.
          </p>

          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left — Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-4 py-3 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-4 py-3 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your message..."
                  className="rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-4 py-3 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black text-sm md:text-base font-bold px-6 py-3 rounded-lg hover:-translate-y-1 transition-transform duration-300"
              >
                Send →
              </button>
              {submitted && (
                <p className="text-sm text-fuchsia-500 mt-1">Opening your mail client...</p>
              )}
            </motion.form>

            {/* Right — Contact info */}
            <motion.div
              className="flex flex-col gap-6 w-full lg:w-1/2 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <ContactItem icon={<LocationIcon />} label="Ben Arous, Tunis, Tunisia" />
              <ContactItem icon={<EmailIcon />} label="siouarkhalfaoui@gmail.com" href="mailto:siouarkhalfaoui@gmail.com" />
              <ContactItem icon={<PhoneIcon />} label="+216 94 481 862" href="tel:+21694481862" />
              <ContactItem icon={<LinkedinIcon />} label="linkedin.com/in/siwarkhalfaoui" href="https://linkedin.com/in/siwarkhalfaoui" />
              <ContactItem icon={<GithubIcon />} label="github.com/SiwarKhalfaoui" href="https://github.com/SiwarKhalfaoui" />
            </motion.div>
          </div>
        </div>
      </BackgroundBeams>
    </div>
  );
}

const ContactItem = ({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) => {
  const content = (
    <div className="flex items-center gap-3 text-base text-gray-500 dark:text-gray-400 hover:text-fuchsia-500 dark:hover:text-fuchsia-400 transition-colors">
      <span className="text-fuchsia-500">{icon}</span>
      {label}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : <div>{content}</div>;
};

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
  </svg>
);
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
  </svg>
);