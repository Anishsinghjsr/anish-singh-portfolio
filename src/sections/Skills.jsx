
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚛️",
    number: "01",
    description:
      "Building modern, responsive and interactive user interfaces with clean and reusable components.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",
    number: "02",
    description:
      "Developing scalable backend systems, server-side applications and RESTful APIs.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },

  {
    title: "Database",
    icon: "🗄️",
    number: "03",
    description:
      "Managing structured data, database relationships and efficient data operations.",
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Database Design",
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: "🤖",
    number: "04",
    description:
      "Exploring intelligent applications through machine learning and AI-powered technologies.",
    skills: [
      "PyTorch",
      "Generative AI",
      "AI Integration",
      "Machine Learning Basics",
    ],
  },

  {
    title: "Authentication & Security",
    icon: "🔐",
    number: "05",
    description:
      "Implementing secure authentication, authorization and protected application access.",
    skills: [
      "JWT",
      "Role-Based Access Control",
      "API Authentication",
      "Password Hashing",
    ],
  },

  {
    title: "Tools & Development",
    icon: "🛠️",
    number: "06",
    description:
      "Using modern development tools and workflows to write, test and maintain quality code.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "API Testing",
      "Debugging",
    ],
  },

  {
    title: "Deployment & Cloud",
    icon: "🚀",
    number: "07",
    description:
      "Deploying frontend, backend and database applications using modern cloud platforms.",
    skills: [
      "Vercel",
      "Netlify",
      "Render",
      "Neon PostgreSQL",
      "GitHub",
    ],
  },

  {
    title: "Software Engineering",
    icon: "🧩",
    number: "08",
    description:
      "Applying software engineering fundamentals to build clean, maintainable and reliable applications.",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "Problem Solving",
      "MVC Architecture",
      "API Integration",
      "CRUD Operations",
      "Responsive Design",
      "Clean Code",
    ],
  },

  {
    title: "SEO & Web Optimization",
    icon: "📈",
    number: "09",
    description:
      "Improving website visibility, search engine rankings, page performance and user experience through effective SEO practices.",
    skills: [
      "Search Engine Optimization",
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Meta Tags",
      "SEO-Friendly URLs",
      "Image Optimization",
      "Website Performance",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
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
            absolute left-1/2 top-16
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.08]
            blur-[140px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute -left-40 top-[45%]
            h-80 w-80
            rounded-full
            bg-fuchsia-500/[0.06]
            blur-[120px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute -right-40 bottom-20
            h-80 w-80
            rounded-full
            bg-indigo-500/[0.06]
            blur-[120px]
          "
        />

        {/* Subtle grid */}
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
          className="mx-auto mb-20 max-w-3xl text-center"
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
              My Skills
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Technologies I{" "}
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
              Work With
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-sm leading-7
              text-[var(--text-muted)]
              sm:text-base
            "
          >
            A collection of technologies, tools and engineering practices
            I use to build modern, secure, scalable and production-ready
            web applications.
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />

            <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </motion.div>

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
              }}
              className="group relative"
            >
              {/* Card outer glow */}
              <div
                className="
                  absolute -inset-[1px]
                  rounded-[22px]
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

              {/* MAIN CARD */}
              <div
                className="
                  relative h-full
                  overflow-hidden
                  rounded-[22px]
                  border-[1.5px]
                  border-[var(--border-color)]
                  bg-[var(--bg-card)]
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  backdrop-blur-xl
                  transition-all duration-500
                  group-hover:-translate-y-2
                  group-hover:border-purple-500/50
                  group-hover:shadow-[0_20px_65px_rgba(124,58,237,0.13)]
                "
              >
                {/* Top shine */}
                <div
                  className="
                    pointer-events-none
                    absolute left-0 right-0 top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-500/60
                    to-transparent
                    opacity-0
                    transition duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number */}
                <div
                  className="
                    absolute right-6 top-6
                    text-xs font-semibold
                    tracking-[0.2em]
                    text-[var(--text-muted)]
                    opacity-40
                    transition duration-500
                    group-hover:text-purple-500
                    group-hover:opacity-70
                  "
                >
                  {category.number}
                </div>

                {/* Icon */}
                <div
                  className="
                    relative
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    border-[1.5px]
                    border-purple-500/20
                    bg-purple-500/[0.08]
                    text-2xl
                    shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:border-purple-500/40
                    group-hover:bg-purple-500/[0.12]
                    group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  "
                >
                  {category.icon}

                  {/* Icon ring */}
                  <div
                    className="
                      pointer-events-none
                      absolute -inset-1
                      rounded-[18px]
                      border
                      border-purple-500/0
                      transition duration-500
                      group-hover:border-purple-500/20
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                    tracking-tight
                    text-[var(--text-main)]
                  "
                >
                  {category.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    min-h-[48px]
                    text-sm
                    leading-6
                    text-[var(--text-muted)]
                  "
                >
                  {category.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-[var(--border-color)]" />

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay:
                          index * 0.04 +
                          skillIndex * 0.025,
                      }}
                      className="
                        group/skill
                        relative
                        overflow-hidden
                        rounded-full
                        border-[1.5px]
                        border-[var(--border-color)]
                        bg-[var(--bg-main)]
                        px-3.5 py-2
                        text-xs
                        font-medium
                        text-[var(--text-main)]
                        opacity-85
                        shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                        transition-all duration-300
                        hover:border-purple-500/50
                        hover:bg-purple-500/[0.08]
                        hover:text-purple-500
                        hover:opacity-100
                        hover:shadow-[0_0_20px_rgba(168,85,247,0.10)]
                      "
                    >
                      {/* Shine */}
                      <span
                        className="
                          pointer-events-none
                          absolute inset-y-0
                          -left-full
                          w-1/2
                          rotate-12
                          bg-gradient-to-r
                          from-transparent
                          via-white/20
                          to-transparent
                          transition-all duration-700
                          group-hover/skill:left-[130%]
                        "
                      />

                      <span className="relative z-10">
                        {skill}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            DEVELOPMENT WORKFLOW
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-[24px]"
        >
          {/* Workflow border glow */}
          <div
            className="
              absolute -inset-px
              rounded-[24px]
              bg-gradient-to-r
              from-purple-500/30
              via-fuchsia-500/10
              to-purple-500/30
            "
          />

          <div
            className="
              relative
              rounded-[24px]
              border-[1.5px]
              border-purple-500/20
              bg-[var(--bg-card)]
              p-7
              backdrop-blur-xl
              md:p-10
            "
          >
            {/* Header */}
            <div className="text-center">
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-purple-500
                "
              >
                <span className="h-px w-6 bg-purple-500/50" />

                Workflow

                <span className="h-px w-6 bg-purple-500/50" />
              </div>

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-[var(--text-main)]
                "
              >
                My Development Workflow
              </h3>

              <p
                className="
                  mx-auto mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-[var(--text-muted)]
                "
              >
                From planning to deployment, I follow a structured approach
                focused on quality, security and maintainability.
              </p>
            </div>

            {/* Workflow Steps */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {[
                "Plan",
                "Develop",
                "Test",
                "GitHub",
                "Deploy",
                "Maintain",
              ].map((step, index, array) => (
                <div
                  key={step}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <motion.div
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="
                      rounded-full
                      border-[1.5px]
                      border-[var(--border-color)]
                      bg-[var(--bg-main)]
                      px-5 py-3
                      text-sm
                      font-medium
                      text-[var(--text-main)]
                      shadow-[0_4px_15px_rgba(0,0,0,0.04)]
                      transition-all duration-300
                      hover:border-purple-500/50
                      hover:bg-purple-500/[0.08]
                      hover:text-purple-500
                    "
                  >
                    <span className="mr-2 text-purple-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {step}
                  </motion.div>

                  {index !== array.length - 1 && (
                    <span className="hidden text-purple-500/40 sm:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;


