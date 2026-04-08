'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-[70vh] pt-16"
    >
      <div className="glass-card max-w-2xl w-full text-center bg-gradient-to-br from-white/70 to-pink-50/70 border-pink-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Contact Us</h1>
        <p className="text-gray-600 mb-12 text-lg">궁금한 점이 있으시다면 언제든 편하게 연락주세요.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center group glass-panel p-6 rounded-3xl hover:bg-white/60 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-rose-200 transition-all shadow-sm">
              <Phone className="text-rose-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Phone</h3>
            <p className="text-gray-600 text-lg">010-8352-8191</p>
          </div>
          
          <div className="flex flex-col items-center group glass-panel p-6 rounded-3xl hover:bg-white/60 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all shadow-sm">
              <Mail className="text-blue-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Email</h3>
            <p className="text-gray-600 text-lg">userkek@gmail.com</p>
          </div>
          
          <div className="flex flex-col items-center group glass-panel p-6 rounded-3xl hover:bg-white/60 transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-yellow-200 transition-all shadow-sm">
              <MessageCircle className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">KakaoTalk</h3>
            <p className="text-gray-600 text-lg">ID: Capernaum83</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
