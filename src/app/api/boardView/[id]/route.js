import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 게시글 가져오기(상세페이지)
export const GET = async (req, { params }) => {
    const { id } = params;

    console.log(id);

    try {
        const board = await prisma.board.findUnique({
            where: { id },
            include: { User: true }
        });

        const updatedBoard = await prisma.board.update({
            where: { id },
            data: { boardView: board.boardView + 1 },
            include: { User: true }
        })

        console.log(updatedBoard);

        return new NextResponse(
            JSON.stringify(updatedBoard, { status: 200 })
        )

    } catch (err) {
        console.log(err);

        return new NextResponse(
            JSON.stringify({ message: "글 가져오기 실패" }, { status: 500 })
        )
    }
}