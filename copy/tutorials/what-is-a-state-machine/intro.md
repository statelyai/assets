## What is a state machine?

State machines help us model how a process goes from state to state when an event occurs.

State machines are useful in software development because they help us capture all the states, events and transitions between them. Using state machines makes it easier to find impossible states and spot undesirable transitions.

State machines model your application logic. Below is the logic for a video player. When the video is Played, it is opened into fullscreen mode. When the video is stopped, it closes out of fullscreen mode. When the video player is in fullscreen mode, it can be _Playing_ or _Paused_.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](full-video-machine-2022-10-07.png)
