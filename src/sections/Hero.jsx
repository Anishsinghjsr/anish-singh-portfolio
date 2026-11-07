
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiPostgresql } from "react-icons/si";
import profileImage from "../assets/photo.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative flex min-h-screen items-center overflow-hidden
        bg-[var(--bg-main)] px-6 pt-20
        text-[var(--text-main)] transition-colors duration-500
      "
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute left-[-120px] top-[10%] h-[300px] w-[300px]
          rounded-full bg-purple-500/10 blur-[100px]
        "
      />

      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute bottom-[-100px] right-[-80px] h-[350px] w-[350px]
          rounded-full bg-blue-500/10 blur-[120px]
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          relative z-10 mx-auto grid w-full max-w-7xl
          items-center gap-16 lg:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* AVAILABILITY */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mb-6 inline-flex items-center gap-2 rounded-full
              border border-green-400/20 bg-green-400/10
              px-4 py-2 text-sm font-medium text-green-500
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Open to Opportunities
          </motion.div>

          {/* NAME */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
          >
            Anish{" "}
            <span
              className="
                bg-gradient-to-r from-purple-500 via-violet-500
                to-blue-500 bg-clip-text text-transparent
              "
            >
              Singh
            </span>
          </motion.h1>

          {/* ROLE */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-5 text-2xl font-semibold text-[var(--text-main)] md:text-3xl"
          >
            Full-Stack Developer{" "}
            <span className="text-purple-500">&</span>{" "}
            Python Developer
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="
              mx-auto mt-6 max-w-xl text-base leading-7
              text-[var(--text-muted)] md:text-lg lg:mx-0
            "
          >
            I build modern, responsive and scalable web applications using
            React.js, Node.js, Python, Django, REST APIs and databases.
            Passionate about creating clean and meaningful digital
            experiences.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="
              mt-8 flex flex-wrap items-center justify-center
              gap-4 lg:justify-start
            "
          >
            {/* VIEW PROJECTS */}

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                rounded-xl bg-gradient-to-r from-purple-600 to-blue-600
                px-6 py-3 font-semibold !text-white
                shadow-lg shadow-purple-500/20
                transition-all duration-300
                hover:shadow-purple-500/40
                hover:from-purple-700 hover:to-blue-700
              "
            >
              View My Projects →
            </motion.a>

            {/* LINKEDIN */}

            <motion.a
              href="https://www.linkedin.com/in/anish-singh-a29390447/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl border border-[var(--border-color)]
                bg-[var(--bg-card)] text-[var(--text-main)]
                transition-all hover:border-purple-500/50
                hover:text-purple-500
              "
            >
              <span className="text-lg font-bold">in</span>
            </motion.a>

            {/* EMAIL */}

            <motion.a
              href="mailto:kumkumjsr2026@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="
                flex h-12 w-12 items-center justify-center
                rounded-xl border border-[var(--border-color)]
                bg-[var(--bg-card)] text-[var(--text-main)]
                transition-all hover:border-purple-500/50
                hover:text-purple-500
              "
            >
              <span className="text-lg font-bold">@</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE AREA */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="
            relative flex min-h-[520px] items-center justify-center
            sm:min-h-[560px]
          "
        >
          {/* OUTER ROTATING RING */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="
              absolute h-[300px] w-[300px] rounded-full
              border border-dashed border-purple-500/25
              sm:h-[350px] sm:w-[350px]
              md:h-[430px] md:w-[430px]
            "
          />

          {/* INNER ROTATING RING */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="
              absolute h-[270px] w-[270px] rounded-full
              border border-purple-400/15
              sm:h-[315px] sm:w-[315px]
              md:h-[380px] md:w-[380px]
            "
          />

          {/* PROFILE CIRCLE */}

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            className="
              relative z-10 flex h-60 w-60 items-center justify-center
              sm:h-72 sm:w-72 md:h-80 md:w-80
            "
          >
            {/* OUTER SOFT GLOW */}

            <motion.div
              animate={{
                opacity: [0.35, 0.65, 0.35],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute inset-[-14px] rounded-full
                bg-gradient-to-r from-purple-500/25 via-violet-500/40
                to-blue-500/25 blur-2xl
                dark:from-purple-600/30 dark:via-violet-500/45
                dark:to-blue-600/30
              "
            />

            {/* ROTATING GLOW RING */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="
                absolute inset-[-6px] rounded-full
                bg-[conic-gradient(from_0deg,rgba(196,181,253,0.1),rgba(139,92,246,0.85),rgba(129,140,248,0.35),rgba(167,139,250,0.8),rgba(196,181,253,0.1))]
                blur-[2px]
                dark:bg-[conic-gradient(from_0deg,rgba(76,29,149,0.15),rgba(168,85,247,0.95),rgba(99,102,241,0.45),rgba(139,92,246,0.85),rgba(76,29,149,0.15))]
              "
            />

            {/* THIN PREMIUM RING */}

            <div
              className="
                absolute inset-[-2px] rounded-full
                bg-gradient-to-br from-purple-300/70
                via-violet-400/50 to-blue-400/60 opacity-90
                dark:from-purple-500/70 dark:via-violet-500/60
                dark:to-blue-500/60
              "
            />

            {/* INNER GLASS */}

            <div
              className="
                relative flex h-full w-full items-center justify-center
                overflow-hidden rounded-full bg-white/95
                shadow-[inset_0_0_40px_rgba(139,92,246,0.08)]
                backdrop-blur-xl transition-all duration-500
                dark:bg-[#0d0b16]/95
                dark:shadow-[inset_0_0_45px_rgba(139,92,246,0.12)]
              "
            >
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-full
                  bg-[radial-gradient(circle_at_30%_20%,rgba(196,181,253,0.25),transparent_45%)]
                  dark:bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_45%)]
                "
              />

              {/* PROFILE IMAGE */}

              <motion.img
                src={profileImage}
                alt="Anish Singh"
                animate={{ scale: [1, 1.015, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="
                  relative z-10 h-full w-full
                  object-cover object-center
                "
              />
            </div>
          </motion.div>

          {/* FRONTEND CARD */}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute left-0 top-[10%] z-20 rounded-2xl
              border border-[var(--border-color)]
              bg-[var(--bg-card)] px-4 py-3
              shadow-xl backdrop-blur-md
              sm:left-[2%] sm:top-[13%]
              md:left-[-10px] md:top-[18%]
            "
          >
            <div className="flex items-center gap-3">
              <FaReact className="text-cyan-400" size={28} />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Frontend</p>
                <p className="text-sm font-semibold text-[var(--text-main)]">
                  React.js
                </p>
              </div>
            </div>
          </motion.div>

          {/* BACKEND CARD */}

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute right-[-2px] top-[63%] z-20 rounded-2xl
              border border-[var(--border-color)]
              bg-[var(--bg-card)] px-3 py-2.5
              shadow-xl backdrop-blur-md
              sm:right-[2%] sm:top-[62%] sm:px-4 sm:py-3
              md:right-[-10px] md:top-[42%]
            "
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <FaNodeJs className="shrink-0 text-green-500" size={25} />
              <div>
                <p className="text-[10px] text-[var(--text-muted)] sm:text-xs">
                  Backend
                </p>
                <p className="whitespace-nowrap text-xs font-semibold text-[var(--text-main)] sm:text-sm">
                  Node.js • Express.js
                </p>
                <p className="text-[10px] text-[var(--text-muted)] sm:text-xs">
                  Python • Django
                </p>
              </div>
            </div>
          </motion.div>

          {/* PYTHON */}

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute bottom-[13%] left-[2%] z-20
              flex h-12 w-12 items-center justify-center
              rounded-2xl border border-[var(--border-color)]
              bg-[var(--bg-card)] shadow-lg
              sm:bottom-[15%] sm:left-[8%] sm:h-14 sm:w-14
              md:left-[12%] md:bottom-[17%]
            "
          >
            <FaPython className="text-yellow-400" size={25} />
          </motion.div>

          {/* DJANGO */}

          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute bottom-[7%] right-[10%] z-20
              flex h-12 w-12 items-center justify-center
              rounded-2xl border border-[var(--border-color)]
              bg-[var(--bg-card)] shadow-lg
              sm:bottom-[9%] sm:right-[13%] sm:h-14 sm:w-14
            "
          >
            <SiDjango className="text-green-600" size={25} />
          </motion.div>

          {/* POSTGRESQL */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute bottom-[25%] right-[0%] z-20
              flex h-12 w-12 items-center justify-center
              rounded-2xl border border-[var(--border-color)]
              bg-[var(--bg-card)] shadow-lg
              sm:bottom-[27%] sm:right-[5%] sm:h-14 sm:w-14
              md:right-[8%] md:bottom-[28%]
            "
          >
            <SiPostgresql className="text-blue-500" size={25} />
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute bottom-6 left-1/2 hidden -translate-x-1/2
          text-xs text-[var(--text-muted)] sm:block
        "
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}

export default Hero;




