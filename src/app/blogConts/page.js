'use client'

import React, { useEffect, useState } from 'react'

export default function blogConts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/board", {
                    cache: "no-store"
                })

                if (!res.ok) {
                    throw new Error("실패")
                }

                let data = await res.json();

                data = data.sort((a, b) => new Date(b.createdAt) - new DataTransfer(a.createdAt));

                setData(data);

            } catch (error) {
                console.log(err)
            }
        }
    })

    return (
        <div>
            <ul>
                {data.map((item, index) => {
                    <li key={index}>
                        <div className="num">{index + 1}</div>
                        <div className="title"><Link href={`boardView/${item.id}`}>{item.boardTitle}</Link></div>
                        <div className="cont">{item.boardConts}</div>
                        <div className="creatAt">{item.createAt.substring(0, 10)}</div>
                        <div className="creatAt">{item.boardView}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}
