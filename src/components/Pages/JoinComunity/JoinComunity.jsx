"use client";

import React, { useState } from 'react';
import { Mail, Users, Trophy, Clock, ArrowRight } from 'lucide-react';

const JoinCommunity = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/30 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
            style={{
              width: Math.floor(Math.random() * 30 + 10) + 'px',
              height: Math.floor(Math.random() * 30 + 10) + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              animation: `float${i % 3 + 1} ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Elite Community</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8">
            We're building something amazing for sports enthusiasts! Connect with fellow athletes, join exclusive tournaments, and access premium facilities before anyone else.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-700 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-amber-400/30">
            <Clock className="w-5 h-5 text-white mr-2" />
            <span className="text-white text-sm font-medium">COMING SOON</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center bg-black/20 rounded-xl p-4 border border-white/10">
              <Trophy className="w-6 h-6 text-amber-400 mr-3" />
              <span className="text-gray-300">Exclusive Tournaments</span>
            </div>
            <div className="flex items-center bg-black/20 rounded-xl p-4 border border-white/10">
              <Users className="w-6 h-6 text-blue-400 mr-3" />
              <span className="text-gray-300">Player Networking</span>
            </div>
          </div>

          {/* Notification Form */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Get notified when we launch</h3>
            
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded-xl">
                Thanks! We'll notify you when our community platform is ready.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-sm opacity-70"></div>
                  <div className="relative flex items-center bg-black/30 backdrop-blur-sm rounded-xl border border-white/10">
                    <div className="pl-4 pr-2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-2 py-3 text-white bg-transparent border-0 outline-none placeholder-gray-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Notify Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              In the meantime, check out our <a href="/facilities" className="text-blue-400 hover:text-blue-300 underline">premium facilities</a> or 
              explore <a href="/tournaments" className="text-blue-400 hover:text-blue-300 underline">upcoming tournaments</a>.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Avalon Sports. All rights reserved.
          </p>
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
      `}</style>
    </div>
  );
};

export default JoinCommunity;