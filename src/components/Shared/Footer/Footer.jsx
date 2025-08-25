"use client";

import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Tournaments", href: "#" },
    { name: "Contact", href: "#" }
  ];
  
  const facilityLinks = [
    { name: "Indoor Courts", href: "#" },
    { name: "Sports Equipment", href: "#" },
    { name: "Training Programs", href: "#" },
    { name: "Event Hosting", href: "#" }
  ];
  
  const socialIcons = [
    {
      name: "Facebook",
      href: "#",
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: "Twitter",
      href: "#",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "YouTube",
      href: "#",
      icon: <Youtube className="w-5 h-5" />
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
            style={{
              width: Math.floor(Math.random() * 100 + 20) + 'px',
              height: Math.floor(Math.random() * 100 + 20) + 'px',
              top: Math.floor(Math.random() * 100) + '%',
              left: Math.floor(Math.random() * 100) + '%',
              animation: `float${i % 3 + 1} ${Math.random() * 15 + 15}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-2 mr-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10Z" />
                  <path d="M12 7v10" />
                  <path d="M9 10h6" />
                  <path d="M9 14h6" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Avalon Sports
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Premium indoor sports facilities with state-of-the-art booking system. 
              Join our community of sports enthusiasts and elevate your game.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                  aria-label={icon.name}
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:mr-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Facilities</h3>
            <ul className="space-y-3">
              {facilityLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:mr-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 Sports Avenue, Athletic District, City</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@avalonsports.com</p>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4 uppercase tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-r-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexArena Sports. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');
        
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
    </footer>
  );
}

export default Footer;