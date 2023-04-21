createMachine({
    "id": "dog waiting",
    "initial": "waiting",
    "states": {
      "waiting": {
        "description": "![puppy patiently waiting](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/waiting.svg)"
      }
    },
    "predictableActionArguments": true,
    "preserveActionOrder": true
  })

  createMachine({
    id: "dog",
    initial: "asleep",
    states: {
      asleep: {
        description:
          "![sleeping puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/asleep.svg)",
        on: {
          "wakes up": {
            target: "awake",
          },
        },
      },
      awake: {
        description:
          "![happy awake puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/walking.svg)",
        on: {
          "falls asleep": {
            target: "asleep",
          },
        },
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  });