A machine moves from state to state through **transitions**. Transitions are caused by events; when an event happens, the machine transitions to the next state.

Transitions are “deterministic”; each combination of state and event always points to the same next state.

The arrows are transitions, and the rounded rectangles on the arrow’s lines are events. Each transition has a **source** state which comes before the transition, and a **target** state, which comes after the transition. The transition’s arrow starts from the source state and points to the target state.

[Screenshot of video player 2, with the events and transitions highlighted]

In the video player machine above, the events are *PLAY* and *PAUSE*. The *Play* event transitions from the *Paused* state to the *Playing* state. The *Pause* event transitions from the *Playing* state to the *Paused* state.