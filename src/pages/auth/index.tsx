/* eslint-disable @next/next/no-img-element */
import Navbar from '@/components/molecules/Navbar';
import AuthModal from '@/components/organisms/AuthModal';
import { authModalState } from '@/recoil/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';

type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
    const [pageLoading, setPageLoading] = useState<boolean>(true);
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if(user) router.push('/');
        if(!user && !loading) setPageLoading(false);
    }, [user, router, loading]);

    if(pageLoading) return null;

    return(
        <div className='bg-hero-pattern from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <div className='flex flex-col justify-center h-[calc(100vh-5rem)] sm:px-12 px-2 md:px-24 py-5 pointer-events-none select-none'>
                    <h1 className='text-white text-center text-[6rem] font-bold tracking-wide'>
                        A New Way to Learn
                    </h1>
                </div>
                {authModal.isOpen && <AuthModal />}
            </div>
        </div>
    )
}
export default AuthPage;