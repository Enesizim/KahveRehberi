import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { SparklesIcon } from './Icons';

const SeoAssistant: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Lütfen bir konu girin.');
      return;
    }
    setLoading(true);
    setError('');
    setResult('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Sen kahve konusunda uzman bir SEO metin yazarısın. Şu konu hakkında SEO uyumlu, dikkat çekici bir blog yazısı hazırla: "${topic}". Yazı, bir başlık, kısa bir meta açıklaması ve en az 3 paragraflık bir ana metin içermelidir. Çıktıyı markdown formatında ver. Başlık için '##', meta açıklama için '###' ve ana metin için normal paragraflar kullan.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setResult(response.text);

    } catch (err) {
      console.error(err);
      setError('İçerik oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <SparklesIcon className="w-8 h-8 text-amber-800" />
        <h2 className="text-3xl font-bold text-stone-900">Yapay Zeka SEO Asistanı</h2>
      </div>
      <p className="text-stone-600 mb-8">
        Kahveyle ilgili blog yazılarınız veya sosyal medya paylaşımlarınız için anında SEO uyumlu içerik oluşturun. Sadece bir konu belirleyin ve gerisini yapay zekaya bırakın!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-lg font-semibold mb-2">
            İçerik Konusu
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Örn: Evde soğuk demleme kahve yapımı"
            className="w-full p-4 border-2 border-stone-200 rounded-lg text-lg focus:ring-2 focus:ring-amber-800 focus:border-amber-800 outline-none transition"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-amber-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-900 transition-colors disabled:bg-stone-400 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Oluşturuluyor...
            </>
          ) : (
            'İçerik Oluştur'
          )}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}

      {result && (
        <div className="mt-8 border-t-2 border-stone-200 pt-6">
          <h3 className="text-2xl font-bold mb-4">Oluşturulan İçerik</h3>
          <div className="bg-stone-50 p-6 rounded-lg whitespace-pre-wrap text-stone-800 font-sans">
             {result.split('\n').filter(line => line.trim() !== '').map((line, index) => {
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-stone-900 mb-3">{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-lg font-semibold text-stone-700 mb-4 italic">{line.substring(4)}</h3>;
                }
                return <p key={index} className="mb-4">{line}</p>;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default SeoAssistant;