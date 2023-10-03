
import { pusherServer } from '@/lib/pusher'

export async function POST(req: Request) {
  const { text, projectId } = await req.json()
  pusherServer.trigger(projectId, 'incoming-message', text)
  return new Response(JSON.stringify({ success: true }))
}