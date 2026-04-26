"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "cyan",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "Redux", icon: "🔄" },
    ],
  },
  {
    title: "Backend & APIs",
    color: "purple",
    skills: [
      { name: "GraphQL", icon: "◈" },
      { name: "Node.js", icon: "🟢" },
      { name: "Apollo", icon: "🚀" },
      { name: "SQL", icon: "🗄️" },
      { name: "MongoDB", icon: "🍃" },
    ],
  },
  {
    title: "Performance",
    color: "blue",
    skills: [
      { name: "Web Vitals", icon: "⚡" },
      { name: "Lighthouse", icon: "🏠" },
      { name: "Bundling", icon: "📦" },
      { name: "SSR/SSG", icon: "🖥️" },
      { name: "DevTools", icon: "🔧" },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "green",
    skills: [
      { name: "Git", icon: "🔀" },
      { name: "Storybook", icon: "📖" },
      { name: "Figma", icon: "🎯" },
      { name: "AI Tools", icon: "🤖" },
      { name: "CI/CD", icon: "♾️" },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; glow: string; border: string }> = {
  cyan: {
    bg: "from-cyan-500/20 to-cyan-600/10",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/30",
    border: "border-cyan-500/30 group-hover:border-cyan-400/60",
  },
  purple: {
    bg: "from-purple-500/20 to-purple-600/10",
    text: "text-purple-400",
    glow: "group-hover:shadow-purple-500/30",
    border: "border-purple-500/30 group-hover:border-purple-400/60",
  },
  blue: {
    bg: "from-blue-500/20 to-blue-600/10",
    text: "text-blue-400",
    glow: "group-hover:shadow-blue-500/30",
    border: "border-blue-500/30 group-hover:border-blue-400/60",
  },
  green: {
    bg: "from-emerald-500/20 to-emerald-600/10",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/30",
    border: "border-emerald-500/30 group-hover:border-emerald-400/60",
  },
};

function SkillIcon({
  skill,
  color,
  index
}: {
  skill: { name: string; icon: string };
  color: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 180 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
        className={`
          relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl
          bg-gradient-to-br ${colorMap[color].bg}
          border ${colorMap[color].border}
          shadow-lg ${colorMap[color].glow}
          group-hover:shadow-xl
          transition-all duration-300
          flex items-center justify-center
          backdrop-blur-sm
        `}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 flex items-center justify-center backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-2xl sm:text-3xl filter drop-shadow-lg">
            {skill.icon}
          </span>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-dark-700"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <span className={`text-xs sm:text-sm font-semibold ${colorMap[color].text}`}>
            {skill.name}
          </span>
        </div>

        {/* 3D effect layers */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </motion.div>

      {/* Label */}
      <p className="text-center mt-1.5 text-[10px] sm:text-xs text-gray-400 font-medium truncate">
        {skill.name}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I use to build fast, scalable, and beautiful applications.
            <span className="block text-sm text-gray-500 mt-2">Hover to flip!</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3
                className={`text-lg font-semibold mb-6 ${colorMap[category.color].text} flex items-center gap-2`}
              >
                <span className="w-8 h-0.5 bg-gradient-to-r from-current to-transparent" />
                {category.title}
              </h3>

              <div className="grid grid-cols-5 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating decoration */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-1/4 w-40 h-40 border border-cyan-500/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-1/4 w-32 h-32 border border-purple-500/20 rounded-full hidden lg:block"
        />
      </div>
    </section>
  );
}
