/* eslint-disable @next/next/no-img-element */
import { authModalState } from '@/recoil/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () => {
    let authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const handleClickLogin = () => {
        setAuthModalState({...authModal, type: 'login' ,isOpen: true});
    };
    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <Link href='/' className='flex items-center justify-center h-20'>
                <img src='/logo.png' alt='LeetCode' className='h-full' />
            </Link>
            <div className='flex items-center'>
                <button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium border-2 border-transparent
                    hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
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