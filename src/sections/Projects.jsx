import { motion } from "framer-motion";

const projects = [
  {
    title: "EcoSmart",
    category: "AI-Powered Smart Waste Management",
    image:
      "https://www.dronevizor.com/Solutions/civixai/assets/images/ICRO.webp",
    description:
      "AI-powered smart waste management and sanitation system with waste classification, QR dustbin tracking, complaints, task management, dashboards, notifications and analytics.",
    tech: [
      "Python",
      "Django",
      "DRF",
      "React.js",
      "PostgreSQL",
      "PyTorch",
      "Tailwind CSS",
      "JWT",
    ],
    live: "https://cleanprojest.netlify.app/",
    featured: true,
  },

  {
    title: "QueueLess",
    category: "Smart Queue Management System",
    image:
      "https://mlaisolution.com/assets/images/page/queue_management_system.webp",
    description:
      "Smart queue management system with token generation, real-time queue tracking, service management, admin dashboard and secure role-based authentication.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
    ],
    live: "https://queueless-phi-wheat.vercel.app/",
    featured: true,
  },

  {
    title: "E-Commerce Application",
    category: "Full-Stack E-Commerce Platform",
    image:
      "https://cdn.dribbble.com/userupload/47494680/file/b72f7348d4450bf68ce7567cd67f32dc.png?resize=752x&vertical=center",
    description:
      "Full-stack e-commerce application with product management, authentication, search, shopping cart, checkout, orders and CRUD operations.",
    tech: [
      "React.js",
      "Django",
      "Python",
      "PostgreSQL",
      "REST APIs",
    ],
    live: "https://e-cart-gray-one.vercel.app/",
    featured: false,
  },

  {
    title: "Smart Study",
    category: "Online Learning & Test Platform",
    image:
      "https://cdn.dribbble.com/userupload/45465716/file/5ca249e8bd3bee6d83826d1b19888177.png?crop=0x0-4096x3072&resize=1600x1200",
    description:
      "Online learning and test platform where students can study subjects, take tests, view marks, check rankings and practice questions based on difficulty levels.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "SQL",
      "HTML",
      "Tailwind CSS",
    ],
    live: null,
    featured: false,
  },

  {
    title: "Recipe App",
    category: "Recipe Search & Discovery App",
    image:
      "https://cdn.dribbble.com/userupload/5015823/file/original-bc194aa2cf8c17332822b70d48ff61f7.png?resize=1600x1200",
    description:
      "Recipe application that allows users to explore and discover recipes with ingredients, cooking details and recipe information through a simple and user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://recipe-explorer-web.netlify.app/",
    featured: false,
  },

  {
    title: "WiFi-Hunt",
    category: "Python Networking Tool",
    image:
      "https://7signal.com/public/pages/products-mobile-eye.png",
    description:
      "A Python-based terminal application designed to scan and display available Wi-Fi networks and their basic network information through a command-line interface.",
    tech: ["Python", "Networking", "CLI"],
    live: null,
    featured: false,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="
        relative isolate overflow-hidden
        bg-[var(--bg-main)]
        px-5 py-24
        text-[var(--text-main)]
        transition-colors duration-500
        md:px-8 md:py-32
      "
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}
        <div
          className="
            absolute left-1/2 top-0
            h-[450px] w-[450px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.07]
            blur-[150px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute -left-40 top-1/2
            h-80 w-80
            rounded-full
            bg-fuchsia-500/[0.05]
            blur-[130px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-40 bottom-20
            h-80 w-80
            rounded-full
            bg-indigo-500/[0.05]
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(120,120,120,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,120,.35)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-purple-500/20
              bg-purple-500/[0.07]
              px-4 py-2
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-1.5 w-1.5
                animate-pulse
                rounded-full
                bg-purple-500
                shadow-[0_0_12px_rgba(168,85,247,0.8)]
              "
            />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-purple-500">
              My Work
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
            Featured{" "}
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
              Projects
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-muted)]
              sm:text-base
            "
          >
            A selection of applications and systems I have built using
            modern frontend, backend, database and AI technologies.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />

            <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="grid gap-7 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: index * 0.07,
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Outer glow */}
              <div
                className="
                  absolute -inset-[1px]
                  rounded-[24px]
                  bg-gradient-to-br
                  from-purple-500/30
                  via-transparent
                  to-fuchsia-500/20
                  opacity-0
                  blur-sm
                  transition duration-500
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  CARD
              ================================================== */}

              <div
                className="
                  relative
                  h-full
                  overflow-hidden
                  rounded-[24px]

                  border-[1.5px]
                  border-[var(--border-color)]

                  bg-[var(--bg-card)]

                  shadow-[0_12px_45px_rgba(0,0,0,0.05)]

                  backdrop-blur-xl

                  transition-all duration-500

                  group-hover:border-purple-500/50

                  group-hover:shadow-[0_25px_70px_rgba(124,58,237,0.14)]
                "
              >
                {/* Top shine */}
                <div
                  className="
                    pointer-events-none
                    absolute left-0 right-0 top-0
                    z-30
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-500/70
                    to-transparent
                    opacity-0
                    transition duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-64 overflow-hidden bg-black/5 sm:h-72">

                  <motion.img
                    src={project.image}
                    alt={`${project.title} project`}
                    loading="lazy"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.7 }}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                    "
                  />

                  {/* Image gradient */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Subtle purple overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-purple-600/[0.03]
                      opacity-0
                      transition duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      className="
                        absolute right-5 top-5
                        z-20
                        flex items-center gap-2
                        rounded-full
                        border border-purple-300/20
                        bg-purple-600/90
                        px-3.5 py-1.5
                        text-xs
                        font-semibold
                        text-white
                        shadow-[0_8px_25px_rgba(124,58,237,0.35)]
                        backdrop-blur-md
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                      Featured
                    </div>
                  )}

                  {/* Project number */}
                  <div
                    className="
                      absolute bottom-5 left-5
                      z-20
                      text-xs
                      font-semibold
                      tracking-[0.25em]
                      text-white/50
                    "
                  >
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* View icon */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="
                        absolute
                        bottom-5
                        right-5
                        z-20
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        hover:scale-110
                        hover:border-purple-400/60
                        hover:bg-purple-600/80
                      "
                    >
                      ↗
                    </a>
                  )}
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 sm:p-7">

                  {/* Category */}
                  <p
                    className="
                      mb-2
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-purple-500
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="
                        text-2xl
                        font-bold
                        tracking-tight
                        text-[var(--text-main)]
                      "
                    >
                      {project.title}
                    </h3>

                    <span
                      className="
                        mt-1
                        text-lg
                        text-[var(--text-muted)]
                        opacity-40
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:text-purple-500
                        group-hover:opacity-100
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-[var(--text-muted)]
                    "
                  >
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-[var(--border-color)]" />

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, techIndex) => (
                      <motion.span
                        key={item}
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
                            index * 0.04 +
                            techIndex * 0.025,
                        }}
                        className="
                          rounded-full

                          border-[1.5px]
                          border-[var(--border-color)]

                          bg-[var(--bg-main)]

                          px-3
                          py-1.5

                          text-[11px]
                          font-medium

                          text-[var(--text-main)]

                          opacity-75

                          transition-all
                          duration-300

                          hover:border-purple-500/50
                          hover:bg-purple-500/[0.08]
                          hover:text-purple-500
                          hover:opacity-100
                        "
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {/* =================================================
                      BOTTOM ACTION
                  ================================================== */}

                  <div className="mt-7 flex items-center justify-between">

                    {/* Status */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-[var(--text-muted)]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-green-500
                          shadow-[0_0_8px_rgba(34,197,94,0.7)]
                        "
                      />

                      Project
                    </div>

                    {/* Live Demo */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group/button
                          inline-flex
                          items-center
                          gap-2

                          rounded-xl

                          border-[1.5px]
                          border-purple-500/30

                          bg-purple-500/[0.08]

                          px-4
                          py-2.5

                          text-sm
                          font-semibold
                          text-purple-500

                          transition-all
                          duration-300

                          hover:border-purple-500/60
                          hover:bg-purple-500
                          hover:text-white
                          hover:shadow-[0_8px_25px_rgba(124,58,237,0.25)]
                        "
                      >
                        Live Demo

                        <span
                          className="
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                          "
                        >
                          →
                        </span>
                      </a>
                    ) : (
                      <span
                        className="
                          rounded-xl
                          border-[1.5px]
                          border-[var(--border-color)]
                          px-4 py-2.5
                          text-xs
                          font-medium
                          text-[var(--text-muted)]
                        "
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-[var(--text-muted)]">
            More projects and experiments are{" "}
            <span className="font-medium text-purple-500">
              coming soon.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
