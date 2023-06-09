import React, { useState } from 'react';
import ProblemsTableBody from '../molecules/ProblemsTableBody';

interface TableProps {};

const Table:React.FC<TableProps> = () => {
    const [loadingProblems, setLoadingProblems] = useState(false);

    return (
        <>
            <h1 className='text-2xl text-center text-white dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
                Problems 💻
            </h1>
            <div className='relative overflow-x-auto mx-auto mt-5 px-6 pb-10'>
                <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-10/12 w-full max-w-[1500px] mx-auto'>
                    {!loadingProblems && (
                        <thead className='text-s text-white uppercase dark:text-gray-400 border-b'>
                            <tr>
                                <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                    Status
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Title
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Difficulty
                                </th>

                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Category
                                </th>
                                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                    Solution
                                </th>
                            </tr>
                        </thead>
                    )}
                    <tbody className='text-white'>
                        <ProblemsTableBody />
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Table;