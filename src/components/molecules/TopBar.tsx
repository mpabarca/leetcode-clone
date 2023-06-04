import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/recoil/authModalAtom';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logout from './Logout';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';

import { FiRefreshCcw } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import SignInIcon from '../atoms/SignInIcon';
import UserIcon from '../atoms/UserIcon';

interface TopBarProps {
    isProblemPage?: boolean;
};

const TopBar:React.FC<TopBarProps> = ({isProblemPage}) => {
    const [user] = useAuthState(auth);
    let authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const router = useRouter();

    const handleClickLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();        
        setAuthModalState({...authModal, type: 'login' ,isOpen: true});
        router.push('/auth');
    };

    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-brown text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between max-w-[1500px] mx-auto`}>
				<Link href='/' className='h-[30px] flex-1'>
					<Image src='/logo-full.png' alt='Logo' width={130} height={200} />
				</Link>

                {isProblemPage &&
                    <>
                        <FaChevronLeft />
                        <BsList />
                        <FaChevronRight />
                    </>
                }
				<div className='flex items-center space-x-4 flex-1 justify-end'>
					{!user && <SignInIcon handleClickLogin={handleClickLogin} />}   
                    {isProblemPage &&
                        <>
                            <FiRefreshCcw />
                            <MdTimer/>
                        </>
                    }
                    {user && user!.email && <UserIcon email={user.email} />}
                    {user && <Logout />}
				</div>
			</div>
        </nav>
    )
}
export default TopBar;