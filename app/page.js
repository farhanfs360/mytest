"use client";

import { useState } from 'react';

export default function HomePage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thanks! Your message has been received.');
    event.currentTarget.reset();
  };

  return (
    <>
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Personal Portfolio</p>
            <h1>Hi, I'm Farhan</h1>
            <p>
              I build clean, engaging web experiences using HTML, CSS, and
              JavaScript. I specialize in frontend design, product-led
              development, and creating websites that feel polished and perform
              smoothly.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <h2>Professional Snapshot</h2>
              <ul>
                <li>
                  <strong>Role:</strong> Frontend Developer
                </li>
                <li>
                  <strong>Experience:</strong> 5+ years
                </li>
                <li>
                  <strong>Focus:</strong> Responsive Web Apps
                </li>
                <li>
                  <strong>Tools:</strong> HTML, CSS, JavaScript
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="about" className="section container">
          <div className="section-header">
            <p className="section-label">About Me</p>
            <h2>Detail-driven design and development</h2>
          </div>
          <p>
            I create user-friendly websites with a focus on performance,
            accessibility, and modern styling. My process balances strong
            visuals, clear messaging, and clean code so every project looks
            great and works reliably across devices.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50+</h3>
              <p>Web pages launched</p>
            </div>
            <div className="stat-card">
              <h3>15</h3>
              <p>Completed client projects</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Responsive builds</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt container">
          <div className="section-header">
            <p className="section-label">Experience</p>
            <h2>Recent work roles</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-date">Aug 2024 – Present</span>
              <h3>Sr. Developer - WordPress / Shopify and Web Project Manager</h3>
              <p>Scepter Marketing (USA) - Full Time</p>
              <p>
                WordPress website development and maintenance. Shopify 2.0
                development and store setup. Bootstrap framework coding
                (HTML/CSS/JS). Liquid coding for Shopify templates.
              </p>
            </article>
            <article className="timeline-item">
              <span className="timeline-date">Oct 2024 – July 2025</span>
              <h3>Sr. WordPress / Shopify Developer</h3>
              <p>
                Xntric by LPS Brands (UAE) -{' '}
                <a href="https://lps-me.com/" target="_blank" rel="noreferrer">
                  lps-me.com
                </a>
              </p>
              <p>
                WordPress website development and maintenance. Shopify
                development and store setup using Liquid. Bootstrap framework
                coding. Elementor Pro development and Webflow website work.
              </p>
            </article>
            <article className="timeline-item">
              <span className="timeline-date">Feb 2020 – Sept 2024</span>
              <h3>WordPress / Shopify Developer</h3>
              <p>FullStop (USA/UK) - Full-time</p>
              <p>
                Developed and maintained WordPress and Shopify sites, ensuring
                responsive layouts, performance, and platform-specific
                customizations.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-header">
            <p className="section-label">Portfolio</p>
            <h2>Selected projects</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h3>Brand Refresh Site</h3>
              <p>
                Designed and built a modern portfolio website with custom
                animations, responsive layout, and fast load times.
              </p>
              <span className="project-tag">UI / UX / Web Dev</span>
            </article>
            <article className="project-card">
              <h3>Product Landing Page</h3>
              <p>
                Created a polished landing page for a product launch, including
                conversion-focused sections and mobile-first structure.
              </p>
              <span className="project-tag">Marketing / Performance</span>
            </article>
            <article className="project-card">
              <h3>Dashboard Prototype</h3>
              <p>
                Built a dashboard prototype with clean data cards, responsive
                tables, and intuitive interactions using only vanilla JS.
              </p>
              <span className="project-tag">Dashboard / JavaScript</span>
            </article>
          </div>
        </section>

        <section id="contact" className="section section-alt container">
          <div className="section-header">
            <p className="section-label">Contact</p>
            <h2>Let's build something together</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <p>
                If you're looking for a developer to improve your website or
                launch a new project, send a message and I will reply promptly.
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> hello@example.com
                </li>
                <li>
                  <strong>Location:</strong> Remote / Worldwide
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project" />

              <button type="submit">Send Message</button>
              <p className="form-status" aria-live="polite">{status}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Farhan. Built with Next.js.</p>
          <p>Open-source portfolio for web deployment.</p>
        </div>
      </footer>
    </>
  );
}
