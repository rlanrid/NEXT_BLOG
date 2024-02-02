import React from 'react'
import styles from './page.module.scss'
import Comments from '@/components/comments/Comments'

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json()
}

export default async function page({ params }) {
    const { slug } = params;

    const data = await getData(slug);

    return (
        <main id='main'>
            <section className={styles.detail__container}>
                <div className={styles.detail__board}>
                    <h2 className={styles.detail__title}>{data.title}</h2>
                    <div className={styles.detail__date}>(Icon) {data.createdAt}</div>
                    <div className={styles.detail__image}>
                        <img src="https://images.unsplash.com/photo-1705838589878-07f4d7ec5ea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D" alt="img" />
                    </div>
                    <div className={styles.detail__content}>
                        {data.desc}
                    </div>
                </div>
                <Comments slug={slug} />
                {/* <div className={styles.comment__list}>
                    <div className={styles.comment}>
                        <div className={styles.user}>                            <div className="profile"></div>
                            <div className={styles.info}>
                                <p className={styles.name}>테스트</p>
                                <p className={styles.date}>2024년 1월 19일</p>
                            </div>
                        </div>
                        <div className={styles.cont}>
                            멋진 글입니다.
                        </div>
                    </div>
                </div> */}
            </section>
        </main>
    )
}