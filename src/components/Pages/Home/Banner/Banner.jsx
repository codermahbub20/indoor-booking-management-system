import React, { useState, useEffect } from 'react';
import { Search, Play, Users, Trophy, ArrowRight, Star, Award, Zap } from 'lucide-react';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Premium Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`
          }}
        />
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/40 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              style={{
                width: Math.floor(Math.random() * 30 + 5) + 'px',
                height: Math.floor(Math.random() * 30 + 5) + 'px',
                top: Math.floor(Math.random() * 100) + '%',
                left: Math.floor(Math.random() * 100) + '%',
                animation: `float${i % 3 + 1} ${Math.random() * 10 + 15}s infinite ease-in-out`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`w-full max-w-5xl text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Premium Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-700 px-4 py-2 rounded-full backdrop-blur-sm border border-amber-400/30 shadow-lg">
              <Star className="w-4 h-4 text-white mr-2 fill-current" />
              <span className="text-white text-sm font-medium">PREMIUM SPORTS COMMUNITY</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-8 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Elevate Your</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent font-extrabold">
                Sports Journey
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-200 font-light leading-relaxed">
              Join an exclusive community where athletes connect, compete, and celebrate 
              the spirit of sportsmanship at the highest level.
            </p>
          </div>

          {/* Premium Search Bar */}
          <div className="mb-12 mx-auto max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-black/30 backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <div className="pl-5 pr-3">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Discover tournaments, teams, or players..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-5 text-white bg-transparent border-0 outline-none placeholder-gray-400 text-lg focus:ring-0"
                />
                <button className="m-2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Premium Action Buttons */}
          <div className="mb-16 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/20 min-w-[220px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shine" />
              <span className="flex items-center justify-center gap-3 relative z-10">
                <Play className="w-5 h-5" />
                Start Playing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 transform hover:scale-105 shadow-xl min-w-[220px] overflow-hidden">
              <span className="flex items-center justify-center gap-3">
                <Users className="w-5 h-5" />
                Join Elite Community
              </span>
            </button>
          </div>

          {/* Premium Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300 group-hover:scale-110">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400 mr-1" />
                10M+
              </div>
              <div className="text-gray-300 font-light">Active Players</div>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4 group-hover:bg-amber-500/20 transition-colors duration-300 group-hover:scale-110">
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400 mr-1" />
                50K+
              </div>
              <div className="text-gray-300 font-light">Tournaments</div>
            </div>
            
            <div className="text-center group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-4 group-hover:bg-green-500/20 transition-colors duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <Star className="w-5 h-5 text-amber-400 mr-1 fill-current" />
                100+
              </div>
              <div className="text-gray-300 font-light">Sports Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2 tracking-widest font-light">EXPLORE</span>
          <div className="w-8 h-12 border-2 border-gray-400/50 rounded-full flex justify-center p-1">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-premium-bounce"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(-15px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-25px) translateX(5px) rotate(3deg); }
        }
        @keyframes premium-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        .animate-premium-bounce {
          animation: premium-bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;