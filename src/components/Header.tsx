import Link from "next/link"
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center w-full md:2/3">
            <Link href={'/'} className="font-black text-[#f2705]">
                Rubikon
            </Link>
            <ul className="flex items-center ml-5">
                <Link href={'/auth'}>
                    <span className='cursor-pointer'>
                    <FaUserCircle />
                    </span>                
                </Link>
            </ul>
        </div>

        <ul></ul>
    </header>
  )
}

export default Header