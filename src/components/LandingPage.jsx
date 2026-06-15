import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Target, ShieldCheck, Star, User } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* Navbar (Mock) */}
      <nav className="border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">AuditPro</span>
          </div>
          <button 
            onClick={onStart}
            className="px-5 py-2 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all text-sm border border-blue-500/20"
          >
            Bepul Tekshiruv
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 mb-6">
              O'zbekistondagi ilk raqamli biznes audit tizimi
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Mijozlaringiz qayerga <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                ketyapti?
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Biznesingizdagi ko'rinmas "teshiklarni" toping. CRM va marketing bo'yicha muammolarni aniqlang hamda reklamadan 2 barobar ko'proq foyda oling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onStart}
                className="group w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg flex items-center justify-center transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
              >
                <span>Auditni Boshlash</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center text-sm text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" />
                2 daqiqa vaqt oladi
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-10 border-y border-slate-800/60 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-widest">Ushbu vosita orqali biznesini tahlil qilganlar</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Soxta logotiplar o'rniga matnli brendlar */}
            <div className="text-xl font-bold font-serif">AmoCRM (Partner)</div>
            <div className="text-xl font-black italic">SalesX</div>
            <div className="text-xl font-semibold tracking-tighter">UzBusiness</div>
            <div className="text-xl font-bold uppercase">TargetPro</div>
            <div className="text-xl font-medium flex items-center"><Target className="w-6 h-6 mr-1"/> Growth</div>
          </div>
        </div>
      </section>

      {/* Features / How it works */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nega bu sizga kerak?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Siz reklamaga pul tikyapsiz, ammo daromad o'smayaptimi? Buning sababini raqamlar orqali ko'rsatib beramiz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Voronka Tahlili</h3>
              <p className="text-slate-400 leading-relaxed">
                Daromad maqsadingizga erishish uchun aniq nechta potensial mijoz (lid) va qancha reklama byudjeti kerakligini hisoblaymiz.
              </p>
            </div>
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Tizimdagi Teshiklar</h3>
              <p className="text-slate-400 leading-relaxed">
                CRM yoki to'g'ri sotuv bo'limi yo'qligi sababli oylik aylanmangizdan qancha pul havoga uchayotganini ko'rsatamiz.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Aniq Yechimlar</h3>
              <p className="text-slate-400 leading-relaxed">
                Qanday qilib sotuv konversiyasini oshirish va xarajatlarni qisqartirish bo'yicha qadam-baqadam shaxsiy strategiya olasiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mijozlarimiz Natijalari</h2>
            <p className="text-slate-400">Auditsiz ishlash - ko'r-ko'rona mashina haydash bilan teng.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
              <div className="flex text-yellow-500 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-slate-300 italic mb-6">
                "Biz reklamaga oyiga minglab dollar ishlatardik, ammo sotuv nega tushib ketganini bilmasdik. Auditdan so'ng ma'lum bo'ldiki, muammo reklamada emas, menejerlarimiz va CRM yo'qligida ekan. Tavsiyalarni qo'llab, konversiyani 2 barobar oshirdik."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-xl text-slate-400 mr-4">A</div>
                <div>
                  <h4 className="font-bold">Akmal Qodirov</h4>
                  <p className="text-sm text-slate-500">"Online-Store" asoschisi</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
              <div className="flex text-yellow-500 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-slate-300 italic mb-6">
                "Ushbu kalkulyator bizga voronkani to'g'ri hisoblashni o'rgatdi. Daromad maqsadimizga yetish uchun aniq nechta lid kerakligini ko'rdik va lid narxini tushirish bo'yicha strategiya qildik. Juda sodda va kuchli vosita!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-xl text-slate-400 mr-4">M</div>
                <div>
                  <h4 className="font-bold">Madina Alimova</h4>
                  <p className="text-sm text-slate-500">"EduCenter" rahbari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
            <div className="absolute -left-32 -top-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]"></div>
            
            <div className="md:w-2/3 relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold mb-6 border border-purple-500/20">
                Premium Xizmat
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Vaqtingiz yo'qmi? <br/> Biznesingizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Mutaxassislarga</span> topshiring.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Nima uchun aynan bizning mutaxassislarimiz? Biz shunchaki maslahat bermaymiz, balki biznesingiz uchun barcha tizimlarni (CRM o'rnatish, skript yozish, sotuvchini yollash va marketingni) "pod-klyuch" (tayyor holda) qurib beramiz. Siz faqat natijani ko'rasiz!
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
                  Haftasiga 20+ soat vaqtingiz tejaladi
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
                  Xatoliklar ehtimoli nolga tushadi
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3" />
                  Tizimlar bir marta va umrbod xizmat qiladigan qilib quriladi
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 relative z-10 w-full flex flex-col items-center">
              <div className="w-full bg-slate-950/80 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-inner border border-slate-700">
                  <User className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Bepul Konsultatsiya</h3>
                <p className="text-sm text-slate-400 mb-6">Mutaxassisimiz biznesingizni o'rganib, sizga aniq taklif beradi.</p>
                <a href="https://t.me/hellopine" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                  Bog'lanish
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">O'zingiz tekshirib ko'rmoqchimisiz?</h2>
          <p className="text-lg text-slate-400 mb-10 relative z-10">Hoziroq bepul auditdan o'ting va biznesingizdagi muammolarni raqamlarda aniqlang.</p>
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 relative z-10"
          >
            Auditni Boshlash
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/60">
        <p>© 2026 AuditPro. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
