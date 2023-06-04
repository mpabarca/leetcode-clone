import Image from 'next/image';
import React from 'react';

type UserIconProps = {
    email: string;
};

const UserIcon:React.FC<UserIconProps> = ({email}) => {
    
    return (
        <div className='cursor-pointer group relative'>
            <Image src='/avatar.png' alt='Avatar' width={35} height={35} className='rounded-full' />
            <div
                className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-dark-orange p-2 rounded shadow-lg 
                z-40 group-hover:scale-100 scale-0 
                transition-all duration-300 ease-in-out'
            >
                <p className='text-sm'>{email}</p>
            </div>
        </div>
    )
};
export default UserIcon;