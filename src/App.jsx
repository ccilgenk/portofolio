import React from 'react';

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen selection:bg-pink-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">
          Alara<span className="text-pink-500">.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#skills" className="hover:text-black transition">Skills</a>
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm transition"
        >
          Hire Me
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
            Crafting digital experiences <br />
            <span className="text-gray-400">with care.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            I design and build thoughtful interfaces — where visual clarity meets technical precision and every detail earns its place.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <a href="#projects" className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-xl text-sm transition">
              View Work
            </a>
            <a href="#about" className="border border-gray-300 hover:border-gray-400 text-gray-800 font-medium px-6 py-3 rounded-xl text-sm transition">
              About Me
            </a>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-sm bg-stone-100 rounded-3xl p-4 shadow-lg border border-gray-100 relative">
            <div className="overflow-hidden rounded-2xl h-80 bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" 
                alt="Alara Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Available for work</p>
              <p className="text-sm font-bold text-gray-900">Aug 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">48+</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">6 yrs</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-900">30+</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">Happy Clients</p>
          </div>
        </div>
      </section>

      {/* ABOUT & DETAILS SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">A designer who thinks in systems.</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            I'm Alara — a UI/UX designer and frontend developer based in Jakarta. I believe great interfaces are built at the intersection of strong visual intuition and engineering discipline.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            My work spans brand identity, product design, and interactive development. Whether I'm crafting a design system or writing TypeScript, I bring the same attention to detail and love for the craft.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 space-y-6 text-sm">
          <div>
            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Languages</p>
            <p className="text-gray-900 font-medium mt-1">Indonesian, English, Japanese</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Education</p>
            <p className="text-gray-900 font-medium mt-1">B.A. Visual Communication Design</p>
          </div>
          <div>
            <p className="text-gray-400 uppercase tracking-wider text-xs font-semibold">Currently Reading</p>
            <p className="text-gray-900 font-medium mt-1">Ways of Seeing – John Berger</p>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Selected work.</h2>
          <p className="text-gray-500 mt-1 text-sm">A handful of projects that represent different facets of what I do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="bg-stone-100 rounded-3xl overflow-hidden h-72 border border-gray-100 flex items-center justify-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=700" 
                alt="Lumiere Studio" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Brand Identity & Web</p>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">Lumiere Studio</h3>
              </div>
              <span className="text-sm text-gray-400 font-medium">2025</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="bg-stone-100 rounded-3xl overflow-hidden h-72 border border-gray-100 flex items-center justify-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700" 
                alt="MARA Dashboard" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-400 font-semibold tracking-wide uppercase">Product Design</p>
                <h3 className="text-lg font-bold text-gray-900 mt-0.5">MARA Dashboard</h3>
              </div>
              <span className="text-sm text-gray-400 font-medium">2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight">Let's make something beautiful.</h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
            I'm open to freelance projects, long-term collaborations, and full-time opportunities. If you have a vision, I'd love to hear it.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <div>
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold block">Email</span>
              <a href="mailto:alara@design.io" className="text-gray-900 font-medium hover:underline">alara@design.io</a>
            </div>
            <div>
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold block">LinkedIn</span>
              <a href="#" className="text-gray-900 font-medium hover:underline">linkedin.com/in/alaradesign</a>
            </div>
            <div>
              <span className="text-gray-400 uppercase tracking-wider text-xs font-semibold block">Dribbble</span>
              <a href="#" className="text-gray-900 font-medium hover:underline">dribbble.com/alara</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Subject</label>
            <input type="text" placeholder="Project Inquiry" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Message</label>
            <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition"></textarea>
          </div>
          <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3.5 rounded-xl text-sm transition shadow-sm">
            Send Message
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 Alara. Designed with care, built with code.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium text-gray-900">
          <a href="#" className="hover:text-pink-500 transition">Dribbble</a>
          <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
          <a href="#" className="hover:text-pink-500 transition">Twitter</a>
        </div>
      </footer>

    </div>
  );
}