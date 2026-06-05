import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

export const SKILL_DATA = [ // Row 1: Languages & Frameworks (9)
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NestJS",
    image: "nestjs.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Socket.IO",
    image: "socketio.svg",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/mrebbar",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/mrebbar",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/mrebbar",
  },
] as const;

export const FRONTEND_SKILL = [ // Row 2: DBs, ORMs & Infrastructure (7)
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TypeORM",
    image: "typeorm.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Drizzle ORM",
    image: "drizzle_orm.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const BACKEND_SKILL = [ // Row 3: DevOps & Tools (5)
  {
    skill_name: "CI/CD",
    image: "cicd.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Postman",
    image: "postman.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Network Analysis (Wireshark)",
    image: "wireshark.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [ // Row 4: GNS3 & AI (2)
  {
    skill_name: "GNS3",
    image: "gns3.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vibe Coding",
    image: "ai_dev.webp",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [] as const; // Row 5: (Empty)

export const PROJECTS = [
  {
    title: "Qomar Qur'on Markaz ERP",
    description:
      "A comprehensive ERP system for a prominent Qur'an education center. Features modular workflows for students, teachers, payments, and administrative staff, built using Express.js, GraphQL, PostgreSQL, and Prisma ORM.",
    image: ["/projects/qomar1.png", "/projects/qomar2.png"],
    link: "https://github.com/mrebbar",
  },
  {
    title: "Call-Center Automation Platform",
    description:
      "A robust automated platform for call center management. Integrates deeply with business workflows, communication APIs, and customer tracking tools for Umari Group, built with Node.js and Express.",
    image: [
      "/projects/call1.png",
      "/projects/call2.png",
      "/projects/call3.png",
      "/projects/call4.png",
      "/projects/call5.png"
    ],
    link: "https://github.com/mrebbar",
  },
  {
    title: "Cashback Management Platform",
    description:
      "Engineered a Cashback management platform with amoCRM integration for automated customer synchronization and reward processing for Umari Group. Optimized for high concurrency, reliability, and database response times.",
    image: [
      "/projects/cash1.png",
      "/projects/cash2.png",
      "/projects/cash3.png",
      "/projects/cash4.png",
      "/projects/cash5.png",
      "/projects/cash6.png",
      "/projects/cash7.png"
    ],
    link: "https://github.com/mrebbar",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/mrebbar",
      },
      {
        name: "Telegram",
        icon: FaTelegram,
        link: "https://t.me/mrebbar",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://linkedin.com/in/mrebbar",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "mrebbar01@gmail.com",
        icon: FaEnvelope,
        link: "mailto:mrebbar01@gmail.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mrebbar01@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/mrebbar",
};
