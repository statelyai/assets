createMachine({
    id: "begging",
    initial: "begging",
    states: {
      begging: {
        description:
          "![happy walking puppy](https://raw.githubusercontent.com/statelyai/assets/main/example-images/dogs/begging.svg)",
        on: {
          "gets treat": {},
        },
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  });