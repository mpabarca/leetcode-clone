/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

interface TopBarProps {};

const TopBar:React.FC<TopBarProps> = () => {
    
    return (
        <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
				<Link href='/' className='h-[22px] flex-1'>
					<img src='/logo-full.png' alt='Logo' className='h-full' />
				</Link>

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<Link href='/auth'>
						<button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>
                            Sign In
                        </button>
					</Link>
				</div>
			</div>
        </nav>
    )
}
export default TopBar;