import { Form } from '@/common/types';
import { authModalState } from '@/recoil/authModalAtom';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';
import { initialFormState } from '@/common/initialStates';
import { toast } from 'react-toastify';

interface SignupProps {};

const Signup:React.FC<SignupProps> = () => {
    const [form, setForm] = useState<Form>({...initialFormState, displayName: ''});
    const obligatoryFieldsValidation = !form.email || !form.password || !form.displayName;

    let authModal = useRecoilValue(authModalState);
    const setAuthModalState = useSetRecoilState(authModalState);

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const router = useRouter();

    const handleClickLogin = () => {
        setAuthModalState({...authModal, type: 'login'});
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //Add another type of validation error - maybe Yup
        if(obligatoryFieldsValidation) return toast.error('Please fill all fields', {position: 'top-center', autoClose: 3000});
        try {
            // put loading and use one from firebase
            const newUser = await createUserWithEmailAndPassword(form.email, form.password);
            if(!newUser) return;
            router.push('/');
        } catch(error: any) {
            console.error(error.message);
        } finally {

        }
    };

    useEffect(() => {
        if(error) toast.error(error.message, {position: 'top-center', autoClose: 3000});
    }, [error]);

    return(
        <form className='space-y-6 px-6 pb-5' onSubmit={handleRegisterSubmit}>
            <h3 className='text-xl font-medium text-white'>Sign up to LeetClone</h3>
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
                <label htmlFor='displayName' className='text-sm font-medium block mb-2 text-gray-300'>
                    Display Name
                </label>
                <input type='displayName' name='displayName' id='displayName'placeholder='John Doe' onChange={handleChangeInput}
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
                text-center bg-dark-orange hover:bg-brand-orange-s'
            >
                {loading ? 'Loading ...' : 'Register'}
            </button>
            <div className='text-sm font-medium text-white'>
                Already have an account?
                <a href='#' className='text-brand-orange hover:underline pl-1' onClick={handleClickLogin}>
                    Log In
                </a>
            </div>
        </form>
    )
}
export default Signup;