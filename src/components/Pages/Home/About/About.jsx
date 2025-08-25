import React from 'react';
import { Calendar, Clock, Users, Shield, MapPin, Phone, Mail, Zap, TrendingUp, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://khelbokoi.com/assets/images/search-background.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-purple-900/50 to-blue-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-700 px-6 py-3 rounded-full backdrop-blur-sm border border-amber-400/30 shadow-lg mb-8">
            <span className="text-white text-md font-medium tracking-wider uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Premium Indoor Sports Facility
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl mb-8" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">Avalon Sports</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Revolutionizing indoor sports with our state-of-the-art booking platform and premium facilities designed for athletes of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Content Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Premium Indoor Booking Experience</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Avalon Sports offers a seamless, premium booking experience for indoor sports enthusiasts. 
              Our advanced platform ensures you can reserve courts, manage schedules, and connect with 
              other players effortlessly while enjoying our state-of-the-art facilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-500/20 rounded-lg p-2 mr-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Easy Booking</h4>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Reserve courts in seconds with our intuitive platform</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-500/20 rounded-lg p-2 mr-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Flexible Timing</h4>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Choose from available slots that fit your schedule</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-amber-500/20 rounded-lg p-2 mr-3">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Community</h4>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Connect with players and build your sports network</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500/20 rounded-lg p-2 mr-3">
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>Secure Payments</h4>
                </div>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>Multiple payment options with complete security</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 transform hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>10+</div>
              <div className="text-gray-300 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sports Types</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 transform hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>5</div>
              <div className="text-gray-300 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Premium Courts</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 transform hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>24/7</div>
              <div className="text-gray-300 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Availability</div>
            </div>
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 transform hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>100%</div>
              <div className="text-gray-300 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-10 border border-white/10 mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Why Choose Our Booking System?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6 group-hover:bg-blue-500/30 transition-colors duration-300 group-hover:scale-110 mx-auto">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Lightning Fast</h4>
              <p className="text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Book your preferred court in under 30 seconds with our optimized platform</p>
            </div>
            
            <div className="text-center group p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl mb-6 group-hover:bg-purple-500/30 transition-colors duration-300 group-hover:scale-110 mx-auto">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Smart Analytics</h4>
              <p className="text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get insights on peak hours, pricing trends, and availability patterns</p>
            </div>
            
            <div className="text-center group p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900/30 hover:from-slate-800/70 hover:to-slate-900/50 transition-all duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-2xl mb-6 group-hover:bg-amber-500/30 transition-colors duration-300 group-hover:scale-110 mx-auto">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Easy Management</h4>
              <p className="text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Manage all your bookings, payments, and history in one place</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6 uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>Experience Premium Booking</h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Join thousands of athletes who have transformed their sports experience with Avalon Sports.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/20 min-w-[220px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shine" />
              <span className="flex items-center justify-center gap-3 relative z-10 text-lg uppercase tracking-wider">
                <Calendar className="w-6 h-6" />
                Book Now
              </span>
            </button>
            
            <button className="group relative px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 transform hover:scale-105 shadow-xl min-w-[220px] text-lg uppercase tracking-wider">
              <span className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Contact Us
              </span>
            </button>
          </div>
          
          <div className="mt-16 bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center justify-center uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
              <MapPin className="w-6 h-6 text-rose-400 mr-3" />
              Visit Our Facility
            </h4>
            <p className="text-gray-300 mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>123 Sports Avenue, Athletic District, City</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400">
              <div className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Phone className="w-5 h-5 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <Mail className="w-5 h-5 mr-2" />
                info@avalonsports.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default About;