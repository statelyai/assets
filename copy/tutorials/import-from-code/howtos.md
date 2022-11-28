### How to import from code

The code you want to import must already be formatted as a [`createMachine()` factory function](https://xstate.js.org/docs/guides/machines.html). The importer has basic validation in case your machine has basic errors, including reminding you if the `createMachine` definition is missing.

#### How to import from code from the code panel

Caution: importing code from the code panel will overwrite the current machine in the editor.

1. Open the **Code** panel from the right tool menu.
2. Use the **Import** button to open the Importer.
3. Paste or type your machine code into the textarea.
4. Use the **Create machine** button to import your machine.

#### Create a new machine inside a project using import from code

1. Open the **Machines** list from the left drawer menu.
2. Use the **+** icon alongside the **Machines** heading to open the new machine options.
3. Enter a name for your new machine in the text input.
4. Select the **Import Code** switch to open the import textarea.
5. Paste or type your machine code into the textarea.
6. Use the **Create machine** button to import your machine.