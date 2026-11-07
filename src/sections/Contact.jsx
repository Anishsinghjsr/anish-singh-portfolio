import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      const response = await fetch(
        "https://kumkum-portfolio.onrender.com/api/contact/send/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      alert("Message sent successfully! ✅");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--bg-main)] px-6 py-24 text-[var(--text-main)]"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/8 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-fuchsia-600/5 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-purple-600/5 blur-[120px]" />

      {/* =====================================================
          GRID BACKGROUND
      ===================================================== */}

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
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
            </span>

            Get In Touch
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)] md:text-base">
            Have a project, internship or job opportunity? Feel free to reach
            out. I would love to connect with you.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/40" />

            <div className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/40" />
          </div>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ===================================================
              LEFT CONTACT CARD
          =================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div
              className="
                pointer-events-none
                absolute
                -inset-[1px]
                rounded-[25px]
                bg-gradient-to-br
                from-purple-500/18
                via-transparent
                to-fuchsia-500/10
                opacity-0
                blur-md
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[24px]
                border-[1.5px]
                border-[var(--border-color)]
                bg-[var(--bg-card)]
                p-6
                transition-all
                duration-500
                group-hover:border-purple-500/35
                group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
                md:p-8
              "
            >
              <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute right-7 top-5 text-[11px] font-semibold tracking-[0.2em] text-[var(--text-main)]/15">
                01
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/8 text-xl transition-all duration-500 group-hover:scale-105 group-hover:border-purple-500/30">
                    👋
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400">
                      Open To Opportunities
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[var(--text-main)]">
                      Let's connect
                    </h3>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[var(--text-muted)]">
                  I am open to opportunities as a Full-Stack Developer,
                  Python Developer and Software Developer. You can contact me
                  through email or connect with me on LinkedIn.
                </p>

                {/* EMAIL */}
                <motion.a
                  href="mailto:anishsinghjsr9546@gmail.com"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="group/email mt-7 flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-white/[0.025] p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.035]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/8 text-lg transition-all duration-300 group-hover/email:scale-105">
                    ✉️
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]/60">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-[var(--text-main)]">
                      anishsinghjsr9546@gmail.com
                    </p>
                  </div>

                  <span className="text-sm text-purple-400/40 transition-all duration-300 group-hover/email:translate-x-1 group-hover/email:text-purple-400">
                    ↗
                  </span>
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href="https://www.linkedin.com/in/anish-singh-a29390447/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="group/linkedin mt-3 flex items-center gap-4 rounded-2xl border border-[var(--border-color)] bg-white/[0.025] p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.035]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/8 text-sm font-bold text-purple-300 transition-all duration-300 group-hover/linkedin:scale-105">
                    in
                  </div>

                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]/60">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm font-medium text-[var(--text-main)]">
                      Connect with me
                    </p>
                  </div>

                  <span className="text-sm text-purple-400/40 transition-all duration-300 group-hover/linkedin:translate-x-1 group-hover/linkedin:text-purple-400">
                    ↗
                  </span>
                </motion.a>

                {/* AVAILABILITY */}
                <div className="mt-7 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]/70">
                    Currently available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT CONTACT FORM
          =================================================== */}

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="group relative"
          >
            <div
              className="
                pointer-events-none
                absolute
                -inset-[1px]
                rounded-[25px]
                bg-gradient-to-br
                from-purple-500/18
                via-transparent
                to-fuchsia-500/10
                opacity-0
                blur-md
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border-[1.5px]
                border-[var(--border-color)]
                bg-[var(--bg-card)]
                p-6
                transition-all
                duration-500
                group-hover:border-purple-500/35
                group-hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]
                md:p-8
              "
            >
              <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-400">
                    Contact Form
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[var(--text-main)]">
                    Send a Message
                  </h3>
                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-purple-500/15 bg-purple-500/5 text-sm text-purple-400 sm:flex">
                  ✦
                </div>
              </div>

              <div className="mt-7 space-y-5">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border-[1.5px] border-[var(--border-color)] bg-white/[0.025] px-4 py-3.5 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)]/45 transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/50 focus:bg-purple-500/[0.025] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.07)]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border-[1.5px] border-[var(--border-color)] bg-white/[0.025] px-4 py-3.5 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)]/45 transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/50 focus:bg-purple-500/[0.025] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.07)]"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="w-full rounded-xl border-[1.5px] border-[var(--border-color)] bg-white/[0.025] px-4 py-3.5 text-sm text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)]/45 transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/50 focus:bg-purple-500/[0.025] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.07)]"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border-[1.5px] border-[var(--border-color)] bg-white/[0.025] px-4 py-3.5 text-sm leading-6 text-[var(--text-main)] outline-none placeholder:text-[var(--text-muted)]/45 transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/50 focus:bg-purple-500/[0.025] focus:shadow-[0_0_0_3px_rgba(124,58,237,0.07)]"
                  />
                </div>

                {/* SEND BUTTON */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={!sending ? { y: -2 } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  className="
                    group/button
                    relative
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-purple-400/20
                    bg-gradient-to-r
                    from-purple-600
                    to-fuchsia-600
                    px-6
                    py-3.5
                    font-semibold
                    !text-white
                    shadow-[0_10px_30px_rgba(124,58,237,0.15)]
                    transition-all
                    duration-300
                    hover:from-purple-500
                    hover:to-fuchsia-500
                    hover:shadow-[0_14px_35px_rgba(124,58,237,0.22)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-20 w-20 rotate-12 bg-white/15 blur-md transition-all duration-700 group-hover/button:left-[110%]" />

                  <span className="relative !text-white">
                    {sending ? "Sending..." : "Send Message →"}
                  </span>
                </motion.button>

                <p className="text-center text-[10px] leading-5 text-[var(--text-muted)]/50">
                  Your message will be sent directly through the contact
                  system.
                </p>
              </div>
            </div>
          </motion.form>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="mt-14 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]/60">
            Let's Build Something{" "}
            <span className="mx-2 text-purple-400/50">•</span>
            Great Together
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
