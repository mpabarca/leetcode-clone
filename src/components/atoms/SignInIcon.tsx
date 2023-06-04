import React from 'react';

type SignInIconProps = {
    handleClickLogin: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const SignInIcon:React.FC<SignInIconProps> = ({handleClickLogin}) => {
    
    return (
        <a 
            className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded border-2 border-transparent
            hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange
            transition duration-300 ease-in-out' 
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClickLogin(e)}
        >
            Sign In
        </a>
    )
}
export default SignInIcon;