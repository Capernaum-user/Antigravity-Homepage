'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const projects = [
    { title: "Starry Night Canvas", tag: "Level.01", desc: "HTML5 Canvas와 JavaScript로 구현된 별과 유성 객체 시뮬레이션.", emoji: "🌌", color: "from-blue-100 to-indigo-100", border: "border-indigo-200" },
    { title: "Emotion Robot", tag: "Project", desc: "Teachable Machine을 활용한 감정 인식 인공지능 챗봇 고도화 프로젝트.", emoji: "🤖", color: "from-rose-100 to-pink-100", border: "border-pink-200" },
    { title: "Self-Esteem Logic", tag: "Concept", desc: "버그 수정을 통해 회복탄력성을 배우는 리팩토링 하트의 철학.", emoji: "💡", color: "from-yellow-100 to-orange-100", border: "border-orange-200" },
    { title: "AICE Masters", tag: "Achievement", desc: "KT AI 활용 능력 시험 합격률 95%를 자랑하는 체계적인 교육 시스템 구축.", emoji: "🏆", color: "from-emerald-100 to-teal-100", border: "border-teal-200" },
    { title: "Python World Tour", tag: "Game", desc: "파이썬을 게임처럼 즐겁게 마스터하는 게이미피케이션 플랫폼 모델링.", emoji: "🎮", color: "from-purple-100 to-fuchsia-100", border: "border-fuchsia-200" },
    { title: "Spring Ecosystem", tag: "Design", desc: "봄맞이 생태계를 3D로 재구성한 몰입형 교육 웹 페이지 경험 설계.", emoji: "🌸", color: "from-rose-100 to-red-100", border: "border-red-200" },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16 pt-16 mb-20"
    >
      <section className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">학습 데이터 아카이브</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">아이들과 함께 만들어 나간 눈부신 성장의 기록들입니다.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div key={idx} variants={itemVariants} className={`glass-card relative overflow-hidden group bg-gradient-to-br ${proj.color} ${proj.border} hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
            <div className="absolute inset-0 bg-[url('/texture.png')] bg-cover bg-center mix-blend-color-burn opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100 ease-out z-0"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-white/70 text-gray-700 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/50">
                  {proj.tag}
                </span>
                <div className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{proj.emoji}</div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors">{proj.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">{proj.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
