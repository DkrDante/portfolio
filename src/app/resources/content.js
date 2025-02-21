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
      Stay Ahead with AI & Tech!
      Subscribe to my newsletter for insights on Machine Learning, the latest tech trends, and discoveries from my learning journey. Get fresh ideas straight to your inbox!

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dkrdante",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yashvardhan-singh-35512a228/",
  },
  {
    name: "X",
    icon: "x",
    link: "x.com/dkrdante",
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
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Yashvardhan, a Full Stack Developer, and worked at <InlineCode>ZVIA</InlineCode>, where I crafted intuitive
      <br /> user experiences for school and college students. After hours, I build my own projects and learning Machine Learning and AI.
    </>
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
        Yashvardhan is a India-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
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
        role: "Techinal Lead",
        achievements: [
          <>
            Full Stack Developer crafted intuitive user experiences for school and college students. Inclduing recreation of retro games such as pacman and breakout,
            Led a team of Developer to work on project as colaborative board for brainstorming and collaboration.

          </>,
          <>
            Led a team of Developer to work on project as colaborative board for brainstorming and collaboration.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
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
            Developed a content strategy that increased engagement by 50% across multiple social media platforms,
            ensuring a consistent brand voice for freelancers.
          </>,
          <>
            Led a social media campaign that boosted freelancer visibility,
            resulting in a 20% increase in client inquiries and project conversions.          </>,
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
        name: "Vellore institute of technology",
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
        description: <>Main programming language i use c++ for college work and Competitive Programming </>,
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
        description: <> Forcing AI to do stupid shit that I want.</>,
      },

    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
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
