import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

// 블로그 글 한개 가져오기
export const GET = async (req, { params }) => {
    const { slug } = params;

    try {
        const post = await prisma.BlogPost.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        });

        return new NextResponse(
            JSON.stringify(post, { status: 200 })
        )
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "wrong" }, { status: 500 })
        )
    }
}