import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 90, proficiency: "Advanced" },
        { name: "JavaScript", level: 75, proficiency: "Intermediate" },
        { name: "HTML/CSS", level: 85, proficiency: "Advanced" }
      ]
    },
    {
      title: "ML & Data Science",
      icon: "🧠",
      skills: [
        { name: "TensorFlow/PyTorch", level: 80, proficiency: "Intermediate" },
        { name: "Scikit-learn", level: 85, proficiency: "Advanced" },
        { name: "Pandas/NumPy", level: 90, proficiency: "Advanced" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "ReactJS", level: 75, proficiency: "Intermediate" },
        { name: "Flask", level: 70, proficiency: "Intermediate" },
        { name: "Bootstrap", level: 80, proficiency: "Advanced" }
      ]
    },
    {
      title: "Tools & Systems",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 85, proficiency: "Advanced" },
        { name: "Docker", level: 60, proficiency: "Beginner" },
        { name: "VS Code", level: 95, proficiency: "Expert" }
      ]
    }
  ];

  const learningPhilosophy = [
    {
      icon: "❓",
      title: "Conceptual Depth",
      description: "I learn by first grasping the \"why\" of a concept"
    },
    {
      icon: "🔄",
      title: "Iterative Process",
      description: "From whiteboards to Jupyter notebooks in hands-on loops"
    },
    {
      icon: "🧩",
      title: "Elegant Logic",
      description: "Breaking down complexity into manageable, elegant solutions"
    },
    {
      icon: "⭐",
      title: "Wonder-Driven",
      description: "Driven by intellectual wonder over trend-chasing"
    }
  ];

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="section-divider"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">🧰 Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies for building conscious systems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="font-space text-xl font-semibold gradient-text mb-6 flex items-center">
                  <span className="mr-3 text-2xl">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <span className="text-primary text-sm">{skill.proficiency}</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transition: 'width 1s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Learning Philosophy */}
          <div className="glass-card p-8 rounded-xl mt-8">
            <h3 className="font-space text-2xl font-semibold gradient-text mb-6 text-center">🧠 Learning Philosophy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPhilosophy.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
