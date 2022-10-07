### How to create invoke error events

1. Select the state with an invoked actor where you want to add an invoke error event.
2. Drag from the handles on the left, right and bottom sides of the selected state, and release to create a connecting transition, event and new state.
3. The newly-created event will automatically be created as an invoke done event.
4. When an invoke done event already exists from that state, creating another event will automatically create that event as an invoke error event.

You can also change an existing event into an invoked error event using the **quick actions** menu:

1. Select the existing event you wish to change into an invoke error event.
2. Right-click the state to bring up the **quick actions** menu.
3. Choose **Invocation error event** from the **Event type** options.