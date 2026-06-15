import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';

function App() {
  const [step, setStep] = useState(0); // 0: Landing, 1: Questionnaire, 2: Dashboard
  const [results, setResults] = useState(null);

  const startAudit = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };

  const handleComplete = (data) => {
    // Audit Logic Calculation
    const revenueTarget = parseFloat(data.monthlyRevenueTarget) || 0;
    const avgCheck = parseFloat(data.averageCheck) || 1;
    const conversion = parseFloat(data.salesConversion) || 1;
    
    const requiredCustomers = Math.ceil(revenueTarget / avgCheck);
    const requiredLeads = Math.ceil(requiredCustomers / (conversion / 100));

    let minCpl = 0.8;
    let maxCpl = 1.5;
    
    if (data.customCpl && parseFloat(data.customCpl) > 0) {
      minCpl = parseFloat(data.customCpl);
      maxCpl = parseFloat(data.customCpl);
    }

    const minBudget = requiredLeads * minCpl;
    const maxBudget = requiredLeads * maxCpl;

    // Risk and Penalty Calculation
    let riskScore = 0;
    let penaltyPercent = 0;
    let penaltyMessages = [];

    if (data.hasCRM === 'no') {
      riskScore += 40;
      penaltyPercent += 20;
      penaltyMessages.push("CRM yo'qligi sababli yo'qotishlar (+20%)");
    }
    if (data.hasSalesTeam === 'no') {
      riskScore += 40;
      penaltyPercent += 20;
      penaltyMessages.push("Sotuvchilar yo'qligi sababli past konversiya (+20%)");
    }
    if (data.socialMediaState === 'poor' || data.socialMediaState === 'none') {
      riskScore += 20;
    }

    let riskLevel = 'Past Xavf';
    let riskColor = 'text-emerald-500';
    if (riskScore >= 70) {
      riskLevel = 'O\'ta Yuqori Xavf';
      riskColor = 'text-red-500';
    } else if (riskScore >= 40) {
      riskLevel = "O'rtacha Xavf";
      riskColor = 'text-orange-500';
    }

    const calculatedResults = {
      requiredCustomers,
      requiredLeads,
      minBudget,
      maxBudget,
      riskLevel,
      riskColor,
      penaltyPercent,
      penaltyMessages,
      revenueTarget,
      avgCheck,
      conversion,
      customCpl: parseFloat(data.customCpl) || 0,
      niche: data.niche
    };

    setResults(calculatedResults);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const restartAudit = () => {
    setStep(0);
    setResults(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {step === 0 && <LandingPage onStart={startAudit} />}
      {step === 1 && <Questionnaire onComplete={handleComplete} />}
      {step === 2 && <Dashboard results={results} onRestart={restartAudit} />}
    </>
  );
}

export default App;
