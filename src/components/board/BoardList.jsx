'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function BoardList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 서버 데이터 요청
                const res = await fetch('/api/board');

                // 데이터 요청 오류
                if (!res.ok) {
                    throw new Error("데이터를 가져오지 못했습니다.")
                }

                // 요청한 데이터 저장
                let result = await res.json();

                // 내림차순으로 정렬
                result = result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                console.log(result)

                setData(result);

            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    return (
        <div className='list__inner'>
            {data.map((item) => (
                <div className="list" key={item.id}>
                    <div className="thumb">
                        <Link href='' className='img'>
                            <img src="" alt="게시글썸네일" />
                        </Link>
                        <div className="info">
                            <div className="profile">
                                <img src={item.User.image} alt="프로필사진" />
                            </div>
                            <div className="name">{item.User.name}</div>
                            <div className="view">{item.boardView}</div>
                            <div className="like"></div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title"><Link href={`boardView/${item.id}`}>{item.boardTitle}</Link></div>
                        <div className="date">{item.createAt}</div>
                        <div className="desc">{item.boardConts}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
