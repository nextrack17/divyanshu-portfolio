export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-divider"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">👨‍💻 Who I Am</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Exploring the depths of artificial intelligence through the lens of consciousness and philosophy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a computer science graduate, self-motivated researcher, and explorer at the intersection of 
              <span className="gradient-text font-medium"> AI, cognitive science, and philosophy</span>. 
              My journey takes me beyond standard software development into realms of machine learning, 
              neurotech, and conscious systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With a background in B.Tech Computer Science from ITM University (2019) and hands-on research 
              at IIIT Hyderabad, I combine structured engineering with intellectual curiosity to investigate 
              not just how machines learn—but why they should.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Months Research</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">ML Projects</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Tech Stacks</div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="font-space text-2xl font-semibold mb-6 gradient-text">🔍 Focus Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold">Applied AI & Machine Learning</h4>
                  <p className="text-muted-foreground text-sm">Leveraging Python libraries like Scikit-learn, TensorFlow, and PyTorch for interpretable learning systems</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Cognitive Computing</h4>
                  <p className="text-muted-foreground text-sm">From neuro-inspired systems to brain-AI interfaces, exploring mental processes like memory and perception</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold">Philosophy of Mind & Intelligence</h4>
                  <p className="text-muted-foreground text-sm">Investigating perception, rationality, and artificial consciousness through philosophical rigor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
