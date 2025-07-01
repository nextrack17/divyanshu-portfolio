import BrainAnimation from './BrainAnimation';

export default function HeroSection() {
  const handleDownloadCV = () => {
    // TODO: Implement CV download
    console.log('Download CV clicked');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">🧠 Divyanshu Pandey</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
            "Where Code Meets Consciousness"
          </p>
        </div>
        
        {/* 3D Brain Animation Container */}
        <BrainAnimation />
        
        <div className="mt-12 animate-slide-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Computer Science Graduate • AI Researcher • Cognitive Science Explorer
            <br className="hidden md:block" />
            Investigating the intersection of artificial intelligence, consciousness, and philosophy
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleDownloadCV}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 animate-pulse-blue flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
            <button 
              onClick={handleContactClick}
              className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
