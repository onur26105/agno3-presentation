import React, { useState, useEffect } from 'react';

const Agno3Presentation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [clickEffect, setClickEffect] = useState<{ x: number; y: number; id: number } | null>(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickEffect({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      id: Date.now(),
    });

    setActiveSection(activeSection === sectionId ? null : sectionId);

    setTimeout(() => setClickEffect(null), 600);
  };

  const properties = [
    { label: 'Formül', value: 'AgNO₃', color: 'from-blue-500 to-cyan-500' },
    { label: 'Molar Kütle', value: '169.87 g/mol', color: 'from-purple-500 to-pink-500' },
    { label: 'Erime Noktası', value: '212°C', color: 'from-red-500 to-orange-500' },
    { label: 'Yoğunluk', value: '4.35 g/cm³', color: 'from-green-500 to-emerald-500' },
  ];

  const features = [
    {
      id: 'feature1',
      title: 'Güçlü Oksidleyici',
      description: 'Agno3, güçlü bir oksidleyici ajanıdır ve birçok kimyasal reaksiyonda kullanılır.',
      icon: '⚡',
    },
    {
      id: 'feature2',
      title: 'Fotoğrafçılıkta Kullanım',
      description: 'Tarihsel fotoğrafçılıkta emülsiyon hazırlamada önemli bir rol oynar.',
      icon: '📷',
    },
    {
      id: 'feature3',
      title: 'Tıbbi Uygulamalar',
      description: 'Antiseptik ve antimikrobiyal özellikleri nedeniyle tıbbi alanlarda kullanılır.',
      icon: '💊',
    },
    {
      id: 'feature4',
      title: 'Endüstriyel Kullanım',
      description: 'Gümüş kaplama, madeni para üretimi ve diğer endüstriyel uygulamalarda kullanılır.',
      icon: '🏭',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Click Effect */}
      {clickEffect && (
        <div
          className="fixed pointer-events-none"
          style={{
            left: clickEffect.x,
            top: clickEffect.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="animate-ping w-8 h-8 bg-cyan-400 rounded-full opacity-75" />
          <div className="absolute inset-0 w-8 h-8 bg-cyan-400 rounded-full opacity-0 animate-pulse" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              AgNO₃
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Gümüş Nitrat
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mt-2">
              Sunumu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Kimyanın en ilginç bileşiklerinden biri olan Gümüş Nitrat'ın özellikleri, kullanımları ve
            uygulamaları hakkında bilgi edinin.
          </p>

          <button
            onClick={(e) => handleButtonClick(e, 'hero-cta')}
            className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Keşfet</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity" />
          </button>
        </div>

        {/* Animated Background Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Properties Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Kimyasal Özellikler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((prop, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `slideUp 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className={`bg-gradient-to-br ${prop.color} p-0.5 rounded-xl`}>
                  <div className="bg-slate-800 rounded-lg p-6 h-full group-hover:bg-slate-700 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="text-sm text-gray-400 mb-3 font-semibold">{prop.label}</div>
                    <div className="text-3xl font-bold text-white">{prop.value}</div>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Kullanım Alanları
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                style={{
                  animation: `slideUp 0.6s ease-out`,
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both',
                }}
              >
                <button
                  onClick={(e) => handleButtonClick(e, feature.id)}
                  className="w-full text-left group relative"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{feature.icon}</div>
                      <div className="text-cyan-400 text-2xl group-hover:rotate-90 transition-transform duration-300">
                        ➜
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

                    {activeSection === feature.id && (
                      <div className="mt-4 pt-4 border-t border-cyan-500/30 animate-fadeIn">
                        <p className="text-cyan-300 text-sm font-semibold">
                          ✓ Detaylı bilgi gösteriliyor...
                        </p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">⚠️</span>
              Güvenlik Uyarıları
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span>Agno3 güçlü bir oksidleyicidir ve yanıcı maddelerle temas etmemelidir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span>Cilt ve gözlerle temas halinde ciddi yanıklara neden olabilir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span>Uygun koruyucu ekipman (eldiven, gözlük) kullanılmalıdır.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-1">•</span>
                <span>Iyi havalandırılmış ortamda saklanmalı ve kullanılmalıdır.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">Agno3 Sunumu - Kimya Eğitimi</p>
          <p className="text-sm">© 2024 Tüm hakları saklıdır.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Agno3Presentation;