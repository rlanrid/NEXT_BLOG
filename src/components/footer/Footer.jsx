import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer__wrap">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__sns">
                            <ul>
                                <li><Link href=''></Link></li>
                                <li><Link href=''></Link></li>
                                <li><Link href=''></Link></li>
                            </ul>
                        </div>
                        <div className="footer__menu">
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Blog</Link></li>
                                <li><Link href='/'>Community</Link></li>
                                <li><Link href='/'>Login</Link></li>
                                <li><Link href='/'>Sign In</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        @2024 WJ KIM. All right reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}
