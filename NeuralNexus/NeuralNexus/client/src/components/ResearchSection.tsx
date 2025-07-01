export default function ResearchSection() {
  return (
    <section id="research" className="py-20 relative">
      <div className="section-divider"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">🧪 Research Journey</h2>
          <p className="text-muted-foreground text-lg">
            Deep dive into cognitive science and philosophical inquiry at IIIT Hyderabad
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="timeline-item mb-12">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="font-space text-2xl font-semibold gradient-text">🔬 Cognitive Science Lab</h3>
                <span className="text-primary font-mono text-sm">6-month internship + 4-month RA</span>
              </div>
              <p className="text-muted-foreground mb-4">IIIT Hyderabad</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-primary">Key Project:</h4>
                <p className="leading-relaxed">
                  Built a <span className="gradient-text font-medium">Neurological Music Therapy Platform</span> 
                  for Alzheimer's patients using DepthAI and real-time vision interfaces. This platform 
                  combines cognitive rehabilitation with AI-driven personalization.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-primary">Intensive Courses Audited:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Introduction to Cognitive Science</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Cognitive Neuroscience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Behavioral Research & Statistical Methods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item mb-12">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="font-space text-2xl font-semibold gradient-text">📚 Philosophy Lab</h3>
                <span className="text-primary font-mono text-sm">Mar 2024 – May 2024</span>
              </div>
              <p className="text-muted-foreground mb-4">Research Assistant • IIIT Hyderabad</p>
              
              <p className="leading-relaxed">
                Worked on problems relating to <span className="gradient-text font-medium">perception, consciousness, and analytic metaphysics</span>, 
                especially in relation to cognitive systems and logic. This research bridged theoretical philosophy 
                with practical applications in AI consciousness.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="font-space text-2xl font-semibold gradient-text">🌐 Product Lab</h3>
                <span className="text-primary font-mono text-sm">July 2023 – Jan 2024</span>
              </div>
              <p className="text-muted-foreground mb-4">Web Development Intern</p>
              
              <p className="leading-relaxed mb-4">
                Built modern web applications using <span className="text-primary font-mono">ReactJS + Flask</span> stack, 
                integrating user-focused design with scalable backend logic. Managed full-stack components 
                and collaborated in agile environments.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">ReactJS</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Flask</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Full-Stack</span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Agile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
