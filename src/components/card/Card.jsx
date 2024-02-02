'use client'

import Link from 'next/link'
import React from 'react'

export default function Card({ item }) {
    return (
        <div className="list">
            <div className="thumb">
                <Link href={`detail/${item.slug}`} className='img'>
                    <img src="https://plus.unsplash.com/premium_photo-1683141098259-ca67143de65f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" alt="게시글썸네일" />
                </Link>
                <div className="info">
                    <div className="profile"></div>
                    <div className="name">{item.user.name}</div>
                    <div className="view"></div>
                    <div className="like"></div>
                </div>
            </div>
            <div className="content">
                <div className="title">{item.title}</div>
                <div className="date">{item.createdAt}</div>
                <div className="desc">{item.desc}</div>
            </div>
        </div>
    )
}
