import TopBar from '@/components/molecules/TopBar';
import React from 'react';

interface ProblemPageProps {};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return (
        <>
        <TopBar isProblemPage={true} />
            <div>Have a good coding</div>
        </>
    )
}
export default ProblemPage;