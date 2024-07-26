/** @format */

import { useState, useEffect } from "react";

export default function LoanCalculator() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-12 w-full lg:mt-20 mt-20">
      <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-roboto-slab">
          Your Personalized <br />
          Loan Guide
        </h1>
        <p className="font-rubik mt-4 md:mt-6 text-sm md:text-base text-gray-900">
          Agata provides personalized loan recommendations based on your{" "}
          <br className="hidden md:inline" />
          financial situation and preferences. Get Freedom of your finances.
        </p>
        <button className="rounded-full border-2 border-black text-sm font-semibold text-white hover:bg-gray-900 hover:text-white transition-all delay-75 ease-in-out bg-black mt-6 md:mt-8 px-6 py-2 w-full md:w-3/4">
          Get Started
        </button>
      </div>

      <div className="w-full md:w-1/2 max-w-md">
        <div className="card bg-white p-4 md:p-6 lg:p-8 border-black border-2 rounded-lg md:drop-shadow-solid drop-shadow-sm sm:drop-shadow-sm-solid">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [paybackPeriod, setPaybackPeriod] = useState(12);
  const [interestRate, setInterestRate] = useState(6);

  const handleLoanAmount = (e) => {
    setLoanAmount(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPaybackPeriod(e.target.value);
  };

  const handleRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const updateSliderBackground = (element) => {
    const value =
      ((element.value - element.min) / (element.max - element.min)) * 100;
    element.style.setProperty("--value", `${value}%`);
  };

  useEffect(() => {
    const slider = document.querySelector('input[type="range"]');
    updateSliderBackground(slider);
  }, [loanAmount]);

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-col gap-4">
      <div className="state bg-primery-color flex flex-col justify-center items-center font-roboto-slab font-regular gap-2 bg-primary-color p-4 rounded-xl w-full">
        <h2 className="stat-title text-black text-sm">Loan Amount</h2>
        <h1 className="stat-value text-black text-2xl md:text-3xl">
          $ {loanAmount}
        </h1>
        <input
          type="range"
          min={1000}
          max={50000}
          value={loanAmount}
          onChange={handleLoanAmount}
          className="stat-desc mt-2 w-full bg-black rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="block font-rubik text-xs">Payback Period</p>
            <input
              type="number"
              className="input-text custom-number-input p-1 w-1/3 text-sm"
              value={paybackPeriod}
              onChange={handlePeriodChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="block font-rubik text-xs">Interest Rate</p>
            <input
              type="number"
              className="input-text custom-number-input p-1 w-1/3 text-sm"
              value={interestRate}
              onChange={handleRateChange}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <button className="rounded-full border-2 border-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 hover:text-white transition-all delay-75 ease-in-out w-full justify-center items-center p-2 bg-black">
            Apply for loan
          </button>
          <p className="text-gray-500 text-xs text-center">
            Instant processing time under 30min
          </p>
        </div>
      </div>
    </div>
  );
}
