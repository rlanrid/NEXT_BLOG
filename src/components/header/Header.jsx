'use client'

import React from 'react'
import Theme from '../theme/Theme'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header>
            <div className="header__wrap">
                <div className="container">
                    <h1 className="logo"><Link href='/'>AMBITIOUS</Link></h1>
                    <nav className='header__nav show'>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/'>Blog</Link></li>
                            <li><Link href='/'>Community</Link></li>
                            {status === "authenticated" ? (
                                <>
                                    <li><span>{session.user.name}님 어서오세요.</span></li>
                                    <li><span onClick={signOut}>LogOut</span></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href='/login'>Login</Link></li>
                                    <li><Link href='/'>Sign In</Link></li>
                                </>
                            )}

                        </ul>
                    </nav>
                    <div className="header__mobile" id="navToggle" aria-controls="primary-menu" aria-expanded="false"
                        role="button">
                        <span></span>
                    </div>
                    <Theme />
                </div >
            </div >
        </header >
    )
}
