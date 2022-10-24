## Delayed transitions

**Delayed transitions** are transitions that only happen after a specified interval of time. If another event happens before the end of the timer, the transition doesn’t complete. Delayed transitions are handy if you need to build timeouts and intervals into your application logic.

Delayed transitions are labeled “after” and often referred to as “after” transitions.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](delayed-transition-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=5671366b-05cf-43f5-a09a-b88373ea27c1).

In a video player, we might want the video to be *Closed* out of fullscreen mode a few seconds after the video has *Stopped*, instead of closing the fullscreen mode suddenly as soon as the video is stopped. The eventless transition above transitions from the *Stopped* state to the *Closed* state after 5 seconds.
