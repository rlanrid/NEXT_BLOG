'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Menu() {
    const { data: session, status } = useSession();

    return (
        <ul>
            {status === "authenticated" ? (
                <>
                    <li><span>{session.user.name}님 반갑습니다.</span></li>
                    <li><span onClick={signOut}>로그아웃</span></li>
                </>
            ) : (
                <>
                    <li><span><Link href='/login'>로그인</Link></span></li>
                    <li><span>회원가입</span></li>
                </>
            )
            }
            <li><span>블로그</span></li>
            <li><span>게시판</span></li>
        </ul >
    )
}
