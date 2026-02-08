import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yashvardhan",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar-01.jpeg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Stay Ahead with <InlineCode>AI, Tech and CUBING!</InlineCode>
      Subscribe to my newsletter for insights on Machine Learning, the latest tech trends, and discoveries from my learning journey. Get fresh ideas straight to your inbox!

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  //
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
    name: "X",
    icon: "x",
    link: "https://x.com/DkrDante",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dkrdante@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Developer AI/ML Engineer Tech Junkie
</>,
  subline: (
    <>
     I’m Yashvardhan, a full-stack developer who builds AI systems, weird projects, and the occasional research experiment. I train machine learning models to find patterns in messy data—or to beat games I’m terrible at.
After hours, I’m usually speed-cubing or obsessing over something new I just decided to learn.</>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
Yashvardhan is an Indian full stack developer and AI engineer who focuses on building intelligent, reliable systems. His work spans web platforms, machine learning applications, and research-driven solutions at the intersection of software and real-world problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ZVIA",
        timeframe: "February '24 - October '24 ",
        role: "Technical Lead",
        achievements: [
          <>
            Full Stack Developer crafted intuitive user experiences for school and college students. Including recreation of retro games such as Pacman and Breakout,
            Led a team of developers to work on project as collaborative board for brainstorming and collaboration.

          </>,
          <>
            Led a team of Developer to work on project as colaborative board for brainstorming and collaboration.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "ZVIA",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Influencer Management",
        timeframe: "2019 - 2022",
        role: "Freelancer",
        achievements: [
          <>
            Developed a content strategy that increased engagement across multiple social media platforms,
            ensuring a consistent brand voice for the Influencer.
          </>,
          <>
            Paved a different path for the brand strategy by studying the market and making suggested changes in the content to help find their niche         </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Vellore Institute of Technology",
        description: <>Studied Computer Science with specialisation in Artificial Intelligence and Robotics.</>,
      },
      {
        name: "Delhi Public School, Varanasi",
        description: <>Completed my +2</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "C++",
        description: <>Main programming language I use C++ for college work and Competitive Programming </>,
      },
      {
        title: "Python",
        description: <>Developing AI/ML models, backend services, and automation scripts.</>,
      },
      {
        title: "Machine Learning",
        description: <>Building and deploying ML models for real-world applications and AI-driven systems.</>,
      },
      {
        title: "Full-Stack Development",
        description: <>Creating scalable web applications using modern frameworks and technologies.</>,
      },
      {
        title: "AI Integration",
        description: <>Integrating AI systems and forcing them to do exactly what I want.</>,
      },

    ],
  },
};

const blog = {
  label: "Blog",
  title: "Thoughts on Design and Tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
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
