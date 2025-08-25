"use client";

import React, { useState } from 'react';
import { Calendar, Users, Trophy, Star, CheckCircle, Search, MapPin } from 'lucide-react';

const Facilities = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Facilities' },
    { id: 'tournaments', name: 'Tournaments' },
    { id: 'equipment', name: 'Sports Equipment' },
    { id: 'training', name: 'Training Programs' },
    { id: 'events', name: 'Event Hosting' }
  ];

  const facilities = [
    {
      id: 1,
      name: "Indoor Futsal Arena",
      category: "tournaments",
      image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Professional indoor futsal court designed for tournaments and competitive play.",
      features: ["FIFA Standard Court", "Electronic Scoreboard", "Spectator Seating", "Professional Lighting", "Locker Rooms", "Referee Facilities"],
      capacity: "5v5 matches",
      rating: 4.9,
      reviews: 156,
      size: "4,000 sq ft"
    },
    {
      id: 2,
      name: "Indoor Cricket Ground",
      category: "tournaments",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Specialized indoor cricket facility with professional pitch and bowling machines.",
      features: ["Professional Pitch", "Bowling Machines", "Digital Scoring", "Training Nets", "Player Lounge", "Coaching Area"],
      capacity: "30 players",
      rating: 4.8,
      reviews: 132,
      size: "8,500 sq ft"
    },
    {
      id: 3,
      name: "Premium Sports Equipment",
      category: "equipment",
      image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      description: "Top-quality sports equipment available for rent or purchase for all indoor sports.",
      features: ["Futsal Balls", "Cricket Gear", "Protective Equipment", "Training Aids", "Electronic Scoreboards", "Maintenance Services"],
      capacity: "Full inventory",
      rating: 4.7,
      reviews: 98,
      size: "Equipment storage"
    },
    {
      id: 4,
      name: "Elite Training Programs",
      category: "training",
      image: "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Professional coaching programs for all skill levels in various indoor sports.",
      features: ["Certified Coaches", "Skill Development", "Fitness Training", "Strategy Sessions", "Video Analysis", "Performance Tracking"],
      capacity: "Individual & group sessions",
      rating: 4.9,
      reviews: 204,
      size: "Training areas"
    },
    {
      id: 5,
      name: "Tournament Hosting Services",
      category: "events",
      image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Complete event management services for indoor sports tournaments of any scale.",
      features: ["Event Planning", "Referee Services", "Media Coverage", "Trophy & Awards", "Participant Management", "Sponsorship Coordination"],
      capacity: "100+ participants",
      rating: 4.8,
      reviews: 117,
      size: "Full facility access"
    },
    {
      id: 6,
      name: "Multi-Purpose Sports Hall",
      category: "tournaments",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      description: "Versatile indoor arena configurable for basketball, volleyball, badminton, and more.",
      features: ["Modular Court System", "Retractable Seating", "Broadcast Facilities", "VIP Areas", "Locker Rooms", "Concession Stands"],
      capacity: "Multi-sport events",
      rating: 4.9,
      reviews: 189,
      size: "12,000 sq ft"
    }
  ];

  const filteredFacilities = facilities.filter(facility => {
    const matchesCategory = activeCategory === 'all' || facility.category === activeCategory;
    const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          facility.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/20">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Sports Facilities</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Premier indoor sports complex specializing in tournaments, training, and events for futsal, cricket, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-blue-900/40 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-700/30 group-hover:border-blue-500/50 transition-all duration-500">
                <div className="pl-5 pr-3">
                  <Search className="w-5 h-5 text-blue-300" />
                </div>
                <input
                  type="text"
                  placeholder="Search facilities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-4 text-white bg-transparent border-0 outline-none placeholder-blue-300 text-lg focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/60 backdrop-blur-sm border border-blue-700/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map(facility => (
            <div key={facility.id} className="bg-blue-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-700/30 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {facility.category.charAt(0).toUpperCase() + facility.category.slice(1)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{facility.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="ml-1 text-white">{facility.rating}</span>
                    <span className="text-blue-300 text-sm ml-1">({facility.reviews})</span>
                  </div>
                </div>
                
                <p className="text-blue-200 mb-5">{facility.description}</p>
                
                <div className="mb-5">
                  <div className="flex items-center text-sm text-blue-300 mb-3">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="font-medium text-white">Capacity:</span>
                    <span className="ml-2">{facility.capacity}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-blue-300 mb-5">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-medium text-white">Size:</span>
                    <span className="ml-2">{facility.size}</span>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-white mb-3">Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {facility.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm text-blue-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFacilities.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-blue-900/30 backdrop-blur-md rounded-2xl p-12 border border-blue-700/30">
              <div className="text-5xl mb-4">😢</div>
              <h3 className="text-2xl font-bold text-white mb-2">No facilities found</h3>
              <p className="text-blue-200">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>

      {/* Tournament Information Section */}
      <div className="relative bg-blue-900/40 backdrop-blur-md py-16 border-y border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Upcoming Tournaments & Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Indoor Futsal Championship</h3>
              </div>
              <div className="flex items-center text-blue-200 mb-3">
                <Calendar className="w-5 h-5 mr-2" />
                <span>June 15-18, 2023</span>
              </div>
              <p className="text-blue-200 mb-4">
                Join our premier futsal tournament with categories for all skill levels. Cash prizes and trophies for winners.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Open, Intermediate, and Competitive divisions</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Professional referees and organization</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Team and individual registrations available</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30">
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Indoor Cricket League</h3>
              </div>
              <div className="flex items-center text-blue-200 mb-3">
                <Calendar className="w-5 h-5 mr-2" />
                <span>July 5 - August 20, 2023</span>
              </div>
              <p className="text-blue-200 mb-4">
                Weekly indoor cricket league with professional facilities and competitive atmosphere for all skill levels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>8-week league with playoffs</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Professional bowling machines available</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Team and individual registrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-900/30 rounded-2xl border border-blue-700/30">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/30 rounded-2xl mb-4">
                <Trophy className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tournament Organization</h3>
              <p className="text-blue-200">Professional organization of indoor sports tournaments with full event management.</p>
            </div>
            
            <div className="text-center p-6 bg-blue-900/30 rounded-2xl border border-blue-700/30">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/30 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Training Programs</h3>
              <p className="text-blue-200">Certified coaching programs for skill development in various indoor sports.</p>
            </div>
            
            <div className="text-center p-6 bg-blue-900/30 rounded-2xl border border-blue-700/30">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600/30 rounded-2xl mb-4">
                <Calendar className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Event Hosting</h3>
              <p className="text-blue-200">Complete event management services for corporate events, parties, and competitions.</p>
            </div>
            
            <div className="text-center p-6 bg-blue-900/30 rounded-2xl border border-blue-700/30">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/30 rounded-2xl mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipment Rental</h3>
              <p className="text-blue-200">Premium sports equipment available for rent for all indoor sports activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;