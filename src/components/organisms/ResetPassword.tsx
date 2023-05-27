/* eslint-disable react/no-unescaped-entities */
import React from 'react';

interface ResetPasswordProps {};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return(
        <form className='space-y-6 px-6 pb-6'>
            <h3 className='text-xl font-medium text-black'>Reset Password</h3>
            <p className='text-white text-sm'>
                Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.
            </p>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-black'>
                    Your Email
                </label>
                <input type='email' name='email' id='email'
                    className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                    placeholder='name@company.com'
                />
            </div>
            <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5
                text-center bg-brand-orange hover:bg-brand-orange-s'
            >
                Reset Password
            </button>
        </form>
    )
}
export default ResetPassword;