import Image from "next/image"

export default function Project(props) {
  return (
    <div className="border border-slate-600 py-8">
      <div style={{ backgroundImage: `url('/proj${props.number}.png')` }} className="border border-white relative h-80 w-[78%] bg-cover bg-center">
        <div className="pr-6 py-2 border-rounded-lg absolute top-8 right-[-5%] flex items-center bg-white">
          <Image src={`/${props.stack1}.png`} alt='nextjs' height='80' width='80' />
          <p className="text-black">Next.js Framework</p>
        </div>
        <div className="pr-6 py-2 border-rounded-lg absolute top-20 right-[-5%] flex items-center bg-white">
          <Image src={`/${props.stack2}.png`} alt='nextjs' height='80' width='80' />
          <p className="text-black">Node.js Framework</p>
        </div>
      </div>
    </div>
  )
}