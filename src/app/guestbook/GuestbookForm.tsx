'use client';

import { useTransition, useRef, useState } from 'react';
import { addMessage } from './actions';
import { Send, Loader2 } from 'lucide-react';

export default function GuestbookForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{error?: string, success?: boolean} | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setStatus(null);
    startTransition(async () => {
      const result = await addMessage(formData);
      if (result.error) {
        setStatus({ error: result.error });
      } else {
        setStatus({ success: true });
        formRef.current?.reset();
        
        // Clear success message after 3 seconds
        setTimeout(() => setStatus(null), 3000);
      }
    });
  };

  return (
    <form ref={formRef} action={handleSubmit} className="flex flex-col gap-4">
      <input 
        type="text" 
        name="name" 
        placeholder="이름을 입력하세요" 
        required 
        disabled={isPending}
        className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all text-gray-800 placeholder-gray-400 disabled:opacity-50"
      />
      <textarea 
        name="message" 
        placeholder="방명록을 남겨주세요 🌸" 
        required 
        rows={4}
        disabled={isPending}
        className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400 transition-all text-gray-800 placeholder-gray-400 resize-none disabled:opacity-50"
      ></textarea>
      
      {status?.error && <div className="text-sm font-medium text-red-500 bg-red-50 p-3 rounded-lg">{status.error}</div>}
      {status?.success && <div className="text-sm font-medium text-emerald-600 bg-emerald-50 p-3 rounded-lg">메시지가 성공적으로 등록되었습니다! 🌸</div>}

      <button 
        type="submit" 
        disabled={isPending}
        className="mt-2 flex items-center justify-center gap-2 btn-holographic py-4 px-6 rounded-2xl text-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
        {isPending ? '등록 중...' : '등록하기'}
      </button>
    </form>
  );
}
