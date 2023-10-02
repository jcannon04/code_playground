import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    appId: process.env.NEXT_APPID,
    key: process.env.NEXT_KEY,
    secret: process.env.NEXT_SECRET,
    cluster: process.env.NEXT_CLUSTER,
    useTLS: true
});


/**
 * The following pusher client uses auth, not neccessary for the video chatroom example
 * Only the cluster would be important for that
 * These values can be found after creating a pusher app under
 * @see https://dashboard.pusher.com/apps/1677536/keys
 */

export const pusherClient = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
    cluster: 'us2'
 
})