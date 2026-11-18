import { useEffect, useRef, useState } from 'react';
import profileImage from './images/profile.svg';

const contactEmail = 'raresnita777@gmail.com';
const linkedInUrl = 'https://www.linkedin.com/in/rares-nita-powered-by-nature/';
const githubUrl = 'https://github.com/108rares108';

const projects = [
  {
    number: '01',
    type: 'HTML & CSS',
    title: 'My first webpage',
    description: 'A simple webpage built to practise semantic HTML, spacing, typography, and basic styling.',
    preview: 'preview-one',
    label: 'A browser window showing a simple webpage layout'
  },
  {
    number: '02',
    type: 'Responsive design',
    title: 'Personal portfolio',
    description: 'A personal website bringing together an introduction, selected work, and a contact section.',
    preview: 'preview-two',
    label: 'A browser window showing a personal profile layout'
  },
  {
    number: '03',
    type: 'CSS layout',
    title: 'Project gallery',
    description: 'A card-based gallery exploring grid layouts, consistent spacing, and reusable visual elements.',
    preview: 'preview-three',
    label: 'A small gallery layout with a row of image cards'
  },
  {
    number: '04',
    type: 'JavaScript',
    title: 'Form validation',
    description: 'A contact form exercise covering required fields, input validation, and clear feedback.',
    preview: 'preview-four',
    label: 'A contact form preview with input fields'
  }
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.06c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.1 3.2 1.61.1-.71.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.64h.05a3.96 3.96 0 0 1 3.56-1.96c3.8 0 4.5 2.5 4.5 5.75V21h-3.76v-5.83c0-1.39-.02-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08V21H9.5V9Z" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const previousScroll = useRef(0);
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    previousScroll.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const movingDown = currentScroll > previousScroll.current + 4;
      const movingUp = currentScroll < previousScroll.current - 4;
      const headerHasFocus = headerRef.current?.contains(document.activeElement);

      if (currentScroll < 80 || movingUp || headerHasFocus) {
        setHeaderHidden(false);
      } else if (movingDown && !menuOpen) {
        setHeaderHidden(true);
      }

      previousScroll.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header${headerHidden ? ' is-hidden' : ''}`}
      ref={headerRef}
      inert={headerHidden}
    >
      <div className="container header-content">
        <a className="logo" href="#home" onClick={closeMenu} aria-label="Rares Nita, home">
          Rares Nita<span>.</span>
        </a>

        <button
          className="menu-toggle"
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="header-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`header-panel${menuOpen ? ' open' : ''}`} id="header-panel">
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <div className="social-links" aria-label="Social media links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true"></span> A little about me</p>
          <h1>Hi, I'm <span>Rares Nita.</span></h1>
          <p className="intro">
            I'm a graduate exploring front-end development and learning how to turn simple ideas into useful, easy-to-use websites. I enjoy creating clean layouts, solving problems, and improving with every project.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">View my work <span aria-hidden="true">→</span></a>
            <a className="text-link" href={linkedInUrl} target="_blank" rel="noopener noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="profile-card">
          <img className="profile-mark" src={profileImage} alt="RN profile avatar" />
          <p>Curious by nature.<br />Always learning.</p>
          <span className="profile-line" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container section-layout">
        <div className="section-heading">
          <p className="section-label">01 / About</p>
          <h2>A bit about me</h2>
        </div>
        <div className="section-copy">
          <p>
            I'm building my knowledge of HTML, CSS, JavaScript, and React. I enjoy trying new things, solving small problems, and finding better ways to bring an idea to life.
          </p>
          <p>
            My goal is to keep learning through practice and create websites that are clear, responsive, and straightforward to use.
          </p>
          <div className="skills" aria-label="Technologies I am learning">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview ${project.preview}`} role="img" aria-label={project.label}>
      {project.preview === 'preview-one' && (
        <div className="mock-browser">
          <div className="mock-browser-top"><i></i><i></i><i></i></div>
          <div className="mock-content">
            <span className="mock-heading"></span>
            <span className="mock-line long"></span>
            <span className="mock-line"></span>
            <span className="mock-button"></span>
          </div>
        </div>
      )}
      {project.preview === 'preview-two' && (
        <div className="mock-browser second-browser">
          <div className="mock-browser-top"><i></i><i></i><i></i></div>
          <div className="mock-content split-content">
            <span className="mock-avatar"></span>
            <div className="mock-text-lines">
              <span className="mock-heading"></span>
              <span className="mock-line long"></span>
              <span className="mock-line"></span>
            </div>
          </div>
          <div className="mock-bottom-lines"><span></span><span></span></div>
        </div>
      )}
      {project.preview === 'preview-three' && (
        <div className="gallery-preview">
          <div className="gallery-top"><span></span><span></span><span></span></div>
          <div className="gallery-grid"><i></i><i></i><i></i><i></i></div>
          <div className="gallery-caption"><span></span><span></span></div>
        </div>
      )}
      {project.preview === 'preview-four' && (
        <div className="form-preview">
          <span className="form-preview-title"></span>
          <span className="form-preview-label"></span>
          <span className="form-preview-input"></span>
          <span className="form-preview-label short"></span>
          <span className="form-preview-input"></span>
          <span className="form-preview-message"></span>
          <span className="form-preview-submit"></span>
        </div>
      )}
      <span className="project-number">{project.number}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="section-label">02 / Selected practice</p>
            <h2>Things I've been working on</h2>
          </div>
          <p className="section-intro">A few exercises and projects from my front-end development practice.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <ProjectPreview project={project} />
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: 'Freelance project proposal',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFormStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `${formData.enquiry} — ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Type of enquiry: ${formData.enquiry}`,
      '',
      formData.message
    ].join('\n');
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormStatus('Your email app should open with your message ready to send. If it does not, use the email link below.');
    window.location.href = mailto;
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-inner">
        <p className="section-label">03 / Get in touch</p>
        <h2>Let's stay connected.</h2>
        <p className="contact-intro">Have a question or an idea to discuss? Send me a message using the form below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={updateField}
              placeholder="Your name"
              minLength="2"
              maxLength="80"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={updateField}
              placeholder="you@example.com"
              maxLength="120"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-enquiry">Type of enquiry</label>
            <select id="contact-enquiry" name="enquiry" value={formData.enquiry} onChange={updateField}>
              <option>Freelance project proposal</option>
              <option>Collaboration</option>
              <option>Question</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={updateField}
              placeholder="Write your message here..."
              rows="6"
              minLength="5"
              maxLength="2000"
              required
            ></textarea>
          </div>

          <button className="button form-submit" type="submit">Send message <span aria-hidden="true">→</span></button>
          <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
        </form>

        <p className="contact-fallback">Or email me directly at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Rares Nita</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
