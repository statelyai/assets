# Tutorials copy

This folder is the source of truth for our tutorials copy.

Each folder represents a different concept or feature. Each file in the folder can be combined depending on the end platform:

1. `intro.md`: always used, and always used first. This introduces the concept or feature.
2. `howtos.md`: instructions on how to use the feature in Stately Studio. This may not be used if we’re short on space, and can be replaced by…
3. `docs-link.md`: this is the link text and url that can be used in place of, or in addition to, the howtos, to direct the reader to further information. Currently these links link to the XState docs at xstate.js.org.

## Images

Each image has two versions, one for large/expanded view, the other (with the suffix `-small`) for the in-studio thumbnail view.

## Order

The correct order for the tutorials if presented in a list is:

1. What’s a state machine?
2. What’s a statechart?
3. States
4. Initial states
5. Transitions and events
6. Parent states
7. Parallel states
8. Final states
9. History states
10. Guards
11. Entry & exit actions
12. Eventless (always) transitions
13. Delayed (after) transitions
14. State done events
15. Self-transitions
16. Invoked actors
17. Invoke done events
18. Invoke error events
19. Descriptions

## Heading levels

Feel free to change the heading level hierarchy to fit the platform.
