'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function page() {
  const [title, setTitle] = useState("");
  const [cateSlug, setCateSlug] = useState("");
  const [file, setFile] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch('/api/blogWrite', {
      method: "POST",
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ title, contents }),
    })


    const result = await response.json();
    console.log(result);

    if (response.ok) {
      router.push('/board');
    } else {
      console.error('게시글 작성이 실패하였습니다.', result);
    }
  }

  return (
    <main>
      <div className='blog__write container'>
        <input type='text' placeholder='제목' onChange={(e) => setTitle(e.target.value)} />
        <select onChange={(e) => setCateSlug(e.target.value)}>
          <option value="javascript">javascript</option>
          <option value="jquery">jquery</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="react">react</option>
          <option value="vue">vue</option>
          <option value="next">next</option>
        </select>
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <ReactQuill
          value={contents}
          onChange={setContents}
          placeholder='글을 작성해 주세요!'
        />
        <button onClick={(e) => { handleSubmit(e) }}>
          저장하기
        </button>
      </div>
    </main>
  )
}
