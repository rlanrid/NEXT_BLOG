import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// 게시글 작성하기
export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) { // 사용자가 로그인하지 않았다면 오류 반환
        return new NextResponse(
            JSON.stringify({ message: "로그인이 필요합니다" }, { status: 401 })
        )
    }

    try {
        const body = await req.json();
        const board = await prisma.Board.create({
            data: {
                boardTitle: body.title,
                boardConts: body.contents,
                userEmail: session.user.email
            }
        });

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










// 글 작성하기
// export const POST = async (req) => {
//     const session = await getAuthSession()

//     if (!session) {
//         return new NextResponse(JSON.stringify({ message: "not Authenicated" }, { status: 401 }))
//     }

//     try {
//         const body = await req.json();
//         const blogPost = await prisma.BlogPost.create({
//             data: { ...body, userEmail: session.user.email },
//         })

//         return new NextResponse(JSON.stringify(blogPost, { status: 200 }))
//     } catch (err) {
//         console.log(err)
//         return new NextResponse(JSON.stringify({ message: "server err!" }, { status: 500 }))
//     }
// }