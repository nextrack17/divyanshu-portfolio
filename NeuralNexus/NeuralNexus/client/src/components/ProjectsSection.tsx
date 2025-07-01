export default function ProjectsSection() {
  const projects = [
    {
      title: "🎧 Neuro-Music Therapy System",
      description: "An AI-assisted platform for neurological music therapy using DepthAI, built for cognitive rehabilitation in Alzheimer's patients. Combines real-time vision interfaces with personalized therapeutic interventions.",
      tags: ["DepthAI", "Computer Vision", "Cognitive Therapy", "Python"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "🧠 Perception Model Prototypes",
      description: "Experimental ML models to simulate subjective perception variability in data labeling tasks. Where philosophical grounding meets practical inference, exploring the nature of subjective experience in AI.",
      tags: ["TensorFlow", "Cognitive Modeling", "Philosophy", "ML"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "📊 Data Visualization Dashboards",
      description: "Created rich visual interfaces using Matplotlib and Seaborn to extract insights from environmental and health-related datasets. Interactive dashboards that make complex data accessible and actionable.",
      tags: ["Matplotlib", "Seaborn", "Data Science", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "🧪 Machine Learning Portfolio",
      description: "Ongoing series of implementations in classification, clustering, and regression problems using Python's ML ecosystem. From theory to practice, exploring the foundations of intelligent systems.",
      tags: ["Scikit-learn", "PyTorch", "Classification", "Clustering"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-divider"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">🧩 Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Where theoretical depth meets experimental innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card p-6 rounded-xl transition-all duration-300">
              <div className="h-48 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-space text-xl font-semibold gradient-text mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-primary hover:text-primary/80 transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
