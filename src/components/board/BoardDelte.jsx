import React from 'react'

export default function BoardDelte({ id }) {
    const deletePost = async (postId) => {
        if (!confirm('정말로 삭제하시겠습니까?')) {
            return;
        }
        try {
            const res = await fetch(`/api/boardDelete/${postId}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("게시글 삭제가 실패")
            }

            alert('게시글이 삭제되었습니다.');
            window.location.href = "/board";
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button onClick={() => deletePost(id)}>삭제하기</button>
    )
}
