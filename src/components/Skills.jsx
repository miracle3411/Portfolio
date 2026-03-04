import { useEffect, useRef, useState } from "react";
import {
  Code,
  Layers,
  Wrench,
  Users,
  CheckCircle,
} from "lucide-react";
import { skills } from "../data/content";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    data: skills.languages,
    type: "progress",
  },
  {
    title: "Frameworks & Technologies",
    icon: Layers,
    data: skills.frameworks,
    type: "badges",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    data: skills.tools,
    type: "badges",
  },
  {
    title: "Soft Skills",
    icon: Users,
    data: skills.softSkills,
    type: "list",
  },
];

export default function Skills() {
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
    <section id="skills" className="py-20">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`p-6 bg-gray-50 dark:bg-dark-surface rounded-xl transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(catIdx + 1) * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                </div>

                {cat.type === "progress" && (
                  <div className="space-y-4">
                    {cat.data.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: visible ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cat.type === "badges" && (
                  <div className="flex flex-wrap gap-2">
                    {cat.data.map((item) => (
                      <span
                        key={item.name || item}
                        className="px-3 py-1.5 bg-white dark:bg-dark-bg text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary transition-colors"
                      >
                        {item.name || item}
                      </span>
                    ))}
                  </div>
                )}

                {cat.type === "list" && (
                  <div className="grid grid-cols-2 gap-2">
                    {cat.data.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle
                          size={16}
                          className="text-primary shrink-0"
                        />
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
