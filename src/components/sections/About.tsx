"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Unolo",
      role: "Software Engineer II",
      period: "May 2025 – Present",
      tech: "Next.js 14, TypeScript, GraphQL, Apollo, Redux, Material-UI, Zod",
      highlights: [
        "Architected schema-agnostic client entity system with 10+ dynamic field types",
        "Designed dual-mode component architecture with zero migration downtime",
        "Drove frontend performance via tiered GraphQL queries & virtualized scrolling",
      ],
    },
    {
      company: "GeekyAnts",
      role: "Software Engineer II",
      period: "June 2022 – Nov 2024",
      tech: "React, Next.js, TailwindCSS, GraphQL, Apollo, Storybook, Hasura",
      highlights: [
        "Built scalable design system with Storybook-driven component library",
        "Architected Next.js App Router with RSC for improved Core Web Vitals",
        "Integrated GraphQL/Apollo with query batching, reducing network requests by 65%",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Frontend Engineer obsessed with performance, pixel-perfect UIs, and
            leveraging AI to ship faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Who I am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a Frontend Engineer with <strong>3+ years</strong> of experience
                building production React/Next.js applications at startups.
                I focus on Core Web Vitals optimization, component architecture,
                and shipping performant UIs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy code reviews, maintaining code quality, and have a strong
                attention to design detail with Figma-to-code accuracy. I leverage
                AI tools like <span className="text-purple-400">Claude</span>,{" "}
                <span className="text-purple-400">ChatGPT</span>, and{" "}
                <span className="text-purple-400">Copilot</span> to prototype
                faster and accelerate delivery.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                What drives me
              </h3>
              <ul className="space-y-3">
                {[
                  "Chasing perfect Lighthouse scores",
                  "Noticing when spacing is off or animations feel janky",
                  "Building accessible, performant experiences",
                  "Learning new technologies and patterns",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {exp.company}
                  </h4>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-purple-400 text-sm mb-2">{exp.role}</p>
                <p className="text-xs text-gray-500 font-mono mb-4">{exp.tech}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
