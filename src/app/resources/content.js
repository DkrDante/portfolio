import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashvardhan",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Robotics Systems Engineer & Co-Founder, Osocius Dynamics",
  avatar: "/images/avatar-01.jpeg",
  location: "Chennai, India",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Engineering & Research Notes by {person.firstName}</>,
  description: (
    <>
      Practical insights on <InlineCode>Robotics Engineering</InlineCode>,{" "}
      <InlineCode>Applied AI</InlineCode>,{" "}
      <InlineCode>Optimization Systems</InlineCode>, and{" "}
      <InlineCode>DSA in C++</InlineCode>.  
      I document what I build, test, optimize, and research.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dkrdante",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dkrdante",
  },
  {
    name: "Osocius Dynamics",
    icon: "globe",
    link: "https://osodyn.in",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dkrdante@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} | Robotics & Physical AI`,
  description: `Portfolio of ${person.name} — Robotics, Applied AI & Systems Engineering`,
  headline: <>Engineering Reliable Physical AI for Aging Infrastructure.</>,
  subline: (
    <>
      Co-founder at Osocius Dynamics, building robotics and sensor-driven systems 
      for connected aging environments.  
      My work focuses on embedded intelligence, safety-aware control architectures, 
      and predictable system behavior under real-world uncertainty.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `${person.name} — Robotics Systems Engineer from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a robotics-focused systems engineer specializing in physical AI systems 
        designed for real-world deployment.

        As Co-Founder of Osocius Dynamics, I work on intelligent robotic and 
        sensor-driven systems built specifically for aging and assisted-care environments.  
        My engineering approach prioritizes reliability, safety, determinism, 
        and measurable performance over prototype demonstrations.

        My background spans machine learning, evolutionary optimization (CMA-ES), 
        real-time system design, and full-stack architectures for intelligent platforms.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Osocius Dynamics",
        timeframe: "2025 - Present",
        role: "Co-Founder | Robotics Systems Engineering",
        achievements: [
          <>
            Co-founded a robotics engineering company developing physical AI systems 
            for connected aging environments.
          </>,
          <>
            Designing embedded intelligence architectures that ensure predictable, 
            safe, and consistent robotic behavior in domestic and assisted-care settings.
          </>,
          <>
            Developing sensor-fusion pipelines and reliability-first control systems 
            optimized for real-world uncertainty.
          </>,
          <>
            Leading R&D in applied AI for dependable automation infrastructure 
            supporting aging populations.
          </>,
        ],
        images: [],
      },
      {
        company: "ZVIA",
        timeframe: "Feb 2024 - Oct 2024",
        role: "Technical Lead",
        achievements: [
          <>
            Led frontend and systems architecture for collaborative educational platforms 
            and interactive learning systems.
          </>,
          <>
            Managed a small engineering team, improved engineering workflows, 
            and optimized performance across multiple applications.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "ZVIA",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Voice It",
        timeframe: "2023",
        role: "Operations & HR Management",
        achievements: [
          <>
            Coordinated operations and hiring processes, improving workflow 
            efficiency and team structure.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Vellore Institute of Technology",
        description: (
          <>
            B.Tech in Computer Science (AI & Robotics).  
            Focused on Machine Learning, Optimization Algorithms, 
            Systems Programming, and Intelligent Automation.
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Robotics Systems Engineering",
        description: <>Sensor fusion, control systems, real-time decision pipelines, and reliability-focused architecture design.</>,
      },
      {
        title: "Embedded Intelligence",
        description: <>On-device inference, constrained compute environments, deterministic system behavior.</>,
      },
      {
        title: "Safety-Critical AI",
        description: <>Designing AI systems with predictable outputs, failure-mode awareness, and real-world robustness.</>,
      },
      {
        title: "Optimization Algorithms",
        description: <>CMA-ES, parameter variation studies, benchmarking, and simulation-driven validation.</>,
      },
      {
        title: "C++ & Systems Programming",
        description: <>Primary language for performance-critical systems, DSA, and algorithmic design.</>,
      },
      {
        title: "Applied Machine Learning",
        description: <>Computer vision, speech processing (Whisper), and production-ready ML integration.</>,
      },
      {
        title: "Full-Stack Architectures",
        description: <>MERN stack, real-time APIs, authentication systems, and scalable backend infrastructure.</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Engineering & Research Notes",
  description: `Deep dives into robotics systems, applied AI, optimization, and software engineering.`,
};

const work = {
  label: "Projects",
  title: "Selected Projects",
  description: `Robotics systems, AI engines, and intelligent platforms built by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Lab & Engineering Snapshots",
  description: `A visual collection of engineering work and systems experimentation by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
export { person, social, newsletter, home, about, blog, work, gallery };
