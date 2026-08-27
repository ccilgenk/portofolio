import { useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { category: "Design", items: ["Figma", "UI/UX Design", "Prototyping", "Brand Identity", "Typography"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
  { category: "Tools", items: ["Git & GitHub", "Vite", "VS Code", "Notion", "Linear"] },
];

const PROJECTS = [
  {
    title: "Lumière Studio",
    category: "Brand Identity & Web",
    year: "2025",
    description:
      "Complete visual identity and website for a contemporary photography studio. Minimal palette, editorial grid, and smooth micro-animations.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&auto=format",
    tags: ["Branding", "Web Design", "Figma"],
  },
  {
    title: "Mara Dashboard",
    category: "Product Design",
    year: "2025",
    description:
      "Analytics dashboard for an e-commerce SaaS platform. Focused on data clarity, accessible color contrast, and responsive breakpoints.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    tags: ["Dashboard", "React", "TypeScript"],
  },
  {
    title: "Bloom App",
    category: "Mobile UI",
    year: "2024",
    description:
      "Wellness and habit-tracking mobile app with warm tones and calming motion. Designed end-to-end from user research to handoff.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format",
    tags: ["Mobile", "UI/UX", "Prototyping"],
  },
  {
    title: "Riviera Editorial",
    category: "Art Direction",
    year: "2024",
    description:
      "Digital magazine layout for a travel publication. Asymmetric grids, large-format photography, and variable-weight type pairings.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
    tags: ["Editorial", "Art Direction", "Typography"],
  },
];

export default function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0eeec] text-[#2c2825]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f0eeec]/90 backdrop-blur-md border-b border-[#e4e0dc]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-[family-name:var(--font-display)] text-xl text-[#2c2825] tracking-tight"
          >
            Alara
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-[#5a534e] hover:text-[#c96a7e] transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#f4bfca] hover:bg-[#e89aaa] text-[#2c2825] text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#2c2825] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#2c2825] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#2c2825] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#f0eeec] border-t border-[#e4e0dc] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-[#5a534e] hover:text-[#c96a7e] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-5 max-w-6xl mx-auto overflow-hidden">
        {/* Decorative blush blob */}
        <div
          className="absolute -top-10 right-0 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #fae8ec 0%, transparent 70%)" }}
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#c96a7e] mb-5">
              Designer & Developer
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 font-[family-name:var(--font-display)]">
              Crafting digital
              <br />
              <span className="italic text-[#c96a7e]">experiences</span>
              <br />
              with care.
            </h1>
            <p className="text-[#5a534e] text-base md:text-lg leading-relaxed max-w-md mb-8">
              I design and build thoughtful interfaces — where visual clarity meets
              technical precision and every detail earns its place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="bg-[#2c2825] hover:bg-[#5a534e] text-[#f0eeec] text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
              >
                View Work
              </a>
              <a
                href="#about"
                className="border border-[#9b918a] hover:border-[#c96a7e] text-[#2c2825] text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
            <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96">
              <div className="absolute inset-0 bg-[#f4bfca] rounded-[2rem] md:rounded-[2.5rem] rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=640&h=800&fit=crop&auto=format"
                alt="Alara — designer and developer"
                className="relative z-10 w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem] -rotate-1"
              />
              {/* Tag badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white border border-[#e4e0dc] rounded-2xl px-3 py-2 shadow-sm">
                <p className="text-xs text-[#9b918a]">Available for work</p>
                <p className="text-sm font-semibold text-[#2c2825]">Aug 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-[#e4e0dc]">
          {[
            { num: "48+", label: "Projects Delivered" },
            { num: "6 yrs", label: "Experience" },
            { num: "30+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl text-[#2c2825]">
                {stat.num}
              </p>
              <p className="text-xs sm:text-sm text-[#9b918a] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 px-5 bg-[#e4e0dc]/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <span className="text-xs font-medium tracking-widest uppercase text-[#c96a7e] mb-4 block">
              About
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 md:mb-8">
              A designer who{" "}
              <span className="italic">thinks</span> in systems.
            </h2>
            <p className="text-[#5a534e] leading-relaxed mb-5">
              I'm Alara — a UI/UX designer and frontend developer based in Jakarta. I believe
              great interfaces are built at the intersection of strong visual intuition and
              engineering discipline.
            </p>
            <p className="text-[#5a534e] leading-relaxed mb-5">
              My work spans brand identity, product design, and interactive development.
              Whether I'm crafting a design system or writing TypeScript, I bring the same
              attention to detail and love for the craft.
            </p>
            <p className="text-[#5a534e] leading-relaxed">
              Outside of screens, I paint with watercolors, collect editorial magazines, and
              drink too much tea.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { label: "Location", value: "Jakarta, Indonesia" },
              { label: "Languages", value: "Indonesian, English, Japanese" },
              { label: "Education", value: "B.A. Visual Communication Design, ITB '20" },
              { label: "Currently reading", value: "Ways of Seeing — John Berger" },
              { label: "Interests", value: "Typography, Editorial Design, Photography" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-4 border-b border-[#d4cfca] last:border-0 gap-1"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-[#9b918a] sm:w-36 flex-shrink-0">
                  {label}
                </span>
                <span className="text-sm text-[#2c2825] sm:text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-[#c96a7e] mb-4 block">
                Skills
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl leading-tight">
                Tools of the trade.
              </h2>
            </div>
            <p className="text-[#9b918a] text-sm max-w-xs leading-relaxed">
              A curated set of disciplines I've sharpened over six years of client and
              product work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="bg-white border border-[#e4e0dc] rounded-3xl p-6 md:p-8 hover:border-[#f4bfca] hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-[#fae8ec] mb-6" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl mb-6">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#5a534e]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e89aaa] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24 px-5 bg-[#e4e0dc]/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-[#c96a7e] mb-4 block">
                Projects
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl leading-tight">
                Selected work.
              </h2>
            </div>
            <p className="text-[#9b918a] text-sm max-w-xs leading-relaxed">
              A handful of projects that represent different facets of what I do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <article
                key={project.title}
                className={`group relative bg-white border border-[#e4e0dc] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#f4bfca] hover:shadow-md ${
                  activeProject === idx ? "md:col-span-2" : ""
                }`}
                onClick={() => setActiveProject(activeProject === idx ? null : idx)}
              >
                <div
                  className={`overflow-hidden ${activeProject === idx ? "h-64 md:h-80" : "h-52"} transition-all duration-500`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-widest uppercase text-[#9b918a]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#9b918a]">{project.year}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl mb-3">
                    {project.title}
                  </h3>
                  {activeProject === idx && (
                    <p className="text-[#5a534e] text-sm leading-relaxed mb-5 animate-in fade-in duration-300">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#fae8ec] text-[#c96a7e] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-[#c96a7e] mb-4 block">
                Contact
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl leading-tight mb-5 md:mb-6">
                Let's make something{" "}
                <span className="italic text-[#c96a7e]">beautiful</span>.
              </h2>
              <p className="text-[#5a534e] leading-relaxed mb-10">
                I'm open to freelance projects, long-term collaborations, and full-time
                opportunities. If you have a vision, I'd love to hear it.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Email", value: "alara@design.id" },
                  { label: "LinkedIn", value: "linkedin.com/in/alaradesign" },
                  { label: "Dribbble", value: "dribbble.com/alara" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-[#9b918a] w-20">
                      {label}
                    </span>
                    <span className="text-sm text-[#2c2825]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#9b918a] uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white border border-[#e4e0dc] rounded-xl px-4 py-3 text-sm text-[#2c2825] placeholder:text-[#c5bdb8] focus:outline-none focus:border-[#f4bfca] focus:ring-2 focus:ring-[#fae8ec] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#9b918a] uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-white border border-[#e4e0dc] rounded-xl px-4 py-3 text-sm text-[#2c2825] placeholder:text-[#c5bdb8] focus:outline-none focus:border-[#f4bfca] focus:ring-2 focus:ring-[#fae8ec] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9b918a] uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What are we building?"
                  className="w-full bg-white border border-[#e4e0dc] rounded-xl px-4 py-3 text-sm text-[#2c2825] placeholder:text-[#c5bdb8] focus:outline-none focus:border-[#f4bfca] focus:ring-2 focus:ring-[#fae8ec] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9b918a] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-[#e4e0dc] rounded-xl px-4 py-3 text-sm text-[#2c2825] placeholder:text-[#c5bdb8] focus:outline-none focus:border-[#f4bfca] focus:ring-2 focus:ring-[#fae8ec] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2c2825] hover:bg-[#5a534e] text-[#f0eeec] font-medium py-4 rounded-xl transition-colors duration-200 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e4e0dc] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-display)] text-lg text-[#2c2825]">
            Alara
          </span>
          <p className="text-xs text-[#9b918a]">
            © 2026 Alara. Designed & built with care.
          </p>
          <div className="flex gap-6">
            {["Dribbble", "LinkedIn", "GitHub"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-[#9b918a] hover:text-[#c96a7e] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
