import "./App.css";
import hero from "./assets/hero.png";
import workspace from "./assets/workspace.png";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useCallback } from "react";
import ChatBot from "./components/ChatBot";

function App() {
  const skillCards = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React JS", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Supabase", icon: "🗄️" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "Artificial Intelligence", icon: "🧠" },
    { name: "Figma", icon: "💎" },
    { name: "Problem Solving", icon: "🧩" }
  ];

  const projects = [
    {
      title: "Enterprise AI Assistant Platform",
      desc: "AI-powered enterprise platform with document understanding, RAG architecture, workflow automation and analytics dashboard.",
      tags: ["AI", "RAG", "React", "Spring Boot"],
      github: "https://github.com/FathimaMinu"
    },
    {
      title: "Pharmacy Inventory System",
      desc: "Real-time pharmacy inventory system with medicine CRUD, low-stock alerts, expiry tracking and quick sale interface.",
      tags: ["React", "Supabase", "PostgreSQL", "CSS"],
      github: "https://github.com/FathimaMinu"
    },
    {
      title: "Student Performance Prediction",
      desc: "Machine Learning model that predicts student exam performance using Python, Pandas and Scikit-Learn.",
      tags: ["Python", "ML", "Pandas", "Scikit-Learn"],
      github: "https://github.com/FathimaMinu"
    },
    {
      title: "NOVA X",
      desc: "Futuristic 3D smartphone showcase with AI recommendation and animated UI.",
      tags: ["React", "Three.js", "Framer Motion"],
      github: "https://github.com/FathimaMinu"
    },
    {
      title: "RideLink — Account Service",
      desc: "Backend microservice for a ride-sharing platform using Java 17 + Spring Boot 3 + MongoDB.",
      tags: ["Java 17", "Spring Boot", "MongoDB", "JWT", "Spring Security"],
      github: "https://github.com/IT24101839/Ridelink.git"
    },
  ];

  const mongoImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/${i + 1}.png`,
    alt: `MongoDB Data Modeling Path – Module ${i + 1} of 8`,
  }));

  const [mongoModal, setMongoModal] = useState(false);
  const [mongoIndex, setMongoIndex] = useState(0);

  const openMongoModal = () => {
    setMongoIndex(0);
    setMongoModal(true);
  };

  const closeMongoModal = useCallback(() => setMongoModal(false), []);

  const mongoPrev = () =>
    setMongoIndex((i) => (i - 1 + mongoImages.length) % mongoImages.length);

  const mongoNext = () =>
    setMongoIndex((i) => (i + 1) % mongoImages.length);

  useEffect(() => {
    if (!mongoModal) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMongoModal();
      if (e.key === "ArrowLeft") mongoPrev();
      if (e.key === "ArrowRight") mongoNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mongoModal, closeMongoModal]);

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="logo">FM</div>
          <span>Fathima Minu</span>
        </a>

        <nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#certifications">Certificates</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-left">
          <p className="tag">✨ Aspiring AI/ML Engineer | Full Stack Developer</p>

          <h1>
            Hi, I'm <span>Fathima Minu</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring AI/ML Engineer",
              2000,
              "Machine Learning Enthusiast",
              2000,
              "Building AI-Powered Systems",
              2000,
              "Full Stack Developer",
              2000,
              "Exploring LLMs & RAG",
              2000
            ]}
            wrapper="h3"
            speed={40}
            repeat={Infinity}
            className="typing"
          />

          <p className="desc">
            Building intelligent, scalable and futuristic web applications with AI,
            Machine Learning and full-stack technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">View Projects</a>
            <a href="#contact" className="secondary">Contact Me</a>
            <a href="/resume.pdf" download className="primary resume-btn">Download CV</a>
          </div>

        </div>

        <div className="hero-right">
          <div className="glow"></div>
          <div className="circle"></div>

          <img src={hero} className="hero-img" alt="Fathima Minu Avatar" />

          <div className="cube cube1"></div>
          <div className="cube cube2"></div>
          <div className="orb"></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-left">
          <p className="section-label">About Me</p>

          <h2>Who I Am</h2>

          <p className="about-text">
            I'm Fathima Minu, an undergraduate specializing in Information Technology at
            SLIIT, with a strong passion for Artificial Intelligence and Machine Learning.
            I enjoy building intelligent, scalable and modern web applications that combine
            innovative technology with user-friendly experiences.
          </p>
        </div>

        <div className="about-right">
          <img src={workspace} alt="Developer Workspace" className="workspace-img" />
        </div>

        <div className="about-cards">
          <div className="mini-card">
            <div className="mini-icon">🧠</div>
            <h3>Problem Solver</h3>
            <p>I love solving complex problems with smart solutions.</p>
          </div>

          <div className="mini-card">
            <div className="mini-icon">⚡</div>
            <h3>Quick Learner</h3>
            <p>Always eager to learn new technologies and tools.</p>
          </div>

          <div className="mini-card">
            <div className="mini-icon">🤝</div>
            <h3>Team Player</h3>
            <p>I enjoy collaborating and building with teams.</p>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <p className="section-label">My Expertise</p>
        <h2>My Skills</h2>

        <div className="skills-wrapper">
          <div className="skills-left">
            {skillCards.map((skill, index) => (
              <div className="skill-box" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>

          <div className="skills-right">
            <h3>My Skill Level</h3>

            <div className="progress-card">
              <div className="progress-title">
                <span>Frontend Development</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill1"></div>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-title">
                <span>Backend Development</span>
                <span>80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill2"></div>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-title">
                <span>AI / Machine Learning</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill3"></div>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-title">
                <span>Problem Solving</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress fill4"></div>
              </div>
            </div>

            <div className="cube-3d"></div>
          </div>
        </div>
      </section>
<section className="certifications section" id="certifications">
  <p className="certificate-label">ACHIEVEMENTS</p>

  <h2 className="certificate-heading">
    My Certifications
  </h2>

  <div className="certificate-grid">

    {/* AI ML Stage 1 */}

    <div className="certificate-card">
      <div className="certificate-image-box">
        <img
          src="/certificate.png"
          alt="AI ML Engineer Stage 1"
          className="certificate-preview"
        />
      </div>

      <div className="certificate-content">
        <h3>AI/ML Engineer - Stage 1</h3>

        <div className="certificate-meta">
          <p>SLIIT Faculty of Computing</p>
          <span>📅 2025</span>
        </div>

        <div className="certificate-line"></div>

        <a
          href="/certificate.png"
          target="_blank"
          rel="noreferrer"
          className="certificate-btn"
        >
          View Certificate →
        </a>
      </div>
    </div>

    {/* AI ML Stage 2 */}

    <div className="certificate-card">
      <div className="certificate-image-box">
        <img
          src="/ai-ml-stage2.png"
          alt="AI ML Engineer Stage 2"
          className="certificate-preview"
        />
      </div>

      <div className="certificate-content">
        <h3>AI/ML Engineer - Stage 2</h3>

        <div className="certificate-meta">
          <p>SLIIT Faculty of Computing</p>
          <span>📅 2026</span>
        </div>

        <div className="certificate-line"></div>

        <a
          href="/ai-ml-stage2.png"
          target="_blank"
          rel="noreferrer"
          className="certificate-btn"
        >
          View Certificate →
        </a>
      </div>
    </div>

    {/* Google Generative AI */}

    <div className="certificate-card">
      <div className="certificate-image-box">
        <img
          src="/google-genai.png"
          alt="Google Cloud Generative AI"
          className="certificate-preview"
        />
      </div>

      <div className="certificate-content">
        <h3>Introduction to Generative AI</h3>

        <div className="certificate-meta">
          <p>Google Cloud Skills Boost</p>
          <span>🏅 Completion Badge</span>
          <span>📅 June 2026</span>
        </div>

        <div className="certificate-line"></div>

        <a
          href="/google-genai.png"
          target="_blank"
          rel="noreferrer"
          className="certificate-btn"
        >
          View Badge →
        </a>
      </div>
    </div>

    {/* Google LLM */}

    <div className="certificate-card">
      <div className="certificate-image-box">
        <img
          src="/google-llm.png"
          alt="Google Cloud Large Language Models"
          className="certificate-preview"
        />
      </div>

      <div className="certificate-content">
        <h3>Introduction to Large Language Models</h3>

        <div className="certificate-meta">
          <p>Google Cloud Skills Boost</p>
          <span>🏅 Completion Badge</span>
          <span>📅 June 2026</span>
        </div>

        <div className="certificate-line"></div>

        <a
          href="/google-llm.png"
          target="_blank"
          rel="noreferrer"
          className="certificate-btn"
        >
          View Badge →
        </a>
      </div>
    </div>

    {/* MongoDB Data Modeling Path */}

    <div className="certificate-card">
      <div className="certificate-image-box certificate-image-box--dark">
        <img
          src="/1.png"
          alt="MongoDB Data Modeling Path – Module 1 preview"
          className="certificate-preview"
          loading="lazy"
        />
      </div>

      <div className="certificate-content">
        <h3>MongoDB Data Modeling Path</h3>

        <div className="certificate-meta">
          <p>MongoDB University</p>
          <span>🏅 8 Modules Completed</span>
          <span>📅 October 2026</span>
        </div>

        <div className="certificate-line"></div>

        <button
          type="button"
          className="certificate-btn"
          onClick={openMongoModal}
          aria-label="View all 8 MongoDB Data Modeling certificates"
        >
          View Certificates →
        </button>
      </div>
    </div>

  </div>
</section>

      {/* MongoDB Modal */}
      {mongoModal && (
        <div
          className="mongo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="MongoDB certificates viewer"
          onClick={(e) => { if (e.target === e.currentTarget) closeMongoModal(); }}
        >
          <div className="mongo-modal">
            <button
              className="mongo-modal__close"
              onClick={closeMongoModal}
              aria-label="Close certificates viewer"
            >
              ✕
            </button>

            <p className="mongo-modal__counter">
              {mongoIndex + 1} / {mongoImages.length}
            </p>

            <div className="mongo-modal__img-wrap">
              <img
                key={mongoIndex}
                src={mongoImages[mongoIndex].src}
                alt={mongoImages[mongoIndex].alt}
                className="mongo-modal__img"
                loading="lazy"
              />
            </div>

            <div className="mongo-modal__nav">
              <button
                className="mongo-modal__nav-btn"
                onClick={mongoPrev}
                aria-label="Previous certificate"
              >
                ← Prev
              </button>
              <button
                className="mongo-modal__nav-btn"
                onClick={mongoNext}
                aria-label="Next certificate"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="experience section" id="experience">
        <div className="experience-header">
          <p className="experience-label">CAREER JOURNEY</p>
          <h2 className="experience-heading">Experience</h2>
        </div>

        <div className="experience-container">
          <div className="experience-left">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>Full Stack Developer</h3>
                    <h4>Personal Projects</h4>
                    <span>2025 - Present</span>
                  </div>
                  <p>
                    Developed modern full-stack web applications
                    using React JS, Spring Boot and Supabase.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>AI/ML Project Developer</h3>
                    <h4>Academic & Personal Projects</h4>
                    <span>2025 - Present</span>
                  </div>
                  <p>
                    Built AI and Machine Learning projects focused on
                    prediction systems and intelligent solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>Group Project Contributor</h3>
                    <h4>SLIIT University</h4>
                    <span>2024, 2025, 2026 - Present</span>
                  </div>
                  <p>
                    Contributed to university group projects focused on
                    web development and mobile application development.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top">
                  <div>
                    <h3>CodeFest Participant</h3>
                    <h4>Hackathons & Coding Events</h4>
                    <span>2025</span>
                  </div>
                  <p>
                    Participated in coding competitions and
                    problem-solving challenges to improve technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experience-right">
            <img src="/rocket.png" alt="Rocket" className="rocket-img" />
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <p className="section-label">Projects</p>
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">🚀</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-header">
          <p className="contact-label">GET IN TOUCH</p>
          <h2 className="contact-heading">Contact Me</h2>
          <p className="contact-subtitle">Let's work together on your next project.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>minufathima2004@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Rajagiriya, Sri Lanka</p>
              </div>
            </div>

            <div className="contact-item">
              <span>💼</span>
              <div>
                <h4>Looking For</h4>
                <p>AI/ML Internship Opportunities</p>
              </div>
            </div>

            <div className="contact-item">
              <span>🔗</span>
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/fathima-minu-b510b4372</p>
              </div>
            </div>

            <div className="contact-item">
              <span>🐙</span>
              <div>
                <h4>GitHub</h4>
                <p>github.com/FathimaMinu</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Your Message</label>
            <textarea placeholder="Write your message..." rows="6"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <p className="footer-text">© 2026 Fathima Minu. All rights reserved.</p>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;