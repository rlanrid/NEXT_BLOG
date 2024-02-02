'use client'

import Link from "next/link"

export default function Today() {
    return (
        <div className="today__inner">
            <div className="today">
                <Link href="/">
                    <img src="https://images.unsplash.com/photo-1705838589878-07f4d7ec5ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D" alt="이미지1" />
                </Link>
                <div className="text">
                    <div className="title">Breaking Into Advice from hello</div>
                    <div className="content">Lets get one thing out of the way</div>
                </div>
            </div>
        </div>
    )
}