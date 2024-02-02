import prisma from '@/utils/connect'
import Link from 'next/link'
import React from 'react'

// const getData = async () => {
//     const res = await fetch("http://localhost:3000/api/category", {
//         cache: "no-store"
//     })

//     if (!res.ok) {
//         throw new Error("실패")
//     }

//     return res.json()
// }

export default async function Category() {
    // const data = await getData();

    return (
        <section className='blog__category'>
            {/* <ul>
                <li><Link href='/'>all</Link></li>
                {data.map((item) => (
                    <li key={item.id}><Link href={`?category=${item.slug}`}>{item.title}</Link></li>
                ))}
            </ul> */}
        </section>
    )
}
