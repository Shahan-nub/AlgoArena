import Link from "next/link";

export default function SortBox({CourseName,href}) {
  return (
    <Link href={href} className="text-white text-center font-extralight font-mono mx-2 z-30 text-xs border-[1px] px-1 py-1 rounded-3xl border-[#9d5ae3] basis-[40%] ">
      {CourseName}
      </Link>
  )
}