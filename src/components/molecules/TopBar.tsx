import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authModalState } from '@/recoil/authModalAtom';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logout from './Logout';

interface TopBarProps {};

const TopBar:React.FC<TopBarProps> = () => {
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

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					{!user &&
                        <a 
                            className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded border-2 border-transparent
                            hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
                            transition duration-300 ease-in-out' 
                            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickLogin(e)}
                        >
                            Sign In
                        </a>
					}
                    {user &&
                        <div className='cursor-pointer group relative'>
                            <Image src='/avatar.png' alt='Avatar' width={35} height={35} className='rounded-full' />
                            <div
                                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-dark-orange p-2 rounded shadow-lg 
                                z-40 group-hover:scale-100 scale-0 
                                transition-all duration-300 ease-in-out'
                            >
                                <p className='text-sm'>{user.email}</p>
                            </div>
                    </div>
					}
                    {user && <Logout />}
				</div>
			</div>
        </nav>
    )
}
export default TopBar;