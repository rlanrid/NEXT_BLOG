import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

    try {
        const board = await prisma.board.findMany();
        console.log(board)

        return new NextResponse(
            JSON.stringify(board, { status: 200 })
        )

    } catch (error) {
        console.log("게시글 작성 오류 발생 :", error);
        return new NextResponse(
            JSON.stringify({ message: "게시글 작성 중 오류가 발생 했습니다." }, { status: 500 })
        )
    }
}
