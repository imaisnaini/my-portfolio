import {
  FiMail,
  FiFileText,
  FiArrowUpRight,
  FiSmartphone,
  FiDatabase,
  FiLink2,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaDatabase,
  FaPaintBrush,
  FaPalette,
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

const sections = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

const expertise = [
  {
    icon: FiSmartphone,
    title: "Mobile Development",
    description: "Android, Kotlin, Java",
  },
  {
    icon: FiActivity,
    title: "System Analysis",
    description: "Production support, RCA, monitoring",
  },
  {
    icon: FaDatabase,
    title: "Data Engineering",
    description: "SQL, Python, reporting",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Figma, interfaces, prototyping",
  },
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

export default function Home() {
  return (
    <main className="site-shell">
      <header className="navbar">
        <a className="brand" href="#profile">
          <span className="brand-mark">F.</span>
          <span>Personal Portfolio</span>
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
        src="/profile.jpg"
        alt="Fatimah Isnaini Shabrina"
      />
    </div>

    <div className="profile-identity">
      <h1>Fatimah Isnaini Shabrina</h1>

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
          href="mailto:YOUR_EMAIL@example.com"
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
    Software Engineer with multidisciplinary experience in Android Development, Data Engineering, IT Operations, and UI/UX Design across enterprise banking and energy projects.
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

        <section className="expertise-grid reveal" aria-label="Expertise">
          {expertise.map(({ icon: Icon, title, description }) => (
            <article className="expertise-card" key={title}>
              <Icon size={21} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
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
          <p className="section-placeholder">
            Academic background and ongoing undergraduate studies.
          </p>
        </section>

        <section id="github" className="content-section reveal">
          <SectionHeading number="05">GitHub Activities</SectionHeading>
          <p className="section-placeholder">
            My open-source contributions and selected repositories.
          </p>
        </section>

        <section id="contact" className="contact-section reveal">
          <SectionHeading number="06">Let&apos;s Connect</SectionHeading>
          <h3>Have something interesting in mind?</h3>
          <p>
            I&apos;m open to discussing opportunities, projects,
            and ideas at the intersection of technology and design.
          </p>
          <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
            Get in touch <FiArrowUpRight size={16} />
          </a>
        </section>

        <footer className="footer">
          <span>Designed and built with care.</span>
          <span>© 2026 imaisnaini</span>
        </footer>
      </div>
    </main>
  );
}
