import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 모든 게시글 가져오기
export const GET = async () => {
    try {
        const board = await prisma.board.findMany({
            include: {
                User: true
            }
        });

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )


    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: '게시글을 불러오는 도중 오류가 발생했습니다.' }, { status: 200 })
        )
    }
}