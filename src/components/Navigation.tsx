'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, BookOpen, Layers, Mail, MessageSquare } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Curriculum', path: '/curriculum', icon: BookOpen },
    { name: 'Portfolio', path: '/portfolio', icon: Layers },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Guestbook', path: '/guestbook', icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between shadow-sm border border-white/40">
          <Link href="/" className="text-2xl font-extrabold text-rose-500 tracking-tight flex items-center gap-2">
            <span className="text-2xl">🌸</span> Refactoring <span className="text-orange-400">Heart</span>
          </Link>
          
          <ul className="flex gap-6 lg:gap-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.path;
              const Icon = link.icon;
              return (
                <li key={link.path} className="relative group">
                  <Link href={link.path} className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${isActive ? 'nav-icon-bg text-rose-700 shadow-sm' : 'text-gray-600 hover:text-rose-500 hover:bg-white/40'}`}>
                    <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-rose-600' : 'text-gray-400 group-hover:text-rose-400'}`} />
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-desktop"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Top Header (Logo Only) */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 px-4 py-3 glass-panel border-b border-white/40">
        <div className="flex justify-center items-center h-full">
          <Link href="/" className="text-xl font-extrabold text-rose-500 tracking-tight flex items-center gap-2">
            <span>🌸</span> Refactoring <span className="text-orange-400">Heart</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 glass-panel border-t border-white/40 pb-safe">
        <ul className="flex justify-around items-center px-2 py-2">
          {links.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            return (
              <li key={link.path} className="flex-1">
                <Link 
                  href={link.path} 
                  className={`flex flex-col items-center justify-center gap-1 py-2 rounded-2xl transition-all ${isActive ? 'text-rose-600' : 'text-gray-500 hover:text-rose-400'}`}
                >
                  <div className={`relative p-2 rounded-full transition-all ${isActive ? 'nav-icon-bg shadow-sm transform -translate-y-1' : ''}`}>
                    <Icon className={`w-6 h-6 relative z-10 ${isActive ? 'text-rose-600' : 'text-gray-400'}`} />
                  </div>
                  <span className={`text-[10px] font-bold ${isActive ? 'text-rose-600' : 'text-gray-400'}`}>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill-mobile"
                      className="absolute bottom-1 w-8 h-1 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
