import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title:
      "Infrasight - AI-Powered Infrastructure Monitoring - Python & FastAPI",
    description:
      "Developed a specialized AI Agent system for the Construction Industry to automate 3D BIM model modifications and generate technical construction reports using Python and FastAPI as the core backend orchestration layer.",
    image: "/projects/image_infrasight.jpg",
    tags: [
      "Python",
      "FastAPI",
      "AI/ML",
      "JWT",
      "Docker",
      "OAuth2",
      "PostgreSQL",
      "Cloud Storage",
      "Autodesk Forge API",
      "LangGraph",
    ],
    link: "https://infrasight.hephaestus-tech.org/login",
    github: "https://infrasight.hephaestus-tech.org/login",
  },
  {
    title: "Job Recruitment - Node.js & Nest.js",
    description:
      "Engineered a high-performance recruitment platform using NodeJS and NestJS to manage comprehensivedata for accounts, candidate profiles, recruiter entities, and the end-to-end application process.",
    image: "/projects/image_job_recruitment_nestjs.png",
    tags: [
      "Node.js",
      "Nest.js",
      "MongoDB",
      "JWT",
      "Docker",
      "React",
      "TypeScript",
    ],
    link: "https://www.youtube.com/watch?v=loAPnfyOcIs",
    github: "https://github.com/ttt2205/job-recruitment",
  },
  {
    title: "Job Recruitment Platform - Java & Spring Boot",
    description:
      "Engineered a high-performance recruitment platform based on a Microservices architecture using Java 21 and Spring Boot 3; ensured system scalability and resilience through decoupled service boundaries and modern backend patterns.",
    image: "/projects/image_job_recruitment_platform_java.jpg",
    tags: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "JWT",
      "OAuth2",
      "Docker",
      "React",
      "React",
      "TypeScript",
      "OpenAPI",
    ],
    link: "https://github.com/ttt2205/BE_Job_Recruitment_Platform_Spring_Boot_Microservice",
    github:
      "https://github.com/ttt2205/BE_Job_Recruitment_Platform_Spring_Boot_Microservice",
  },
  {
    title: "Dormitory Management - Python & Django",
    description:
      "Engineered a high-performance dormitory management system using Python and Django to streamline operations and enhance student experience.",
    image: "/projects/image_dormitory_management.jpg",
    tags: ["Python", "Django", "MySQL", "Next.js"],
    link: "https://github.com/ttt2205/QL_KTX_BE",
    github: "https://github.com/ttt2205/QL_KTX_BE",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/ttt2205?tab=repositories">
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
