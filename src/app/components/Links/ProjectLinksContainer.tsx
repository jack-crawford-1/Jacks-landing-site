import Email from './icon-links/Email'
import Github from './icon-links/Github'
import CV from './icon-links/CV'
import Link from 'next/link'

// TODO sort out spacing for mobile screens/ removed links container for now

export default function ProjectLinksContainer() {
  return (
    <>
      <div className="flex flex-wrap justify-center w-full flex-row items-center pl-10 md:p-10 m-1 text-xl bg-slate-800">
        <Link href="/#projects-section">
          <div className="transform m-1  hover:scale-125 duration-200 ease-in-out text-white px-2 rounded text-xl">
            Projects
          </div>
        </Link>
        <Link href="/#experience-section">
          <div className="transform m-1  hover:scale-125 duration-200 ease-in-out text-white px-2  rounded  text-xl">
            About
          </div>
        </Link>
        <div className="transform hover:scale-125 duration-200 ease-in-out px-2">
          <Github />
        </div>
        <div className="transform m-1 hover:scale-110 duration-200 ease-in-out text-white px-2  rounded  text-xl">
          <Email />
        </div>
        <div className="transform m-1 hover:scale-125 scale-110 duration-200 ease-in-out text-white px-2 rounded  text-xl">
          <CV />
        </div>
      </div>
    </>
  )
}
