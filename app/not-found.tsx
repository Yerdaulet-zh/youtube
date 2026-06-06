import './globals.css'
import Image from "next/image";


export default function NotFound() {
  return (
    <div className={`flex flex-col w-full h-screen items-center justify-center`}>
      <Image
        src="/icons/monkey.png"
        alt=""
        height={186}
        width={174}
      />
      <p>This page is unavailable.</p>
      <p>Maybe you should look for something else?</p>
    </div>
  )
}
