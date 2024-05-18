"use client"
import react, { useState } from 'react'
import { IoIosMenu, IoMdClose  } from "react-icons/io";
const Navbar = () => {
    const[nav,setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
            <h1 className='w-full text-3xl font-bold text-blue-500'>FUNCTION</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resource</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <IoMdClose size={30}/> : <IoIosMenu size={30}/> }
                {/* <IoIosMenu size={30}/> */}
                {/* <IoMdClose />  */}
            </div>
            <div className={!nav ? 'fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-blue-300 m-8'>FUNCTION</h1>
                <ul className='pt-24 uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resource</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
