**Delayed transitions** are transitions that only happen after a specified interval of time. If another event happens before the end of the timer, the transition doesn’t complete.

Delayed transitions are labeled “after” and often referred to as “after” transitions.

[Screenshot of video player 3 with the after transition highlighted]

In a video player, we might want the video to be *Closed* out of fullscreen mode a few seconds after the video has *Stopped*, instead of closing the fullscreen mode suddenly as soon as the video is stopped. The eventless transition above transitions from the *Stopped* state to the *Closed* state after 5 seconds.