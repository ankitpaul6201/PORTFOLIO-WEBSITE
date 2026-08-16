import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiKotlin,
  SiAndroid,
  SiCapacitor,
  SiGooglechrome,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Project
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <span>HTML</span>,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <span>CSS</span>,
  },
  huggingface: {
    title: "HuggingFace",
    bg: "black",
    fg: "white",
    icon: <span>🤗</span>,
  },
  gemini: {
    title: "Gemini AI",
    bg: "black",
    fg: "white",
    icon: <span>✨</span>,
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <span>N</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span>TF</span>,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span>⚡</span>,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span>🔥</span>,
  },
  kotlin: {
    title: "Kotlin",
    bg: "black",
    fg: "white",
    icon: <SiKotlin />,
  },
  android: {
    title: "Android",
    bg: "black",
    fg: "white",
    icon: <SiAndroid />,
  },
  capacitor: {
    title: "Capacitor",
    bg: "black",
    fg: "white",
    icon: <SiCapacitor />,
  },
  chrome: {
    title: "Chrome Extension",
    bg: "black",
    fg: "white",
    icon: <SiGooglechrome />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span>👁️</span>,
  },
  playwright: {
    title: "Playwright",
    bg: "black",
    fg: "white",
    icon: <span>🎭</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "jan-setu-ai",
    category: "AI & Civic Tech",
    title: "Jan Setu AI",
    src: "/assets/projects-screenshots/jan_setu_ai.png",
    screenshots: [
      "/assets/projects-screenshots/jan_setu_ai.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.kotlin,
        PROJECT_SKILLS.android,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/ankitpaul6201",
    live: "https://ai.studio/apps/4da14abd-9564-4b9c-b193-caa830cbf1f4",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An AI-powered civic issue reporting platform tailored for smart city community engagement. Jan Setu AI empowers citizens to capture, report, and automatically categorize local infrastructure issues (potholes, waste, water supply) using server-side Gemini AI for severity analysis and instant routing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/jan_setu_ai.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Smart Civic Issue Resolution</TypographyH3>
          <p className="font-mono mb-2">
            Features real-time location mapping, automated AI priority classification, Jetpack Compose Android UI, and seamless integration with municipal response workflows.
          </p>
        </div>
      );
    },
  },
  {
    id: "kira-ai-agent",
    category: "AI & Autonomous Systems",
    title: "Kira AI Agent",
    src: "/assets/projects-screenshots/kira_ai_agent.png",
    screenshots: [
      "/assets/projects-screenshots/kira_ai_agent.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
      ],
      backend: [
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.playwright,
      ],
    },
    github: "https://github.com/ankitpaul6201/Personal-Ai-Assistant",
    live: "https://github.com/ankitpaul6201/Personal-Ai-Assistant",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A real-time conversational & visual autonomous AI desktop assistant. KIRA features Google Gemini Live API integration via bidirectional WebSockets, a cyberpunk PyQt6 HUD canvas with audio visualizers, OpenCV vision for camera/screen perception, system OS controls, and a secure HTTPS remote mobile dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/kira_ai_agent.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Real-Time Autonomous Perception</TypographyH3>
          <p className="font-mono mb-2">
            Engineered with PyAudio PCM streaming, Playwright web automation, grounded multi-mode search, hardware telemetry monitoring (CPU/GPU/RAM), and end-to-end encrypted remote control.
          </p>
        </div>
      );
    },
  },
  {
    id: "cp-vault",
    category: "Developer Tools & Automation",
    title: "CP-Vault",
    src: "/assets/projects-screenshots/cp_vault.png",
    screenshots: [
      "/assets/projects-screenshots/cp_vault.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.chrome,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    github: "https://github.com/ankitpaul6201/CP-VAULT",
    live: "https://github.com/ankitpaul6201/CP-VAULT",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Manifest V3 Chrome Extension that acts as your personal competitive programming archivist. Automatically extracts and commits accepted solutions from LeetCode, Codeforces, CodeChef, and HackerRank directly to your GitHub repository in atomic multi-file commits.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/cp_vault.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Automated GitHub Solution Sync</TypographyH3>
          <p className="font-mono mb-2">
            Generates beautiful per-problem README documentation, tracks repository stats & streaks, provides duplicate detection via content hashing, and includes an offline retry queue.
          </p>
        </div>
      );
    },
  },
  {
    id: "campus-buddy",
    category: "Full-Stack & Mobile",
    title: "Campus Buddy",
    src: "/assets/projects-screenshots/campus_buddy.png",
    screenshots: [
      "/assets/projects-screenshots/campus_buddy.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.capacitor,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    github: "https://github.com/ankitpaul6201/Campus-Buddy",
    live: "https://github.com/ankitpaul6201/Campus-Buddy",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A mobile-first student campus marketplace app enabling college students to buy, sell, and discover essentials within their verified university community. Built as an Android app with React + Capacitor and Node.js + MongoDB.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/campus_buddy.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Peer-to-Peer Campus Marketplace</TypographyH3>
          <p className="font-mono mb-2">
            Includes JWT student authentication, Cloudinary photo uploads, in-app seller messaging, real-time notifications, saved wishlists, and smooth Framer Motion transitions.
          </p>
        </div>
      );
    },
  },
  {
    id: "college-expense-tracker",
    category: "Finance & Utility",
    title: "College Expense Tracker",
    src: "/assets/projects-screenshots/expense-tracker-1.png",
    screenshots: [
      "/assets/projects-screenshots/expense-tracker-1.png",
      "/assets/projects-screenshots/expense-tracker-2.png"
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.netlify,
      ],
    },
    live: "https://ankit-expense-tracker-buddy.netlify.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart expense tracking application tailored for college students to manage their daily finances, semester budgets, and spending habits effectively.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "/assets/projects-screenshots/expense-tracker-1.png",
              "/assets/projects-screenshots/expense-tracker-2.png",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Smart Budgeting</TypographyH3>
          <p className="font-mono mb-2">
            Features include semester-wise tracking, visual spending breakdown, real-time balance updates, and efficient expense categorization.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-object-detection",
    category: "AI & Computer Vision",
    title: "AI Object Detection System",
    src: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800&h=600&fit=crop",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.netlify,
        PROJECT_SKILLS.tensorflow,
      ],
    },
    live: "https://ai-object-detection-system.netlify.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A sophisticated AI-powered object detection system capable of identifying and classifying objects in real-time video streams and images. Built with advanced computer vision techniques to provide accurate and fast detection for security, automation, and analytics applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1535378437323-952a8d9da305?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Real-Time Detection</TypographyH3>
          <p className="font-mono mb-2">
            Utilizes state-of-the-art deep learning models to process visual data instantly. Features include multi-object tracking, custom class training, and high-accuracy confidence scoring.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-language-translator",
    category: "AI & NLP",
    title: "AI Language Translator",
    src: "https://images.unsplash.com/photo-1543165796-5426273eaab3?w=800&h=600&fit=crop",
    screenshots: [],
    live: "https://huggingface.co/spaces/ankitpaul007/Ankit-Translator",
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.huggingface,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.gemini,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An intelligent language translation tool breaking down communication barriers. This AI translator supports multiple languages with high nuance preservation, making global communication seamless and effective.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1543165796-5426273eaab3?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Neural Machine Translation</TypographyH3>
          <p className="font-mono mb-2">
            Powered by advanced NLP models to understand context, idioms, and grammar. Supports text-to-text and speech-to-text translation capabilities.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-autocorrect",
    category: "AI & NLP",
    title: "AI Autocorrect Tool",
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    screenshots: [],
    live: "https://huggingface.co/spaces/ankitpaul007/automation_tool",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.javascript,
      ],
      backend: [
        PROJECT_SKILLS.huggingface,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.pytorch, // or PROJECT_SKILLS.transformers
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart autocorrect assistant that goes beyond simple spell-checking. It analyzes sentence structure and context to suggest grammar improvements, style enhancements, and more precise vocabulary.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Context-Aware Correction</TypographyH3>
          <p className="font-mono mb-2">
            Uses transformer-based language models to understand the writer&apos;s intent and provide relevant corrections. Helps improve writing clarity and professionalism.
          </p>
        </div>
      );
    },
  },
  {
    id: "personal-ai-assistant",
    category: "AI & Automation",
    title: "Personal AI Assistant (In Process)",
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    screenshots: [],
    live: "#",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            (Current Work in Progress) A comprehensive personal AI assistant designed to handle daily tasks, schedule management, and information retrieval. This project aims to integrate various AI services into a unified personal dashboard.
          </TypographyP>

          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Building the Future</TypographyH3>
          <p className="font-mono mb-2">
            Currently developing the core reasoning engine and integration modules. Features will include voice interaction, personalized recommendations, and automated workflow execution.
          </p>
        </div>
      );
    },
  },
];
export default projects;
