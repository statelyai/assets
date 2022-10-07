# Tutorials copy

This folder is the source of truth for our tutorials copy.

Each folder represents a different concept or feature. Each file in the folder can be combined depending on the end platform:

1. `intro.md`: always used, and always used first. This introduces the concept or feature.
2. `howtos.md`: instructions on how to use the feature in the Stately Studio. This may not be used if we’re short on space, and can be replaced by…
3. `docs-link.md`: this is the link text and url that can be used in place of, or in addition to, the howtos, to direct the reader to further information. Currently these links link to the XState docs at xstate.js.org.

## Order

The correct order for the tutorials if presented in a list is:

1. What’s a state machine?
2. States
3. Transitions and events
4. Parent states
5. Parallel states
6. History states
7. Guards
8. Eventless (always) transitions
9. Delayed (after) transitions
10. State done events
11. Self-transitions
12. Entry & exit actions
13. Invoked actors
14. Invoke done events
15. Invoke error events
16. Descriptions

## Heading levels

Feel free to change the heading level hierarchy to fit the platform.