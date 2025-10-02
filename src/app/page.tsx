import Image from "next/image";
import Header from "./components/home/Header";
import AutoScrollLogo from "./components/home/AutoScrollLogo";
import Services from "./components/home/Services";
import CAT from "./components/home/CAT";
import CaseStudies from "./components/home/CaseStudies";
import OurWorkingProcess from "./components/home/ourWorkingProcess";
import Team from "./components/home/Team";
import ContactUs from "./components/home/ContactUs";
export default function Home() {
  return (
    <>
    <header>
       <Header/>
    </header>
    <main className="flex flex-col space-y-10 mt-5">
      <AutoScrollLogo/>
      <Services/>
      <CAT/>
      <CaseStudies/>
      <OurWorkingProcess/>
      <Team/>
      <ContactUs/>
    </main>
    </>
  );
}
