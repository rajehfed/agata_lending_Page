/** @format */

import FeaturCard from "./Components/FeaturCard";
import Header from "./Components/Header";
import LoanCalculator from "./Components/LoanCalculator";
import Logos from "./Components/Logos";
import TestimonialCard from "./Components/TestimonialCard";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <LoanCalculator />
      <Logos />
      <FeaturCard />
      <TestimonialCard />
    </div>
  );
}
