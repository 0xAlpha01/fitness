import { useState } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import About from "./components/sections/About.jsx";
import CallToAction from "./components/sections/CallToAction.jsx";
import Classes from "./components/sections/Classes.jsx";
import Features from "./components/sections/Features.jsx";
import Hero from "./components/sections/Hero.jsx";
import Membership from "./components/sections/Membership.jsx";
import JoinModal from "./components/modals/JoinModal.jsx";
import membershipPlans from "./data/membershipPlans.js";

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Premium");

  const openJoinModal = (plan = "Premium") => {
    setSelectedPlan(plan);
    setIsJoinModalOpen(true);
  };

  return (
    <div className="site-shell">
      <Header onJoin={openJoinModal} />
      <main>
        <Hero onJoin={openJoinModal} />
        <Features />
        <About />
        <Classes onJoin={openJoinModal} />
        <Membership onJoin={openJoinModal} />
        <CallToAction onJoin={openJoinModal} />
      </main>
      <Footer />
      {isJoinModalOpen && (
        <JoinModal
          initialPlan={selectedPlan}
          plans={membershipPlans}
          onClose={() => setIsJoinModalOpen(false)}
        />
      )}
    </div>
  );
}
