import React, { useState, useEffect } from 'react';
import { Building2, Pencil, Monitor, ScrollText, Home, Key, MessageSquare, ChevronRight, Menu, X, Building, Landmark, Castle, Hotel, Factory, Mountain, PenTool, Grid as Bridge, Warehouse, Trees, Building2Icon, HomeIcon, LayoutPanelLeft, Blocks, CircuitBoard, Combine, Compass, Construction, Plane as Crane, Fingerprint, FlaskConical, Globe2, Hammer } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Building2,
    title: 'Consultation & Planning',
    description: 'We begin with an in-depth consultation to understand your vision, requirements, and budget. Our experts work closely with you to develop a comprehensive project plan.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 2,
    icon: Pencil,
    title: 'Conceptual Design',
    description: 'Our creative team develops initial design concepts, incorporating your ideas while adding our expertise to create unique architectural solutions.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 3,
    icon: Monitor,
    title: '3D Rendering & Visualization',
    description: 'Experience your project before construction through photorealistic 3D renderings and virtual walkthroughs.',
    image: 'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 4,
    icon: ScrollText,
    title: 'Approvals & Compliance',
    description: 'We handle all necessary permits and ensure your project meets local building codes and regulations.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 5,
    icon: Home,
    title: 'Construction & Execution',
    description: 'Our team closely supervises the construction process, ensuring quality and adherence to the approved designs.',
    image: 'https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 6,
    icon: Key,
    title: 'Final Walkthrough & Handover',
    description: 'We conduct a detailed final inspection and provide you with all necessary documentation before handover.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
  },
];

const clients = [
  { name: 'Skyline Developers', icon: Building },
  { name: 'Nexus Architecture', icon: Landmark },
  { name: 'Elevate Constructions', icon: Castle },
  { name: 'Urban Visionaries', icon: Hotel },
  { name: 'Paramount Builders', icon: Factory },
  { name: 'Horizon Estates', icon: Mountain },
  { name: 'Zenith Architects', icon: PenTool },
  { name: 'Legacy Infrastructure', icon: Bridge },
  { name: 'Summit Structures', icon: Warehouse },
  { name: 'Green Valley Projects', icon: Trees },
  { name: 'Metropolitan Designs', icon: Building2Icon },
  { name: 'Eco Habitats', icon: HomeIcon },
  { name: 'Future Foundations', icon: LayoutPanelLeft },
  { name: 'Innovation Builders', icon: Blocks },
  { name: 'Smart Spaces', icon: CircuitBoard },
  { name: 'Unity Developments', icon: Combine },
  { name: 'Pioneer Projects', icon: Compass },
  { name: 'Elite Engineering', icon: Construction },
  { name: 'Apex Architecture', icon: Crane },
  { name: 'Signature Spaces', icon: Fingerprint },
  { name: 'Tech Towers', icon: FlaskConical },
  { name: 'Global Grounds', icon: Globe2 },
  { name: 'Master Builders', icon: Hammer },
  { name: 'Crown Constructions', icon: Building },
];

function App() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-xl font-bold">Halo Architects</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Projects</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black bg-opacity-95 rounded-lg">
              <div className="flex flex-row justify-center space-x-6 py-4">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Projects</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">About</a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Bringing Your Vision to Life, Step by Step
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Award-winning architectural solutions crafted with precision, innovation, and artistic excellence
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
              Get a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Services Timeline */}
      <div className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">Our Process</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                    activeService === service.id ? 'max-h-40' : 'max-h-0'
                  }`}>
                    <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm sm:text-base">
                      Learn more <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-12 sm:py-16 bg-black text-white overflow-hidden">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Our Clients</h2>
        <div className="relative">
          {[0, 1, 2].map((row) => (
            <div key={row} className={`flex space-x-8 animate-scroll-${row % 2 === 0 ? 'left' : 'right'} mb-8`}>
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="shrink-0 py-4 px-6 hover:scale-110 hover:text-blue-400 transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center space-x-3">
                    <client.icon className="w-6 h-6" />
                    <span className="text-lg sm:text-xl whitespace-nowrap relative">
                      {client.name}
                      <span className="absolute inset-0 bg-white bg-opacity-10 blur-lg scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-12 sm:py-16 md:py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=2070"
            alt="Architecture Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Request a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
            {isFormSubmitted && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you! We'll contact you shortly.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}

export default App;