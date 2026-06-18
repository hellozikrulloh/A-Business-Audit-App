import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Target, ShieldCheck, Star, User } from 'lucide-react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-[#0a0f1c]/50 backdrop-blur-md fixed top-0 w-full z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-shadow">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors">AuditPro</span>
          </div>
          <button 
            onClick={onStart}
            className="px-6 py-2.5 bg-white/5 text-slate-300 hover:text-white rounded-full font-medium transition-all text-sm border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 shadow-lg hover:shadow-blue-500/20"
          >
            Bepul Tekshiruv
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Advanced Background glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">O'zbekistondagi ilk raqamli biznes audit tizimi</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Mijozlaringiz qayerga <br className="hidden md:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-sm">
                ketyapti?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Biznesingizdagi ko'rinmas "teshiklarni" toping. CRM va marketing bo'yicha muammolarni aniqlang hamda reklamadan <span className="text-emerald-400 font-semibold">2 barobar ko'proq</span> foyda oling.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onStart}
                className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Auditni Boshlash
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>
              <div className="flex items-center text-slate-400 bg-white/5 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="font-medium">2 daqiqa vaqt oladi</span>
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
      <section className="py-24 px-6 relative">
        <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent top-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nega bu sizga kerak?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Siz reklamaga pul tikyapsiz, ammo daromad o'smayaptimi? Buning sababini raqamlar orqali ko'rsatib beramiz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">1. Voronka Tahlili</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 text-lg">
                Daromad maqsadingizga erishish uchun aniq nechta potensial mijoz (lid) va qancha reklama byudjeti kerakligini hisoblaymiz.
              </p>
            </div>
            
            <div className="group bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">2. Tizimdagi Teshiklar</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 text-lg">
                CRM yoki to'g'ri sotuv bo'limi yo'qligi sababli oylik aylanmangizdan qancha pul havoga uchayotganini ko'rsatamiz.
              </p>
            </div>

            <div className="group bg-white/[0.02] border border-white/5 backdrop-blur-sm rounded-3xl p-10 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">3. Aniq Yechimlar</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 text-lg">
                Qanday qilib sotuv konversiyasini oshirish va xarajatlarni qisqartirish bo'yicha qadam-baqadam shaxsiy strategiya olasiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Mijozlarimiz Natijalari</h2>
            <p className="text-slate-400 text-lg">Auditsiz ishlash - ko'r-ko'rona mashina haydash bilan teng.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white/[0.02] border border-white/5 backdrop-blur-sm p-10 rounded-3xl relative hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-all"></div>
              <div className="flex text-yellow-500 mb-6 gap-1">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">
                "Biz reklamaga oyiga minglab dollar ishlatardik, ammo sotuv nega tushib ketganini bilmasdik. Auditdan so'ng ma'lum bo'ldiki, muammo reklamada emas, menejerlarimiz va CRM yo'qligida ekan. Tavsiyalarni qo'llab, konversiyani 2 barobar oshirdik."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-2xl text-white mr-5 shadow-lg">A</div>
                <div>
                  <h4 className="font-bold text-lg">Akmal Qodirov</h4>
                  <p className="text-sm text-slate-400">"Online-Store" asoschisi</p>
                </div>
              </div>
            </div>

            <div className="group bg-white/[0.02] border border-white/5 backdrop-blur-sm p-10 rounded-3xl relative hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>
              <div className="flex text-yellow-500 mb-6 gap-1">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">
                "Ushbu kalkulyator bizga voronkani to'g'ri hisoblashni o'rgatdi. Daromad maqsadimizga yetish uchun aniq nechta lid kerakligini ko'rdik va lid narxini tushirish bo'yicha strategiya qildik. Juda sodda va kuchli vosita!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center font-bold text-2xl text-white mr-5 shadow-lg">M</div>
                <div>
                  <h4 className="font-bold text-lg">Madina Alimova</h4>
                  <p className="text-sm text-slate-400">"EduCenter" rahbari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#111827] to-[#0a0f1c] border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="md:w-2/3 relative z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold mb-8 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                Premium Xizmat
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Vaqtingiz yo'qmi? <br/> Biznesingizni <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Mutaxassislarga</span> topshiring.
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Biz shunchaki maslahat bermaymiz, balki biznesingiz uchun barcha tizimlarni (CRM o'rnatish, skript yozish, sotuvchini yollash va marketingni) "pod-klyuch" qurib beramiz. Siz faqat natijani ko'rasiz!
              </p>
              
              <ul className="space-y-5 mb-8">
                <li className="flex items-center text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  Haftasiga 20+ soat vaqtingiz tejaladi
                </li>
                <li className="flex items-center text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  Xatoliklar ehtimoli nolga tushadi
                </li>
                <li className="flex items-center text-slate-200 text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center mr-4 border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  Tizimlar bir marta va umrbod xizmat qiladigan qilib quriladi
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 relative z-10 w-full flex flex-col items-center">
              <div className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white/5">
                  <User className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Bepul Konsultatsiya</h3>
                <p className="text-base text-slate-400 mb-8">Mutaxassisimiz biznesingizni o'rganib, sizga aniq taklif beradi.</p>
                <a href="https://t.me/hellopine" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105">
                  Bog'lanish
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#111827] to-[#0a0f1c] border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 rounded-full blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white tracking-tight">O'zingiz tekshirib ko'rmoqchimisiz?</h2>
          <p className="text-xl text-slate-400 mb-12 relative z-10 max-w-2xl mx-auto leading-relaxed">Hoziroq bepul auditdan o'ting va biznesingizdagi muammolarni raqamlarda aniqlang.</p>
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 relative z-10 flex items-center justify-center gap-3 mx-auto"
          >
            Auditni Boshlash
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 text-sm border-t border-white/5 bg-[#0a0f1c]">
        <p>© 2026 AuditPro. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
