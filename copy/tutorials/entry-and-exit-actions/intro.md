## Entry & exit actions

While the statechart is running, it can execute other effects called actions.

An action can be fired upon entry or exit of a state. Actions are “fire-and-forget processes”; once the machine has fired the action, it moves on and forgets the action. You can also fire actions on transitions.

You can fire multiple entry and exit actions on a state. Final states cannot have exit actions.

[TODO: Why you might use entry and exit actions with examples.]