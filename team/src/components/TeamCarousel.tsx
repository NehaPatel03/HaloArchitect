import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  yearsInPractice: number;
  rating: number;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alizeh Carter",
    title: "AIA",
    specialties: ["Principal Architect","Sustainable Design"],
    image: "https://neuroject.com/wp-content/uploads/2024/04/Top-23-Famous-Women-Architects-in-World-2024-Review-Neuroject-01-1024x683.jpg",
    yearsInPractice: 12,
    rating: 4.8,
    bio: "Alex Carter is a visionary architect dedicated to creating environmentally responsible and energy-efficient designs. With over 12 years of experience, he specializes in passive design strategies, renewable energy integration, and green building certifications."
  },
  {
    id: 2,
    name: "Daniel Rodriguez",
    title: "RIBA",
    specialties: ["Structural Engineering","High-Rise & Resilient Architecture"],
    image: "https://img.freepik.com/free-photo/man-working-architectural-design-office_482257-8108.jpg",
    yearsInPractice: 15,
    rating: 4.9,
    bio: "Daniel Rodriguez is a highly skilled structural engineer with 15 years of experience in designing earthquake-resistant, high-rise, and complex structures. He excels in blending advanced engineering techniques with architectural creativity, ensuring that every building he works on is both safe and visually compelling."
  },
  {
    id: 3,
    name: "Zara Rehman",
    title: "NCARB",
    specialties: ["Interior Architect", "Experiential & Luxury Space Designer"],
    image: "https://scoopempire.com/wp-content/uploads/2021/08/66268eeb-a73f-473a-8c8c-72091aabe882-678x1024.jpg",
    yearsInPractice: 8,
    rating: 4.7,
    bio: "Zara Rehman is an award-winning interior architect specializing in high-end residential, hospitality, and experiential space design. With 9 years of expertise, she masterfully balances form, function, and atmosphere, crafting interiors that evoke emotion and elevate daily experiences."
  },
  {
    id: 4,
    name:"James Wilson",
    title: "FAIA",
    specialties: ["Heritage Conservationist", "Adaptive Reuse & Restoration Expert"],
    image: "https://media.istockphoto.com/id/162916804/photo/hes-a-talented-architect.jpg?s=612x612&w=0&k=20&c=nAYiA7SmvgX2aGTp6Vpu7Kr6ve4M4aNDwdTouxWQV84=",
    yearsInPractice: 20,
    rating: 4.9,
    bio: "Wilson is a globally recognized expert in heritage conservation, breathing new life into historical structures while preserving their cultural significance. With over 20 years of experience, he has led restoration projects on iconic landmarks, blending traditional craftsmanship with modern preservation techniques."
  },
  {
    id: 5,
    name: "Lisa Park",
    title: "LEED AP",
    specialties: ["Urban Designer", "Smart Cities & Infrastructure Expert"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&q=80&w=400",
    yearsInPractice: 10,
    rating: 4.8,
    bio: "Dr. Park is a forward-thinking urban designer with expertise in shaping smart, sustainable, and inclusive cities. Over the past 10 years, she has played a key role in major urban planning projects, focusing on transit-oriented development, public space revitalization, and innovative zoning solutions."
  }
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    

    <div className="min-h-screen bg-[#000000] p-22 md:p-10 ">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-serif mb-1 text-[#ffffff]">MEET</h1>
            <h2 className="text-5xl md:text-7xl font-serif text-[#ffffff] mb-1">OUR</h2>
            <h3 className="text-5xl md:text-7xl font-serif text-[#ffffff]">TEAM</h3>
          </div>

          <div className="md:col-span-4 relative h-[80%] md:h-[500px] flex items-center justify-center ml-[120px]">
            {teamMembers.map((member, index) => {
              const position = (index - currentIndex + teamMembers.length) % teamMembers.length;
              const isActive = position === 0;

              return (
                <div
                  key={member.id}
                  className={`absolute transition-all duration-500 cursor-pointer
                    ${position === 0 ? 'z-40 left-0 transform-none opacity-100 w-[250px] md:w-[400px]' : ''}
                    ${position === 1 ? 'z-30 left-[40px] md:left-[80px] translate-x-[40%] opacity-80 w-[200px] md:w-[350px]' : ''}
                    ${position === 2 ? 'z-20 left-[80px] md:left-[160px] translate-x-[80%] opacity-60 w-[150px] md:w-[300px]' : ''}
                    ${position === 3 ? 'z-10 left-[120px] md:left-[240px] translate-x-[120%] opacity-40 w-[100px] md:w-[250px]' : ''}
                    ${position === 4 ? 'z-0 left-[160px] md:left-[320px] translate-x-[160%] opacity-20 w-[50px] md:w-[200px]' : ''}
                  `}
                  onClick={() => isActive && handleMemberClick(member)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                  />
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-white rounded-b-lg">
                      <h3 className="text-xl md:text-2xl font-serif mb-2">{member.name}, {member.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 md:px-3 py-1 bg-white rounded-full text-xs md:text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <button className="absolute bottom-2 md:bottom-6 right-4 md:right-6 p-2 rounded-full text-[#ffffff] hover:bg-[#ffffff] transition-colors">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-white max-w-md text-center md:text-left">
            When you need fast and effective medical services, you can trust our team at ARX Care Clinic.
          </p>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-3 md:p-4 border rounded-full hover:bg-[#000000] transition-colors text-white"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 md:p-4 border rounded-full hover:bg-[#000000] transition-colors text-white"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
          <div className="text-3xl md:text-4xl font-serif text-white">
            {currentIndex + 1}<span className="text-[#ffffff]">/{teamMembers.length}</span>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
              <div>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                />
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedMember.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-serif mb-2">
                  <span className="text-[#9B9B8C]">{selectedMember.name.split(' ')[0]}</span>{' '}
                  {selectedMember.name.split(' ').slice(1).join(' ')}, {selectedMember.title}
                </h2>
                <p className="text-base md:text-lg mb-8">{selectedMember.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8">
                  <div>
                    <div className="text-4xl md:text-5xl font-serif mb-2">{selectedMember.yearsInPractice}</div>
                    <div className="text-gray-600">Years in practice</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-serif mb-2">{selectedMember.rating}</div>
                    <div className="text-gray-600">Average rating</div>
                  </div>
                </div>

                <button className="mt-8 w-full py-3 md:py-4 bg-[#D4C9B9] hover:bg-[#9B9B8C] transition-colors rounded-lg flex items-center justify-center gap-2">
                  SCHEDULE AN APPOINTMENT
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;