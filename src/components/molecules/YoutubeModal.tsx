import React from 'react';
import { IoClose } from 'react-icons/io5';
import YouTube from "react-youtube";

interface YoutubeModalProps {
    videoId: string;
    handleCloseModal: (e: React.MouseEvent<SVGElement, MouseEvent>) => void
};

const YoutubeModal:React.FC<YoutubeModalProps> = ({videoId, handleCloseModal}) => {

    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
            <div
                className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
                ></div> 
            <div className='w-full z-50 h-full px-6 relative max-w-4xl'>
                <div className='w-full h-full flex items-center justify-center relative'>
                    <div className='w-full relative'>
                        <IoClose
                            fontSize={"35"}
                            className='cursor-pointer absolute -top-16 right-0 text-dark-gray-6'
                            onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => handleCloseModal(e)}
                        />
                        <YouTube
                            videoId={videoId}
                            loading='lazy'
                            iframeClassName='w-full min-h-[500px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YoutubeModal;