"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Pagination({ page, count, postView }) {
    const router = useRouter();
    const totalPages = Math.ceil(count / postView);

    const changePage = (newPage) => {
        router.push(`?page=${newPage}`);
    }

    return (
        <div className='blog__page'>
            <ul>
                {page > 1 && (
                    <li onClick={() => changePage(page - 1)}>&lt;</li>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <li
                        key={pageNum}
                        className={pageNum === page ? 'active' : ''}
                        onClick={() => changePage(pageNum)}
                    >
                        {pageNum}
                    </li>
                ))}

                {page < totalPages && (
                    <li onClick={() => changePage(page + 1)}>&gt;</li>
                )}
            </ul>
        </div>
    )
}