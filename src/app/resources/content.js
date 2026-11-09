import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashvardhan",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI/ML Engineer · Applied AI, MLOps & Robotics",
  avatar: "/images/avatar-01.jpeg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

// Mailchimp action URL is still a placeholder, so the form is hidden.
// Set a real action in config.js and flip display to true to bring it back.
const newsletter = {
  display: false,
  title: <>Engineering & Research Notes by {person.firstName}</>,
  description: (
    <>
      Notes on <InlineCode>LLM systems</InlineCode>, <InlineCode>MLOps</InlineCode>,{" "}
      <InlineCode>biosignal ML</InlineCode> and <InlineCode>robotics</InlineCode>. I write about
      what I build, break and measure.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DkrDante",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dkrdante",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/DkrDante",
  },
  {
    name: "dev.to",
    icon: "dev",
    link: "https://dev.to/dkrdante",
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
  title: `${person.name} | AI/ML Engineer, Applied AI & Robotics`,
  description: `${person.name} builds LLM systems, ML pipelines and physical AI. Projects, research notes and engineering writing on RAG, evals, MLOps, biosignal ML and robotics.`,
  headline: <>I build AI systems that hold up outside the notebook.</>,
  subline: (
    <>
      I'm Yashvardhan, an AI/ML engineer working across <strong>LLM applications</strong>,{" "}
      <strong>MLOps and automated validation</strong>, <strong>brain-signal ML</strong> and{" "}
      <strong>robotics</strong>. Currently building conversational AI at CRIS and ML test
      infrastructure at Satorix, and co-founding Osocius Dynamics.
    </>
  ),
  availability: "Open to collaborations on AI tooling, BCI and real-time systems",

  highlights: [
    { value: "Winner", label: "HACKSTAR 2025 hackathon" },
    { value: "Top 5", label: "Smart India Hackathon, VIT Chennai finalist" },
    { value: "3", label: "full-stack products shipped to production" },
    { value: "4", label: "active research and systems projects" },
  ],

  focus: {
    title: "What I work on",
    items: [
      {
        icon: "brain",
        title: "LLM & RAG systems",
        description:
          "Multi-agent pipelines with retrieval, verification and confidence-based fallback, so the model abstains instead of guessing.",
      },
      {
        icon: "rocket",
        title: "MLOps & quality engineering",
        description:
          "Automated validation for ML services, CI/CD that runs on every change, and load testing that finds breaking points on its own.",
      },
      {
        icon: "chart",
        title: "Biosignal & neuro ML",
        description:
          "EEG cognitive-state models, resting-state fMRI research and quantum VAEs, evaluated with subject-level splits and honest baselines.",
      },
      {
        icon: "robot",
        title: "Robotics & real-time systems",
        description:
          "Embedded intelligence and sensor-fusion pipelines for assisted-care environments, built for predictable behaviour.",
      },
    ],
  },

  stack: {
    title: "Stack",
    groups: [
      { label: "ML / AI", items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "LangChain", "PennyLane", "NLP"] },
      { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Express", "Django", "Flask"] },
      { label: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { label: "Infra & testing", items: ["Docker", "Kubernetes", "GitHub CI/CD", "AWS", "Playwright", "pytest", "Locust"] },
      { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Vector DBs"] },
    ],
  },
};

const about = {
  label: "About",
  title: "About me",
  description: `${person.name}, AI/ML engineer working on LLM systems, MLOps, biosignal ML and robotics.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    // Placeholder link; enable once there is a real booking page.
    display: false,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an AI/ML engineer who likes the part of the work that starts after the demo: the
        evaluation, the failure analysis, the pipeline that has to run again tomorrow.

        My work sits across a few layers. On the application side I build LLM systems with
        retrieval, verification and guardrails. On the infrastructure side I build the automated
        testing, CI/CD and load-testing that keep ML services honest. On the research side I work
        with EEG and fMRI signals, and on the systems side with robotics and sensor-driven
        hardware.

        What ties these together is one habit: <strong>measure before you believe</strong>. Models
        get evals, not vibes. Brain-signal classifiers get subject-level splits, not shuffled
        windows. Services get load until they break, not a single happy-path request. I write about
        these lessons in the <a href="/blog">blog</a>.

        I'm currently an AI/Software Development Intern at CRIS, an MLOps & Automation Engineer
        intern at Satorix, and co-founder at Osocius Dynamics, where we work on physical AI for
        aging and assisted-care environments. I study Computer Science (AI & Robotics) at VIT
        Chennai.

        Previously I shipped full-stack products as a freelance engineer, led engineering as a Tech
        Lead Intern at a startup, and won hackathons along the way. I'm happiest when a vague idea
        turns into something that runs, gets measured and survives contact with real users.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "CRIS (Centre for Railway Information Systems)",
        timeframe: "May 2026 - Present",
        role: "AI / Software Development Intern, New Delhi",
        achievements: [
          <>
            Built an AI-powered chatbot for the <strong>IRMARS</strong> website that gives users
            automated, context-aware access to railway-related information.
          </>,
          <>
            Designed the chatbot's backend and conversational workflow, connecting user queries to
            the relevant information sources to generate appropriate responses.
          </>,
          <>
            Implemented natural-language query handling and response generation in place of manual
            information retrieval.
          </>,
          <>
            Worked on API integration, backend logic and data processing to connect the chatbot to
            the web platform, and tested responses across varied queries to improve reliability.
          </>,
        ],
        images: [],
      },
      {
        company: "Satorix",
        timeframe: "Apr 2026 - Present",
        role: "MLOps & Automation Engineer (Intern), Hybrid, Chennai",
        achievements: [
          <>
            Identified gaps in automated validation for ML and backend workflows that were causing
            inconsistent testing and manual verification each development cycle.
          </>,
          <>
            Designed and implemented automated test cases and validation workflows for ML services,
            APIs and data-processing pipelines.
          </>,
          <>
            Built modular Python test suites covering functional, integration and regression
            testing across critical system components.
          </>,
          <>
            Developed and integrated CI/CD pipelines that run the suites on code changes, and
            debugged pipeline failures to catch integration issues earlier.
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
            Co-founded a robotics engineering company developing physical AI systems for connected
            aging environments.
          </>,
          <>
            Designing embedded intelligence architectures aimed at predictable, safe and consistent
            robotic behaviour in domestic and assisted-care settings.
          </>,
          <>
            Developing sensor-fusion pipelines and reliability-first control systems built for
            real-world uncertainty.
          </>,
          <>Leading R&D in applied AI for dependable automation infrastructure.</>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "Sep 2024 - Jul 2025",
        role: "Full Stack Engineer, Remote",
        achievements: [
          <>
            Architected and shipped <strong>3 full-stack web apps</strong> (React, Node.js,
            PostgreSQL) from schema design to production deployment.
          </>,
          <>
            Integrated <strong>Razorpay</strong> payments and <strong>AWS SES</strong>{" "}
            notifications, and cut delivery time by 25% through reusable component libraries.
          </>,
          <>
            Validated every REST API endpoint before launch with Postman and Playwright end-to-end
            tests, with zero critical defects after release.
          </>,
        ],
        images: [],
      },
      {
        company: "ZVIA",
        timeframe: "May 2024 - Aug 2024",
        role: "Tech Lead Intern, Remote (Startup)",
        achievements: [
          <>
            Built the server architecture and REST API layer for the startup's MVP from scratch,
            cutting development time by 30% across 3 core modules.
          </>,
          <>
            Shipped an Excalidraw integration and task-management features in a 5-person agile team;
            the documentation I wrote reduced ramp-up time by 30%.
          </>,
          <>
            Defined the Git branching strategy and coding standards adopted team-wide, reducing
            merge conflicts by about 50%.
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
            Coordinated operations and hiring processes, improving workflow efficiency and team
            structure.
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
        name: "Vellore Institute of Technology, Chennai",
        description: (
          <>
            B.Tech in Computer Science & Engineering (AI & Robotics), Aug 2023 to Jun 2027.
            <br />
            Coursework: Data Structures & Algorithms, Machine Learning, Computer Vision, Robotics,
            Artificial Intelligence.
          </>
        ),
      },
    ],
  },

  awards: {
    display: true,
    title: "Awards & Community",
    items: [
      {
        title: "Winner, HACKSTAR 2025",
        description: <>First place at the HACKSTAR 2025 hackathon.</>,
      },
      {
        title: "Top 5 College Finalist, Smart India Hackathon (Jan 2024)",
        description: <>Selected from 100+ teams at VIT Chennai.</>,
      },
      {
        title: "Social Media & Marketing Lead, GDG Chennai (Aug 2023 - May 2025)",
        description: <>Grew event visibility and community engagement across 10+ events.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "LLM Applications & RAG",
        description: (
          <>
            Retrieval-augmented generation, multi-agent pipelines, hallucination guardrails,
            confidence scoring and fallback design. LangChain, FastAPI and vector databases.
          </>
        ),
      },
      {
        title: "MLOps & Quality Engineering",
        description: (
          <>
            Automated test suites for ML services and APIs, CI/CD, Docker and Kubernetes,
            distributed load testing with Locust, performance and integration testing, and
            reproducible deployment workflows.
          </>
        ),
      },
      {
        title: "Machine Learning & Research",
        description: (
          <>
            PyTorch, TensorFlow, scikit-learn, OpenCV and NLP. Evolutionary and swarm optimization
            (NEAT, PSO, CMA-ES). Research in EEG cognitive-state detection and quantum variational
            autoencoders for fMRI.
          </>
        ),
      },
      {
        title: "Full-Stack & Backend",
        description: (
          <>
            React, Next.js, Node.js, Express, Django, Flask and FastAPI. REST API design,
            microservices, PostgreSQL, MySQL and MongoDB, S3 storage, Razorpay and AWS SES
            integrations.
          </>
        ),
      },
      {
        title: "Test Automation",
        description: (
          <>
            Playwright, Selenium, pytest and Postman. Requirement-to-test generation with Allure
            reporting, and end-to-end validation of REST APIs.
          </>
        ),
      },
      {
        title: "Robotics, IoT & Embedded",
        description: (
          <>
            ROS, Arduino, IoT sensors and Embedded C. Sensor-fusion pipelines and real-time decision
            systems for physical environments.
          </>
        ),
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Engineering & Research Notes",
  description: `Writing on LLM evals, RAG, MLOps, biosignal ML, agents and robotics by ${person.name}.`,
};

const work = {
  label: "Projects",
  title: "Selected Projects",
  description: `LLM systems, ML research, test automation and full-stack products built by ${person.name}.`,
};

const gallery = {
  label: "Gallery",
  title: "Lab & Engineering Snapshots",
  description: `A visual collection of engineering work and systems experimentation by ${person.name}`,
  images: [
    { src: "/images/gallery/img-01.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-06.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-11.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-12.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-13.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-14.jpg", alt: "image", orientation: "horizontal" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
