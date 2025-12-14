'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, MapPin, Calendar, Shield, Target, ChevronRight, AlertCircle, Instagram } from 'lucide-react';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Captains Section */}
      <CaptainsSection />
      
      {/* Registration Section */}
      <RegistrationSection />
      
      {/* Venue Section */}
      <VenueSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Instagram Follow Section */}
      <InstagramSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated background gradient with sporty elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#1e3a8a] to-[#0a1128]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTI5M2IiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
        {/* Floating sporty elements - larger and more dynamic */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#dc2626] rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#ef4444] rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#1e3a8a] rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-[#dc2626] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        {/* Animated streaks */}
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#dc2626] to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-20 w-1 h-24 bg-gradient-to-b from-[#ef4444] to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Tournament Date Banner */}
          <motion.div
            className="mb-8 sm:mb-10 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow effect behind banner */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626] to-[#ef4444] opacity-30 blur-xl rounded-full"></div>
            <div className="relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] rounded-full border-2 border-white shadow-2xl animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="relative">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                {/* Ping animation */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </div>
              <div className="text-left">
                <p className="text-[10px] sm:text-xs text-white/80 font-semibold uppercase tracking-wider">Tournament Dates</p>
                <p className="text-base sm:text-xl lg:text-2xl font-black text-white">27th & 28th December 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Logo Section */}
          <motion.div 
            className="flex items-center justify-center mb-10 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* DMWS Main Logo */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] relative">
              <Image 
                src="/dmws-main-logo.png" 
                alt="DMWS - Dhulia Mega Winter Sports 2025" 
                width={500} 
                height={500}
                className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.3)]"
                priority
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 px-4" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] bg-clip-text text-transparent block">
              DHULIA MEGA
            </span>
            <span className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] bg-clip-text text-transparent block">
              WINTER SPORTS
            </span>
            <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-2">2025</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Organized by <span className="text-[#dc2626] font-bold">Hizb E Abbasi Dhulia</span>
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Unity through Sports
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center w-full px-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#registration"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] rounded-full font-bold text-base sm:text-lg text-white hover:scale-110 transition-all duration-300 glow-red flex items-center justify-center gap-2 w-full sm:flex-1 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <Target className="w-5 h-5 shrink-0 relative z-10" />
              <span className="relative z-10">Register for Cricket</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0 relative z-10" />
            </a>
            
            <a 
              href="#registration"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] rounded-full font-bold text-base sm:text-lg text-white hover:scale-110 transition-all duration-300 glow-navy flex items-center justify-center gap-2 w-full sm:flex-1 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <Trophy className="w-5 h-5 shrink-0 relative z-10" />
              <span className="relative z-10">Register for Badminton</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0 relative z-10" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 sm:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <span className="text-xs sm:text-sm uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="w-6 h-6 rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-[#dc2626] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#1e3a8a] rounded-full opacity-10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 relative"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#dc2626] to-[#dc2626] rounded-full"></div>
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-[#dc2626]" />
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#dc2626] to-[#dc2626] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#dc2626] to-[#1e3a8a] bg-clip-text text-transparent">
              ABOUT THE TOURNAMENT
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Rules & Guidelines</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Fair Play Policy - Highlighted */}
          <motion.div
            className="md:col-span-2 glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#dc2626] relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fbbf24]/10 to-transparent rounded-bl-full"></div>
            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#dc2626] mb-3 sm:mb-4 flex items-center gap-2">
                  Fair Play Policy
                </h3>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Teams are selected by the organizers via a <span className="font-bold text-white bg-white/5 px-2 py-1 rounded">draft system</span>. 
                  While you can <span className="font-bold text-white bg-white/5 px-2 py-1 rounded">request a captain</span>, the organizer&apos;s decision is <span className="font-bold text-[#dc2626] bg-[#dc2626]/10 px-2 py-1 rounded">final</span>. 
                  This ensures balanced teams and fair competition for all participants.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tournament Format */}
          <motion.div
            className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-[#10b981] border-2 border-gray-700 transition-all duration-300 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Tournament Format</h3>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Competitive matches with knockout stages. All games follow official rules and regulations.
            </p>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-[#dc2626] border-2 border-gray-700 transition-all duration-300 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Eligibility</h3>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p><span className="font-semibold text-[#dc2626]">🏏 Cricket:</span> Men 17+ years old</p>
              <p><span className="font-semibold text-[#10b981]">🏸 Badminton:</span> Women of all ages & Boys U-16</p>
            </div>
          </motion.div>

          {/* Prizes */}
          <motion.div
            className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-[#10b981] border-2 border-gray-700 transition-all duration-300 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Sportsmanship</h3>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Respect, fair play, and unity are our core values. Let&apos;s make this a memorable event!
            </p>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 hover:border-[#dc2626] border-2 border-[#dc2626] transition-all duration-300 h-full flex flex-col group hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#991b1b] flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Event Schedule</h3>
            <div className="space-y-2 mb-4">
              <p className="text-[#dc2626] text-xl sm:text-2xl lg:text-3xl font-black">
                27th & 28th December
              </p>
              <p className="text-gray-400 text-sm sm:text-base">2025</p>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Mark your calendars! Detailed match schedules will be announced after registration closes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats Section Component
function StatsSection() {
  const stats = [
    { icon: Trophy, value: '2', label: 'Days of Action', color: '#dc2626' },
    { icon: Users, value: '100+', label: 'Players Expected', color: '#1e3a8a' },
    { icon: Target, value: '2', label: 'Sports Events', color: '#dc2626' },
    { icon: Shield, value: 'WIN', label: 'Exciting Gifts & Prizes', color: '#1e3a8a' },
  ];

  return (
    <section className="relative py-28 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e3a8a]/30 to-transparent"></div>
      
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group glass rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:scale-110 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                style={{ '--stat-color': stat.color } as React.CSSProperties}
              >
                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: stat.color }}
                ></div>
                
                <div className="relative flex flex-col items-center text-center space-y-3">
                  <div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

// Captains Section Component
function CaptainsSection() {
  const captains = [
    { name: 'Taher Bhai Unique', id: 1 },
    { name: 'Hussain Bhai Bandukwala', id: 2 },
    { name: 'Murtaza Bhai Bharmal', id: 3 },
    { name: 'Abdeali Sadriwala', id: 4 },
    { name: 'Abbas Bhai Jawadwala', id: 5 },
    { name: 'Abbas Bhai Saifee', id: 6 },
  ];

  return (
    <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 relative"
        >
          {/* Decorative line with cricket icon */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#fbbf24] to-[#fbbf24] rounded-full"></div>
            <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#fbbf24]" />
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#fbbf24] to-[#fbbf24] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#10b981] bg-clip-text text-transparent">
              Meet the Captains
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">🏏 Cricket Team Leaders</p>
        </motion.div>

        {/* Captains Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {captains.map((captain, index) => (
            <motion.div
              key={captain.id}
              className="relative glass rounded-2xl p-8 sm:p-10 hover:scale-110 transition-all duration-500 group cursor-pointer border-2 border-gray-700 hover:border-[#dc2626] h-full flex flex-col items-center justify-center overflow-hidden hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
              variants={fadeInUp}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Captain Number Badge */}
              <div className="mb-4 relative">
                {/* Pulse ring on hover */}
                <div className="absolute inset-0 rounded-full bg-[#dc2626] opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-md"></div>
                <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#dc2626] via-[#ef4444] to-[#dc2626] text-white font-black text-lg sm:text-xl group-hover:glow-red transition-all group-hover:rotate-12 shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Captain Name */}
              <h3 className="relative text-lg sm:text-xl lg:text-2xl font-bold text-center text-white group-hover:text-[#dc2626] transition-colors leading-tight">
                {captain.name}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#dc2626] to-[#ef4444] group-hover:w-full transition-all duration-500"></span>
              </h3>
              
              {/* Caption */}
              <p className="text-gray-400 text-sm sm:text-base mt-3 font-medium">
                Team Captain
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Registration Section Component
function RegistrationSection() {
  return (
    <section id="registration" className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 relative"
        >
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#fbbf24] rounded-full"></div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#fbbf24]" />
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#10b981]" />
            </div>
            <div className="h-1 w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#10b981] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#10b981] bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg font-semibold">🏏 Choose Your Sport & Join the Action 🏸</p>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Cricket Card */}
          <motion.div
            className="relative group glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#dc2626] hover:scale-105 transition-all duration-500 glow-red overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#dc2626] to-transparent opacity-20 rounded-bl-full"></div>
            <div className="relative flex flex-col items-center text-center h-full justify-between">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Cricket</h3>
              <p className="text-[#fbbf24] font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Men 17+ Years</p>

              {/* Details */}
              <div className="space-y-3 mb-6 sm:mb-8 w-full flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Format</span>
                  <span className="text-white font-semibold text-sm sm:text-base">Team of 7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Price per Player</span>
                  <span className="text-[#fbbf24] font-bold text-xl sm:text-2xl">₹300</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr4E0k76LIyynAOh_WAspiY2sKHVgo7YVFBh5-LbGnFR5sBA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] rounded-full font-bold text-base sm:text-lg text-white hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn shadow-xl hover:shadow-2xl"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <span className="relative z-10">Register for Cricket</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
              </a>
            </div>
          </motion.div>

          {/* Badminton Card */}
          <motion.div
            className="relative group glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#1e3a8a] hover:scale-105 transition-all duration-500 glow-navy overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-transparent opacity-20 rounded-bl-full"></div>
            <div className="relative flex flex-col items-center text-center h-full justify-between">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Badminton</h3>
              <p className="text-[#10b981] font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Women & Boys U-16</p>

              {/* Details */}
              <div className="space-y-3 mb-6 sm:mb-8 w-full flex-1">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Format</span>
                  <span className="text-white font-semibold text-sm sm:text-base">Doubles Only</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-400 text-sm sm:text-base">Price per Player</span>
                  <span className="text-[#10b981] font-bold text-xl sm:text-2xl">₹200</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjpYepeyMDOjWPC8ev-ejzUJuIep432EYNreIylFfwMq6KdQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] rounded-full font-bold text-base sm:text-lg text-white hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn shadow-xl hover:shadow-2xl"
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <span className="relative z-10">Register for Badminton</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform relative z-10" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Venue Section Component
function VenueSection() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 relative"
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#10b981] to-[#10b981] rounded-full"></div>
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#10b981]" />
            <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#10b981] to-[#10b981] rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#10b981] bg-clip-text text-transparent">
              Venue & Location
            </span>
          </h2>
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10b981]">
              MH 18 Turf Dhulia
            </p>
            <p className="text-gray-400 text-base sm:text-lg">📍 Premier sports turf with world-class facilities</p>
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-2xl sm:rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Google Maps Embed */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3730.847942563415!2d74.77166097520867!3d20.90176098078651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU0JzA2LjQiTiA3NMKwNDYnMjYuOCJF!5e0!3m2!1sen!2sin!4v1702473600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#10b981] flex-shrink-0 sm:mt-1" />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">MH 18 Turf Dhulia</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
                  Premium turf facility featuring state-of-the-art cricket pitch and professional badminton courts - your ultimate destination for competitive sports in Dhulia.
                </p>
                <a 
                  href="https://share.google/ys3Li6RwaMxOq88Zc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#10b981] hover:text-[#34d399] font-semibold transition-colors"
                >
                  <span>Get Directions</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const faqs = [
    {
      question: 'What is the registration fee?',
      answer: 'Cricket: ₹300 per player | Badminton: ₹200 per player'
    },
    {
      question: 'When is the tournament?',
      answer: 'The tournament will be held on 27th and 28th December 2025 at MH 18 Turf Dhulia.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring in Your enthusiasm, and a positive attitude!'
    },
    {
      question: 'Is there a prize for winners?',
      answer: 'Yes! Winners and runners-up in both Cricket and Badminton will receive exciting prizes. Stay tuned for announcements!'
    },
  ];

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e293b]/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3b82f6]"></div>
            <AlertCircle className="w-8 h-8 text-[#3b82f6]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3b82f6]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-[#3b82f6] to-white bg-clip-text text-transparent">
              Frequently Asked Questions 💬
            </span>
          </h2>
        </motion.div>

        {/* FAQ Cards */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-700 hover:border-[#3b82f6] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-[#3b82f6] shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-8">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Instagram Section Component
function InstagramSection() {
  const instagramAccounts = [
    {
      name: 'DMWS 2025',
      handle: '@dmws2025',
      description: 'Official tournament updates, live scores, highlights & announcements',
      url: 'https://www.instagram.com/dmws2025?igsh=MXJna24zbnEyZDhwaA==',
      color: '#dc2626',
      gradient: 'from-[#dc2626] via-[#ef4444] to-[#dc2626]'
    },
    {
      name: 'Hizb E Abbasi',
      handle: '@hizb_e_abbasi',
      description: 'Stay connected with our community, events & social initiatives',
      url: 'https://www.instagram.com/hizb_e_abbasi?igsh=MTlnajN0ZmQwd3VjeQ==',
      color: '#1e3a8a',
      gradient: 'from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a]'
    }
  ];

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#dc2626]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#1e3a8a]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#dc2626] to-[#1e3a8a]"></div>
            <Instagram className="w-10 h-10 text-[#dc2626] animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-[#1e3a8a] via-[#dc2626] to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}>
            <span className="bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#1e3a8a] bg-clip-text text-transparent">
              FOLLOW US ON INSTAGRAM
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ❤️ Show some love • 📸 Stay updated • 🔔 Never miss a moment
          </p>
        </motion.div>

        {/* Instagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {instagramAccounts.map((account, index) => (
            <motion.a
              key={index}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Card Background */}
              <div className="relative glass rounded-3xl p-8 sm:p-10 border-2 border-gray-700 group-hover:border-opacity-0 transition-all duration-500 overflow-hidden">
                {/* Animated Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${account.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
                  <div className="w-full h-full bg-[#0a1128] rounded-3xl"></div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Instagram Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${account.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                    <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  {/* Account Name */}
                  <h3 className="text-2xl sm:text-3xl font-black mb-2" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em', color: account.color }}>
                    {account.name}
                  </h3>

                  {/* Handle */}
                  <p className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${account.gradient} bg-clip-text text-transparent`}>
                    {account.handle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
                    {account.description}
                  </p>

                  {/* Follow Button */}
                  <div className={`relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${account.gradient} rounded-full font-bold text-white group-hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden`}>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    <Instagram className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 text-lg" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}>FOLLOW NOW</span>
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative Corner Accents */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${account.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${account.gradient} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-[#dc2626] via-white to-[#1e3a8a] bg-clip-text mb-4" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}>
            🎯 Join the Community • 🏆 Get Exclusive Updates • 🎉 Be Part of the Action
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Tag us in your stories and posts using <span className="text-[#dc2626] font-bold">#DMWS2025</span> & <span className="text-[#1e3a8a] font-bold">#HizbEAbbasi</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-[#dc2626] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#1e3a8a] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#fbbf24]"></div>
            <Users className="w-8 h-8 text-[#fbbf24]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#fbbf24]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-[#fbbf24] to-white bg-clip-text text-transparent">
              Contact Organizers 📞
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions? Reach out to our tournament organizers for any queries or assistance.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Card 1 - Ammar */}
          <motion.div
            className="relative group glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#dc2626] hover:scale-105 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#dc2626] to-transparent opacity-20 rounded-bl-full"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#dc2626] opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500 blur-xl"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#ef4444] flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#dc2626] transition-colors">
                  Ammar Sadriwala
                </h3>
                <p className="text-sm text-gray-400 font-medium">Tournament Organizer</p>
              </div>

              {/* Phone */}
              <a
                href="tel:+918080271202"
                className="relative w-full px-6 py-4 bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#dc2626] rounded-full font-bold text-lg text-white hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn shadow-xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <span className="relative z-10 font-mono text-base sm:text-lg">+91 80802 71202</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Card 2 - Ibrahim */}
          <motion.div
            className="relative group glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#1e3a8a] hover:scale-105 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(30,58,138,0.3)]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-transparent opacity-20 rounded-bl-full"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#1e3a8a] opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500 blur-xl"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#1e3a8a] transition-colors">
                  Ibrahim Sadriwala
                </h3>
                <p className="text-sm text-gray-400 font-medium">Tournament Organizer</p>
              </div>

              {/* Phone */}
              <a
                href="tel:+919529781361"
                className="relative w-full px-6 py-4 bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] rounded-full font-bold text-lg text-white hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn shadow-xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <span className="relative z-10 font-mono text-base sm:text-lg">+91 95297 81361</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Card 3 - Abdullah */}
          <motion.div
            className="relative group glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#3b82f6] hover:scale-105 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#3b82f6] to-transparent opacity-20 rounded-bl-full"></div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#3b82f6] opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500 blur-xl"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#2563eb] flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-xl">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Name */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                  Abdullah Bandukwala
                </h3>
                <p className="text-sm text-gray-400 font-medium">Tournament Organizer</p>
              </div>

              {/* Phone */}
              <a
                href="tel:+917718978152"
                className="relative w-full px-6 py-4 bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] rounded-full font-bold text-lg text-white hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group/btn shadow-xl hover:shadow-2xl"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <span className="relative z-10 font-mono text-base sm:text-lg">+91 77189 78152</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center mb-5 sm:mb-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
              <Image 
                src="/dmws-main-logo.png" 
                alt="DMWS - Dhule Mega Winter Sports" 
                width={160} 
                height={160}
                className="w-full h-full object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <p className="text-gray-400 mb-2 text-sm sm:text-base font-bold" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.05em' }}>
            DHULIA MEGA WINTER SPORTS 2025
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mb-5 sm:mb-6">
            Unity through Sports ⭐
          </p>

          {/* Copyright */}
          <div className="pt-5 sm:pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 <span className="text-[#dc2626] font-bold">Hizb E Abbasi Dhulia</span>. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
