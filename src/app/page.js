"use client";
import { useEffect, useState } from "react";

import {
  FiMail,
  FiFileText,
  FiArrowUpRight,
  FiLink2,
  FiLayers,
  FiChevronRight,
  FiMapPin,
  FiX,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaDatabase,
  FaPaintBrush,
  FaPalette,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiFlutter,
  SiPython,
  SiDjango,
  SiFigma,
  SiGit,
  SiJira,
  SiConfluence,
  SiKibana,
  SiDynatrace,
  SiElastic,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
} from "react-icons/si";

import { MdVerified } from "react-icons/md";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "education", label: "Education" },
  { id: "certification", label: "Certification"},
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

const technologies = [
  {
    category: "Mobile Development",
    items: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Android SDK", icon: SiAndroid, color: "#3DDC84" },
      { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4"},
      { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
    ],
  },
  {
    category: "Backend & API",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "REST API", icon: FiLink2, color: "#A0A0A0" },
      { name: "MySQL", icon: SiMysql, color: "#4A9BD9" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#0064a5" },
      { name: "SQLite", icon: SiSqlite, color: "#0F80CC" },
      { name: "MongoDB", icon: SiMongodb, color: "#00ED64"}
    ],
  },
  {
    category: "Tools & Monitoring",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Jira", icon: SiJira, color: "#2684FF" },
      { name: "Confluence", icon: SiConfluence, color: "#1868DB" },
      { name: "Elastic", icon: SiElastic, color: "#FBBC05"},
      { name: "Kibana", icon: SiKibana, color: "#F04E98" },
      { name: "Dynatrace", icon: SiDynatrace, color: "#1496FF" },
    ],
  },
  {
    category: "Design & Architecture",
    items: [
      { name: "Figma", icon: SiFigma, color: "#7D2AE7" },
      { name: "Canva", icon: FaPalette, color: "#07B9CE" },
      { name: "Clean Architecture", icon: FiLayers, color: "#A0A0A0" },
      { name: "MVVM", icon: FiLayers, color: "#A0A0A0" },
    ],
  },
];

const experiences = [
  {
    period: "April 2026 - September 2026",
    role: "UI / UX Designer",
    company: "PT Pertamina EP Cepu (under PT Mitra Integrasi Informatika)",
    location: "Jakarta, Indonesia",
    bullets: [
      "Designed UI/UX for internal corporate web and mobile applications, including budgeting, KPI management, and operational systems.",
      "Created custom UI assets and visual elements, including user flows, loading states, splash screens, logos, iconography and landing pages, while maintaining consistency with company branding.",
      "Produced graphic assets, promotional materials, broadcast communications, presentation templates, and simple video content for app launches and corporate events."
    ],
  },
  {
    period: "October 2023 - February 2026",
    role: "Android Developer",
    company: "PT Bank Negara Indonesia (under PT Mitra Integrasi Informatika)",
    location: "Jakarta, Indonesia",
    bullets: [
      "Developed and maintained features for wondr by BNI, collaborating with cross-functional Agile team of 20+ Android Developers, Application Designers, Scrum Masters, and QA Engineers.",
      "Built enterprise Android applications using Kotlin, Jetpack Compose, and REST API integration, following Clean Architecture withiin a multi-module and multi-repository project structure.",
      "Implemented new features, performed code maintenance, optimized application performance, and provided post go-live support to ensure application stability and high-quality releases.",
      "Developed internal automation tools using Python and Django for operational reporting and application monitoring, while assisting in production analysys using Kibana and Dynatrace."
    ],
  },
  {
    period: "March 2021 - September 2023",
    role: "Android Developer",
    company: "PT Semai Raya Internasional",
    location: "Bandung, Indonesia",
    bullets: [
      "Designed and developed enterprise Android applications supporting end-to-end palm oil business processes, including plantation management and oil shipping operations, using Java, Kotlin, and Jetpack Compose.",
      "Designed application UI/UX, translated business requirements into functional features, and conducted product demonstrations for clients to gather feedback and support project delivery.",
      "Supported the development of Bantex e-Filling for sister company by building cross-platorm mobile features using Flutter.",
    ],
  },
]

const education = [
  {
    period: "Nov 2025 - Present",
    degree: "Bachelor's Degree in Informatics Engineering (Transfer Program)",
    institution: "Universitas Siber Asia",
    details: "GPA 3.72 / 4.00"
  },
  {
    period: "2017 - 2020",
    degree: "Diploma Degree in Informatics Engineering",
    institution: "Politeknik Elektronika Negeri Surabaya",
    details: "GPA 3.51 / 4.00"
  }
]

const certifications = [
  {
    date: "Nov 2026",
    title: "EF SET Englist Test",
    issuer: "English First",
    image: "/ef_set_certificate.png",
    credentialUrl: "https://cert.efset.org/en/AArsg8"
  },
  {
    date: "July 2026",
    title: "Gemini Certified University Student",
    issuer: "Google for Education",
    image: "/certification_gemini.png",
    credentialUrl: "https://edu.google.accredible.com/8801dcab-05c7-46f4-9cae-5aeab74fd85f#acc.3Xn1h4PM"
  },
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const GITHUB_USERNAME = "imaisnaini";

function TechBadge({ icon: Icon, name, color }) {
  return (
    <span className="tech-badge">
      <Icon size={16} color={color} aria-hidden="true" />
      <span>{name}</span>
    </span>
  );
}

function SectionHeading({ number, children }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function GitHubActivity() {
  const [weeks, setWeeks] = useState([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );
        const data = await response.json();

        if (data && data.contributions && Array.isArray(data.contributions)) {
          const days = data.contributions;
          const grouped = [];

          for (let i = 0; i < days.length; i += 7) {
            grouped.push(days.slice(i, i + 7));
          }

          setWeeks(grouped);
          const total = days.reduce((sum, day) => sum + (day.count || 0), 0);
          setTotalContributions(total);
        }
      } catch (err) {
        console.error("Failed to load GitHub activity:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Safe Month Label Resolution
  const getMonthLabel = (week, idx) => {
    if (!week || !week[0] || !week[0].date) return "";

    try {
      const [year, month, day] = week[0].date.split("-").map(Number);
      const date = new Date(year, month - 1, day);
      const monthName = date.toLocaleString("en-US", { month: "short" });

      if (idx === 0) return monthName;

      const prevWeek = weeks[idx - 1];
      if (!prevWeek || !prevWeek[0] || !prevWeek[0].date) return monthName;

      const [pYear, pMonth, pDay] = prevWeek[0].date.split("-").map(Number);
      const prevDate = new Date(pYear, pMonth - 1, pDay);
      const prevMonthName = prevDate.toLocaleString("en-US", { month: "short" });

      return monthName !== prevMonthName ? monthName : "";
    } catch (e) {
      return "";
    }
  };

  return (

      <div className="github-card">
        {loading ? (
          <div className="github-loading">Loading live GitHub activity...</div>
        ) : (
          <>
            <div className="github-scroll-wrapper">
              {/* Dynamic Month Header Row aligned 1:1 with week columns */}
              <div className="github-months-row">
                {weeks.map((week, idx) => {
                  const label = getMonthLabel(week, idx);
                  return (
                    <div key={idx} className="github-month-col">
                      {label && <span className="github-month-text">{label}</span>}
                    </div>
                  );
                })}
              </div>

              {/* 52-Week Dot Heatmap Grid */}
              <div className="github-grid">
                {weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="github-week-col">
                    {week.map((day, dayIdx) => (
                      <span
                        key={dayIdx}
                        className={`github-dot level-${day.level ?? 0}`}
                        title={`${day.count || 0} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p className="github-count-label">
              {totalContributions.toLocaleString()} contributions in the last year
            </p>
          </>
        )}
      </div>
  );
}

export default function Home() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <main className="site-shell">
      <header className="navbar">
        <a className="brand" href="#profile">
          <span className="brand-mark">F.</span>
          <span>imaisnaini</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="content">
        
<section id="profile" className="profile-section">
  <div className="profile-header">
    <div className="profile-avatar">
      <img
        src="/profile.png"
        alt="Fatimah Isnaini Shabrina"
      />
    </div>

    <div className="profile-identity">
      <div className="profile-name-row">
        <h1>Fatimah Isnaini Shabrina</h1>
        <MdVerified className="verified-badge" size={22} title="Verified Profile" />
      </div>
      <div className="profile-location">
        <FiMapPin size={15} />
        <span>Jakarta, Indonesia</span>
      </div>
      <div className="profile-socials">
        <a
          href="https://github.com/imaisnaini"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/imaisnaini/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="mailto:imaisnaini@gmail.com"
          aria-label="Email"
        >
          <FiMail size={20} />
        </a>
      </div>
    </div>
  </div>

  <p className="profile-title">
    Software Developer · System Analyst · UI/UX Designer
  </p>

  <p className="profile-bio">
    I'm a software engineer who enjoys working across different areas of technology, from building Android applications and working with data to improving systems and designing user experiences. I've had the opportunity to contribute to projects in banking and energy, and I'm always open to learning something new.
  </p>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="resume-button"
  >
    <FiFileText size={17} />
    View Resume
    <FiArrowUpRight size={16} />
  </a>
</section>

        <section id="experience" className="content-section reveal">
          <SectionHeading number="01">Work Experience</SectionHeading>
          <p className="section-placeholder">
            A timeline of my professional journey, responsibilities,
            and contributions.
          </p>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"/>
                <div className="timeline-content">
                  <span className="timeline-date">{exp.period}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-location">{exp.location}</p>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section reveal">
          <SectionHeading number="02">Selected Projects</SectionHeading>
          <p className="section-placeholder">
            Mobile applications, data dashboards, automation, and
            UI/UX case studies.
          </p>
        </section>

        <section id="technologies" className="content-section reveal">
          <SectionHeading number="03">Technologies</SectionHeading>
          <div class="tech-groups">
            {technologies.map((group) => (
              <div className="tech-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="tech-list">
                  {group.items.map((tech) => (
                    <TechBadge key={tech.name} {...tech}/>
                  ))}
                </div>
              </div>
            ))}  
          </div>
        </section>

        <section id="education" className="content-section reveal">
          <SectionHeading number="04">Education</SectionHeading>
          <div className="education-list">
            {education.map((item, idx) => (
              <div className="education-item" key={idx}>
                <div className="education-period">{item.period}</div>
                <div className="education-details">
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-info">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATION SECTION (Thumbnail triggers modal state) */}
      <section id="certification" className="content-section reveal">
        <SectionHeading number="05">Certifications</SectionHeading>
        <div className="cert-group">
          <div className="cert-credentials-list">
            {certifications.map((cert, idx) => (
              <div className="cert-item" key={idx}>
                <div className="cert-date">{cert.date}</div>
                <div className="cert-main">
                  <div
  className="cert-thumbnail"
  onClick={() => setActiveCertModal({ image: cert.image, title: cert.title })}
  role="button"
  tabIndex={0}
  title="Click to expand preview"
>
  <img src={cert.image} alt={cert.title} />
  <div className="cert-thumbnail-hover-hint">Zoom</div>
</div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-link"
                      >
                        VIEW CREDENTIAL <FiArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{activeCertModal && (
  <div className="cert-modal-overlay" onClick={() => setActiveCertModal(null)}>
    <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
      <button
        className="cert-modal-close"
        onClick={() => setActiveCertModal(null)}
        aria-label="Close Preview"
      >
        <FiX size={20} />
      </button>
      <img
        src={activeCertModal.image}
        alt={activeCertModal.title}
        className="cert-modal-img"
      />
      <p className="cert-modal-caption">{activeCertModal.title}</p>
    </div>
  </div>
)}
      
    <section id="github" className="content-section reveal">
      <div className="section-heading">
        <span className="section-number">05</span>
        <h2>GitHub Activity</h2>
      </div>
          <GitHubActivity />
    </section>

        <section id="contact" className="contact-section reveal">
          <SectionHeading number="06">Let's Connect</SectionHeading>
          <p className="contact-description">
            Always happy to connect, exchange ideas, or chat about interesting projects and opportunities. Feel free to reach out!
          </p>

          <div className="contact-actions">
            {/* Email Button - Accent Pill */}
            <a
              href="mailto:imaisnaini@gmail.com"
              className="contact-pill contact-pill-primary"
              aria-label="Send Email"
            >
              <FiMail size={16} />
              <span>imaisnaini@gmail.com</span>
              <FiArrowUpRight size={15} className="pill-arrow" />
            </a>

            {/* WhatsApp Button - Outline Pill */}
            <a
              href="https://wa.me/6282245443941"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={16} />
              <span>Chat on WhatsApp</span>
              <FiArrowUpRight size={15} className="pill-arrow" />
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>Designed and built with care.</span>
          <span>© 2026 imaisnaini</span>
        </footer>
      </div>
    </main>
  );
}
