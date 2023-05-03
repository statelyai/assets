## Invoked actors

When you run a statechart, it becomes an actor: a running process that can receive messages, send messages and change its behavior based on the messages it receives, which can cause effects outside of the actor.

An invoked actor is an actor that can execute its own actions and communicate with the machine. These invoked actors are started in a state and stopped when the state is exited.

Invoked actors are are labeled on their invoking state with “Invoke /” followed by the actor’s source name and ID.

You can invoke multiple actors on a single state. Top-level final states cannot have invoked actors.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](invoked-actors-2022-10-24-small.png)

[View this machine in Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=66f77051-089e-4b0a-9fa9-42e1f7598135).

In the video player above, the *startVideo* actor is invoked when the video player is in the *Opened* state.
