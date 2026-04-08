'use client';

import { motion } from 'framer-motion';
import { Bot, Heart, Brain, GraduationCap, Users, BookOpen, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-24 pt-16"
    >
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div variants={itemVariants} className="inline-block py-1.5 px-4 rounded-full bg-rose-500/10 text-rose-600 text-sm font-bold uppercase tracking-wider mb-6 border border-rose-500/20 shadow-sm backdrop-blur-sm">
          Spring Class Open 🌸
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-8 leading-tight tracking-tight">
          코딩으로 아이의 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-glow-spring">
            자존감을 설계합니다
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12">
          단순한 기능 구현을 넘어, 마음의 힘을 기르는 <span className="font-bold text-rose-500">인문학 융합 코딩</span>.<br/>
          리팩토링 하트에서 특별한 성장 코드를 만나보세요.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Link href="/curriculum" className="btn-holographic flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold">
            <BookOpen className="w-5 h-5 flex-shrink-0" /> 커리큘럼 확인하기
          </Link>
          <Link href="/portfolio" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass-panel text-gray-700 font-bold transition-all hover:bg-white/60 shadow-lg cursor-pointer">
            👩‍🏫 강사 프로필
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <motion.section variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto w-full">
        <div className="glass-card text-center flex flex-col items-center">
          <Brain className="w-10 h-10 text-rose-400 mb-3" />
          <div className="text-2xl font-bold text-gray-800">Logic</div>
          <div className="text-sm text-gray-500">논리적 사고력</div>
        </div>
        <div className="glass-card text-center flex flex-col items-center">
          <Heart className="w-10 h-10 text-pink-400 mb-3" />
          <div className="text-2xl font-bold text-gray-800">Heart</div>
          <div className="text-sm text-gray-500">자존감 & 인성</div>
        </div>
        <div className="glass-card text-center flex flex-col items-center">
          <GraduationCap className="w-10 h-10 text-orange-400 mb-3" />
          <div className="text-2xl font-bold text-gray-800">Lv.3</div>
          <div className="text-sm text-gray-500">체계적 단계</div>
        </div>
        <div className="glass-card text-center flex flex-col items-center">
          <Users className="w-10 h-10 text-rose-500 mb-3" />
          <div className="text-2xl font-bold text-gray-800">1:1</div>
          <div className="text-sm text-gray-500">맞춤형 피드백</div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section variants={itemVariants} className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">왜 &apos;리팩토링 하트&apos;인가요?</h2>
        <p className="text-gray-600 text-lg mb-12">우리 아이만을 위한 특별한 교육 포인트</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card text-left flex flex-col group cursor-pointer hover:bg-white/70">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-indigo-100 shadow-sm">
              <Brain className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">생각하는 힘</h3>
            <p className="text-gray-600 leading-relaxed">정답을 외우는 코딩이 아닙니다. 문제 해결 과정을 스스로 설계합니다.</p>
          </div>
          <div className="glass-card text-left flex flex-col group cursor-pointer hover:bg-white/70">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-100 shadow-sm">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">마음 근육</h3>
            <p className="text-gray-600 leading-relaxed">버그를 수정하며 회복탄력성을 배웁니다. 기술과 인성이 함께 자랍니다.</p>
          </div>
          <div className="glass-card text-left flex flex-col group cursor-pointer hover:bg-white/70">
            <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-teal-100 shadow-sm">
              <Bot className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">미래 기술</h3>
            <p className="text-gray-600 leading-relaxed">스크래치부터 파이썬, AI 모델링까지 체계적인 로드맵을 제공합니다.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section variants={itemVariants} className="py-16 text-center mb-20">
        <div className="glass-card max-w-3xl mx-auto bg-gradient-to-br from-white/60 to-rose-50/60 border-rose-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">지금, 아이의 가능성을 열어주세요</h2>
          <p className="text-gray-600 text-lg mb-8">무료 레벨 테스트로 우리 아이에게 꼭 맞는 로드맵을 상담받아보세요.</p>
          <Link href="/contact" className="btn-holographic inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full text-xl font-bold shadow-2xl">
            <MessageSquare className="w-6 h-6 flex-shrink-0" /> 상담 신청하기
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}
