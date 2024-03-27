import Link from "next/link";
import { Spline_Sans_Mono } from "next/font/google";

const spline = Spline_Sans_Mono({
    subsets: ["latin"],
  });
  

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-moody-blue-400">
        <h2 className={`${spline.className} text-2xl`} >404 Not Found</h2>
        <Link href="/" className="text-xl">Return Home</Link>
      </div>
    )
  }