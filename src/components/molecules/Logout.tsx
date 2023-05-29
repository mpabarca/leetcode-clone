import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';

type LogoutProps = {};

const Logout:React.FC<LogoutProps> = () => {
    const [signOut, loading, error] = useSignOut(auth);

    const handleLogout = () => {
        signOut();
    };

    return (
        <button
            className='bg-dark-fill-3 text-dark-orange py-1.5 px-3 rounded hover:bg-dark-orange hover:text-white cursor-pointer'
            onClick={handleLogout}
        >
			<FiLogOut />
		</button>
    )
}
export default Logout;