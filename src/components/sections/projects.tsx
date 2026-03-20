"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "SwadeshiTrail-Safe Travel Planner",
    description: `SwadeshiTrail is a centralized travel platform that helps users explore destinations, plan trips, and stay safe through real-time monitoring. It features a dynamic safety scoring system with geofencing alerts and an event-driven backend for scalable tracking and rapid incident response.`,
    link: "https://github.com/DEV-KUMAR51520/smart-tourist-safety-system.git",
    images: [
      "/assets/projects-screenshots/swadeshitrial/1.png",
      "/assets/projects-screenshots/swadeshitrial/2.png",
      "/assets/projects-screenshots/swadeshitrial/3.png",
      "/assets/projects-screenshots/swadeshitrial/4.png",
      "/assets/projects-screenshots/swadeshitrial/5.png",
    ],
  },
  {
    id: 2,
    name: "LLM Based Query Retrieval System",
    description: `Built a RAG-based Query Retrieval System for BAJAJ Finserv using FastAPI to process unstructured data with efficient chunking, vector embeddings, and optimized retrieval for low-latency responses. Integrated agentic workflows for external API access and deployed the system on AWS with caching for improved performance and reduced LLM costs.`,
    link: "https://github.com/DEV-KUMAR51520/llm-agent.git",
    images: [
      "/assets/projects-screenshots/RAG/11.png"
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the
            dopest way possible.`,
    link: "https://portfolio-6fwf.vercel.app/",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 4,
    name: "AI Bug Hunter",
    description: `I built a multi-agent AI system that automates the debugging process by combining LLM reasoning with vector-based retrieval. By implementing the Model Context Protocol (MCP), the system can dynamically fetch documentation to explain complex code bugs with high precision and developer-friendly context."`,
    link: "https://github.com/DEV-KUMAR51520/ai-bug.git",
    images: [
      "/assets/projects-screenshots/RAG/11.png",
      

    ],
  },
];
function Page() {
  return (
    <section id="projects" className="relative z-10 w-full pointer-events-none md:pt-20 bg-slate-100 dark:bg-black min-h-screen">
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full pointer-events-auto">
        <h1 className="text-4xl mt-[100px] mb-[50px] text-black dark:text-zinc-300">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <Link href={project.link} target="_blank" className="block text-zinc-800 dark:text-zinc-300">
                <div className="h-[200px]">
                  <Splide
                    options={{
                      type: "loop",
                      interval: 3000,
                      autoplay: true,
                      speed: 2000,
                      perMove: 1,
                      rewind: true,
                      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                      arrows: false,
                    }}
                    aria-label="My Favorite Images"
                  >
                    {project.images.map((image) => (
                      <SplideSlide key={image}>
                        <Image
                          src={image}
                          alt={`screenshot of "${project.name}`}
                          className="w-[300px] h-[200px] rounded-md bg-zinc-200 dark:bg-zinc-900 object-cover"
                          width={300}
                          height={400}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Page;
