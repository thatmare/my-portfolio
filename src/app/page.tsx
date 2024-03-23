import { DM_Sans } from "next/font/google";
import Intro from "./components/Intro";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";

const dm = DM_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
      <div className={`${dm.className} lg:flex lg:justify-between selection:bg-moody-blue-400 selection:text-slate-950`}>
        <Intro />
        <main className="lg:w-1/2 lg:pr-20">
          <About />
          <Jobs />
          <Projects />
        </main>
      </div>
  );
}
