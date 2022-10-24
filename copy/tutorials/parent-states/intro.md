## Parent states

States can contain more states, also known as **child states**. These child states are only active when the parent state is active.

Child states are nested inside their parent states.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](parent-states-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=9ba5377c-aab3-4465-8909-4eea499622fa).

In the video player above, the *Opened* state is a parent state to the *Playing*, *Paused*, and *Stopped* states. These states, their transitions, and their events are nested inside the *Opened* state.