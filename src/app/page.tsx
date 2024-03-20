import Image from "next/image";
import { DM_Sans } from "next/font/google";
import About from "@/app/components/About";
import Jobs from "@/app/components/Jobs"

const dm = DM_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={dm.className}>
      <About></About>
      <Jobs></Jobs>
    </main>
  );
}
