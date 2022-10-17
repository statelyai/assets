# Introducing Stately Studio 1.0

We're excited to announce the release of Stately Studio 1.0! 🚀 We strongly believe that app logic should be visually collaborative, and we've been working hard to make that a reality. We've been working on Stately Studio for over a year now, and we're thrilled to share it with you.

## Thank you

Earlier this year, we released the first beta of Stately Editor & Stately Registry (together called Stately Studio). We also released Stately Viz, a visualizer for XState machines, and the XState VS Code extension. Since then, over 10,000 of you tried it out and created/shared tens of thousands of machines (we don't know the exact number because machines from the extension are always private). We've been blown away by the response and the feedback we've received. Thank you for trying it out and for all the feedback you've given us. We've been listening and working hard to make Stately Studio better, and we greatly appreciate your feedback. As always, you can add feature requests at [statelyai.canny.io](https://statelyai.canny.io/).

## Teams

Collaborating on app logic is extremely important. That's why we've introduced Teams, where you can organize and privately share and edit Projects (née Systems) with your teammates. You can invite your teammates to your team, and they can join your team by accepting the invitation. This is the first step to providing more powerful collaboration features. We're working on GitHub integration (public + private repos), commenting, machine revisions with visual diffs, multiplayer mode (where you can edit machines collaboratively in real-time), and much more.

Teams are available on the [Pro subscription.](https://stately.ai/pricing)

## Visibility & roles

- Privacy is important: machines contain business logic which you may not want the world to see

Privacy is important. Machines contain business logic which you may not want the world to see. That's why we've introduced visibility and roles. You can set a machine to be private, public, or unlisted. Private machines are only visible to you and your teammates. Public machines are visible to everyone, and [can be discovered via search](https://stately.ai/registry/discover). Unlisted machines are only visible to those who have the link, as they don't show up in search results.

You can also set roles for teammates to restrict how they can edit projects and machines. You can set a teammate to be a viewer, editor, or admin. Viewers can view projects and machines, but can't edit them. Editors can edit projects and machines, but can't delete them. Admins can do everything.

Private/unlisted machines and team roles are available on the [Pro subscription.](https://stately.ai/pricing)

## Editor & projects

A project (née systems) is a collection of related machines. The editor view is now more project-centric, allowing you to switch between machines with a single click.

You might have noticed a refreshed redesign of the editor. We've improved the layout of states to give you more space to create and rearrange states.

We've also redesigned guarded transitions. They are now individual transitions connected with a dotted line and a diamond, which should feel natural to anyone that has worked with flowcharts. This makes it easier to read and arrange the conditions for each transition, and gives you the ability to change the source and target states of individual transitions.

Simulation mode has also been redesigned, making it easier to see active states and transitions.

There's many more improvements to the editor, but we'll leave it to you to discover them.

## More export options

You asked, we listened (and are currently in the _listening_ state). We've added more export options beyond JSON, including JavaScript and TypeScript. We have plans to add more export options in the future, such as:

- Markdown
- CodeSandbox
- StackBlitz
- SVG, PNG, PDF

And others. Request your export options at [statelyai.canny.io](https://statelyai.canny.io/).

## What's next

We have so many things planned for the future:

- A Stately GitHub integration for public & private repos
- XState parity: supporting all of XState's features (almost there!)
- More export options and an embeddable editor
- Support for other graph-based tools, CI/CD pipelines and other workflow engines/DSLs
- Static graph analysis to help you catch logic errors ahead of time, which is difficult to do with plain code
- Many more examples, tutorials, videos, and documentation

## Try it out

- stately.ai/studio
- stately.ai/editor
