import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchButton } from '../components/SearchButton';

import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';



export function Navbar () {
    const [extendNavbar, setExtendNavbar] = useState(false);

    function handleNavbar () {
        setExtendNavbar(!extendNavbar);
    }

    return (
        <div>
            <nav className="flex h-20 px-4 items-center justify-center bg-[#295159]">
                <ul className='hidden md:flex text-white'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                </ul>
            <>
                <SearchButton />
                <AiOutlineShoppingCart 
                className='flex w-8 h-8 py-2 px-2 mx-4 rounded text-right text-white gap-2 border border-transparent  hover:border-sky-600' 
                size={30}/>
            </>
                
            </nav>

            <div onClick ={ handleNavbar } className='md:hidden z-100'>
                { extendNavbar ? <AiOutlineClose size={30} /> : < HiMenu size={30} /> } 
            </div>
            <div 
            onClick={ handleNavbar } 
            className={ extendNavbar ? 
            'flex flex-col w-full absolute left-0 top-0 px-4 py-16' : 'absolute left-[-100%]'}
            >
                <nav>
                    <ul className='border-b'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Products</li>
                        <li>Shop</li>
                     </ul>
                </nav>
            </div>
        </div>

    );
}