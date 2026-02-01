import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MapPin, Phone, Mail, ChevronRight, ArrowRight, Star, Users, Smile, BarChart, BookOpen, User, HandHeart } from 'lucide-react';
import heroImage from './assets/images/hero-image.png';

// --- Assets & Constants ---
const LOGO_URL = "https://static.wixstatic.com/media/d09b7d_a74d0a2393f94bc8b622fc84e85214b5~mv2.jpg/v1/fill/w_200,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Creekside_logo_2x2_120dpi_2019.jpg";

const COLORS = {
  blue: {
    royal: '#2658B2',
    medium: '#418EB1',
    soft: '#6DA4D7',
    light: '#B9D9EB',
    navy: '#052049',
  },
  green: '#A4D16A',
  yellow: '#FAC60B',
  cream: '#FDF6E8',z
  white: '#FFFFFF',
};

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'Who We Are', id: 'who-we-are' },
  { name: 'What We Do', id: 'what-we-do' },
  { name: 'Events', id: 'events' },
  { name: 'Families', id: 'families' },
  { name: 'Support', id: 'support' },
  { name: 'Join Us', id: 'join' },
];

const PILLARS = [
  { title: "Relationships", icon: Users, text: "We build sincere and meaningful relationships with all of our students." },
  { title: "Fun", icon: Smile, text: "We incorporate interests and highly engaging activities in everything we do to ensure that students want to be at school and to participate." },
  { title: "Regulation", icon: HandHeart, text: "All students learn important emotional, sensory, and behavioral regulation strategies." },
  { title: "Data Driven", icon: BarChart, text: "We decide Creekside programming, goals, and treatment options by consulting high-quality data." },
  { title: "Best in Class Education", icon: BookOpen, text: "We only follow evidence-based practices backed by extensive research that have been shown to benefit people with autism." },
  { title: "Person Centered", icon: User, text: "Our approach is person-first, trauma-sensitive, and humanistic. We adapt programming for students based on their personal preferences, history, and assent." },
  { title: "Family Partnership", icon: Heart, text: "Families are our partners in holistically educating and caring for our students. We work together with parents to meet all students' needs." },
];

const TESTIMONIALS = [
  {
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    author: "Parent Feedback",
    role: "Anonymous"
  },
  {
    text: "Parents are genuinely surprised their students can cook, use power tools, and perform complex tasks that will benefit them beyond the classroom.",
    author: "Jer Sanchez",
    role: "Adult Transition Teacher"
  },
  {
    text: "After 15 - 16 years with a client, I feel like these students, and often their families, are part of my family.",
    author: "Karen Hook",
    role: "Music Therapist"
  }
];

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-transform active:scale-95 shadow-md";
  const variantStyles = {
    primary: { backgroundColor: COLORS.yellow, color: COLORS.blue.navy },
    secondary: { backgroundColor: COLORS.green, color: COLORS.blue.navy },
    outline: { borderColor: COLORS.blue.royal, color: COLORS.blue.royal },
    white: { backgroundColor: 'white', color: COLORS.blue.royal },
  };

  return (
    <button 
      className={`${baseStyle} ${variant === 'outline' ? 'border-2' : ''} ${variant === 'white' ? 'hover:bg-gray-100' : 'hover:brightness-110'} ${className}`}
      style={variantStyles[variant]}
      onMouseEnter={(e) => {
        if (variant === 'outline') {
          e.target.style.backgroundColor = COLORS.blue.royal;
          e.target.style.color = 'white';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = COLORS.blue.royal;
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${className}`} style={{ color: COLORS.blue.navy }}>
    <span className="px-2 leading-tight inline-block transform -skew-x-3" style={{ backgroundColor: COLORS.green }}>
      <span className="block transform skew-x-3">{children}</span>
    </span>
  </h2>
);

const PillarCard = ({ pillar }) => {
  const Icon = pillar.icon;
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg border-b-4 hover:-translate-y-1 transition-all duration-300 h-full" style={{ borderBottomColor: COLORS.blue.royal }}>
      <div className="h-2" style={{ background: `linear-gradient(to right, ${COLORS.blue.royal}, ${COLORS.blue.soft})` }} />
      <div className="p-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: COLORS.blue.light, color: COLORS.blue.navy }} onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.green} onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.blue.light}>
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.blue.navy }}>{pillar.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {pillar.text}
        </p>
      </div>
    </div>
  );
};

const ConstructionPage = ({ pageName, goHome }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: COLORS.cream }}>
    <div className="p-8 rounded-full mb-6" style={{ backgroundColor: COLORS.blue.light }}>
      <MapPin size={64} style={{ color: COLORS.blue.royal }} />
    </div>
    <h1 className="text-4xl font-bold mb-4" style={{ color: COLORS.blue.navy }}>{pageName}</h1>
    <p className="text-lg text-gray-600 max-w-md mb-8">
      We are currently building this section of our digital campus. Please check back soon!
    </p>
    <Button variant="secondary" onClick={goHome}>
      Return Home
    </Button>
  </div>
);

// --- Main Application ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-white shadow-md font-sans animate-slide-down">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigateTo('home')}
          >
            <img src={LOGO_URL} alt="Creekside School" className="h-16 w-auto" />
            <div className="ml-3 hidden sm:block">
              <span className="block text-xl font-bold leading-none" style={{ color: COLORS.blue.navy }}>THE CREEKSIDE</span>
              <span className="block text-lg font-medium leading-none" style={{ color: COLORS.blue.royal }}>SCHOOL</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 flex-nowrap">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activePage === link.id 
                    ? '' 
                    : 'text-gray-600'
                }`}
                style={activePage === link.id 
                  ? { color: COLORS.blue.royal, backgroundColor: `${COLORS.blue.light}4D` }
                  : { color: 'inherit' }
                }
                onMouseEnter={(e) => {
                  if (activePage !== link.id) {
                    e.target.style.color = COLORS.blue.royal;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activePage !== link.id) {
                    e.target.style.color = '';
                  }
                }}
              >
                {link.name}
              </button>
            ))}
            <div className="ml-4 flex items-center gap-3">
               <Button variant="outline" className="shadow-lg transform hover:-translate-y-0.5" onClick={() => navigateTo('contact')}>
                  Contact
               </Button>
               <Button variant="primary" className="shadow-lg transform hover:-translate-y-0.5">
                  Donate
               </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 px-4 space-y-3">
              <Button variant="outline" className="w-full" onClick={() => navigateTo('contact')}>Contact</Button>
              <Button variant="primary" className="w-full">Donate</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="text-white pt-16 pb-8 font-sans" style={{ backgroundColor: COLORS.blue.navy }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <img src={LOGO_URL} alt="Logo" className="h-10 w-auto rounded-full bg-white border border-white" />
              The Creekside School
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Creekside School is a nonpublic school serving students with moderate-to-severe autism in Santa Clara County.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: COLORS.green }}>Contact Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>5629 Lean Avenue,<br/>San Jose, CA 95123</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 flex-shrink-0" size={18} />
                <a href="tel:408-448-2494" className="hover:text-white transition-colors">408-448-2494</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 flex-shrink-0" size={18} />
                <a href="mailto:info@creeksideschool.org" className="hover:text-white transition-colors">info@creeksideschool.org</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: COLORS.green }}>Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              {['Admissions', 'Careers', 'Donate', 'School Calendar'].map((item) => (
                <li key={item}>
                  <button onClick={() => navigateTo(item.toLowerCase().replace(' ', '-'))} className="hover:text-white hover:underline transition-all">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Tax */}
          <div>
             <h4 className="text-lg font-bold mb-4 uppercase tracking-wide" style={{ color: COLORS.green }}>Support</h4>
             <p className="text-sm text-blue-200 mb-4">
               Gifts are tax-deductible as allowed by law.
             </p>
             <p className="text-xs text-blue-300">
               Tax ID (EIN): [insert ID here]
             </p>
          </div>
        </div>
        
        <div className="border-t border-blue-900 pt-8 text-center text-blue-300 text-sm">
          &copy; {new Date().getFullYear()} The Creekside School. All rights reserved.
        </div>
      </div>
    </footer>
  );

  const HomeContent = () => (
    <div className="animate-fade-in font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Adult and child engaged in art activity at Creekside School" 
            className="w-full h-full object-cover"
          />
          {/* Dominant background gradient overlay */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${COLORS.blue.navy}E6, ${COLORS.blue.royal}CC, ${COLORS.blue.soft}66)` }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 mb-6 rounded-full backdrop-blur-sm border" style={{ backgroundColor: `${COLORS.blue.royal}80`, borderColor: `${COLORS.blue.light}4D` }}>
              <span className="text-sm font-bold tracking-wider uppercase">Welcome to Creekside</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Specialized Education for Students with 
              <span className="px-3 ml-2 transform -skew-x-6 inline-block" style={{ backgroundColor: COLORS.green, color: COLORS.blue.navy }}>
                Profound Autism
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-50 mb-8 leading-relaxed max-w-2xl font-light">
              At Creekside, we create tailored learning experiences and environments where students with profound autism are truly seen and understood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="white" onClick={() => navigateTo('contact')}>
                Contact Us
              </Button>
              <Button variant="primary" onClick={() => navigateTo('support')}>
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Creekside Difference */}
      <section className="py-20" style={{ backgroundColor: COLORS.cream }}>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <SectionHeading>The Creekside Difference</SectionHeading>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mt-8">
            "At Creekside, we create tailored learning experiences and environments where students with profound autism are truly seen and understood."
          </p>
          <div className="h-1 w-24 mx-auto mt-8 rounded-full" style={{ backgroundColor: COLORS.blue.royal }}></div>
        </div>
      </section>

      {/* Section 2: Our Pillars */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full skew-x-12" style={{ backgroundColor: `${COLORS.blue.light}33` }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading>Our Pillars</SectionHeading>
            <h3 className="text-lg text-gray-600 mt-4">
              The Creekside School serves a unique student population and their families. We take a special, holistic approach to educating students guided by 7 pillars, which create the foundation of our approach.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className={idx === PILLARS.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-4' : ''}>
                 <PillarCard pillar={pillar} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Community Partners */}
      <section className="py-16 border-y" style={{ backgroundColor: `${COLORS.blue.light}4D`, borderColor: COLORS.blue.light }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{ color: COLORS.blue.navy }}>Our heartfelt thanks to our community partners</h2>
            <div className="h-1 w-16 mx-auto rounded-full" style={{ backgroundColor: COLORS.green }}></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Text Placeholders for Logos as images were not provided */}
            <div className="text-xl font-bold text-gray-500 flex items-center gap-2">
               <Heart className="text-red-500" /> Stanford Medicine
            </div>
            <div className="text-xl font-bold text-gray-500">Bay Area Furniture Bank</div>
            <div className="text-xl font-bold text-gray-500">Autism Speaks</div>
            <div className="text-xl font-bold text-gray-500">The YMCA</div>
          </div>
        </div>
      </section>

      {/* Section 4: Interests / Navigation Grid */}
      <section className="py-20 relative" style={{ backgroundColor: COLORS.blue.navy }}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What are you interested in learning about?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Admission Process", icon: BookOpen, link: "admissions" },
              { title: "Community Partnerships", icon: Users, link: "partners" },
              { title: "Donating to Creekside", icon: Heart, link: "support" },
              { title: "Job Opportunities", icon: User, link: "careers" }
            ].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => navigateTo(item.link)}
                className="group flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
                onMouseEnter={(e) => e.target.style.borderColor = COLORS.green}
                onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <item.icon size={48} className="mb-4 group-hover:scale-110 transition-transform" style={{ color: COLORS.green }} />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <span className="group-hover:text-white flex items-center text-sm font-semibold transition-colors" style={{ color: COLORS.blue.light }}>
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Join Community / Testimonials */}
      <section className="py-24" style={{ backgroundColor: COLORS.cream }}>
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading className="text-center mb-24">Join the Creekside Community</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-8 rounded-xl shadow-xl relative mt-6 md:mt-0 border-t-4" style={{ backgroundColor: COLORS.blue.navy, borderTopColor: COLORS.green }}>
                <div className="absolute -top-4 left-8 text-white p-2 rounded-full shadow-lg ring-4" style={{ backgroundColor: COLORS.blue.royal, ringColor: COLORS.cream }}>
                  <Star size={20} fill="currentColor" />
                </div>
                <p className="text-blue-50 italic mb-6 leading-relaxed pt-2 font-light">
                  "{t.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3" style={{ backgroundColor: COLORS.blue.light, color: COLORS.blue.navy }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS.green }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      
      {activePage === 'home' ? (
        <HomeContent />
      ) : (
        <ConstructionPage pageName={NAV_LINKS.find(l => l.id === activePage)?.name || 'Page'} goHome={() => navigateTo('home')} />
      )}
      
      <Footer />
    </div>
  );
}
