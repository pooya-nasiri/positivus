import Image from "next/image";
import Header from "./components/home/Header";
import AutoScrollLogo from "./components/home/AutoScrollLogo";
import Services from "./components/home/Services";
import CAT from "./components/home/CAT";
import CaseStudies from "./components/home/CaseStudies";
export default function Home() {
  return (
    <main className="flex flex-col space-y-10 mt-5">
      <Header/>
      <AutoScrollLogo/>
      <Services/>
      <CAT/>
      <CaseStudies/>
    </main>
  );
}
