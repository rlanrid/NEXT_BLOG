import BoardList from '@/components/board/BoardList'
import BoardPage from '@/components/board/BoardPage'
import BoardSearch from '@/components/board/BoardSearch'
import React from 'react'

export default function page() {
    return (
        <main>
            <div className='container'>
                <BoardSearch />
                <BoardList />
                <BoardPage />
            </div>
        </main>
    )
}
