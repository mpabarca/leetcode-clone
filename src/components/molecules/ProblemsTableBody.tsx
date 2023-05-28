import { problems } from '@/mockProblems/problems';
import Link from 'next/link';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';

interface ProblemsTableBodyProps {};

const ProblemsTableBody:React.FC<ProblemsTableBodyProps> = () => {
    
    return (
        <>
            {problems.map((problem, index) => {
                const isEasy = problem.difficulty === 'Easy';
                const isMedium = problem.difficulty === 'Medium';

                return (
                    <tr key={`row-table-id-${index}`} className={`${index % 2 == 1 ? "bg-dark-layer-1" : ""}`}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={'18'} width='18' className='block m-auto' />
                        </th>
                        <td className='px-6 py-4'>
                            <Link href={`/problems/${problem.id}`} className=' hover:text-dark-blue-s cursor-pointer'>
                                {`${index + 1}. ${problem.title}`}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${isEasy ? 'text-dark-green-s' : isMedium ? 'text-dark-yellow' : 'text-dark-pink'}`}>
                            {problem.difficulty}
                        </td>
                        <td className='px-6 py-4'>
                            {problem.category}
                        </td>
                        <td className='px-6 py-4'>
                            {problem.videoId ? (
                                <AiFillYoutube fontSize={'25'} width={'25'} className='cursor-pointer hover:text-red-600'/>
                            ) : (
                                <p className='text-dark-gray-6'>Coming Soon</p>
                            )}
                        </td>
                    </tr>
                )
            })}
        </>
    )
};

export default ProblemsTableBody;