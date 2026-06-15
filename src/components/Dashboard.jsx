import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Cell, PieChart, Pie } from 'recharts';
import { AlertTriangle, CheckCircle2, TrendingUp, RefreshCcw, Activity } from 'lucide-react';
import Tooltip from './Tooltip';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded-xl shadow-xl">
        <p className="text-slate-300 mb-1 font-medium">{payload[0].payload.name}</p>
        <p className="text-white font-bold text-xl">{payload[0].value} <span className="text-sm font-normal text-slate-400">ta</span></p>
      </div>
    );
  }
  return null;
};

const Dashboard = ({ results, onRestart }) => {
  if (!results) return null;

  const funnelData = [
    { name: 'Lidlar', value: results.requiredLeads, fill: '#a855f7' },
    { name: 'Mijozlar', value: results.requiredCustomers, fill: '#10b981' }
  ];

  const budgetData = [
    { name: 'Asosiy Byudjet', value: results.minBudget, fill: '#3b82f6' },
    { name: 'Yo\'qotish (Jarima)', value: results.minBudget * (results.penaltyPercent / 100), fill: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 sm:p-8 selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center">
              <Activity className="w-8 h-8 text-blue-500 mr-3" />
              Biznes Audit Xulosasi
            </h1>
            <p className="text-slate-400 mt-2 text-lg">Sizning ma'lumotlaringiz asosida tayyorlangan chuqur tahlil.</p>
          </div>
          <button 
            onClick={onRestart}
            className="mt-4 md:mt-0 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium flex items-center transition-colors"
          >
            <RefreshCcw className="w-5 h-5 mr-2" /> Boshqadan boshlash
          </button>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col justify-center">
            <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Moliyaviy Maqsad</h3>
            <div className="text-4xl font-black text-white">${results.revenueTarget.toLocaleString()}</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col justify-center">
            <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Sotuv Konversiyasi</h3>
            <div className="text-4xl font-black text-blue-400">{results.conversion}%</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col justify-center">
            <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider flex items-center">
              Lid Narxi (CPL)
              <div className="scale-75 origin-left ml-1"><Tooltip title="Lid Narxi (CPL)" text="Bitta qiziqish bildirgan potensial mijoz (lid) ni jalb qilish uchun ketadigan o'rtacha xarajat." /></div>
            </h3>
            <div className="text-4xl font-black text-purple-400">
              {results.customCpl > 0 ? `$${results.customCpl}` : '$0.8 - $1.5'}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className={`absolute right-0 top-0 w-32 h-32 blur-3xl opacity-20 ${results.riskColor.replace('text-', 'bg-')}`}></div>
            <h3 className="text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider relative z-10">Biznes Holati (Xavf)</h3>
            <div className={`text-4xl font-black relative z-10 ${results.riskColor}`}>{results.riskLevel}</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Funnel Chart */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-purple-500" />
              Sotuv Voronkasi (Maqsad uchun)
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="text-slate-500 text-sm mb-1">Kerakli Lidlar</div>
                <div className="text-3xl font-bold text-purple-400">{results.requiredLeads} <span className="text-base font-normal">ta</span></div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="text-slate-500 text-sm mb-1">Kerakli Mijozlar</div>
                <div className="text-3xl font-bold text-emerald-400">{results.requiredCustomers} <span className="text-base font-normal">ta</span></div>
              </div>
            </div>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="name" type="category" stroke="#64748b" width={80} />
                  <RechartsTooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={32}>
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Budget Chart */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-blue-500" />
              Reklama Byudjeti va Yo'qotishlar
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="text-slate-500 text-sm mb-1">Minimal Byudjet</div>
                <div className="text-3xl font-bold text-white">${results.minBudget.toLocaleString()}</div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 bg-red-500/5">
                <div className="text-slate-500 text-sm mb-1">Jarima ({results.penaltyPercent}%)</div>
                <div className="text-3xl font-bold text-red-400">+${(results.minBudget * (results.penaltyPercent / 100)).toLocaleString()}</div>
              </div>
            </div>
            
            <div className="h-[200px] w-full relative">
              {results.penaltyPercent > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <RechartsTooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }} itemStyle={{ color: '#f1f5f9' }} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-emerald-500/20 rounded-2xl bg-emerald-500/5">
                  <div className="text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                    <p className="text-emerald-400 font-medium">Tizimsizlik yo'qotishlari nolga teng.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Actionable Solutions / Harakatlar Rejasi */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Harakatlar Rejasi (Siz uchun yechimlar)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Yechim 1: CRM */}
            {results.penaltyMessages.some(m => m.includes("CRM")) && (
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold flex items-center">
                    1. Zudlik bilan CRM o'rnating
                    <div className="scale-90 ml-2"><Tooltip title="CRM tizimi nima?" text="Mijozlar bilan ishlash tizimi. U orqali barcha xabarlar va mijozlar bir joyga yig'iladi va hech kim unutilmaydi." /></div>
                  </h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  CRM tizimining yo'qligi sababli kelgan lidlarning qariyb 20-30% qismi unutilib, havoga uchmoqda. Bu sizning byudjetingiz to'g'ridan-to'g'ri yonib ketyapti degani.
                </p>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <span className="font-semibold text-emerald-400 block mb-2">Qadamlar:</span>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>AmoCRM yoki Bitrix24 saytidan bepul ro'yxatdan o'ting.</li>
                    <li>Instagram/Telegram kanallaringizni unga ulang.</li>
                    <li>Menejerlar faqat dastur ichidan javob yozishini majburiy qiling.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Yechim 2: Sotuv bo'limi */}
            {results.penaltyMessages.some(m => m.includes("Sotuvchilar")) && (
              <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold">2. Sotuv menejeri yollang</h3>
                </div>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  Asoschi (biznes egasi) operatsion ishlarga ko'milib qolganida konversiya tushib ketadi. Mijozlarga o'z vaqtida, professional skript bilan javob beruvchi alohida xodim shart.
                </p>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <span className="font-semibold text-emerald-400 block mb-2">Qadamlar:</span>
                  <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                    <li>Sotuv menejeri uchun vakansiya e'lon qiling.</li>
                    <li>Mijozlar bilan gaplashish uchun tayyor "Skript" (Ssenariy) yozing.</li>
                    <li>Uning oyligini qat'iy (fiks) qism va sotuvdan foiz shaklida belgilang.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Yechim 3: Asosiy strategiya */}
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <div className="flex items-start mb-4">
                <TrendingUp className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-bold">Lid narxini optimallashtirish</h3>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Daromad maqsadingiz bo'lgan <strong>${results.revenueTarget.toLocaleString()}</strong> ga yetish uchun biz <strong>{results.requiredLeads} ta lid</strong> kerakligini hisobladik. Ushbu lidlarni eng arzon narxda jalb qilish uchun:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900 p-4 rounded-xl">
                  <strong className="text-white block mb-1">1. Test byudjet</strong>
                  <p className="text-sm text-slate-400">Darhol katta pul tikmang. Dastlab $50-$100 orqali 3 xil kreativ (video/rasm) ni test qiling.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <strong className="text-white block mb-1">2. Kontent marketing</strong>
                  <p className="text-sm text-slate-400">Sotuvga undamaydigan, ammo foydali kontent (reels) larni ko'paytiring. Bu organik lidlar keltiradi.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl">
                  <strong className="text-white block mb-1">3. Retargeting</strong>
                  <p className="text-sm text-slate-400">Sizni avval kuzatgan, ammo sotib olmagan arzon mijozlarga alohida reklama yoqing.</p>
                </div>
              </div>
            </div>

            {/* Yechim 4: Mutaxassis */}
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 p-8 rounded-3xl relative overflow-hidden md:col-span-2 shadow-2xl mt-4">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-white">100% Kafolatli yechim: Mutaxassis bilan ishlash</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg max-w-3xl">
                    Biznesingizdagi bu kamchiliklarni o'zingiz to'g'rilashga vaqtingiz yoki yetarli tajribangiz yo'qmi? Bizning pro-darajadagi mutaxassislarimiz barcha tizimlarni (CRM, Sotuv bo'limi, Marketing) "pod-klyuch" qurib beradi. Natijaga kafolat beramiz!
                  </p>
                </div>
                <a href="https://t.me/hellopine" target="_blank" rel="noopener noreferrer" className="text-center w-full md:w-auto whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] flex-shrink-0">
                  Mutaxassis bilan bog'lanish
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
