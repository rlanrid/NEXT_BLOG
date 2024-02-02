import BoardView from '@/components/board/BoardView'
import React from 'react'

export default function page({ params }) {
    const { id } = params;

    console.log(id)

    return (
        <main>
            <div className='container'>
                <BoardView id={id} />
            </div>
        </main>
    )
}
