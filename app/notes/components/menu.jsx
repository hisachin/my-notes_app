import Link from 'next/link';
import { RiHome2Line, RiDeleteBinLine, RiLoginBoxLine } from 'react-icons/ri';
import { MdOutlineDriveFileMove } from "react-icons/md";

const Menu = () => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="bg-gray-200 p-2">
                <ul className="flex flex-col gap-2 justify-between p-2 text-black text-sm">
                    <Link href="/" className="flex items-center p-2 bg-slate-50 rounded-lg cursor-pointer shadow-sm hover:bg-slate-200 ">
                        <RiHome2Line size={20} />
                        <span className="ml-2">Home</span>
                    </Link>
                    <Link href="/notes" className="flex items-center p-2  bg-slate-50 rounded-lg cursor-pointer shadow-sm hover:bg-slate-200 ">
                        <MdOutlineDriveFileMove size={20} />
                        <span className="ml-2">Notes</span>
                    </Link>
                    <Link href="/" className="flex items-center p-2 bg-slate-50 rounded-lg cursor-pointer shadow-sm hover:bg-slate-200 ">
                        <RiDeleteBinLine size={20} />
                        <span className="ml-2">Recetly Deleted</span>
                    </Link>
                </ul>
            </nav>

            <nav className="bg-slate-300 p-4 mt-auto">
                <ul className="flex flex-col gap-2 justify-between p-1 text-black text-sm">
                    <Link href="/" className="flex items-center p-2 bg-slate-50 rounded-lg cursor-pointer shadow-sm hover:bg-slate-200 ">
                        <RiLoginBoxLine size={20} />
                        <span className="ml-2">Sign In</span>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
