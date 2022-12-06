## Guards

A **guard** is a condition that the machine checks when it goes through an event. If the condition is true, the machine follows the transition to the next state. If the condition is false, the machine follows the rest of the conditions to the next state. Any transition can be a guarded transition.

Guards are numbered in the order they are checked and labeled with “if” or “else if” along with their condition. Multiple guards on the same events are connected with a dotted line.

[TODO: Why you might use a guard with example.]

![A video player state machine with an initial Paused State and a Playing state. The transition from Playing to Paused has a guard numbered 1 and labeled ‘If time left is zero’. The first guard is joined to a second guard by a dotted line. The second guard is numbered 2 and is labeled ‘Else if time left is more than zero.’ The second guard’s transition targets the Playing state.](guards-2022-12-06-small.png)

[View this machine in the Stately Studio](https://stately.ai/registry/editor/e13bef2b-bb13-4465-96ac-0bc25340688e?machineId=96f3bfce-147a-4aa0-ae2d-674cdfcb14ec).
