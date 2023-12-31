import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import airbnbPrettyMuch from "@/public/airbnb-pretty-much.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Development Engineer",
    company: "Amazon Web Services",
    location: "Seattle, WA",
    description: [
      `Scaled infrastructure to improve stability, reliability, and latency for
      an internal pipeline service protecting over 40K developers from hazardous
      configuration changes.`,
      `Collaborated with 8 teams on company-wide infrastructure as code
      initiatives to define and encapsulate engineering best practices and
      orchestrate internal resources.`,
      `Designed and integrated a data pipeline to generate metrics that
      correlated best practice initiatives with a 16% improvement in overall
      developer productivity.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    location: "Remote",
    description: [
      `Worked in an agile environment to design and implement an AWS
    Cloud Development Kit (CDK) construct for internal AWS accounts.`,
      `Streamlined a previously manual workflow by enabling the creation and
    management of accounts through an infrastructure as code approach.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Private Computer Science Tutor",
    company: "Washington Metro Consultants",
    location: "Potomac, MD",
    description: [
      `Introduced high school students to Java and fundamental programming
      concepts such as object oriented programming, data structures, and
      algorithms.`,
      `All of my students earned a 5 on the AP Computer Science A exam.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Undergraduate Research Fellow",
    company: "National Institute of Standards and Technology (NIST)",
    location: "Gaithersburg, MD",
    description: [
      `Developed a Simple Network Management Protocol (SMNP) network
      manager with Java to monitor and control quantum devices within NIST’s
      Platform for Quantum Network Innovation.`,
      `Increased development efficiency by creating a remote, adaptable, and
      scalable method of managing networks.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Undergraduate Research Fellow",
    company: "National Institute of Standards and Technology (NIST)",
    location: "Gaithersburg, MD",
    description: [
      `Created an automated interface with MATLAB and LabVIEW that enabled the
      analysis of time correlation measurements too complex for pre-existing
      tools, eliminating a crucial limitation in the development of quantum
      repeaters.`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Pretty Much",
    description: `A full stack clone of the Airbnb website. Users can create
      and manage trips, reservations, and listings.`,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth"],
    websiteUrl: "https://airbnb-pretty-much.vercel.app/",
    imageUrl: airbnbPrettyMuch,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "AWS CDK",
  "AWS DynamoDB",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "Framer Motion",
] as const;
