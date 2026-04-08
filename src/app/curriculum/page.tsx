'use client';

import { motion } from 'framer-motion';

export default function Curriculum() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16 pt-16 max-w-4xl mx-auto"
    >
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">AI 설계자로의 여정</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">단계별 체계적인 커리큘럼을 통해 미래 역량을 확보하세요.</p>
      </section>

      <section className="space-y-8">
        <motion.div variants={itemVariants} className="glass-card flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-emerald-200 relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-[url('/texture.png')] bg-cover bg-center mix-blend-color-burn opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100 ease-out z-0"></div>
          <div className="text-6xl relative z-10 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">🌱</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">Phase 1: 논리의 각성</h3>
            <p className="text-gray-600 leading-relaxed font-medium">알고리즘의 기초를 시각적으로 이해하고 컴퓨팅 사고력을 키웁니다. 스크래치, 엔트리와 같은 블록 코딩으로 첫걸음을 뗍니다.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-yellow-50/80 to-orange-50/80 border-yellow-200 relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-[url('/texture.png')] bg-cover bg-center mix-blend-color-burn opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100 ease-out z-0"></div>
          <div className="text-6xl relative z-10 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">🐍</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Phase 2: 창조의 언어 (Python)</h3>
            <p className="text-gray-600 leading-relaxed font-medium">파이썬을 통해 나만의 아이디어를 실제 코드로 구현합니다. 텍스트 코딩의 세계로 넘어가며 문법과 구조를 익힙니다.</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card flex flex-col md:flex-row gap-8 items-center bg-gradient-to-r from-rose-50/80 to-pink-50/80 border-rose-200 relative overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-[url('/texture.png')] bg-cover bg-center mix-blend-color-burn opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-110 group-hover:scale-100 ease-out z-0"></div>
          <div className="text-6xl relative z-10 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">🧠</div>
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">Phase 3: 인공지능의 완성</h3>
            <p className="text-gray-600 leading-relaxed font-medium">데이터를 학습시켜 스스로 판단하는 AI 모델을 설계합니다. 기계학습의 기초 원리를 깨닫고 활용합니다.</p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
