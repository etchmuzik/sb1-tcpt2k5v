import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export default function ROICalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(1000);
  const [avgCallDuration, setAvgCallDuration] = useState(5);
  const [agentCostPerHour, setAgentCostPerHour] = useState(50);
  const [employeeCount, setEmployeeCount] = useState(5);
  const [savings, setSavings] = useState({ monthly: 0, yearly: 0, employees: 0 });

  // Calculate savings whenever inputs change
  useEffect(() => {
    const calculateSavings = () => {
      // Calculate total hours per month
      const monthlyHours = (monthlyVolume * avgCallDuration) / 60;
      
      // Calculate current monthly cost with human agents
      const currentMonthlyCost = monthlyHours * agentCostPerHour;
      
      // Calculate employee costs (assuming 160 hours per month per employee)
      const employeeMonthlyCost = employeeCount * 160 * agentCostPerHour;
      const totalMonthlyCost = currentMonthlyCost + employeeMonthlyCost;
      
      // Assume AI solution reduces total cost by 70%
      const monthlySavings = totalMonthlyCost * 0.7;
      const yearlySavings = monthlySavings * 12;
      const employeeSavings = employeeMonthlyCost * 0.7;

      setSavings({
        monthly: Math.round(monthlySavings),
        yearly: Math.round(yearlySavings),
        employees: Math.round(employeeSavings)
      });
    };

    calculateSavings();
  }, [monthlyVolume, avgCallDuration, agentCostPerHour, employeeCount]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-teal/10 rounded-lg">
          <Calculator className="h-6 w-6 text-teal" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">ROI Calculator</h3>
          <p className="text-sm text-zinc-400">See how much you could save with AI automation</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Monthly Call Volume */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-400">
              Monthly Call Volume
            </label>
            <span className="text-sm text-white">{monthlyVolume.toLocaleString()} calls</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={monthlyVolume}
            onChange={(e) => setMonthlyVolume(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-teal"
          />
        </div>

        {/* Average Call Duration */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-400">
              Average Call Duration
            </label>
            <span className="text-sm text-white">{avgCallDuration} minutes</span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            value={avgCallDuration}
            onChange={(e) => setAvgCallDuration(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-teal"
          />
        </div>

        {/* Number of Employees */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-400">
              Number of Employees
            </label>
            <span className="text-sm text-white">{employeeCount} employees</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-teal"
          />
        </div>

        {/* Agent Cost per Hour */}
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-zinc-400">
              Agent Cost per Hour
            </label>
            <span className="text-sm text-white">AED {agentCostPerHour}</span>
          </div>
          <input
            type="range"
            min="30"
            max="100"
            value={agentCostPerHour}
            onChange={(e) => setAgentCostPerHour(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-teal"
          />
        </div>

        {/* Savings Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-800">
          <div className="bg-black rounded-lg p-4">
            <div className="text-sm text-zinc-400 mb-1">Monthly Savings</div>
            <div className="text-2xl font-bold text-teal">
              AED {savings.monthly.toLocaleString()}
            </div>
          </div>
          <div className="bg-black rounded-lg p-4">
            <div className="text-sm text-zinc-400 mb-1">Yearly Savings</div>
            <div className="text-2xl font-bold text-teal">
              AED {savings.yearly.toLocaleString()}
            </div>
          </div>
          <div className="bg-black rounded-lg p-4">
            <div className="text-sm text-zinc-400 mb-1">Employee Cost Savings</div>
            <div className="text-2xl font-bold text-teal">
              AED {savings.employees.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}