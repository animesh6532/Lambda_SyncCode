import { motion } from "framer-motion";
import { useModalStore } from "../store/modalStore";
import { useThemeStore } from "../store/themeStore";
import RoomModal from "../components/modals/RoomModal";
import { Code2, Zap, Users, Moon, Sun, ArrowRight, ShieldCheck } from "lucide-react";

export default function Landing() {
  const { openRoomModal } = useModalStore();
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-x-hidden bg-gradient-premium">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white"
        >
          <div className="p-2 bg-blue-600 dark:bg-neon-blue rounded-lg">
            <Code2 size={24} className="text-white" />
          </div>
          LambdaSyncCode<span className="text-blue-600 dark:text-neon-blue">.</span>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-white/50 dark:hover:bg-[#1e293b]"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={openRoomModal}
            className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-dark-border shadow-sm rounded-full text-gray-900 dark:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-all"
          >
            Log In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-blue-50/50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium backdrop-blur-md"
        >
          <Zap size={16} fill="currentColor" />
          <span>Serverless Architecture v2.0 is live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6"
        >
          Code Together. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-neon-blue dark:to-neon-purple text-glow">
            In Real-Time.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12"
        >
          Experience blazing-fast synchronized coding powered by WebSockets and AWS Lambda. Build, test, and ship together seamlessly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={openRoomModal}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full font-semibold transition-all shadow-glow-blue transform active:scale-95"
          >
            Start Coding Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="https://github.com/animesh6532/Lambda_SyncCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white rounded-full font-semibold transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            View GitHub
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full"
        >
          {[
            { icon: Users, title: "Multiplayer Engine", desc: "True real-time collaboration with cursor tracking." },
            { icon: Zap, title: "Serverless Execution", desc: "Run your Python code securely via AWS Lambda." },
            { icon: ShieldCheck, title: "End-to-End Secure", desc: "Your ephemeral code sessions are totally private." },
          ].map((feat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 glass rounded-2xl dark:bg-[#162032]/80">
              <div className="p-3 mb-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-neon-blue">
                <feat.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feat.desc}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Render the Modal Layer */}
      <RoomModal />

      {/* Footer */}
      <div className="relative z-10 text-center text-sm font-medium text-gray-500 py-6 border-t border-gray-200/50 dark:border-dark-border/50">
        © {new Date().getFullYear()} LambdaSyncCode. Open Source SAAS.
      </div>
    </div>
  );
}