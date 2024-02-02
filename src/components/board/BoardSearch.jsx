import Link from 'next/link'
import React from 'react'

export default function BoardSearch() {
    return (
        <div className="board__search">
            <form>
                <fieldset>
                    <legend className="blind">게시판 검색 영역</legend>
                    <div>
                        <label className='blind' htmlFor="searchKeyword">검색</label>
                        <input
                            type="search"
                            name="searchKeyword"
                            id="searchKeyword"
                            placeholder="검색어를 입력하세요!"
                        />
                    </div>
                    <div>
                        <select
                            name="searchOption"
                            id="searchOption" >
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                            <option value="name">등록자</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">검색</button>
                        <Link href="/boardWrite">글쓰기</Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
