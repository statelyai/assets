## Invoked actors

When you run a statechart, it becomes an actor; a running process that can receive messages, send messages and change its behavior based on the messages it receives, which can cause effects outside of the actor.

An invoked actor is an actor that can execute its own actions and communicate with the machine. These invoked actors are started in a state and stopped when the state is exited.

Invoked actors are often referred to as “invocations.” They are labeled on their invoking state with “Invoke /” followed by the actor’s source name and ID.

You can invoke multiple actors on a single state. Final states cannot have invoked actors.

[Screenshot of video player 1, with invoked actor highlighted]

In the video player above, the *startVideo* actor is invoked when the video player is in the *Opened* state.