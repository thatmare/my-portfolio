import { DM_Sans } from "next/font/google";
import Intro from "./components/Intro";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Projects from "./components/Projects";

const dm = DM_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={dm.className}>
      <Intro/>
      <About/>
      <Jobs/>
      <Projects/>
    </main>
  );
}
