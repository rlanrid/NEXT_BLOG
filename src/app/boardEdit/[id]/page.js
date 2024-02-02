import BoardEdit from '@/components/board/BoardEdit';
import React from 'react'

export default function page({ params }) {
    const { id } = params;

    console.log(id);

    return (
        <main>
            <div className='container'>
                <BoardEdit id={id} />
            </div>
        </main>
    )
}
