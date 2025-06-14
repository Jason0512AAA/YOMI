'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-6xl font-bold mb-6 text-blue-600"
          >
            创意开发者
          </motion.h1>
          <p className="text-xl mb-8 text-gray-600">
            全栈开发工程师 & UI/UX 设计师
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full">
            查看作品集
          </button>
        </div>
      </section>
    </main>
  );
} 