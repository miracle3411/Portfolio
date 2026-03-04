import { useEffect, useRef, useState } from "react";
import { Github, Calendar, Users } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group bg-gray-50 dark:bg-dark-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: visible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/40">
                  {project.title}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {project.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    {project.role}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {project.duration}
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase text-gray-500 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 3).map((achievement, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
