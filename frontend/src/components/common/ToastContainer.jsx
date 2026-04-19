import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useToastStore } from '../../store/toastStore';

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 min-w-[250px] rounded-xl shadow-lg border backdrop-blur-md ${
              toast.type === 'success' ? 'bg-green-50/90 border-green-200 dark:bg-green-500/10 dark:border-green-500/20 text-green-800 dark:text-green-300' :
              toast.type === 'error' ? 'bg-red-50/90 border-red-200 dark:bg-red-500/10 dark:border-red-500/20 text-red-800 dark:text-red-300' :
              'bg-blue-50/90 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 text-blue-800 dark:text-blue-300'
            }`}
          >
            {toast.type === 'success' && <CheckCircle size={18} />}
            {toast.type === 'error' && <AlertCircle size={18} />}
            {toast.type === 'info' && <Info size={18} />}
            
            <span className="text-sm font-medium flex-1">{toast.message}</span>
            
            <button 
              onClick={() => removeToast(toast.id)}
              className="p-1 opacity-50 hover:opacity-100 transition-opacity"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
