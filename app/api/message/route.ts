import { pusherServer } from '@/lib/pusher'
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    const { text } = await req.json()

    let trigger = pusherServer.trigger("my-channel", 'incoming-message', text)

    return NextResponse.json(text);
}