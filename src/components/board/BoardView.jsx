'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import BoardDelte from './BoardDelte';

export default function BoardView({ id }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data) {
                    return;
                }

                // 서버 데이터 요청
                const res = await fetch(`/api/boardView/${id}`);

                // 데이터 요청 오류 
                if (!res.ok) {
                    throw new Error("데이터를 가져오지 못했습니다.")
                }

                // 요청한 데이터 저장
                let result = await res.json();
                setData(result);

                console.log(data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [id])

    return (
        <main id='main'>
            {data &&
                <section className='.detail__container'>
                    <div className='.detail__board'>
                        <h2 className='.detail__title'>{data.boardTitle}</h2>
                        <div className='.detail__date'>(Icon) {data.createAt}</div>
                        <div className='.detail__image'>
                            <img src="https://images.unsplash.com/photo-1705838589878-07f4d7ec5ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D" alt="img" />
                        </div>
                        <div className='.detail__content'>
                            {data.boardConts}
                        </div>
                    </div>
                    <div className="board__btns">
                        <Link href={`/boardEdit/${id}`}>수정하기</Link>
                        <BoardDelte id={data.id} />
                        <Link href='/board'>목록보기</Link>
                    </div>
                </section>
            }
        </main>
    )
}
