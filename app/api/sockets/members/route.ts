import { pusherServer } from '@/lib/pusher'
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { username, message } = await req.json()
    pusherServer.trigger(`presence-members-online`, `online`, "hello")
    return NextResponse.json(username);
}