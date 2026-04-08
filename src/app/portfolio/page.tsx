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
    { title: "Gemini Autonomous Agent", tag: "AI System", desc: "자율적으로 인프라를 구축하고 DB를 관리하며 GitHub과 실시간 동기화하는 지능형 에이전트.", emoji: "??", color: "from-blue-200 to-indigo-200", border: "border-indigo-300" },
    { title: "Harness CI/CD Engineering", tag: "DevOps", desc: "Harness 플랫폼 기반의 전문적 CI/CD 거버넌스 및 자동화 체계 설계 (RBAC, Templates, Canary).", emoji: "??", color: "from-purple-200 to-fuchsia-200", border: "border-fuchsia-300" },
    { title: "Starry Night Canvas", tag: "Level.01", desc: "HTML5 Canvas와 JavaScript로 구현한 별이 빛나는 밤의 동적 웹 캔버스.", emoji: "?", color: "from-blue-100 to-indigo-100", border: "border-indigo-200" },
    { title: "Emotion Robot", tag: "Project", desc: "Teachable Machine을 활용한 감정 인식 기반 인터랙티브 로봇 시스템.", emoji: "??", color: "from-rose-100 to-pink-100", border: "border-pink-200" },
    { title: "Self-Esteem Logic", tag: "Concept", desc: "사용자의 자존감을 논리적으로 분석하고 강화하는 인터랙티브 웹 앱 컨셉.", emoji: "??", color: "from-yellow-100 to-orange-100", border: "border-orange-200" },
    { title: "AICE Masters", tag: "Achievement", desc: "KT AI 실무 자격 인증으로 상위 5% 이내의 성적으로 취득한 전문 자격.", emoji: "??", color: "from-emerald-100 to-teal-100", border: "border-teal-200" },
    { title: "Python World Tour", tag: "Game", desc: "파이썬으로 구현한 세계 여행 게임으로 동적 시뮬레이션 로직 포함.", emoji: "??", color: "from-purple-100 to-fuchsia-100", border: "border-fuchsia-200" },
    { title: "Spring Ecosystem", tag: "Design", desc: "봄 테마의 3D 파티클 배경과 유려한 인터랙션을 적용한 웹 생태계 디자인.", emoji: "??", color: "from-rose-100 to-red-100", border: "border-red-200" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-16 pt-16 mb-20"
    >
      <section className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-tight">Project Archive</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">아이디어의 실현과 기술적 성취를 담은 아카이브입니다. 계속해서 진화하는 과정을 기록합니다.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div key={idx} variants={itemVariants} className={glass-card relative overflow-hidden group bg-gradient-to-br   hover:scale-105 transition-all duration-300 hover:shadow-xl}>
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
