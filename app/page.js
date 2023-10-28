import Image from "next/image"
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { SiNpm } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import Project from "./components/project"

export default function Home() {
  return (
    <main className="flex w-full flex-col justify-center items-end">
      <div style={{ backgroundImage: `url('/bg0.jpg')` }} className="bg-center bg-cover w-96 h-[80vh] fixed left-0 bottom-0 flex flex-col gap-6 p-12 border border-slate-600 items-center">
        <Image src="/niladri.jpeg" alt="profile-pic" width={200} height={200} className="w-auto rounded-lg" />
        <h1 className="text-2xl text-slate-300 font-bold">
          Niladri Sekhar Adhikary
        </h1>
        <div className="flex w-full gap-2 justify-around items-center">
          <Link href="https://github.com/niladrix719"><AiFillGithub className="text-4xl" /></Link>
          <Link href="https://www.linkedin.com/in/niladri-adhikary-932872221"><AiFillLinkedin className="text-4xl" /></Link>
          <Link href="https://twitter.com/niladrix719"><FaSquareXTwitter className="text-4xl" /></Link>
          <Link href="https://www.npmjs.com/~niladrix719"><SiNpm className="text-3xl" /></Link>
          <Link href="mailto:niladrix719@gmail.com"><MdEmail className="text-4xl" /></Link>
        </div>
      </div>

      <div className="w-[68%]">
        <div className="flex flex-col mt-20 gap-4">
          <h1 className="text-3xl text-slate-300 font-bold tracking-wide">
            I am,
          </h1>
          <h1 className="text-6xl font-bold tracking-wide">Niladri Adhikary.</h1>
          <h1 className="text-3xl">A Open Source Enthusiast and Software Developer.</h1>
        </div>
        <div>
          <Project number={1} stack1={'nextjs'} stack2={'nodejs'} />
          <Project number={2} stack1={'reactjs'} />
        </div>
      </div>
    </main>
  )
}
