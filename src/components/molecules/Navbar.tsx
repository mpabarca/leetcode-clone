/* eslint-disable @next/next/no-img-element */
import { authModalState } from '@/recoil/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

interface NavbarProps {};

const Navbar:React.FC<NavbarProps> = () => {
    let authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClickLogin = () => {
        setAuthModalState({...authModal, type: 'login' ,isOpen: true});
    };
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24 py-5'>
            <Link href='/' className='flex items-center justify-center h-[30px]'>
                <img src='/logo-full.png' alt='Logo' className='h-full' />
            </Link>
            <div className='flex items-center'>
                <button className='bg-dark-orange text-white px-2 py-1 sm:px-4 rounded-md text-m font-medium border-2 border-transparent
                    hover:text-dark-orange hover:bg-white hover:border-2 hover:border-dark-orange
                    transition duration-300 ease-in-out'
                    onClick={handleClickLogin}
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}
export default Navbar;