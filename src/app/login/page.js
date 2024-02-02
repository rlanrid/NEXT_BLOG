'use client'

import React, { useEffect } from 'react'
import styles from './page.module.scss'
import Menu from '@/components/menu/Menu'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function page() {
    const { data, status } = useSession();
    const router = useRouter();

    // console.log(data, status)

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [data, status])

    if (status === "loading") {
        return <div className='loading'>로딩중입니다.</div>
    }

    return (
        <main id='main'>
            <div className={styles.login__wrap}>
                <div className={styles.login__header}>
                    <h3>login</h3>
                    <p>로그인</p>
                    <Menu />
                </div>
                <form className={styles.login__form}>
                    <fieldset>
                        <legend className="blind">로그인 영역</legend>
                        <div>
                            <label htmlFor="youEmail" className="required blind">이메일</label>
                            <input
                                type="email"
                                id="youEmail"
                                name="youEmail"
                                placeholder="이메일"
                                className="input__style"
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="youPass" className="required blind">비밀번호</label>
                            <input
                                type="password"
                                id="youPass"
                                name="youPass"
                                placeholder="비밀번호"
                                className="input__style"
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div>
                        </div>
                        <button type="submit" className="btn__style2 mt30">로그인</button>
                    </fieldset>
                </form>
                <div className={styles.sns__form}>
                    <div className={styles.google} onClick={() => { signIn("google") }}><span className='ir'>google</span></div>
                    <div className={styles.github} onClick={() => { signIn("github") }}><span className='ir'>github</span></div>
                    <div className={styles.kakao} onClick={() => { signIn("kakao") }}><span className='ir'>kakao</span></div>
                    <div className={styles.naver} onClick={() => { signIn("naver") }}><span className='ir'>naver</span></div>
                </div>
            </div>
        </main>
    )
}
