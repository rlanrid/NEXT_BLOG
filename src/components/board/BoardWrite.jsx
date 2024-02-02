'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function BoardWrite() {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 서버(API)에 데이터 전송
        const res = await fetch('/api/boardWrite', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, contents })
        })

        // 서버에서 데이터 받기
        const result = await res.json();

        // 페이지 이동
        if (res.ok) {
            router.push('/board');
        } else {
            console.error('게시글 작성이 실패하였습니다.', result);
        }
    }

    return (
        <div className="board__write">
            <form>
                <fieldset>
                    <legend className="blind">게시글 작성하기</legend>
                    <div>
                        <label htmlFor="boardTitle">제목</label>
                        <input
                            type="text"
                            id="boardTitle"
                            name="boardTitle"
                            placeholder='제목'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="boardContents">내용</label>
                        <textarea
                            id="boardContents"
                            name="boardContents"
                            rows="40"
                            placeholder='내용'
                            value={contents}
                            onChange={(e) => setContents(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="board__btns">
                        <button type="submit" onClick={(e) => { handleSubmit(e) }}>저장하기</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
