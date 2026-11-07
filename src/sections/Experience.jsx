
// import { motion } from "framer-motion";

// const experiences = [
//   {
//     company: "World Press Center",
//     role: "Python Developer Intern",
//     duration: "Currently Working",
//     project: "Live News & Media Platform",
//     status: "Internship",
//     description:
//       "Currently working as a Python Developer Intern on a live news and media platform. Contributing to full-stack development by building responsive and user-friendly interfaces using React.js and its advanced features, while developing backend functionality using Python, Django and Django REST Framework. Gaining practical experience in REST API integration, JWT authentication, SEO optimization, Git version control and deployment while working on a real-world development project.",
//     tech: [
//       "React.js",
//       "Advanced React",
//       "Python",
//       "Django",
//       "Django REST Framework",
//       "JWT Authentication",
//       "REST APIs",
//       "Git",
//       "Deployment",
//       "SEO",
//     ],
//     current: true,
//   },
//   {
//     company: "AutoCluster",
//     role: "Web Development Intern",
//     duration: "15 Nov 2025 – 20 Jan 2026",
//     project: "Smart Study",
//     description:
//       "Developed a responsive web-based Smart Study platform that helps students learn subjects, take online tests, check marks and view overall rankings. Implemented subject-wise learning, difficulty-based practice questions (Easy, Medium and Hard), and result evaluation to provide an interactive learning experience.",
//     tech: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "SQL",
//       "HTML",
//       "Tailwind CSS",
//       "Git",
//     ],
//   },
//   {
//     company: "Orbinger India",
//     role: "Full Stack Web Development Intern",
//     duration: "Internship",
//     project: "Online Canteen Management System",
//     description:
//       "Worked on a full-stack Online Canteen Management System with responsive frontend interfaces and backend functionality. Contributed to REST API development, database integration and application features using modern web technologies, gaining practical experience in full-stack development.",
//     tech: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "SQL",
//       "REST APIs",
//     ],
//   },
//   {
//     company: "Swiftly Sewa Multi Utility Ltd",
//     role: "Python Programming Intern",
//     duration: "Internship",
//     project: "Python Development",
//     description:
//       "Worked on Python programming concepts and practical development tasks. Improved programming fundamentals, logical thinking and problem-solving skills through hands-on exercises and development activities.",
//     tech: ["Python", "Programming", "Problem Solving"],
//   },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 text-[var(--text-main)]"
//     >
//       {/* BACKGROUND GLOW */}
//       <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />

//       <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/5 blur-[120px]" />

//       <div className="pointer-events-none absolute -left-40 top-1/2 h-72 w-72 rounded-full bg-purple-600/5 blur-[110px]" />

//       {/* GRID BACKGROUND */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.025]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="relative mx-auto max-w-5xl">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
//             <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
//             Career Journey
//           </div>

//           <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
//             My{" "}
//             <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
//             My professional journey, live project experience and practical development work.
//           </p>

//           <div className="mx-auto mt-7 flex items-center justify-center gap-3">
//             <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/40" />
//             <div className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
//             <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/40" />
//           </div>
//         </motion.div>

//         {/* TIMELINE */}
//         <div className="relative">

//           <div
//             className="
//               absolute left-[14px] top-0 hidden h-full w-px
//               bg-gradient-to-b from-purple-500/10
//               via-purple-500/30 to-purple-500/10 md:block
//             "
//           />

//           <div className="space-y-8 md:space-y-10">

//             {experiences.map((experience, index) => (
//               <motion.div
//                 key={experience.company}
//                 initial={{ opacity: 0, x: -35 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, amount: 0.15 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.12,
//                   ease: "easeOut",
//                 }}
//                 className="group relative md:pl-12"
//               >

//                 {/* TIMELINE DOT */}
//                 <motion.div
//                   whileHover={{ scale: 1.15 }}
//                   transition={{ duration: 0.25 }}
//                   className="
//                     absolute left-0 top-8 hidden h-7 w-7
//                     items-center justify-center rounded-full
//                     border-[4px] border-[var(--bg-main)]
//                     bg-purple-500
//                     shadow-[0_0_0_4px_rgba(168,85,247,0.08)]
//                     md:flex
//                   "
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-white" />
//                 </motion.div>

//                 {/* SOFT CARD GLOW */}
//                 <div
//                   className="
//                     pointer-events-none absolute -inset-[1px]
//                     rounded-[23px]
//                     bg-gradient-to-br from-purple-500/12
//                     via-transparent to-fuchsia-500/7
//                     opacity-0 blur-md transition-all duration-500
//                     group-hover:opacity-100
//                   "
//                 />

//                 {/* CARD */}
//                 <motion.div
//                   whileHover={{ y: -5 }}
//                   transition={{ duration: 0.3, ease: "easeOut" }}
//                   className={`
//                     relative overflow-hidden rounded-[22px]
//                     border-[1.5px] bg-[var(--bg-card)]
//                     p-6 transition-all duration-500 md:p-7
//                     ${
//                       experience.current
//                         ? "border-purple-500/35 shadow-[0_10px_40px_rgba(124,58,237,0.07)]"
//                         : "border-[var(--border-color)]"
//                     }
//                     group-hover:border-purple-500/40
//                     group-hover:shadow-[0_18px_50px_rgba(124,58,237,0.09)]
//                   `}
//                 >

//                   {/* TOP HIGHLIGHT */}
//                   <div className="pointer-events-none absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

//                   {/* CURRENT PROJECT ACCENT */}
//                   {experience.current && (
//                     <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-purple-500/[0.07] blur-2xl" />
//                   )}

//                   {/* CARD NUMBER */}
//                   <div className="absolute right-6 top-5 text-[11px] font-semibold tracking-[0.2em] text-[var(--text-main)]/20">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   {/* TOP CONTENT */}
//                   <div className="relative flex flex-col justify-between gap-5 pr-8 md:flex-row md:items-start">

//                     <div className="min-w-0">

//                       {/* DURATION */}
//                       <div className="flex flex-wrap items-center gap-2">
//                         <span className={`h-1.5 w-1.5 rounded-full ${
//                           experience.current
//                             ? "animate-pulse bg-green-400"
//                             : "bg-purple-400"
//                         }`} />

//                         <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${
//                           experience.current
//                             ? "text-green-400"
//                             : "text-purple-400"
//                         }`}>
//                           {experience.duration}
//                         </p>
//                       </div>

//                       {/* ROLE */}
//                       <h3
//                         className="
//                           mt-3 text-xl font-bold leading-7
//                           text-[var(--text-main)]
//                           transition-colors duration-300
//                           group-hover:text-purple-400 md:text-2xl
//                         "
//                       >
//                         {experience.role}
//                       </h3>

//                       {/* COMPANY */}
//                       <p className="mt-1.5 text-base font-semibold text-[var(--text-muted)] md:text-lg">
//                         {experience.company}
//                       </p>
//                     </div>

//                     {/* STATUS BADGE */}
//                     <span
//                       className={`
//                         w-fit shrink-0 rounded-full border
//                         px-3.5 py-1.5 text-[10px]
//                         font-semibold uppercase tracking-[0.12em]
//                         transition-all duration-300
//                         ${
//                           experience.current
//                             ? "border-green-500/25 bg-green-500/10 text-green-400"
//                             : "border-purple-500/20 bg-purple-500/8 text-purple-400"
//                         }
//                       `}
//                     >
//                       {experience.current ? (
//                         <span className="flex items-center gap-2">
//                           <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
//                           Internship
//                         </span>
//                       ) : (
//                         "Internship"
//                       )}
//                     </span>
//                   </div>

//                   {/* DIVIDER */}
//                   <div className="my-6 h-px bg-[var(--border-color)]" />

//                   {/* PROJECT */}
//                   <div>
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
//                         Project
//                       </span>

//                       <span className="text-[var(--text-muted)]/40">/</span>

//                       <span className="text-sm font-semibold text-purple-400">
//                         {experience.project}
//                       </span>
//                     </div>

//                     {/* DESCRIPTION */}
//                     <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">
//                       {experience.description}
//                     </p>
//                   </div>

//                   {/* TECHNOLOGIES */}
//                   <div className="mt-6">
//                     <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]/60">
//                       Technologies & Skills
//                     </p>

//                     <div className="flex flex-wrap gap-2">
//                       {experience.tech.map((item, techIndex) => (
//                         <motion.span
//                           key={item}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: true }}
//                           transition={{
//                             duration: 0.3,
//                             delay: index * 0.08 + techIndex * 0.04,
//                           }}
//                           whileHover={{ y: -2 }}
//                           className="
//                             cursor-default rounded-full border
//                             border-[var(--border-color)]
//                             bg-white/[0.025] px-3 py-1.5
//                             text-[11px] font-medium
//                             text-[var(--text-muted)]
//                             transition-all duration-300
//                             hover:border-purple-500/30
//                             hover:bg-purple-500/5
//                             hover:text-purple-400
//                           "
//                         >
//                           {item}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* BOTTOM STATUS */}
//                   <div className="mt-7 flex items-center justify-between border-t border-[var(--border-color)] pt-4">

//                     <div className="flex items-center gap-2">
//                       <span className={`relative flex h-2 w-2 ${
//                         experience.current ? "" : "opacity-60"
//                       }`}>
//                         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
//                         <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
//                       </span>

//                       <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]/70">
//                         {experience.current
//                           ? "Active Internship"
//                           : "Practical Experience"}
//                       </span>
//                     </div>

//                     <motion.span
//                       className="text-sm text-purple-400/40 transition-colors duration-300 group-hover:text-purple-400/80"
//                       whileHover={{ x: 3 }}
//                     >
//                       ↗
//                     </motion.span>
//                   </div>

//                 </motion.div>
//               </motion.div>
//             ))}

//           </div>
//         </div>

//         {/* BOTTOM NOTE */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-14 text-center"
//         >
//           <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]/60">
//             Learn <span className="mx-2 text-purple-400/50">•</span>
//             Build <span className="mx-2 text-purple-400/50">•</span>
//             Grow
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default Experience;


// import { motion } from "framer-motion";

// const experiences = [
//   {
//     company: "World Press Center",
//     role: "Python Developer Intern",
//     duration: "Currently Working",
//     project: "Live News & Media Platform",
//     status: "Internship",
//     description:
//       "Currently working as a Python Developer Intern on a live News & Media Platform, contributing to the development and improvement of real-world web applications. Working with React.js for frontend development and Python, Django and Django REST Framework for backend development. Involved in building and integrating REST APIs, implementing JWT authentication, improving website SEO and supporting deployment activities. Gaining practical experience in full-stack development, problem-solving and working with modern web technologies.",
//     technologies: [
//       "React.js",
//       "Advanced React",
//       "Python",
//       "Django",
//       "Django REST Framework",
//       "JWT Authentication",
//       "REST APIs",
//       "Git",
//       "Deployment",
//       "SEO",
//     ],
//     current: true,
//   },
//   {
//     company: "AutoCluster",
//     role: "Web Development Intern",
//     duration: "15 Nov 2025 – 20 Jan 2026",
//     project: "Smart Study",
//     status: "Completed",
//     description:
//       "Worked on the development of Smart Study, a web-based learning platform designed to help students prepare for online tests and track their academic performance. Developed frontend and backend features, integrated database functionality and implemented subject-wise tests with different difficulty levels.",
//     technologies: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "SQL",
//       "HTML",
//       "Tailwind CSS",
//       "Git",
//     ],
//     current: false,
//   },
//   {
//     company: "Orbinger India",
//     role: "Full Stack Web Development Intern",
//     duration: "Completed",
//     project: "Online Canteen Management System",
//     status: "Completed",
//     description:
//       "Developed an Online Canteen Management System as part of the full-stack internship. Worked on frontend and backend functionality, including user interactions, REST API development, database integration and application features using modern web technologies.",
//     technologies: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "SQL",
//       "REST APIs",
//       "Database Integration",
//     ],
//     current: false,
//   },
//   {
//     company: "Swiftly Sewa Multi Utility Ltd",
//     role: "Python Programming Intern",
//     duration: "Completed",
//     project: "Python Programming",
//     status: "Completed",
//     description:
//       "Completed a Python Programming Internship focused on developing programming fundamentals and practical problem-solving skills. Gained hands-on experience with Python concepts, writing programs and understanding application development.",
//     technologies: ["Python", "Programming", "Problem Solving"],
//     current: false,
//   },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative w-full overflow-hidden px-5 py-20 sm:px-8 lg:px-16"
//       style={{ background: "var(--bg-main)", color: "var(--text-main)" }}
//     >
//       <div className="mx-auto max-w-6xl">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">
//             My Journey
//           </p>

//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
//             Experience & <span className="text-purple-500">Internships</span>
//           </h2>

//           <p
//             className="mx-auto mt-5 max-w-2xl text-sm leading-7 sm:text-base"
//             style={{ color: "var(--text-muted)" }}
//           >
//             My professional journey, internships and practical experience
//             working on real-world projects using modern technologies.
//           </p>
//         </motion.div>

//         {/* Experience Cards */}
//         <div className="relative space-y-8">
//           {experiences.map((experience, index) => (
//             <motion.div
//               key={experience.company}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8"
//               style={{
//                 background: "var(--bg-card)",
//                 borderColor: "var(--border-color)",
//                 boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
//               }}
//             >
//               {/* Hover Glow */}
//               <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//               <div className="relative z-10">
//                 {/* Top Section */}
//                 <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
//                   <div>
//                     <div className="mb-3 flex flex-wrap items-center gap-3">
//                       <h3 className="text-xl font-bold sm:text-2xl">
//                         {experience.company}
//                       </h3>

//                       <span
//                         className={`rounded-full border px-3 py-1 text-xs font-semibold ${
//                           experience.current
//                             ? "border-purple-500/30 bg-purple-500/10 text-purple-500"
//                             : "border-green-500/30 bg-green-500/10 text-green-500"
//                         }`}
//                       >
//                         {experience.current ? "Internship" : "Completed"}
//                       </span>
//                     </div>

//                     <p className="text-base font-semibold text-purple-500 sm:text-lg">
//                       {experience.role}
//                     </p>

//                     <p
//                       className="mt-2 text-sm"
//                       style={{ color: "var(--text-muted)" }}
//                     >
//                       {experience.duration}
//                     </p>
//                   </div>

//                   <div
//                     className="w-fit rounded-xl border px-4 py-3"
//                     style={{
//                       borderColor: "var(--border-color)",
//                       background: "var(--bg-main)",
//                     }}
//                   >
//                     <p
//                       className="text-xs font-medium uppercase tracking-wider"
//                       style={{ color: "var(--text-muted)" }}
//                     >
//                       Project
//                     </p>
//                     <p className="mt-1 text-sm font-semibold">
//                       {experience.project}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p
//                   className="mt-6 text-sm leading-7 sm:text-base"
//                   style={{ color: "var(--text-muted)" }}
//                 >
//                   {experience.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="mt-6">
//                   <h4 className="mb-3 text-sm font-semibold">
//                     Technologies & Skills
//                   </h4>

//                   <div className="flex flex-wrap gap-2">
//                     {experience.technologies.map((technology) => (
//                       <span
//                         key={technology}
//                         className="rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-500 sm:text-sm"
//                         style={{
//                           borderColor: "var(--border-color)",
//                           color: "var(--text-muted)",
//                         }}
//                       >
//                         {technology}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Bottom Status */}
//                 <div
//                   className="mt-7 flex items-center gap-2 border-t pt-5"
//                   style={{ borderColor: "var(--border-color)" }}
//                 >
//                   <span
//                     className={`h-2 w-2 rounded-full ${
//                       experience.current
//                         ? "animate-pulse bg-purple-500"
//                         : "bg-green-500"
//                     }`}
//                   />

//                   <span
//                     className="text-xs font-medium sm:text-sm"
//                     style={{ color: "var(--text-muted)" }}
//                   >
//                     {experience.current
//                       ? "Active Internship"
//                       : "Internship Completed"}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;

import { motion } from "framer-motion";

const experiences = [
 
  {
    company: "AutoCluster",
    role: "Web Development Intern",
    duration: "15 Nov 2025 – 20 Jan 2026",
    project: "Smart Study",
    status: "Completed",
    description:
      "Worked on the development of Smart Study, a web-based learning platform designed to help students prepare for online tests and track their academic performance. Developed frontend and backend features, integrated database functionality and implemented subject-wise tests with different difficulty levels.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "SQL",
      "HTML",
      "Tailwind CSS",
      "Git",
    ],
    current: false,
  },

];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--bg-main)] px-5 py-24 text-[var(--text-main)] sm:px-8 lg:px-16"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/5 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-72 w-72 rounded-full bg-purple-600/5 blur-[110px]" />

      {/* GRID BACKGROUND */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            My Journey
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Internships
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
            My professional journey, internships and practical experience
            working on real-world projects using modern technologies.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/40" />
          </div>
        </motion.div>

        {/* EXPERIENCE TIMELINE */}

        <div className="relative">

          {/* TIMELINE LINE */}

          <div
            className="
              absolute left-[14px] top-0 hidden h-full w-px
              bg-gradient-to-b from-purple-500/10
              via-purple-500/30 to-purple-500/10
              md:block
            "
          />

          <div className="space-y-8 md:space-y-10">

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative md:pl-12"
              >

                {/* TIMELINE DOT */}

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.25 }}
                  className={`
                    absolute left-0 top-8 hidden h-7 w-7
                    items-center justify-center rounded-full
                    border-[4px] border-[var(--bg-main)]
                    shadow-[0_0_0_4px_rgba(168,85,247,0.08)]
                    md:flex
                    ${
                      experience.current
                        ? "bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.12)]"
                        : "bg-purple-500"
                    }
                  `}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </motion.div>

                {/* SIDE HOVER GLOW */}

                <div
                  className="
                    pointer-events-none absolute -inset-[1px]
                    rounded-[23px]
                    bg-gradient-to-br from-purple-500/15
                    via-transparent to-fuchsia-500/10
                    opacity-0 blur-md
                    transition-all duration-500
                    group-hover:opacity-100
                  "
                />

                {/* EXPERIENCE CARD */}

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`
                    relative overflow-hidden rounded-[22px]
                    border-[1.5px] bg-[var(--bg-card)]
                    p-6 transition-all duration-500 md:p-7
                    ${
                      experience.current
                        ? "border-green-500/30 shadow-[0_10px_40px_rgba(34,197,94,0.06)]"
                        : "border-[var(--border-color)]"
                    }
                    group-hover:border-purple-500/40
                    group-hover:shadow-[0_18px_50px_rgba(124,58,237,0.12)]
                  `}
                >

                  {/* TOP HIGHLIGHT */}

                  <div className="pointer-events-none absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                  {/* CURRENT INTERNSHIP ACCENT */}

                  {experience.current && (
                    <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-green-500/[0.07] blur-2xl" />
                  )}

                  {/* CARD NUMBER */}

                  <div className="absolute right-6 top-5 text-[11px] font-semibold tracking-[0.2em] text-[var(--text-main)]/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* TOP CONTENT */}

                  <div className="relative flex flex-col justify-between gap-5 pr-8 md:flex-row md:items-start">

                    <div className="min-w-0">

                      {/* DURATION */}

                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            experience.current
                              ? "animate-pulse bg-green-400"
                              : "bg-purple-400"
                          }`}
                        />

                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                            experience.current
                              ? "text-green-500"
                              : "text-purple-400"
                          }`}
                        >
                          {experience.duration}
                        </p>
                      </div>

                      {/* COMPANY */}

                      <h3 className="mt-3 text-xl font-bold leading-7 text-[var(--text-main)] transition-colors duration-300 group-hover:text-purple-400 md:text-2xl">
                        {experience.company}
                      </h3>

                      {/* ROLE */}

                      <p className="mt-1.5 text-base font-semibold text-[var(--text-muted)] md:text-lg">
                        {experience.role}
                      </p>
                    </div>

                    {/* STATUS BADGE */}

                    <span
                      className={`
                        w-fit shrink-0 rounded-full border
                        px-3.5 py-1.5 text-[10px]
                        font-semibold uppercase tracking-[0.12em]
                        transition-all duration-300
                        ${
                          experience.current
                            ? "border-green-500/30 bg-green-500/10 text-green-500"
                            : "border-purple-500/20 bg-purple-500/8 text-purple-400"
                        }
                      `}
                    >
                      {experience.current ? (
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                          Ongoing
                        </span>
                      ) : (
                        "Completed"
                      )}
                    </span>
                  </div>

                  {/* DIVIDER */}

                  <div className="my-6 h-px bg-[var(--border-color)]" />

                  {/* PROJECT */}

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        Project
                      </span>

                      <span className="text-[var(--text-muted)]/40">/</span>

                      <span className="text-sm font-semibold text-purple-400">
                        {experience.project}
                      </span>
                    </div>

                    {/* DESCRIPTION */}

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">
                      {experience.description}
                    </p>
                  </div>

                  {/* TECHNOLOGIES */}

                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]/60">
                      Technologies & Skills
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology, techIndex) => (
                        <motion.span
                          key={technology}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.08 + techIndex * 0.04,
                          }}
                          whileHover={{ y: -3, scale: 1.04 }}
                          className="
                            cursor-default rounded-full border
                            border-[var(--border-color)]
                            bg-[var(--bg-main)] px-3 py-1.5
                            text-[11px] font-medium
                            text-[var(--text-muted)]
                            transition-all duration-300
                            hover:border-purple-500/50
                            hover:bg-purple-500/10
                            hover:text-purple-500
                            hover:shadow-[0_0_15px_rgba(168,85,247,0.12)]
                          "
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM STATUS */}

                  <div className="mt-7 flex items-center justify-between border-t border-[var(--border-color)] pt-4">

                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        {experience.current && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                        )}

                        <span
                          className={`relative inline-flex h-2 w-2 rounded-full ${
                            experience.current
                              ? "bg-green-400"
                              : "bg-purple-400"
                          }`}
                        />
                      </span>

                      <span
                        className={`text-[9px] font-medium uppercase tracking-[0.16em] sm:text-[10px] ${
                          experience.current
                            ? "text-green-500"
                            : "text-[var(--text-muted)]/70"
                        }`}
                      >
                        {experience.current
                          ? "Active Internship"
                          : "Practical Experience"}
                      </span>
                    </div>

                    <motion.span
                      className="text-sm text-purple-400/40 transition-colors duration-300 group-hover:text-purple-400/80"
                      whileHover={{ x: 4 }}
                    >
                      ↗
                    </motion.span>
                  </div>

                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* BOTTOM NOTE */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]/60">
            Learn <span className="mx-2 text-purple-400/50">•</span>
            Build <span className="mx-2 text-purple-400/50">•</span>
            Grow
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
