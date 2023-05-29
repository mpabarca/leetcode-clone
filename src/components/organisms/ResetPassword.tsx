/* eslint-disable react/no-unescaped-entities */
import { auth } from '@/firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

interface ResetPasswordProps {};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleResetPassword = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!email) return toast.error('Please fill the email field', {position: 'top-center', autoClose: 3000});
        try {
            const itSentResetEmail = await sendPasswordResetEmail(email);
            if(!itSentResetEmail) return;
            else {
                toast.success('Password reset email was send', {position: 'top-center', autoClose: 3000});
            }
        } catch (error: any) {
            console.error(error.message);
        } finally {
            console.log('done');
        }
    };

    useEffect(() => {
        if(error) toast.error(error.message, {position: 'top-center', autoClose: 3000});
    }, [error])

    return(
        <form className='space-y-6 px-6 pb-6' onSubmit={handleResetPassword}>
            <h3 className='text-xl font-medium text-black'>Reset Password</h3>
            <p className='text-white text-sm'>
                Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.
            </p>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-black'>
                    Your Email
                </label>
                <input type='email' name='email' id='email' onChange={handleChangeInput}
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                />
            </div>
            <button 
                type='submit' 
                className='w-full text-white focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5
                text-center bg-dark-orange hover:bg-brand-orange-s'
            >
                Reset Password
            </button>
        </form>
    )
}
export default ResetPassword;