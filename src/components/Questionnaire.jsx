import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, Building2, User, Megaphone, Laptop, Briefcase, ShoppingBag, TrendingUp } from 'lucide-react';
import Tooltip from './Tooltip';

const questions = [
  {
    id: 'isBusinessOwner',
    title: "Siz biznes egasimisiz?",
    type: 'choice',
    options: [
      { value: 'yes', label: "Ha, Men asoschiman", icon: <Building2 className="w-6 h-6 mb-3" /> },
      { value: 'no', label: "Yo'q, Men xodim/menejerman", icon: <User className="w-6 h-6 mb-3" /> }
    ]
  },
  {
    id: 'hasCRM',
    title: "Sizda CRM tizimi mavjudmi?",
    tooltip: "CRM (Mijozlar bilan ishlash tizimi) — bu mijozlar bazasini yig'uvchi va sotuvchilarni nazorat qiluvchi dastur (AmoCRM, Bitrix24 va h.k). Busiz mijozlaringiz yo'qolib ketaveradi.",
    type: 'choice',
    options: [
      { value: 'yes', label: "Ha, to'liq ishlaydi", icon: <Check className="w-6 h-6 mb-3 text-emerald-400" /> },
      { value: 'no', label: "Yo'q, umuman ishlatmaymiz", icon: <div className="w-6 h-6 mb-3 text-red-400 text-xl font-bold">✕</div> }
    ]
  },
  {
    id: 'hasSalesTeam',
    title: "Alohida sotuv bo'limi (Menejerlar) bormi?",
    type: 'choice',
    options: [
      { value: 'yes', label: "Ha, alohida sotuvchilar bor", icon: <Briefcase className="w-6 h-6 mb-3" /> },
      { value: 'no', label: "Yo'q, o'zim/boshqalar aralash sotamiz", icon: <User className="w-6 h-6 mb-3" /> }
    ]
  },
  {
    id: 'socialMediaState',
    title: "Ijtimoiy tarmoqlaringiz (Upakovka) holati qanday?",
    type: 'choice',
    options: [
      { value: 'good', label: "Zo'r holatda (Aktiv)", icon: <Megaphone className="w-6 h-6 mb-3 text-emerald-400" /> },
      { value: 'poor', label: "Yomon / O'rtacha", icon: <div className="w-6 h-6 mb-3 text-yellow-400 text-xl font-bold">~</div> },
      { value: 'none', label: "Umuman yo'q", icon: <div className="w-6 h-6 mb-3 text-red-400 text-xl font-bold">✕</div> }
    ]
  },
  {
    id: 'niche',
    title: "Biznesingiz qaysi sohada faoliyat yuritadi?",
    type: 'choice',
    options: [
      { value: 'ecommerce', label: "Savdo (E-commerce)", icon: <ShoppingBag className="w-6 h-6 mb-3" /> },
      { value: 'services', label: "Xizmat ko'rsatish", icon: <Briefcase className="w-6 h-6 mb-3" /> },
      { value: 'realestate', label: "Ko'chmas mulk / Qurilish", icon: <Building2 className="w-6 h-6 mb-3" /> },
      { value: 'b2b', label: "B2B (Biznes uchun biznes)", icon: <Laptop className="w-6 h-6 mb-3" /> }
    ]
  },
  {
    id: 'monthlyRevenueTarget',
    title: "Oylik daromad maqsadingiz qancha?",
    tooltip: "Reklama orqali bir oyda qancha tushum (oborot) qilmoqchisiz? Buni bilish reklama byudjetini hisoblash uchun juda muhim.",
    type: 'number',
    placeholder: "Masalan: 10000",
    prefix: "$"
  },
  {
    id: 'averageCheck',
    title: "O'rtacha chek miqdori qancha?",
    tooltip: "O'rtacha chek — bitta mijozning bir martalik xaridi uchun to'laydigan o'rtacha puli. Jami tushumni mijozlar soniga bo'lish orqali topiladi.",
    type: 'number',
    placeholder: "Masalan: 60",
    prefix: "$"
  },
  {
    id: 'adPlatform',
    title: "Asosiy reklama platformangiz?",
    type: 'choice',
    options: [
      { value: 'instagram', label: "Instagram / Facebook", icon: <div className="w-6 h-6 mb-3 font-bold text-pink-500">IG</div> },
      { value: 'google', label: "Google Ads", icon: <div className="w-6 h-6 mb-3 font-bold text-blue-500">G</div> },
      { value: 'telegram', label: "Telegram", icon: <div className="w-6 h-6 mb-3 font-bold text-sky-400">TG</div> }
    ]
  },
  {
    id: 'salesConversion',
    title: "Sotuv konversiyasi necha foiz (%)?",
    tooltip: "Konversiya — qiziqib yozgan yoki qo'ng'iroq qilgan (Lid) 100 ta odamdan nechtasi haqiqiy xaridorga aylanishini ko'rsatadi. O'rtacha bozor ko'rsatkichi 20-30% ni tashkil qiladi.",
    type: 'number',
    placeholder: "Masalan: 30",
    suffix: "%"
  },
  {
    id: 'customCpl',
    title: "1 ta Potensial Mijoz (Lid) narxi qancha?",
    tooltip: "Lid (Lead) — sizning reklamangizga qiziqish bildirib, o'z raqamini qoldirgan yoki xabar yozgan potensial mijoz. Siz 1 ta shunday mijozni jalb qilish uchun reklamaga necha pul sarflaysiz? Agar aniq bilmasangiz, bo'sh qoldiring (tizim avtomatik hisoblaydi).",
    type: 'number',
    placeholder: "Standart: $0.8 - $1.5 (bo'sh qoldirish mumkin)",
    prefix: "$"
  }
];

const Questionnaire = ({ onComplete, onBackToHome }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');

  const currentQuestion = questions[currentIndex];

  const handleChoice = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    
    // Smooth auto-advance
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setInputValue(newAnswers[questions[currentIndex + 1].id] || '');
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  const handleNextInput = () => {
    if (!inputValue && currentQuestion.id !== 'customCpl') return; // validation

    const newAnswers = { ...answers, [currentQuestion.id]: inputValue || 0 };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setInputValue(newAnswers[questions[currentIndex + 1].id] || '');
    } else {
      onComplete(newAnswers);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNextInput();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setInputValue(answers[questions[currentIndex - 1].id] || '');
    }
  };

  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between text-slate-100 selection:bg-blue-500/30">
      
      {/* Header / Progress bar */}
      <header className="p-6 md:p-10 w-full max-w-4xl mx-auto flex items-center justify-between">
        <button 
          onClick={onBackToHome}
          className="flex items-center space-x-2 group hover:opacity-85 transition-opacity cursor-pointer"
          title="Bosh sahifaga qaytish"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">AuditPro</span>
        </button>

        <div className="flex items-center space-x-6">
          <button 
            onClick={handleBack}
            className={`flex items-center text-slate-400 hover:text-white transition-colors cursor-pointer ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Orqaga
          </button>
          <div className="text-slate-500 font-medium">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </header>

      <div className="w-full max-w-4xl mx-auto px-6 mb-8">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
                {currentQuestion.title}
              </h2>
              {currentQuestion.tooltip && (
                <Tooltip title={currentQuestion.title} text={currentQuestion.tooltip} />
              )}
            </div>

            {/* Render Choice Cards */}
            {currentQuestion.type === 'choice' && (
              <div className={`grid gap-4 mt-10 ${currentQuestion.options.length > 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'}`}>
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleChoice(option.value)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center group
                      ${answers[currentQuestion.id] === option.value 
                        ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800'
                      }
                    `}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {option.icon}
                    </div>
                    <span className="text-xl font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Render Number Input */}
            {currentQuestion.type === 'number' && (
              <div className="max-w-xl mx-auto mt-10">
                <div className="relative flex items-center">
                  {currentQuestion.prefix && (
                    <span className="absolute left-6 text-3xl text-slate-500 font-bold">{currentQuestion.prefix}</span>
                  )}
                  <input
                    autoFocus
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={currentQuestion.placeholder}
                    className={`w-full bg-slate-900 border-2 border-slate-700 focus:border-blue-500 rounded-2xl py-6 text-3xl font-bold text-center text-white outline-none transition-colors shadow-2xl
                      ${currentQuestion.prefix ? 'pl-16' : ''}
                      ${currentQuestion.suffix ? 'pr-16' : ''}
                    `}
                  />
                  {currentQuestion.suffix && (
                    <span className="absolute right-6 text-3xl text-slate-500 font-bold">{currentQuestion.suffix}</span>
                  )}
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={handleNextInput}
                    disabled={!inputValue && currentQuestion.id !== 'customCpl'}
                    className="px-10 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xl flex items-center transition-colors"
                  >
                    Keyingisi <ArrowRight className="w-6 h-6 ml-2" />
                  </button>
                </div>
              </div>
            )}
            
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="p-6 text-center text-slate-600 text-sm">
        Enter tugmasini bosish orqali ham keyingisiga o'tishingiz mumkin
      </footer>
    </div>
  );
};

export default Questionnaire;
