import Category from '@/components/category/Category'
import Menu from '@/components/menu/Menu'
import Post from '@/components/post/Post'
import Today from '@/components/today/Today'
import React from 'react'

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page || 1);
  const { category } = searchParams;

  return (
    <main id='main'>
      <section className='main__header'>
        <Today />
        <h2>메뉴</h2>
        <Menu />
      </section>
      <section className='main__contents'>
        <Category />
        <Post page={page} category={category} />
      </section>
    </main>
  )
}
