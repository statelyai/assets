A **state done event** transitions from a parent state when one of its child states reaches its final state. State done events are labeled “onDone.”

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s an onDone event from the parent Opened state back to the Closed state.](video-playing-highlighting-ondone-2022-10-07.png)

In the video player above, when the video player reaches the *Stopped* state, the *Opened* state transitions through the *onDone* state done event to the *Closed* state.
