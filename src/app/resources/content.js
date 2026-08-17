import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashvardhan",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Robotics Systems Engineer & Co-Founder, Osocius Dynamics",
  avatar: "/images/avatar-01.jpeg",
  location: "Asia/Kolkata",
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
  title: `${person.name} | Robotics, AI & Systems`,
  description: `Portfolio of ${person.name} — Robotics Engineering, Applied AI, and System Design`,
  headline: <>Because “It Should Work” Isn’t a Strategy.</>,
  subline: (
    <>
      I’m Yashvardhan — a robotics systems engineer and Co-Founder of Osocius Dynamics, 
      where I build physical AI systems for real-world aging environments.

      I care about predictable behavior, clean architectures, and systems that don’t fall apart outside the lab. 
      My work spans robotics engineering, embedded intelligence, optimization algorithms, 
      and the occasional experiment just to see how far something can be pushed.
    </>
  ),
};const about = {
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
        I build machines that have to exist outside the laptop.

        I'm an engineer interested in the intersection of software, AI, and the
        physical world. I like working across layers, from machine learning and
        intelligent decision-making to robotics, real-time systems, hardware, and
        the software infrastructure that ties everything together.

        A lot of my work starts with a fairly simple question:{" "}
        <strong>
          what happens when we take this idea out of a controlled environment
          and make it deal with reality?
        </strong>

        That usually leads to interesting problems. Sensors are noisy. Hardware
        has limitations. Models behave differently outside the dataset. Latency
        suddenly matters. Systems fail in ways you didn't anticipate. And the
        niche edge case you decided was probably never going to happen has a
        strange habit of coming back to find you personally.

        Sometimes that edge case is a user named <InlineCode>null</InlineCode>{" "}
        trying to log into a facility while travelling across regions on a
        train. Sometimes it's discovering that your carefully planned afternoon
        has been defeated by <InlineCode>git rebase</InlineCode>. Either way,
        reality remains undefeated.

        That's the part I enjoy.

        I've worked across full-stack engineering, machine learning, research,
        robotics, and intelligent systems, and I'm increasingly focused on
        bringing those pieces together into physical AI systems that can
        actually be deployed. My work with Osocius Dynamics is one expression of
        that, particularly around robotic and sensor-driven systems for aging
        and assisted-care environments.

        I care about understanding the entire system rather than becoming very
        good at one isolated component. I like ambitious ideas, strange
        technical problems, and building things simply to find out whether they
        can actually work.

        Prototypes are fun.{" "}
        <strong>Making them survive contact with reality is more interesting.</strong>
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SatoriXR",
        timeframe: "2026 - Present",
        role: "Machine Learning / MLOps Engineering",
        achievements: [
          <>
            Worked on machine learning infrastructure and MLOps workflows for
            developing, deploying, and maintaining intelligent systems.
          </>,
          <>
            Built and improved pipelines supporting the transition from
            experimentation and model development toward reproducible,
            deployable ML systems.
          </>,
          <>
            Worked across model workflows, data processing, deployment
            infrastructure, and engineering automation.
          </>,
          <>
            Focused on making ML systems easier to reproduce, monitor,
            integrate, and operate beyond the development environment.
          </>,
        ],
        images: [],
      },
      {
        company: "CRIS",
        timeframe: "May 2026 - Present",
        role: "Full-Stack Engineering",
        achievements: [
          <>
            Developed full-stack web applications and conversational AI
            systems for railway information systems.
          </>,
          <>
            Built the frontend and backend architecture connecting
            user-facing interfaces with intelligent conversational services.
          </>,
          <>
            Worked across API integration, application logic, authentication,
            data handling, and deployment.
          </>,
          <>
            Designed the system to handle real-world user interactions rather
            than functioning purely as a conversational AI prototype.
          </>,
        ],
        images: [],
      },
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
        title: "Machine Learning & AI",
        description: <>Applied machine learning, neural networks, computer vision, speech processing, and intelligent system development.</>,
      },
      {
        title: "AI Engineering & MLOps",
        description: <>Model integration, inference pipelines, experimentation, Docker, deployment workflows, and production-oriented ML systems.</>,
      },
      {
        title: "Software & Systems Engineering",
        description: <>C++, Python, backend architecture, APIs, databases, real-time systems, and performance-focused engineering.</>,
      },
      {
        title: "Full-Stack Development",
        description: <>React, Next.js, Node.js, REST APIs, PostgreSQL, authentication, and real-time applications.</>,
      },
      {
        title: "Robotics & Physical AI",
        description: <>ROS, sensor-driven systems, real-time decision pipelines, and applying AI to physical environments.</>,
      },
      {
        title: "Research & Experimental Computing",
        description: <>AI research, quantitative experimentation, benchmarking, and exploration of unconventional approaches to intelligent systems.</>,
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
