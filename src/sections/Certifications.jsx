import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web Development Internship",
    issuer: "AutoCluster",
    type: "Internship Certificate",
    icon: "🌐",
  },
  {
    title: "Smart India Hackathon 2026",
    issuer: "Karim City College",
    type: "Achievement",
    icon: "🏆",
  },
  {
    title: "5★ Python",
    issuer: "HackerRank",
    type: "Coding Achievement",
    icon: "⭐",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 text-[var(--text-main)]"
    >
      {/* =====================================================
          THEME-AWARE VERIFIED COLORS
      ====================================================== */}

      <style>
        {`
          :root {
            --verified-color: #34d399;
            --verified-bg: rgba(16, 185, 129, 0.08);
            --verified-border: rgba(16, 185, 129, 0.20);
            --verified-soft: rgba(52, 211, 153, 0.20);
            --verified-line: rgba(52, 211, 153, 0.20);
          }

          html.light {
            --verified-color: #047857;
            --verified-bg: rgba(5, 150, 105, 0.07);
            --verified-border: rgba(5, 150, 105, 0.24);
            --verified-soft: rgba(5, 150, 105, 0.14);
            --verified-line: rgba(5, 150, 105, 0.18);
          }
        `}
      </style>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />

      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/5 blur-[110px]" />

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            Credentials & Achievements
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Certifications{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              & Achievements
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Certifications, internship credentials and achievements from my
            learning and development journey.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/40" />

            <div className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/40" />
          </div>
        </motion.div>

        {/* =====================================================
            CERTIFICATIONS GRID
        ====================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Soft Outer Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[1px]
                  rounded-[23px]
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

              {/* =================================================
                  CARD
              ================================================== */}

              <div
                className="
                  relative
                  min-h-[245px]
                  overflow-hidden
                  rounded-[22px]
                  border-[1.5px]
                  border-[var(--border-color)]
                  bg-[var(--bg-card)]
                  p-6
                  transition-all
                  duration-500
                  group-hover:border-purple-500/30
                  group-hover:shadow-[0_18px_50px_rgba(124,58,237,0.07)]
                "
              >
                {/* Top Highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-purple-500/30
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD NUMBER
                ================================================== */}

                <div className="absolute right-5 top-4 text-[11px] font-semibold tracking-[0.2em] text-[var(--text-main)]/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================== */}

                <div className="mt-6 flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-purple-500/20
                      bg-purple-500/8
                      text-2xl
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-purple-500/30
                      group-hover:bg-purple-500/12
                    "
                  >
                    {certificate.icon}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    {/* Type Badge */}
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-[var(--border-color)]
                        bg-white/[0.03]
                        px-2.5
                        py-1
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[var(--text-muted)]
                        transition-colors
                        duration-300
                        group-hover:border-purple-500/20
                        group-hover:text-purple-300
                      "
                    >
                      {certificate.type}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        mt-4
                        text-[17px]
                        font-bold
                        leading-6
                        text-[var(--text-main)]
                        transition-colors
                        duration-300
                        group-hover:text-purple-300
                      "
                    >
                      {certificate.title}
                    </h3>

                    {/* Issuer */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400/70" />

                      <p className="text-sm leading-5 text-purple-400/90">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM DIVIDER
                ================================================== */}

                <div className="absolute bottom-[50px] left-6 right-6 h-px bg-[var(--border-color)]" />

                {/* =================================================
                    VERIFIED BADGE
                ================================================== */}

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  {/* Green Verified Badge */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      px-2.5
                      py-1
                      transition-all
                      duration-300
                    "
                    style={{
                      borderColor: "var(--verified-border)",
                      backgroundColor: "var(--verified-bg)",
                    }}
                  >
                    {/* Check Circle */}
                    <span
                      className="
                        flex
                        h-3.5
                        w-3.5
                        items-center
                        justify-center
                        rounded-full
                        text-[9px]
                        font-bold
                      "
                      style={{
                        backgroundColor: "var(--verified-soft)",
                        color: "var(--verified-color)",
                      }}
                    >
                      ✓
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                      style={{
                        color: "var(--verified-color)",
                      }}
                    >
                      Verified Credential
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    whileHover={{ x: 3 }}
                    className="
                      text-xs
                      text-purple-400/40
                      transition-all
                      duration-300
                      group-hover:text-purple-400/80
                    "
                  >
                    ↗
                  </motion.span>
                </div>

                {/* Very Soft Green Accent */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-20
                    -translate-x-1/2
                    opacity-0
                    blur-sm
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    backgroundColor: "var(--verified-line)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]/60">
            Continuous Learning{" "}
            <span className="mx-2 text-purple-400/50">•</span>
            Continuous Growth
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;