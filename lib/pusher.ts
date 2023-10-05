import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
  appId: process.env.NEXT_PUBLIC_app_id!,
  key: process.env.NEXT_PUBLIC_key!,
  secret: process.env.NEXT_PUBLIC_secret!,
  cluster: process.env.NEXT_PUBLIC_cluster,
  useTLS: true,
})

/**
 * The following pusher client uses auth, not neccessary for the video chatroom example
 * Only the cluster would be important for that
 * These values can be found after creating a pusher app under
 * @see https://dashboard.pusher.com/apps/<YOUR_APP_ID>/keys
 */

export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_app_id!, {
  cluster: process.env.NEXT_PUBLIC_cluster,
  // authEndpoint: '/api/pusher-auth',
  // authTransport: 'ajax',
  // auth: {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // },
})