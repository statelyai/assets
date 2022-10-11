## Invoked actors

When you run a statechart, it becomes an actor: a running process that can receive messages, send messages and change its behavior based on the messages it receives, which can cause effects outside of the actor.

An invoked actor is an actor that can execute its own actions and communicate with the machine. These invoked actors are started in a state and stopped when the state is exited.

Invoked actors are often referred to as “invocations.” They are labeled on their invoking state with “Invoke /” followed by the actor’s source name and ID.

You can invoke multiple actors on a single state. Final states cannot have invoked actors.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](video-player-highlighting-invoked-actor-2022-10-07.png)

In the video player above, the *startVideo* actor is invoked when the video player is in the *Opened* state.