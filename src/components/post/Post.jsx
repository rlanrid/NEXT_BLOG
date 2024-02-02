import Link from 'next/link'
import React from 'react'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'

// const getData = async (page, category) => {
//     const res = await fetch(`http://localhost:3000/api/post?page=${page}&category=${category || ''}`, {
//         cache: "no-store"
//     })

//     if (!res.ok) {
//         throw new Error("실패")
//     }

//     return res.json()
// }

export default async function Post({ page, category }) {
    // const { posts, count } = await getData(page, category);
    // const postView = 2;

    // console.log(posts)

    return (
        <>
            <div className="list__inner">
                {/* {posts.map((item) => (
                    <Card item={item} key={item.id} />
                ))} */}
            </div>
            {/* <Pagination page={page} count={count} postView={postView} /> */}
        </>
    )
}
