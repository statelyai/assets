## Stately Studio tutorials

The Stately Studio supports everything you need to build state machines and statecharts visually. We hope you find the following tutorials help you learn more about the statecharts concepts and using the Stately Studio. 

If you have further questions or want to discuss modeling with other statecharts fans, [join our Discord community](https://discord.gg/xstate) or [chat with us live in our next office hours](https://youtube.com/c/statelyai).

## What is a state machine?

State machines help us model how a process goes from state to state when an event occurs.

State machines are useful in software development because they help us capture all the states, events and transitions between them. Using state machines makes it easier to find impossible states and spot undesirable transitions.

State machines model your application logic. Below is the logic for a video player. When the video is Played, it is opened into fullscreen mode. When the video is stopped, it closes out of fullscreen mode. When the video player is in fullscreen mode, it can be _Playing_ or _Paused_.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](what-is-a-state-machine-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=dbcfca1c-075d-4cd6-a865-efcbd7be1544).



[Read more about state machines in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/)

### What is a statechart?

Statecharts are fancy state machines used to model more complex logic.

Statecharts are a visual extension to state machines that use boxes and arrows, much like flowcharts and sequence diagrams. Statecharts add extra features not available in ordinary state machines, including hierarchy (parent states), concurrency (parallel states) and communication (actors).

When you make a state machine in the Stately Studio, it’s also a statechart!


[Read more about statecharts in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/)

## States

A state describes the machine’s status or mode, which could be as simple as *Paused* and *Playing*. A state machine can only be in one state at a time.

![Video player state machine with an initial Paused state and a Playing state.](states-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=741f69fd-7f01-4932-9407-6871e225bb6d).

The rounded rectangle boxes are states. These states are “finite”; the machine can only move through the states you’ve pre-defined.


### How to create a state

1. Select your machine or an existing state.
2. Create a new state inside your machine or existing state:
    - Use the **+ State** button that appears above the selected state, or:
    - Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.
    - Double-click inside your machine or an existing state.


[Read more about states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#states)

## Initial state

When a state machine starts, it enters the **initial state** first. A machine can only have one top-level initial state; if there were multiple initial states, the machine wouldn’t know where to start!

The filled circle with an arrow icon represents the initial state.

In our video player, paused is the initial state because the video player is paused by default and requires user interaction to start playing.

![State machine with an initial state of Paused, transitioning through a Play event to the Playing state. From the Playing state back to the Paused state is a Pause event.](initial-state-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=3ebc8874-2294-480b-a06e-74845337cd8d).

### How to change the initial state

Each new machine or parent state will set the first new state as its initial state by default.

#### Using the **quick actions** menu:
1. Select the state you wish to make the new initial state.
2. Right-click the state to bring up the **quick actions** menu.
3. Choose **Mark as initial state** from the **quick actions** menu.

#### Using the **State details** panel:
1. Select the parent state or parent machine.
2. Open the **State details** panel from the right tool menu.
3. Choose the desired initial state from the Initial state dropdown menu.


[Read more about initial states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#initial-state)

## Events & transitions

A machine moves from state to state through **transitions**. Transitions are caused by events; when an event happens, the machine transitions to the next state.

Transitions are “deterministic”; each combination of state and event always points to the same next state.

The arrows are transitions, and the rounded rectangles on the arrow’s lines are events. Each transition has a **source** state which comes before the transition, and a **target** state, which comes after the transition. The transition’s arrow starts from the source state and points to the target state.

![A video player state machine with an initial Paused State and a Playing state. The Play event transitions from Paused to Playing. The Pause event transitions from Playing to Paused.](transitions-and-events-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=9630e3b7-9f8e-4dc9-8b55-661f854d28b7).

In the video player machine above, the events are *PLAY* and *PAUSE*. The *Play* event transitions from the *Paused* state to the *Playing* state. The *Pause* event transitions from the *Playing* state to the *Paused* state.


### How to add a transition and event

1. Select an existing state.
2. Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.

### How to change the source and target states for a transition or event

First select the transition or event you want to change. Then…

#### Using the **Transition details** panel

1. Select the transition or event you wish to change.
2. Open the **Transition details** panel from the right tool menu.
3. Choose a new source state from the **Source** dropdown options.
4. Choose a new target state from the **Target** dropdown options.

#### Dragging the transition handles

1. Select the transition or event you want to change.
2. Drag the transition’s handle connected to the source state to connect it to a new source state.
3. Drag the transition’s handle connected to the target state to connect it to a new target state.

### How to switch the source and target states for a transition or event

1. Select the transition or event.
2. Right-click the state to bring up the **quick actions** menu.
3. Choose **Switch source and target** from the **quick actions** menu.


[Read more about states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#transitions-and-events)

## Parent states

States can contain more states, also known as **child states**. These child states are only active when the parent state is active.

Child states are nested inside their parent states.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](parent-states-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=9ba5377c-aab3-4465-8909-4eea499622fa).

In the video player above, the *Opened* state is a parent state to the *Playing*, *Paused*, and *Stopped* states. These states, their transitions, and their events are nested inside the *Opened* state.

### How to add a child state

First, select your machine or an existing state where you want to create the child state. Then…

- Use the **+ State** button that appears above the selected state to create a nested child state. Or…
- If a state already contains child states, you can double-click inside the parent state to create another child state.

### How to change the parent state of a child state

Using the **State details** panel:

1. Select the child state you want to reparent.
2. Open the **State details** panel from the right tool menu.
3. Choose your desired new parent from the **Parent** dropdown menu.

[Read more about parent and child states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#compound-states)

## Parallel states

A parallel state is a parent state separated into multiple regions of child states, where each region is active simultaneously.

A dashed line borders each region.

![A state machine containing two region states with dashed borders around the outside. The first region is the video state which is active at the same time as the audio state, and contains a playing and stopped state, with stop and play events. The other region is an audio state, which is active at the same time as the video state, and has muted and unmuted states, and unmute and mute events.](parallel-states-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=733de338-26cb-40a5-a0b5-b76bfc0405c3).

In the video player machine above, the video and audio states are active at the same time, which means the following combinations of states can happen simultaneously:

- video playing, audio muted
- video playing, audio unmuted
- video stopped, audio muted
- video stopped, audio unmuted


### How to make a state a parallel state

First, select the parent state you want to set as a parallel state. Then…

#### Using the **quick actions** menu:

1. Right-click the state to bring up the **quick actions** menu.
2. Choose **Parallel** from the **Type** options.

#### Using the **State details** panel:

1. Select the parent state you want to set as the parallel state.
2. Open the **State details** panel from the right tool menu.
3. Choose **Parallel** from the **Type** dropdown menu.


[Read more about parallel states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#compound-states)

## Final states

When a machine reaches the final state, it can no longer receive any events, and anything running inside it is canceled and cleaned up. The box with a surrounding border icon represents the final state.

A machine can have multiple final states or no final states.

In the video player below, *Stopped* is the final child state in the *Opened* state. When the video player is *Stopped*, the video player moves to its *Closed* state.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped, represented by an icon alongside the Stopped label of a square with a double border. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](final-state-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=c6f8ca35-25e3-4fc6-b4fe-c9994715852e).


### How to make a state a final state

First, select the state you want to set as the final state.

#### Using the **quick actions** menu

1. Right-click the state to bring up the **quick actions** menu.
2. Choose **Final** from the **Type** options.

#### Using the **State details** panel

1. Select the state you want to set as the final state.
2. Open the **State details** panel from the right tool menu.
3. Choose **Final** from the **Type** dropdown menu.

[Read more about final states in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#final-state)

## History states

A history state returns the parent state to its most recently active child state. The box with an **H** inside represents the history state.

The history state can be deep or shallow:

- A shallow history state remembers the immediate child’s state.
- A deep history state remembers the deepest active state or states inside its child states.

[TODO: Why you might use a history state with example.]


### How to make a state a history state

First, select the state you want to set as a history state for the parent state. Then…

#### Using the **quick actions** menu

1. Right-click the state to bring up the **quick actions** menu.
2. Choose **History** from the **Type** options.

#### Using the **State details** panel

1. Select the state you want to set as the final state.
2. Open the **State details** panel from the right tool menu.
3. Choose **History** from the **Type** dropdown menu.
4. Use the **History** toggle that appears when the state has a **History Type** to choose between **Shallow** and **Deep** history options.


[Read more about history states in our docs](https://xstate.js.org/docs/guides/history.html#history)

## Guards

A **guard** is a condition that the machine checks when it goes through an event. If the condition is true, the machine follows the transition to the next state. If the condition is false, the machine follows the rest of the conditions to the next state. Any transition can be a guarded transition.

Guards are numbered in the order they are checked and labeled with “if” or “else if” along with their condition. Multiple guards on the same events are connected with a dotted line.

[TODO: Why you might use a guard with example.]


## How to add a guard to an event

First, select the event where you want to add a guard. Then…

#### Using the **+ Transition** button

1. Use the **+ Transition** button to replace your event with a guarded transition.
2. Name your guard by replacing the **New guard** text inside the event.

#### Using the **quick actions** menu

1. Right-click the event to bring up the **quick actions** menu.
2. Choose **Add guard** from the options in the **quick actions** menu to replace your event with a guarded transition.
3. Name your guard by replacing the **New guard** text inside the event.

#### Using the **Transition details** panel

1. Open the **Transition details** panel from the right tool menu.
2. Use the **Guard** text input to name your guard and replace your event with a guarded transition.

Use the **+ Transition** button to create more guards on the same transition.

[Read more about guards in our docs](https://xstate.js.org/docs/guides/guards.html#guards-condition-functions)

## Entry & exit actions

While the statechart is running, it can execute other effects called actions.

An action can be fired upon entry or exit of a state. Actions are “fire-and-forget effects”; once the machine has fired the action, it moves on and forgets the action. You can also fire actions on transitions.

You can fire multiple entry and exit actions on a state. Top-level final states cannot have exit actions, since the machine is stopped and no further transitions can occur.

![Entry and exit actions video player](entry-and-exit-actions-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=222e2d7a-0ed6-4f2c-843a-e6646d717000).

In our video player, we have entry and exit actions on the Playing state. We use the entry action of playVideo to fire an effect playing the video on entry to the Playing state. We use the exit action of pauseVideo to fire an effect pausing the video when the Playing state is exited.


### How to add an entry action to a state

1. Select the state you want to have an entry action.
2. Open the **State details** panel from the right tool menu.
3. Use the **+** icon alongside the **Entry actions** to add a new action.
4. Use the **Custom** tab under **Entry actions** to input the **type** for the entry action.
5. Use the **Assign** tab under **Entry actions** to assign **key** and **assignment** pairs to the entry action.
6. Save the entry action using the **Save** button.

### How to add an exit action to a state

1. Select the state you want to have an exit action.
2. Open the **State details** panel from the right tool menu.
3. Use the **+** icon alongside the **Exit actions** to add a new action.
4. Use the **Custom** tab under **Exit actions** to input the **type** for the exit action.
5. Use the **Assign** tab under **Exit actions** to assign **key** and **assignment** pairs to the exit action.
6. Save the entry action using the **Save** button.

[Read more about entry and exit actions in our docs](https://xstate.js.org/docs/guides/actions.html#actions)

## Eventless transitions

**Eventless transitions** are transitions without events. These transitions are *always* taken after any transition in their state is enabled. No event is necessary to trigger the transition.

Eventless transitions are labeled “always” and often referred to as “always” transitions.

[TODO: Why you might use an eventless transition with example.]

[View this machine in the Stately Studio]().


### How to make an event into an eventless transition

First, select the event you want to replace with an eventless transition. Then…

#### Using the **quick actions** menu

1. Right-click the state to bring up the **quick actions** menu.
2. Choose **Always** from the **Event type** options.

#### Using the **Transition details** panel
1. Open the **Transition details** panel from the right tool menu.
2. Choose **Always** from the **Event type** dropdown menu.

[Read more about eventless transitions in our docs](https://xstate.js.org/docs/guides/transitions.html#eventless-always-transitions)

## Delayed transitions

**Delayed transitions** are transitions that only happen after a specified interval of time. If another event happens before the end of the timer, the transition doesn’t complete. Delayed transitions are handy if you need to build timeouts and intervals into your application logic.

Delayed transitions are labeled “after” and often referred to as “after” transitions.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](delayed-transition-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=5671366b-05cf-43f5-a09a-b88373ea27c1).

In a video player, we might want the video to be *Closed* out of fullscreen mode a few seconds after the video has *Stopped*, instead of closing the fullscreen mode suddenly as soon as the video is stopped. The eventless transition above transitions from the *Stopped* state to the *Closed* state after 5 seconds.


### How to make an event into a delayed transition

First, select the event you want to replace with a delayed transition. Then…

#### Using the **quick actions** menu

1. Right-click the event to bring up the **quick actions** menu.
2. Choose **After** from the **Event type** options.
3. Use the **Transition details** panel to change the delay time.

#### Using the **Transition details** panel

1. Open the **Transition details** panel from the right tool menu.
2. Choose **After** from the **Event type** dropdown menu.
3. Specify the delay time in milliseconds using the **Delay** text input.


[Read more about delayed transitions in our docs](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#delayed-transitions)

## State done event

A **state done event** transitions from a parent state when one of its child states reaches its final state. State done events are labeled “onDone.”

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s an onDone event from the parent Opened state back to the Closed state.](state-done-event-2022-10-24-small.png)

In the video player above, when the video player reaches the *Stopped* state, the *Opened* state transitions through the *onDone* state done event to the *Closed* state.


### How to add a state done event to a parent state

1. Check the final child state has its state type set to **Final**. If the parent state doesn’t contain a final child state, the state done event type will not be available for transitions from the parent state.
2. Select the parent state.
3. Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.
4. Select the newly-created event. Then…

#### Using the **quick actions** menu

1. Right-click the state to bring up the **quick actions** menu.
2. Choose **State done event** from the **Event type** options.

#### Using the **Transition details** panel

1. Open the **Transition details** panel from the right tool menu.
2. Choose **State done event** from the **Event type** dropdown menu.

[Read more about state done events in our docs](https://xstate.js.org/docs/guides/states.html#state-methods-and-properties)

## Self-transitions

A **self-transition** starts and ends in the same state.

Self-transitions can be used to restart a state.

[TODO: Why you might use self-transitions with example.]


### How to make an event into a self-transition

#### Using the **quick actions** menu

1. Right-click the event to bring up the **quick actions** menu.
2. Choose **Make self transition** from the **quick actions** menu.

#### Dragging the transition arrow

1. Select the event.
2. Grab the circular handle at the arrow end of the transition and drag the handle to connect it back to the source state.

[Read more about self-transitions in our docs](https://xstate.js.org/docs/guides/transitions.html#self-transitions)

## Invoked actors

When you run a statechart, it becomes an actor: a running process that can receive messages, send messages and change its behavior based on the messages it receives, which can cause effects outside of the actor.

An invoked actor is an actor that can execute its own actions and communicate with the machine. These invoked actors are started in a state and stopped when the state is exited.

Invoked actors are are labeled on their invoking state with “Invoke /” followed by the actor’s source name and ID.

You can invoke multiple actors on a single state. Top-level final states cannot have invoked actors.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](invoked-actors-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=66f77051-089e-4b0a-9fa9-42e1f7598135).

In the video player above, the *startVideo* actor is invoked when the video player is in the *Opened* state.


### How to invoke actors on a state

1. Select the state you want to invoke an actor.
2. Open the **State details** panel from the right tool menu.
3. Use the **+** icon alongside the **Invoked actors** to add a new action.
4. Add the source for the actor using the **src** text input.
5. Add the ID for the actor using the **ID** text input.
6. Save the invoked actor using the **Save** button.


[Read more about actors in our docs](https://xstate.js.org/docs/about/concepts.html#actor-model)

## Invoke done events

An **invoke done event** transitions from a state once its invocation has been completed. An invoke done event is labeled “done:” followed by the invocation’s ID.

[TODO: Why you might use invoke done events with example]

### How to create invoke done events

1. Select the state with an invoked actor where you want to add an invoke done event.
2. Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.
3. The newly-created event will automatically be created as an invoke done event.

You can also change an existing event into an invoked done event using the **quick actions** menu:

1. Select the existing event you wish to change into an invoke done event.
2. Right-click the state to bring up the **quick actions** menu.
3. Choose **Invocation done event** from the **Event type** options.

[Read more about actors in our docs](https://xstate.js.org/docs/about/concepts.html#actor-model)

## Invoke error events

An **invoke error event** transitions from a state when an error occurs in its invocation. An invoke error event is labeled “error:” followed by the invocation’s ID.

[TODO: Why you might use invoke error events with example]

### How to create invoke error events

1. Select the state with an invoked actor where you want to add an invoke error event.
2. Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.
3. The newly-created event will automatically be created as an invoke done event.
4. When an invoke done event already exists from that state, creating another event will automatically create that event as an invoke error event.

You can also change an existing event into an invoked error event using the **quick actions** menu:

1. Select the existing event you wish to change into an invoke error event.
2. Right-click the state to bring up the **quick actions** menu.
3. Choose **Invocation error event** from the **Event type** options.

[Read more about actors in our docs](https://xstate.js.org/docs/about/concepts.html#actor-model)

## Descriptions

You can add descriptions to state and event nodes to describe their purpose and share related notes with your team. Descriptions support markdown formatting, including links and images.

The machine object will include your descriptions in the state or event's `description` when you export your statecharts to JSON.

![Video player state machine containing closed and opened states. On the Play event, the Closed state transitions to the Opened state. The Opened state invokes a startVideo actor and has a description of “The video player should be in full-screen mode.” The Opened state contains Playing and Paused states, which are transitioned between using the Pause and Play events. There’s a Stop event from the Opened state that transitions to the final state of Stopped. There’s a delayed transition from the Stopped state back to the Closed state after 5 seconds.](descriptions-2022-10-24-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=574ede8a-a328-40fe-a4f9-c80fffb2c30a).

In the video player above, the text “The video player should be in full-screen mode” is a description of the *Opened* event.


### How to add a description to a state

1. Select the state.
2. Open the **State details** panel from the right tool menu.
3. Write your state’s description in the **Description** text area.

### How to add a description to an event

1. Select the event.
2. Open the **Transition details** panel from the right tool menu.
3. Write your event’s description in the **Description** text area.

[Find out more about descriptions from our office hours](https://www.youtube.com/watch?v=pLU4IOiWW0U&t=142s)

