import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import ServiceNow from "@/components/ServiceNow";
import Workflow from "@/components/Workflow";
import WhyItWorks from "@/components/WhyItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <ServiceNow />
        <Workflow />
        <WhyItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
