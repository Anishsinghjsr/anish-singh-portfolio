// import { useEffect, useState } from "react";
// import { Menu, X, Download, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "light") {
//       document.documentElement.classList.add("light");
//       setIsLight(true);
//     } else {
//       document.documentElement.classList.remove("light");
//       setIsLight(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const nextTheme = !isLight;

//     setIsLight(nextTheme);

//     if (nextTheme) {
//       document.documentElement.classList.add("light");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.remove("light");
//       localStorage.setItem("theme", "dark");
//     }
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className="
//         fixed left-0 top-0 z-50 w-full
//         border-b border-white/10
//         bg-[#050505]/80
//         backdrop-blur-xl
//         transition-all duration-300
//       "
//     >
//       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

//         {/* Logo */}
//         <a
//           href="#home"
//           onClick={closeMenu}
//           className="text-xl font-bold tracking-wide text-white transition-colors duration-300"
//         >
//           Anish Singh<span className="text-purple-500">.</span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden items-center gap-8 md:flex">

//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="
//                 text-sm font-medium
//                 text-gray-300
//                 transition-colors duration-300
//                 hover:text-purple-400
//               "
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-full
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={18}
//                 className="transition-transform duration-300 group-hover:rotate-12"
//               />
//             ) : (
//               <Sun
//                 size={18}
//                 className="transition-transform duration-300 group-hover:rotate-45"
//               />
//             )}
//           </button>

//           {/* Resume */}
//           <a
//             href="/Resume%20(25).pdf"
//             download
//             className="
//               flex items-center gap-2
//               rounded-full
//               border border-purple-500/50
//               bg-purple-600
//               px-5 py-2.5
//               text-sm font-semibold text-white
//               transition-all duration-300
//               hover:bg-purple-500
//               hover:shadow-lg
//               hover:shadow-purple-500/20
//             "
//           >
//             <Download size={16} />
//             Resume
//           </a>
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex items-center gap-2 md:hidden">

//           {/* Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-lg
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={19}
//                 className="transition-transform duration-300 group-hover:rotate-12"
//               />
//             ) : (
//               <Sun
//                 size={19}
//                 className="transition-transform duration-300 group-hover:rotate-45"
//               />
//             )}
//           </button>

//           {/* Mobile Menu */}
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle navigation menu"
//             className="
//               rounded-lg
//               border border-white/10
//               p-2
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-white/10
//               hover:text-purple-400
//             "
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div
//           className="
//             border-t border-white/10
//             bg-[#050505]
//             px-6 py-6
//             md:hidden
//           "
//         >
//           <div className="flex flex-col gap-5">

//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className="
//                   text-base font-medium
//                   text-gray-300
//                   transition-colors duration-300
//                   hover:text-purple-400
//                 "
//               >
//                 {link.name}
//               </a>
//             ))}

//             {/* Mobile Resume */}
//             <a
//               href="/Resume%20(25).pdf"
//               download
//               onClick={closeMenu}
//               className="
//                 flex w-fit items-center gap-2
//                 rounded-full
//                 bg-purple-600
//                 px-5 py-2.5
//                 text-sm font-semibold text-white
//                 transition-all duration-300
//                 hover:bg-purple-500
//               "
//             >
//               <Download size={16} />
//               Download Resume
//             </a>

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;

// import { useEffect, useState } from "react";
// import { Menu, X, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "light") {
//       document.documentElement.classList.add("light");
//       setIsLight(true);
//     } else {
//       document.documentElement.classList.remove("light");
//       setIsLight(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const nextTheme = !isLight;

//     setIsLight(nextTheme);

//     if (nextTheme) {
//       document.documentElement.classList.add("light");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.remove("light");
//       localStorage.setItem("theme", "dark");
//     }
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className="
//         fixed left-0 top-0 z-50 w-full
//         border-b border-white/10
//         bg-[#050505]/80
//         backdrop-blur-xl
//         transition-all duration-300
//       "
//     >
//       <nav
//         className="
//           mx-auto flex h-20 max-w-7xl
//           items-center justify-between
//           px-6 lg:px-8
//         "
//       >
//         {/* Logo */}
//         <a
//           href="#home"
//           onClick={closeMenu}
//           className="
//             text-xl font-bold tracking-wide
//             text-white
//             transition-colors duration-300
//           "
//         >
//           Anish<span className="text-purple-500">.</span>
//         </a>

//         {/* ================= DESKTOP NAVIGATION ================= */}
//         <div className="hidden items-center gap-8 md:flex">

//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="
//                 text-sm font-medium
//                 text-gray-300
//                 transition-colors duration-300
//                 hover:text-purple-400
//               "
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-full
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={18}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-12
//                 "
//               />
//             ) : (
//               <Sun
//                 size={18}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-45
//                 "
//               />
//             )}
//           </button>
//         </div>

//         {/* ================= MOBILE CONTROLS ================= */}
//         <div className="flex items-center gap-2 md:hidden">

//           {/* Mobile Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-lg
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={19}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-12
//                 "
//               />
//             ) : (
//               <Sun
//                 size={19}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-45
//                 "
//               />
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle navigation menu"
//             className="
//               rounded-lg
//               border border-white/10
//               p-2
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-white/10
//               hover:text-purple-400
//             "
//           >
//             {isOpen ? (
//               <X size={24} />
//             ) : (
//               <Menu size={24} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* ================= MOBILE NAVIGATION ================= */}
//       {isOpen && (
//         <div
//           className="
//             border-t border-white/10
//             bg-[#050505]
//             px-6 py-6
//             md:hidden
//           "
//         >
//           <div className="flex flex-col gap-5">

//             {/* Navigation Links */}
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className="
//                   text-base font-medium
//                   text-gray-300
//                   transition-colors duration-300
//                   hover:text-purple-400
//                 "
//               >
//                 {link.name}
//               </a>
//             ))}

//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;




// import { useEffect, useState } from "react";
// import { Menu, X, Sun, Moon } from "lucide-react";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLight, setIsLight] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "light") {
//       document.documentElement.classList.add("light");
//       setIsLight(true);
//     } else {
//       document.documentElement.classList.remove("light");
//       setIsLight(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const nextTheme = !isLight;

//     setIsLight(nextTheme);

//     if (nextTheme) {
//       document.documentElement.classList.add("light");
//       localStorage.setItem("theme", "light");
//     } else {
//       document.documentElement.classList.remove("light");
//       localStorage.setItem("theme", "dark");
//     }
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <header
//       className="
//         fixed left-0 top-0 z-50 w-full
//         border-b border-white/10
//         bg-[#050505]/80
//         backdrop-blur-xl
//         transition-all duration-300
//       "
//     >
//       <nav
//         className="
//           mx-auto flex h-20 max-w-7xl
//           items-center justify-between
//           px-6 lg:px-8
//         "
//       >
//         {/* ================= CREATIVE KK LOGO ================= */}
//         <a
//           href="#home"
//           onClick={closeMenu}
//           aria-label="Kumkum - Home"
//           className="group flex items-center"
//         >
//           <div
//             className="
//               relative flex h-11 w-14
//               items-center justify-center
//               overflow-hidden
//               rounded-xl
//               border border-purple-500/30
//               bg-gradient-to-br
//               from-purple-600/20
//               to-blue-500/10
//               shadow-lg shadow-purple-500/10
//               transition-all duration-300
//               group-hover:scale-105
//               group-hover:border-purple-500/60
//               group-hover:shadow-purple-500/20
//             "
//           >
//             {/* Double K */}
//             <div className="relative z-10 flex items-center -space-x-1">
//               {/* First K */}
//               <span
//                 className="
//                   text-[21px]
//                   font-black
//                   italic
//                   tracking-tight
//                   text-white
//                 "
//               >
//                 K
//               </span>

//               {/* Second K */}
//               <span
//                 className="
//                   text-[21px]
//                   font-black
//                   italic
//                   tracking-tight
//                   text-purple-400
//                 "
//               >
//                 K
//               </span>
//             </div>

//             {/* Top Right Purple Glow */}
//             <span
//               className="
//                 absolute -right-1 -top-1
//                 h-4 w-4
//                 rounded-full
//                 bg-purple-500
//                 blur-[2px]
//                 opacity-80
//                 transition-all duration-300
//                 group-hover:scale-125
//               "
//             />

//             {/* Bottom Purple Line */}
//             <span
//               className="
//                 absolute bottom-0 left-1/2
//                 h-[2px] w-7
//                 -translate-x-1/2
//                 rounded-full
//                 bg-purple-500
//                 transition-all duration-300
//                 group-hover:w-9
//               "
//             />
//           </div>
//         </a>

//         {/* ================= DESKTOP NAVIGATION ================= */}
//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="
//                 text-sm font-medium
//                 text-gray-300
//                 transition-colors duration-300
//                 hover:text-purple-400
//               "
//             >
//               {link.name}
//             </a>
//           ))}

//           {/* ================= DESKTOP THEME TOGGLE ================= */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-full
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={18}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-12
//                 "
//               />
//             ) : (
//               <Sun
//                 size={18}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-45
//                 "
//               />
//             )}
//           </button>
//         </div>

//         {/* ================= MOBILE CONTROLS ================= */}
//         <div className="flex items-center gap-2 md:hidden">

//           {/* Mobile Theme Toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label={
//               isLight
//                 ? "Switch to dark mode"
//                 : "Switch to light mode"
//             }
//             className="
//               group flex h-10 w-10
//               items-center justify-center
//               rounded-lg
//               border border-white/10
//               bg-white/5
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-purple-500/10
//               hover:text-purple-400
//             "
//           >
//             {isLight ? (
//               <Moon
//                 size={19}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-12
//                 "
//               />
//             ) : (
//               <Sun
//                 size={19}
//                 className="
//                   transition-transform duration-300
//                   group-hover:rotate-45
//                 "
//               />
//             )}
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle navigation menu"
//             className="
//               rounded-lg
//               border border-white/10
//               p-2
//               text-white
//               transition-all duration-300
//               hover:border-purple-500/50
//               hover:bg-white/10
//               hover:text-purple-400
//             "
//           >
//             {isOpen ? (
//               <X size={24} />
//             ) : (
//               <Menu size={24} />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* ================= MOBILE NAVIGATION ================= */}
//       {isOpen && (
//         <div
//           className="
//             border-t border-white/10
//             bg-[#050505]
//             px-6 py-6
//             md:hidden
//           "
//         >
//           <div className="flex flex-col gap-5">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={closeMenu}
//                 className="
//                   text-base font-medium
//                   text-gray-300
//                   transition-colors duration-300
//                   hover:text-purple-400
//                 "
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  /* =========================
     THEME
  ========================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isLight;

    setIsLight(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  /* =========================
     ACTIVE SECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);

        if (section && scrollPosition >= section.offsetTop) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-[var(--border-color)]
        bg-[var(--bg-main)]/85
        backdrop-blur-xl
        transition-all
        duration-300
      "
    >
      {/* =================================================
          TOP LUXURY GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[2px]
          w-40
          -translate-x-1/2
          bg-purple-500
          opacity-60
          blur-[2px]
        "
      />

      <nav
        className="
          mx-auto
          flex
          h-[78px]
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* =================================================
            KK LOGO
        ================================================= */}

        <a
          href="#home"
          onClick={() => {
            closeMenu();
            setActiveLink("#home");
          }}
          className="group relative flex items-center"
          aria-label="Kumkum Home"
        >
          <div
            className="
              relative
              flex
              h-10
              w-12
              items-center
              justify-center
              overflow-hidden
              rounded-lg
              border
              border-purple-500/30
              bg-purple-500/[0.06]
              transition-all
              duration-300
              group-hover:border-purple-500/70
              group-hover:bg-purple-500/10
              group-hover:shadow-[0_0_30px_rgba(168,85,247,0.20)]
            "
          >
            <div className="relative z-10 flex -space-x-1">
              <span
                className="
                  text-[20px]
                  font-black
                  italic
                  leading-none
                  tracking-tighter
                  text-[var(--text-main)]
                "
              >
                A
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  to-purple-500
                  bg-clip-text
                  text-[20px]
                  font-black
                  italic
                  leading-none
                  tracking-tighter
                  text-transparent
                "
              >
                S
              </span>
            </div>

            {/* Corner Glow */}
            <span
              className="
                absolute
                -right-1
                -top-1
                h-4
                w-4
                rounded-full
                bg-purple-500
                blur-[4px]
                opacity-80
                transition-all
                duration-300
                group-hover:scale-150
              "
            />

            {/* Bottom Glow */}
            <span
              className="
                absolute
                bottom-0
                left-1/2
                h-[2px]
                w-5
                -translate-x-1/2
                rounded-full
                bg-purple-500
                shadow-[0_0_10px_rgba(168,85,247,0.8)]
                transition-all
                duration-300
                group-hover:w-8
              "
            />
          </div>
        </a>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="
                  group
                  relative
                  rounded-lg
                  px-1
                  py-2
                  text-[14px]
                  font-bold
                  tracking-wide
                "
              >
                {/* =================================================
                    OUTER DIFFUSED GLOW
                ================================================= */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-7
                    w-[calc(100%+30px)]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-500/20
                    blur-xl
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    SECOND SOFT GLOW
                ================================================= */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-5
                    w-[calc(100%+12px)]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-400/10
                    blur-md
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                {/* =================================================
                    TEXT
                ================================================= */}

                <span
                  className={`
                    relative
                    z-10
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.55)]"
                        : "text-[var(--text-muted)] group-hover:text-[var(--text-main)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]"
                    }
                  `}
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              isLight
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
            className="
              group
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              text-[var(--text-main)]
              transition-all
              duration-300
              hover:border-purple-500/60
              hover:text-purple-400
              hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
            "
          >
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-purple-500/15
                opacity-0
                blur-md
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <span className="relative z-10">
              {isLight ? (
                <Moon
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />
              ) : (
                <Sun
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  "
                />
              )}
            </span>
          </button>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              text-[var(--text-main)]
              transition-all
              duration-300
              hover:border-purple-500/60
              hover:bg-purple-500/10
              hover:text-purple-400
              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* =================================================
          MOBILE MENU
      ================================================= */}

      {isOpen && (
        <div
          className="
            border-t
            border-[var(--border-color)]
            bg-[var(--bg-main)]/95
            px-6
            py-5
            backdrop-blur-xl
            md:hidden
          "
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      closeMenu();
                    }}
                    className="
                      group
                      relative
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5
                      text-[14px]
                      font-bold
                      tracking-wide
                    "
                  >
                    {/* Mobile Glow */}
                    <span
                      className={`
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-8
                        w-[calc(100%+20px)]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-xl
                        bg-purple-500/15
                        blur-xl
                        transition-all
                        duration-400
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }
                      `}
                    />

                    <span
                      className={`
                        relative
                        z-10
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                            : "text-[var(--text-muted)] group-hover:text-[var(--text-main)] group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]"
                        }
                      `}
                    >
                      {link.name}
                    </span>

                    {/* Active Dot */}
                    <span
                      className={`
                        relative
                        z-10
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-purple-500
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "scale-100 opacity-100 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-70"
                        }
                      `}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;