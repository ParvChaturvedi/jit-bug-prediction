import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import TechStack from "../components/TechStack";

export default function Home() {

  return (
    <div
      className="
      bg-[#F8F7F4]
      min-h-screen
      "
    >

      <div
        className="
        max-w-375
        mx-auto
        rounded-[40px]
        "
      >

        <Navbar />

        <Hero />

        <HowItWorks />

        <TechStack />

      </div>

    </div>
  );
}