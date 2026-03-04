import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data/content";

export default function Education() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-dark-surface/50"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white dark:bg-dark-surface rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-primary" size={32} />
            </div>

            <h3 className="text-xl font-bold mb-2">{education.school}</h3>

            <p className="text-primary font-medium mb-3">{education.degree}</p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={14} />
              {education.years}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
