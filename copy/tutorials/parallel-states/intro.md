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
