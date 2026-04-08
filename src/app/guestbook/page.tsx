export const dynamic = 'force-dynamic';
import { getMessages } from './actions';
import GuestbookForm from './GuestbookForm';

export default async function Guestbook() {
  const messages = await getMessages();

  return (
    <div className="flex flex-col gap-12 pt-16 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">ë°©ëª…ë¡?/h1>
        <p className="text-gray-600 text-lg">ë¦¬íŒ©? ë§ ?˜íŠ¸??ë°©ë¬¸?´ì£¼?”ì„œ ê°ì‚¬?©ë‹ˆ?? ?°ëœ»???œë§ˆ?”ë? ?¨ê²¨ì£¼ì„¸??</p>
      </section>

      <section className="glass-card bg-white/70 border-white/80 shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">ë©”ì‹œì§€ ?¨ê¸°ê¸?/h2>
        <GuestbookForm />
      </section>

      <section className="space-y-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-10 glass-panel rounded-xl">
            ?„ì§ ?‘ì„±??ë°©ëª…ë¡ì´ ?†ìŠµ?ˆë‹¤. ì²?ë²ˆì§¸ë¡??¨ê²¨ì£¼ì„¸?? <br/>
            (?°ì´?°ë² ?´ìŠ¤ ?°ê²° ?€ê¸?ì¤‘ì¼ ???ˆìŠµ?ˆë‹¤)
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-300 to-orange-300 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 text-lg">{msg.name}</span>
                <span className="text-xs text-gray-400">{new Date(msg.created_at).toLocaleString()}</span>
              </div>
              <p className="text-gray-600 mt-2">{msg.message}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
