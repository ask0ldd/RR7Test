import { Link } from "react-router";

export default function Header(){
    return(
        <header className="flex w-full h-[82px] border-b-1 text-[#004746] font-medium border-[#F0F4F7] justify-center items-center font-poppins">
            <div className="flex w-full max-w-[1280px] mx-auto justify-between items-center">
                <span className="text-[24px] font-semibold">ForginSquad</span>
                <nav className="flex">
                    <ul className="flex flex-row w-full gap-x-[30px]">
                        <li><Link className="flex w-full" to="/">About</Link></li>
                        <li>Blog</li>
                        <li>Changelog</li>
                        <li><Link className="flex w-full" to="/contact">Contact</Link></li>
                        <li>Coming soon</li>
                    </ul>
                </nav>
                <button className="flex justify-center items-center px-[50px] h-[50px] border-1 border-[#004746] rounded-full hover:bg-[#004746] hover:cursor-pointer hover:text-[#FFFFFF]">Get Started</button>
            </div>
        </header>
    )
}