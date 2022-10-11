## Descriptions

You can add descriptions to state and event nodes to describe their purpose and share related notes with your team. Descriptions support markdown formatting, including links and images.

The machine object will include your descriptions in the state or event's `description` when you export your statecharts to JSON.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](video-player-highlighting-delayed-transition-2022-10-07.png)

In the video player above, the text “The video player should be in full-screen mode” is a description of the *Opened* event.
