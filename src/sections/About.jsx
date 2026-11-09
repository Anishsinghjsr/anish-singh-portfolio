
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  BrainCircuit,
  Rocket,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications with modern frontend interfaces, backend APIs, authentication and databases.",
  },
  {
    icon: Server,
    title: "Python & Backend",
    description:
      "Developing scalable backend systems and REST APIs using Python, Django and Django REST Framework.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Exploring AI-powered solutions with PyTorch, machine learning concepts and Generative AI technologies.",
  },
  {
    icon: Rocket,
    title: "Deployment & APIs",
    description:
      "Deploying frontend, backend and database applications using modern cloud platforms and REST APIs.",
  },
];

const stats = [
  {
    value: "9+",
    label: "Projects",
  },
  {
    value: "1+",
    label: "Internships",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "01",
    label: "SIH 2026",
  },
];

function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[var(--bg-main)]
        px-6
        py-28
        text-[var(--text-main)]
        transition-colors
        duration-300
        lg:py-32
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-96
          w-96
          rounded-full
          bg-purple-500/[0.07]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-purple-500/60" />

            <div className="flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-purple-400"
              />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.35em]
                  text-purple-400
                "
              >
                About Me
              </span>
            </div>

            <span className="h-px w-8 bg-purple-500/60" />
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Turning Ideas Into
            <span
              className="
                ml-2
                bg-gradient-to-r
                from-purple-400
                via-purple-500
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Digital Solutions
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-muted)]
              sm:text-base
            "
          >
            A developer focused on creating clean, scalable and meaningful
            digital experiences through modern technologies.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <p
                className="
                  mb-3
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-purple-400
                "
              >
                Hello, I'm Anish Singh
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                "
              >
                I build digital products
                <br />
                <span className="text-[var(--text-muted)]">
                  that solve real problems.
                </span>
              </h3>
            </div>

            <div className="max-w-2xl space-y-5">
              <p
                className="
                  text-[15px]
                  leading-8
                  text-[var(--text-muted)]
                "
              >
                I am a BCA Graduate and Full-Stack Developer passionate about
                building modern, responsive and user-friendly web applications.
                I enjoy working across both frontend and backend technologies
                and transforming ideas into practical digital solutions.
              </p>

              <p
                className="
                  text-[15px]
                  leading-8
                  text-[var(--text-muted)]
                "
              >
                My technical experience includes React.js, JavaScript,
                Node.js, Express.js, Python, Django, Django REST Framework,
                SQL, PostgreSQL and MongoDB. I also work with REST APIs,
                authentication, databases and modern deployment platforms.
              </p>

              <p
                className="
                  text-[15px]
                  leading-8
                  text-[var(--text-muted)]
                "
              >
                I have developed projects across AI-powered applications,
                management systems and e-commerce platforms. I continuously
                learn new technologies and look forward to opportunities where
                I can contribute, grow and solve real-world problems.
              </p>
            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-purple-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  !text-white
                  shadow-[0_0_30px_rgba(168,85,247,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-purple-500
                  hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]
                "
              >
                <span className="relative z-10 !text-white">
                  Let's Work Together
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                  className="
                    relative
                    z-10
                    !text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/10
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />
              </a>

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[var(--text-muted)]
                  transition-all
                  duration-300
                  hover:text-purple-400
                "
              >
                Explore My Work

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT EXPERTISE CARDS */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Soft Ambient Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-10
                rounded-[45px]
                bg-purple-600/[0.045]
                blur-[75px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-1/2
                h-52
                w-52
                -translate-y-1/2
                rounded-full
                bg-purple-500/[0.06]
                blur-[85px]
              "
            />

            {/* CARDS GRID */}

            <div className="relative grid gap-6 sm:grid-cols-2">

              {expertise.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      relative
                      min-h-[215px]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-purple-500/20
                      bg-[var(--bg-card)]
                      p-6
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:-translate-y-1.5
                      hover:border-purple-500/50
                      hover:shadow-[0_18px_50px_rgba(168,85,247,0.12)]
                    "
                  >
                    {/* Premium Outer Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -inset-px
                        rounded-2xl
                        bg-gradient-to-br
                        from-purple-500/10
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Top Right Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-12
                        -top-12
                        h-36
                        w-36
                        rounded-full
                        bg-purple-500/[0.10]
                        blur-[48px]
                        transition-all
                        duration-500
                        group-hover:scale-125
                        group-hover:bg-purple-500/[0.15]
                      "
                    />

                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-purple-500/25
                        bg-purple-500/[0.08]
                        text-purple-400
                        shadow-[0_0_20px_rgba(168,85,247,0.05)]
                        transition-all
                        duration-300
                        group-hover:border-purple-500/50
                        group-hover:bg-purple-500/15
                        group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Content */}

                    <h4
                      className="
                        relative
                        z-10
                        mt-6
                        text-[17px]
                        font-bold
                        text-[var(--text-main)]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        relative
                        z-10
                        mt-2.5
                        text-sm
                        leading-6
                        text-[var(--text-muted)]
                      "
                    >
                      {item.description}
                    </p>

                    {/* Bottom Premium Line */}

                    <div
                      className="
                        absolute
                        bottom-0
                        left-6
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-purple-500
                        via-purple-400
                        to-transparent
                        shadow-[0_0_10px_rgba(168,85,247,0.55)]
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                    />

                    {/* Corner Accent */}

                    <div
                      className="
                        absolute
                        bottom-0
                        right-0
                        h-16
                        w-16
                        rounded-tl-full
                        bg-purple-500/[0.025]
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-card)]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-24
              w-96
              -translate-x-1/2
              rounded-full
              bg-purple-500/[0.05]
              blur-[60px]
            "
          />

          <div className="relative grid grid-cols-2 md:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  group
                  relative
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:bg-purple-500/[0.025]
                  sm:p-7
                  ${
                    index !== stats.length - 1
                      ? "border-b border-[var(--border-color)] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-20
                    w-20
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-500/10
                    blur-2xl
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <h3
                  className="
                    relative
                    text-3xl
                    font-black
                    tracking-tight
                    text-purple-400
                    transition-all
                    duration-300
                    group-hover:drop-shadow-[0_0_14px_rgba(168,85,247,0.35)]
                  "
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    relative
                    mt-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[var(--text-muted)]
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;

