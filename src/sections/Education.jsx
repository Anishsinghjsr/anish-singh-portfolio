// import { motion } from "framer-motion";

// function Education() {
//   return (
//     <section
//       id="education"
//       className="bg-[#050505] px-6 py-20 text-white"
//     >
//       <div className="mx-auto max-w-5xl">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
//             Academic Background
//           </p>

//           <h2 className="mt-3 text-4xl font-bold md:text-5xl">
//             Education
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl text-gray-400">
//             My academic journey and technical learning background.
//           </p>
//         </div>

//         {/* Education Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 md:p-8"
//         >
//           <div className="flex flex-col gap-6 md:flex-row md:items-start">
//             {/* Icon */}
//             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl">
//               🎓
//             </div>

//             {/* Content */}
//             <div className="flex-1">
//               <div className="flex flex-col justify-between gap-3 md:flex-row">
//                 <div>
//                   <p className="text-sm font-medium text-purple-400">
//                     2022 – 2026
//                   </p>

//                   <h3 className="mt-1 text-2xl font-bold">
//                     Bachelor of Computer Applications
//                   </h3>

//                   <p className="mt-2 text-lg text-gray-300">
//                     Karim City College
//                   </p>

//                   <p className="mt-1 text-sm text-gray-500">
//                     Jamshedpur, Jharkhand
//                   </p>
//                 </div>

//                 <span className="h-fit w-fit rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
//                   BCA
//                 </span>
//               </div>

//               {/* Details */}
//               <div className="mt-6 grid gap-4 sm:grid-cols-3">
//                 <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
//                   <p className="text-xs text-gray-500">Program</p>
//                   <p className="mt-1 font-semibold text-gray-200">
//                     BCA
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
//                   <p className="text-xs text-gray-500">Session</p>
//                   <p className="mt-1 font-semibold text-gray-200">
//                     2022 – 2026
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
//                   <p className="text-xs text-gray-500">Focus</p>
//                   <p className="mt-1 font-semibold text-gray-200">
//                     Computer Science
//                   </p>
//                 </div>
//               </div>

//               {/* Subjects */}
//               <div className="mt-6">
//                 <p className="mb-3 text-sm font-semibold text-gray-300">
//                   Key Areas
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     "Programming",
//                     "Web Development",
//                     "Database Management",
//                     "Software Development",
//                     "Computer Networks",
//                     "Information Security",
//                   ].map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Education;




// import { motion } from "framer-motion";

// const education = [
//   {
//     year: "2022 – 2026",
//     title: "Bachelor of Computer Applications",
//     institute: "Karim City College",
//     location: "Jamshedpur, Jharkhand",
//     badge: "BCA",
//     icon: "🎓",
//     details: [
//       { label: "Program", value: "BCA" },
//       { label: "Session", value: "2022 – 2026" },
//       { label: "Focus", value: "Computer Science" },
//     ],
//     sectionTitle: "Key Areas",
//     tags: [
//       "Programming",
//       "Web Development",
//       "Database Management",
//       "Software Development",
//       "Computer Networks",
//       "Information Security",
//     ],
//   },
//   {
//     year: "2020 – 2022",
//     title: "Intermediate",
//     institute: "Vivek Vidyalaya",
//     location: "Jamshedpur, Jharkhand",
//     badge: "Class 12",
//     icon: "🏫",
//     details: [
//       { label: "Stream", value: "PCM (Science)" },
//       { label: "Session", value: "2020 – 2022" },
//     ],
//     sectionTitle: "Subjects",
//     tags: ["Physics", "Chemistry", "Mathematics"],
//   },
//   {
//     year: "2020",
//     title: "Matriculation",
//     institute: "Vivek Vidyalaya",
//     location: "Jamshedpur, Jharkhand",
//     badge: "Class 10",
//     icon: "📚",
//     details: [
//       { label: "Mathematics", value: "Standard Mathematics" },
//       { label: "Passing Year", value: "2020" },
//     ],
//     sectionTitle: null,
//     tags: [],
//   },
// ];

// function Education() {
//   return (
//     <section
//       id="education"
//       className="
//         relative isolate overflow-hidden
//         bg-[var(--bg-main)]
//         px-4 py-20
//         text-[var(--text-main)]
//         transition-colors duration-500
//         sm:px-6
//         sm:py-24
//         md:px-8
//         md:py-28
//       "
//     >
//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="
//             absolute left-1/2 top-0
//             h-[420px] w-[420px]
//             -translate-x-1/2
//             rounded-full
//             bg-purple-600/[0.055]
//             blur-[150px]
//           "
//         />

//         <div
//           className="
//             absolute -left-40 top-[35%]
//             h-80 w-80
//             rounded-full
//             bg-fuchsia-500/[0.035]
//             blur-[130px]
//           "
//         />

//         <div
//           className="
//             absolute -right-40 bottom-0
//             h-80 w-80
//             rounded-full
//             bg-indigo-500/[0.035]
//             blur-[130px]
//           "
//         />

//         {/* Subtle Grid */}
//         <div
//           className="
//             absolute inset-0
//             opacity-[0.02]
//             [background-image:linear-gradient(rgba(120,120,120,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.35)_1px,transparent_1px)]
//             [background-size:70px_70px]
//           "
//         />
//       </div>

//       {/* =====================================================
//           MAIN CONTAINER
//       ====================================================== */}
//       <div className="relative z-10 mx-auto w-full max-w-5xl">

//         {/* ===================================================
//             HEADER
//         ==================================================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
//         >
//           {/* Badge */}
//           <div
//             className="
//               mb-5
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-purple-500/20
//               bg-purple-500/[0.06]
//               px-4
//               py-2
//               backdrop-blur-xl
//             "
//           >
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 animate-pulse
//                 rounded-full
//                 bg-purple-500
//                 shadow-[0_0_10px_rgba(168,85,247,0.6)]
//               "
//             />

//             <span
//               className="
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.28em]
//                 text-purple-500
//                 sm:text-xs
//               "
//             >
//               Academic Background
//             </span>
//           </div>

//           {/* Heading */}
//           <h2
//             className="
//               text-4xl
//               font-bold
//               tracking-tight
//               sm:text-5xl
//               md:text-6xl
//             "
//           >
//             My{" "}
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-purple-500
//                 via-fuchsia-500
//                 to-purple-600
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Education
//             </span>
//           </h2>

//           {/* Description */}
//           <p
//             className="
//               mx-auto
//               mt-5
//               max-w-2xl
//               px-2
//               text-sm
//               leading-7
//               text-[var(--text-muted)]
//               sm:text-base
//             "
//           >
//             My academic journey and technical learning background that
//             shaped my foundation in computer science and software
//             development.
//           </p>

//           {/* Decorative Line */}
//           <div className="mt-7 flex items-center justify-center gap-3">
//             <div
//               className="
//                 h-px
//                 w-10
//                 bg-gradient-to-r
//                 from-transparent
//                 to-purple-500/40
//                 sm:w-14
//               "
//             />

//             <div
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-purple-500
//                 shadow-[0_0_10px_rgba(168,85,247,0.6)]
//               "
//             />

//             <div
//               className="
//                 h-px
//                 w-10
//                 bg-gradient-to-l
//                 from-transparent
//                 to-purple-500/40
//                 sm:w-14
//               "
//             />
//           </div>
//         </motion.div>

//         {/* ===================================================
//             EDUCATION TIMELINE
//         ==================================================== */}
//         <div className="relative">

//           {/* Desktop Timeline Line */}
//           <div
//             className="
//               absolute
//               bottom-10
//               left-[31px]
//               top-10
//               hidden
//               w-px
//               bg-gradient-to-b
//               from-purple-500/45
//               via-purple-500/15
//               to-transparent
//               sm:block
//             "
//           />

//           <div className="space-y-7 sm:space-y-8">

//             {education.map((item, index) => (
//               <motion.article
//                 key={item.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.12 }}
//                 transition={{
//                   duration: 0.65,
//                   delay: index * 0.1,
//                 }}
//                 whileHover={{ y: -4 }}
//                 className="group relative"
//               >
//                 {/* =================================================
//                     SOFT OUTER GLOW
//                 ================================================== */}
//                 <div
//                   className="
//                     absolute
//                     -inset-[1px]
//                     rounded-[25px]
//                     bg-gradient-to-br
//                     from-purple-500/12
//                     via-transparent
//                     to-fuchsia-500/7
//                     opacity-0
//                     blur-md
//                     transition-all
//                     duration-500
//                     group-hover:opacity-100
//                   "
//                 />

//                 {/* Timeline Dot */}
//                 <div
//                   className="
//                     absolute
//                     left-[24px]
//                     top-8
//                     z-20
//                     hidden
//                     h-4
//                     w-4
//                     rounded-full
//                     border-[3px]
//                     border-[var(--bg-main)]
//                     bg-purple-500/90
//                     shadow-[0_0_0_3px_rgba(168,85,247,0.08),0_0_12px_rgba(168,85,247,0.35)]
//                     transition-all
//                     duration-300
//                     group-hover:scale-110
//                     group-hover:shadow-[0_0_0_4px_rgba(168,85,247,0.08),0_0_16px_rgba(168,85,247,0.5)]
//                     sm:block
//                   "
//                 />

//                 {/* =================================================
//                     CARD
//                 ================================================== */}
//                 <div
//                   className="
//                     relative
//                     overflow-hidden
//                     rounded-[24px]
//                     border-[1.5px]
//                     border-[var(--border-color)]
//                     bg-[var(--bg-card)]
//                     p-5
//                     shadow-[0_12px_40px_rgba(0,0,0,0.04)]
//                     backdrop-blur-xl
//                     transition-all
//                     duration-500
//                     group-hover:border-purple-500/30
//                     group-hover:shadow-[0_18px_50px_rgba(124,58,237,0.07)]
//                     sm:ml-16
//                     sm:p-7
//                     md:p-8
//                   "
//                 >
//                   {/* Soft Top Highlight */}
//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       left-0
//                       right-0
//                       top-0
//                       h-px
//                       bg-gradient-to-r
//                       from-transparent
//                       via-purple-500/45
//                       to-transparent
//                       opacity-0
//                       transition
//                       duration-500
//                       group-hover:opacity-100
//                     "
//                   />

//                   {/* Project Number */}
//                   <div
//                     className="
//                       absolute
//                       right-5
//                       top-5
//                       text-[10px]
//                       font-semibold
//                       tracking-[0.2em]
//                       text-[var(--text-muted)]
//                       opacity-30
//                       sm:right-7
//                       sm:top-7
//                     "
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   {/* =================================================
//                       MAIN CONTENT
//                   ================================================== */}
//                   <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

//                     {/* Icon */}
//                     <div
//                       className="
//                         relative
//                         flex
//                         h-14
//                         w-14
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-2xl
//                         border-[1.5px]
//                         border-purple-500/20
//                         bg-purple-500/[0.06]
//                         text-2xl
//                         shadow-[0_6px_20px_rgba(124,58,237,0.05)]
//                         transition-all
//                         duration-500
//                         group-hover:scale-105
//                         group-hover:border-purple-500/35
//                         group-hover:bg-purple-500/[0.09]
//                         group-hover:shadow-[0_8px_25px_rgba(124,58,237,0.10)]
//                         sm:h-16
//                         sm:w-16
//                         sm:text-3xl
//                       "
//                     >
//                       {item.icon}
//                     </div>

//                     {/* Content */}
//                     <div className="min-w-0 flex-1">

//                       {/* =================================================
//                           TOP INFORMATION
//                       ================================================== */}
//                       <div
//                         className="
//                           flex
//                           flex-col
//                           gap-4
//                           pr-10
//                           sm:flex-row
//                           sm:items-start
//                           sm:justify-between
//                           sm:gap-5
//                         "
//                       >
//                         <div className="min-w-0">

//                           {/* Year */}
//                           <div className="flex items-center gap-2">
//                             <span
//                               className="
//                                 h-1.5
//                                 w-1.5
//                                 rounded-full
//                                 bg-purple-500
//                                 shadow-[0_0_7px_rgba(168,85,247,0.5)]
//                               "
//                             />

//                             <p
//                               className="
//                                 text-xs
//                                 font-semibold
//                                 tracking-wide
//                                 text-purple-500
//                                 sm:text-sm
//                               "
//                             >
//                               {item.year}
//                             </p>
//                           </div>

//                           {/* Title */}
//                           <h3
//                             className="
//                               mt-2
//                               break-words
//                               text-xl
//                               font-bold
//                               tracking-tight
//                               text-[var(--text-main)]
//                               sm:text-2xl
//                             "
//                           >
//                             {item.title}
//                           </h3>

//                           {/* Institute */}
//                           <p
//                             className="
//                               mt-2
//                               text-base
//                               font-medium
//                               text-[var(--text-main)]
//                               opacity-80
//                               sm:text-lg
//                             "
//                           >
//                             {item.institute}
//                           </p>

//                           {/* Location */}
//                           <p
//                             className="
//                               mt-1
//                               text-xs
//                               text-[var(--text-muted)]
//                               sm:text-sm
//                             "
//                           >
//                             {item.location}
//                           </p>
//                         </div>

//                         {/* Badge */}
//                         <span
//                           className="
//                             h-fit
//                             w-fit
//                             shrink-0
//                             rounded-full
//                             border-[1.5px]
//                             border-purple-500/20
//                             bg-purple-500/[0.06]
//                             px-3
//                             py-1.5
//                             text-[10px]
//                             font-semibold
//                             uppercase
//                             tracking-wider
//                             text-purple-500
//                             transition-all
//                             duration-300
//                             group-hover:border-purple-500/35
//                             group-hover:bg-purple-500/[0.09]
//                             sm:text-xs
//                           "
//                         >
//                           {item.badge}
//                         </span>
//                       </div>

//                       {/* Divider */}
//                       <div className="my-6 h-px bg-[var(--border-color)]" />

//                       {/* =================================================
//                           DETAILS
//                       ================================================== */}
//                       <div
//                         className={`
//                           grid
//                           gap-3
//                           ${
//                             item.details.length === 3
//                               ? "sm:grid-cols-3"
//                               : "sm:grid-cols-2"
//                           }
//                         `}
//                       >
//                         {item.details.map((detail) => (
//                           <motion.div
//                             key={detail.label}
//                             whileHover={{ y: -2 }}
//                             className="
//                               rounded-xl
//                               border-[1.5px]
//                               border-[var(--border-color)]
//                               bg-[var(--bg-main)]
//                               p-3.5
//                               transition-all
//                               duration-300
//                               hover:border-purple-500/25
//                               hover:bg-purple-500/[0.025]
//                               sm:p-4
//                             "
//                           >
//                             <p
//                               className="
//                                 text-[10px]
//                                 font-medium
//                                 uppercase
//                                 tracking-wider
//                                 text-[var(--text-muted)]
//                                 sm:text-xs
//                               "
//                             >
//                               {detail.label}
//                             </p>

//                             <p
//                               className="
//                                 mt-1.5
//                                 break-words
//                                 text-sm
//                                 font-semibold
//                                 text-[var(--text-main)]
//                                 sm:text-base
//                               "
//                             >
//                               {detail.value}
//                             </p>
//                           </motion.div>
//                         ))}
//                       </div>

//                       {/* =================================================
//                           TAGS
//                       ================================================== */}
//                       {item.tags.length > 0 && (
//                         <div className="mt-6">

//                           <p
//                             className="
//                               mb-3
//                               text-xs
//                               font-semibold
//                               uppercase
//                               tracking-wider
//                               text-[var(--text-main)]
//                               opacity-70
//                             "
//                           >
//                             {item.sectionTitle}
//                           </p>

//                           <div className="flex flex-wrap gap-2">
//                             {item.tags.map((tag, tagIndex) => (
//                               <motion.span
//                                 key={tag}
//                                 initial={{
//                                   opacity: 0,
//                                   scale: 0.9,
//                                 }}
//                                 whileInView={{
//                                   opacity: 1,
//                                   scale: 1,
//                                 }}
//                                 viewport={{ once: true }}
//                                 transition={{
//                                   duration: 0.25,
//                                   delay:
//                                     index * 0.05 +
//                                     tagIndex * 0.025,
//                                 }}
//                                 className="
//                                   rounded-full
//                                   border-[1.5px]
//                                   border-[var(--border-color)]
//                                   bg-[var(--bg-main)]
//                                   px-3
//                                   py-1.5
//                                   text-[10px]
//                                   font-medium
//                                   text-[var(--text-muted)]
//                                   transition-all
//                                   duration-300
//                                   hover:border-purple-500/35
//                                   hover:bg-purple-500/[0.06]
//                                   hover:text-purple-500
//                                   sm:text-xs
//                                 "
//                               >
//                                 {tag}
//                               </motion.span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM NOTE
//         ==================================================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-12 text-center sm:mt-14"
//         >
//           <div
//             className="
//               inline-flex
//               max-w-full
//               items-center
//               gap-2
//               rounded-full
//               border-[1.5px]
//               border-[var(--border-color)]
//               bg-[var(--bg-card)]
//               px-4
//               py-2.5
//               text-[10px]
//               text-[var(--text-muted)]
//               shadow-sm
//               backdrop-blur-xl
//               sm:px-5
//               sm:text-xs
//             "
//           >
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 shrink-0
//                 rounded-full
//                 bg-purple-500
//                 shadow-[0_0_7px_rgba(168,85,247,0.5)]
//               "
//             />

//             <span>
//               Building knowledge, one step at a time.
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Education;


import { motion } from "framer-motion";
import clgImage from "../assets/clg.jpg";
import schoolImage from "../assets/sch.jpg";

const education = [
  {
    year: "2022 – 2026",
    title: "Bachelor of Computer Applications",
    institute: "Karim City College",
    location: "Jamshedpur, Jharkhand",
    badge: "BCA",
    image: clgImage,
    details: [
      { label: "Program", value: "BCA" },
      { label: "Session", value: "2022 – 2026" },
      { label: "Focus", value: "Computer Science" },
    ],
    sectionTitle: "Key Areas",
    tags: [
      "Programming",
      "Web Development",
      "Database Management",
      "Software Development",
      "Computer Networks",
      "Information Security",
    ],
  },

];

function Education() {
  return (
    <section
      id="education"
      className="
        relative isolate overflow-hidden
        bg-[var(--bg-main)]
        px-4 py-20
        text-[var(--text-main)]
        transition-colors duration-500
        sm:px-6
        sm:py-24
        md:px-8
        md:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-0
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            absolute -left-40 top-[35%]
            h-80 w-80
            rounded-full
            bg-fuchsia-500/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute -right-40 bottom-0
            h-80 w-80
            rounded-full
            bg-indigo-500/[0.035]
            blur-[130px]
          "
        />

        {/* Subtle Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.02]
            [background-image:linear-gradient(rgba(120,120,120,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.35)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* ===================================================
            HEADER
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Badge */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-500/20
              bg-purple-500/[0.06]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-purple-500
                shadow-[0_0_10px_rgba(168,85,247,0.6)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-purple-500
                sm:text-xs
              "
            >
              Academic Background
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-500
                via-fuchsia-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Education
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              px-2
              text-sm
              leading-7
              text-[var(--text-muted)]
              sm:text-base
            "
          >
            My academic journey and technical learning background that
            shaped my foundation in computer science and software
            development.
          </p>

          {/* Decorative Line */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <div
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-purple-500/40
                sm:w-14
              "
            />

            <div
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-purple-500
                shadow-[0_0_10px_rgba(168,85,247,0.6)]
              "
            />

            <div
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-purple-500/40
                sm:w-14
              "
            />
          </div>
        </motion.div>

        {/* ===================================================
            EDUCATION TIMELINE
        ==================================================== */}
        <div className="relative">

          {/* Desktop Timeline Line */}
          <div
            className="
              absolute
              bottom-10
              left-[31px]
              top-10
              hidden
              w-px
              bg-gradient-to-b
              from-purple-500/45
              via-purple-500/15
              to-transparent
              sm:block
            "
          />

          <div className="space-y-7 sm:space-y-8">

            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* =================================================
                    SOFT OUTER GLOW
                ================================================== */}
                <div
                  className="
                    absolute
                    -inset-[1px]
                    rounded-[25px]
                    bg-gradient-to-br
                    from-purple-500/12
                    via-transparent
                    to-fuchsia-500/7
                    opacity-0
                    blur-md
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-[24px]
                    top-8
                    z-20
                    hidden
                    h-4
                    w-4
                    rounded-full
                    border-[3px]
                    border-[var(--bg-main)]
                    bg-purple-500/90
                    shadow-[0_0_0_3px_rgba(168,85,247,0.08),0_0_12px_rgba(168,85,247,0.35)]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:shadow-[0_0_0_4px_rgba(168,85,247,0.08),0_0_16px_rgba(168,85,247,0.5)]
                    sm:block
                  "
                />

                {/* =================================================
                    CARD
                ================================================== */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border-[1.5px]
                    border-[var(--border-color)]
                    bg-[var(--bg-card)]
                    p-5
                    shadow-[0_12px_40px_rgba(0,0,0,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:border-purple-500/30
                    group-hover:shadow-[0_18px_50px_rgba(124,58,237,0.07)]
                    sm:ml-16
                    sm:p-7
                    md:p-8
                  "
                >
                  {/* Soft Top Highlight */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      right-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-purple-500/45
                      to-transparent
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Education Number */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      text-[10px]
                      font-semibold
                      tracking-[0.2em]
                      text-[var(--text-muted)]
                      opacity-30
                      sm:right-7
                      sm:top-7
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* =================================================
                      MAIN CONTENT
                  ================================================== */}
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                    {/* =================================================
                        LARGE INSTITUTE IMAGE
                    ================================================== */}
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                      className="
                        relative
                        h-[120px]
                        w-[120px]
                        shrink-0
                        overflow-hidden
                        rounded-2xl
                        border-[1.5px]
                        border-purple-500/20
                        bg-[var(--bg-main)]
                        p-1.5
                        shadow-[0_6px_20px_rgba(124,58,237,0.06)]
                        transition-all
                        duration-500
                        group-hover:border-purple-500/35
                        group-hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)]
                        sm:h-[140px]
                        sm:w-[140px]
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.institute}
                        className="
                          h-full
                          w-full
                          rounded-[13px]
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-1.5
                          rounded-[13px]
                          bg-gradient-to-t
                          from-black/15
                          via-transparent
                          to-transparent
                        "
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">

                      {/* =================================================
                          TOP INFORMATION
                      ================================================== */}
                      <div
                        className="
                          flex
                          flex-col
                          gap-4
                          pr-10
                          sm:flex-row
                          sm:items-start
                          sm:justify-between
                          sm:gap-5
                        "
                      >
                        <div className="min-w-0">

                          {/* Year */}
                          <div className="flex items-center gap-2">
                            <span
                              className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-purple-500
                                shadow-[0_0_7px_rgba(168,85,247,0.5)]
                              "
                            />

                            <p
                              className="
                                text-xs
                                font-semibold
                                tracking-wide
                                text-purple-500
                                sm:text-sm
                              "
                            >
                              {item.year}
                            </p>
                          </div>

                          {/* Title */}
                          <h3
                            className="
                              mt-2
                              break-words
                              text-xl
                              font-bold
                              tracking-tight
                              text-[var(--text-main)]
                              sm:text-2xl
                            "
                          >
                            {item.title}
                          </h3>

                          {/* Institute */}
                          <p
                            className="
                              mt-2
                              text-base
                              font-medium
                              text-[var(--text-main)]
                              opacity-80
                              sm:text-lg
                            "
                          >
                            {item.institute}
                          </p>

                          {/* Location */}
                          <p
                            className="
                              mt-1
                              text-xs
                              text-[var(--text-muted)]
                              sm:text-sm
                            "
                          >
                            {item.location}
                          </p>
                        </div>

                        {/* Badge */}
                        <span
                          className="
                            h-fit
                            w-fit
                            shrink-0
                            rounded-full
                            border-[1.5px]
                            border-purple-500/20
                            bg-purple-500/[0.06]
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-wider
                            text-purple-500
                            transition-all
                            duration-300
                            group-hover:border-purple-500/35
                            group-hover:bg-purple-500/[0.09]
                            sm:text-xs
                          "
                        >
                          {item.badge}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="my-6 h-px bg-[var(--border-color)]" />

                      {/* =================================================
                          DETAILS
                      ================================================== */}
                      <div
                        className={`
                          grid
                          gap-3
                          ${
                            item.details.length === 3
                              ? "sm:grid-cols-3"
                              : "sm:grid-cols-2"
                          }
                        `}
                      >
                        {item.details.map((detail) => (
                          <motion.div
                            key={detail.label}
                            whileHover={{ y: -2 }}
                            className="
                              rounded-xl
                              border-[1.5px]
                              border-[var(--border-color)]
                              bg-[var(--bg-main)]
                              p-3.5
                              transition-all
                              duration-300
                              hover:border-purple-500/25
                              hover:bg-purple-500/[0.025]
                              sm:p-4
                            "
                          >
                            <p
                              className="
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-wider
                                text-[var(--text-muted)]
                                sm:text-xs
                              "
                            >
                              {detail.label}
                            </p>

                            <p
                              className="
                                mt-1.5
                                break-words
                                text-sm
                                font-semibold
                                text-[var(--text-main)]
                                sm:text-base
                              "
                            >
                              {detail.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* =================================================
                          TAGS
                      ================================================== */}
                      {item.tags.length > 0 && (
                        <div className="mt-6">

                          <p
                            className="
                              mb-3
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wider
                              text-[var(--text-main)]
                              opacity-70
                            "
                          >
                            {item.sectionTitle}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tag}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.25,
                                  delay:
                                    index * 0.05 +
                                    tagIndex * 0.025,
                                }}
                                className="
                                  rounded-full
                                  border-[1.5px]
                                  border-[var(--border-color)]
                                  bg-[var(--bg-main)]
                                  px-3
                                  py-1.5
                                  text-[10px]
                                  font-medium
                                  text-[var(--text-muted)]
                                  transition-all
                                  duration-300
                                  hover:border-purple-500/35
                                  hover:bg-purple-500/[0.06]
                                  hover:text-purple-500
                                  sm:text-xs
                                "
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM NOTE
        ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center sm:mt-14"
        >
          <div
            className="
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border-[1.5px]
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              px-4
              py-2.5
              text-[10px]
              text-[var(--text-muted)]
              shadow-sm
              backdrop-blur-xl
              sm:px-5
              sm:text-xs
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-purple-500
                shadow-[0_0_7px_rgba(168,85,247,0.5)]
              "
            />

            <span>
              Building knowledge, one step at a time.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;