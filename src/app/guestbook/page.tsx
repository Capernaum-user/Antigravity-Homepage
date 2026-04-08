import { getMessages } from './actions';
import GuestbookForm from './GuestbookForm';

export default async function Guestbook() {
  const messages = await getMessages();

  return (
    <div className="flex flex-col gap-12 pt-16 max-w-3xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">방명록</h1>
        <p className="text-gray-600 text-lg">리팩토링 하트에 방문해주셔서 감사합니다. 따뜻한 한마디를 남겨주세요.</p>
      </section>

      <section className="glass-card bg-white/70 border-white/80 shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">메시지 남기기</h2>
        <GuestbookForm />
      </section>

      <section className="space-y-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-10 glass-panel rounded-xl">
            아직 작성된 방명록이 없습니다. 첫 번째로 남겨주세요! <br/>
            (데이터베이스 연결 대기 중일 수 있습니다)
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
