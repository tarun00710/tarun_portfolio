"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Enterprise Client Management System",
    description:
      "A schema-agnostic client entity system with 10+ dynamic field types and conditional branching, enabling multi-tenant customization for enterprises managing 100,000+ client records.",
    longDescription:
      "Architected a comprehensive client management platform featuring dual-mode component architecture (legacy vs. template-based) with zero migration downtime. Drove frontend performance improvements through tiered GraphQL queries, virtualized scrolling, and lazy loading, improving rendering efficiency and Core Web Vitals for large-scale datasets.",
    tech: ["Next.js 14", "TypeScript", "GraphQL", "Apollo", "Redux", "Material-UI", "Zod"],
    features: [
      "Schema-agnostic entity system",
      "Dynamic field mapping engine",
      "Three-tier permission model",
      "Soft-delete architecture",
    ],
    metrics: {
      fields: "10+",
      clients: "100K+",
      downtime: "Zero",
    },
    image: "/project1.jpg",
    color: "cyan",
  },
  {
    id: 2,
    title: "Healthcare Design System & Platform",
    description:
      "A scalable design system with reusable React components using TailwindCSS, improving consistency and designer-developer collaboration through a Storybook-driven component library.",
    longDescription:
      "Contributed to building a scalable design system improving maintainability and collaboration. Architected Next.js App Router with RSC and Server Actions, driving improvements in Core Web Vitals and time-to-interactive. Integrated GraphQL/Apollo Client with query batching and caching, reducing network requests by 65%.",
    tech: ["React", "Next.js", "TailwindCSS", "Storybook", "GraphQL", "Apollo", "Hasura"],
    features: [
      "Reusable component library",
      "Storybook documentation",
      "Role-based authentication",
      "SSR/SSG hybrid strategy",
    ],
    metrics: {
      requests: "-65%",
      vitals: "Optimized",
      seo: "Improved",
    },
    image: "/project2.jpg",
    color: "purple",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Production applications focused on performance, scalability, and
            exceptional user experience.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image/Preview */}
              <div
                className={`relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className={`aspect-video rounded-2xl overflow-hidden glass border-2 transition-all duration-300 ${
                    hoveredId === project.id
                      ? project.color === "cyan"
                        ? "border-cyan-500/50 glow-cyan"
                        : "border-purple-500/50 glow-purple"
                      : "border-transparent"
                  }`}
                >
                  {/* Placeholder gradient */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      project.color === "cyan"
                        ? "from-cyan-900/50 via-dark-800 to-purple-900/50"
                        : "from-purple-900/50 via-dark-800 to-cyan-900/50"
                    } flex items-center justify-center`}
                  >
                    <div className="text-center p-8">
                      <div
                        className={`text-6xl mb-4 ${
                          project.color === "cyan"
                            ? "text-cyan-400"
                            : "text-purple-400"
                        }`}
                      >
                        {project.id === 1 ? "📊" : "🏥"}
                      </div>
                      <span className="text-gray-400 font-mono text-sm">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating metrics */}
                <div className="absolute -bottom-4 left-4 right-4 flex gap-2 justify-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <span
                      key={key}
                      className="glass px-3 py-1 rounded-full text-xs font-mono text-gray-300"
                    >
                      {key}: <span className="text-cyan-400">{value}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span
                  className={`text-sm font-mono ${
                    project.color === "cyan" ? "text-cyan-400" : "text-purple-400"
                  }`}
                >
                  Featured Project
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.color === "cyan"
                            ? "bg-cyan-400"
                            : "bg-purple-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-dark-600 text-gray-300 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
