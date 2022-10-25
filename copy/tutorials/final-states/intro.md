## Final states

When a machine reaches the final state, it can no longer receive any events, and anything running inside it is canceled and cleaned up. The box with a surrounding border icon represents the final state.

A machine can have multiple final states or no final states.

In the video player below, *Stopped* is the final child state in the *Opened* state. When the video player is *Stopped*, the video player moves to its *Closed* state.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped, represented by an icon alongside the Stopped label of a square with a double border. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](final-state-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=c6f8ca35-25e3-4fc6-b4fe-c9994715852e).
