'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function BoardEdit({ id }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const router = useRouter()

    // 기존 게시글 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/boardView/${id}`);
                const data = await res.json();
                setTitle(data.boardTitle);
                setContents(data.boardConts);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/boardEdit`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, title, contents }),
            });

            if (!res.ok) {
                throw new Error("게시글 수정이 실패했습니다.");
            }

            // 페이지 이동
            if (res.ok) {
                alert('게시글이 성공적으로 수정되었습니다.');
                router.push('/board');
            } else {
                console.error('게시글 작성이 실패하였습니다.', result);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="board__write">
            <form onSubmit={handleSubmit}>
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
                            onChange={e => setTitle(e.target.value)}
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
                            onChange={e => setContents(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="board__btns">
                        <button type="submit">저장하기</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
