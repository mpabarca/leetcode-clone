import { initialFormState } from '@/common/initialStates';
import { Form } from '@/common/types';
import { authModalState } from '@/recoil/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';

interface LoginProps {};

const Login:React.FC<LoginProps> = () => {
    const [form, setForm] = useState<Form>(initialFormState);
    const obligatoryFieldsValidation = !form.email || !form.password;

    let authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();

    const handleClickResetPassword = () => {
        setAuthModalState({...authModal, type: 'forgotPassword'});
    };
    const handleClickSignUp = () => {
        setAuthModalState({...authModal, type: 'register'});
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(obligatoryFieldsValidation) return alert('Please fill all fields');
        try {
            const user = await signInWithEmailAndPassword(form.email, form.password);
            if(!user) return;
            router.push('/');
        } catch (error: any) {
            alert(error.message);
        } finally {
            console.log('done');
        }
    };

    useEffect(() => {
        // Add a different template or page to error messages
        if(error) alert(error.message);
    }, [error]);

    return(
        <form className='space-y-6 px-6 pb-5' onSubmit={handleRegisterSubmit}>
            <h3 className='text-xl font-medium text-white'>Sign in to LeetClone</h3>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Email
                </label>
                <input type='email' name='email' id='email' placeholder='name@company.com' onChange={handleChangeInput}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                />
            </div>
            <div>
                <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>
                    Your Password
                </label>
                <input type='password' name='password' id='password' placeholder='**********' onChange={handleChangeInput}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                />
            </div>
            <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5
                text-center bg-brand-orange hover:bg-brand-orange-s'
            >
                {loading ? 'Loading ...' : 'Log In'}
            </button>
            <button className='flex w-full justify-end' onClick={handleClickResetPassword}>
                <a href='#' className='text-sm block text-brand-orange hover:underline w-full text-right'>
                    Forgot Password?
                </a>
            </button>
            <div className='text-sm font-medium text-gray-500'>
                Not registered?
                <a href='#' className='text-blue-700 hover:underline pl-1' onClick={handleClickSignUp}>
                    Create account
                </a>
            </div>
        </form>
    )
}
export default Login;