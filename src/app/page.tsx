import Image from "next/image";
import Header from "./components/home/Header";
import AutoScrollLogo from "./components/home/AutoScrollLogo";
import Services from "./components/home/Services";
export default function Home() {
  return (
    <main className="flex flex-col space-y-10 mt-5">
      <Header/>
      <AutoScrollLogo/>
      <Services/>
    </main>
  );
}
