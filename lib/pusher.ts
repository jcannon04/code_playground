import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    appId: "1677536",
    key: "f2e9097c92705d394593",
    secret: "b18814e8f0a3a3c46b18",
    cluster: "us2",
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