### How to import code

Your code should be formatted as a [`createMachine()` factory function](https://xstate.js.org/docs/guides/machines.html) before import. The importer has basic validation in case your machine has basic errors, including reminding you if the `createMachine` definition is missing.

Caution: importing code will overwrite your current or selected machine unless you create a new machine from the **Machines list** inside a project. 

You may have multiple `createMachine`s included in the code you insert in the text area, but the Studio will only import the first machine found in the code. We plan to support importing multiple machines in the future.

#### How to import code to overwrite your machine from the code panel

1. Open the **Code** panel from the right tool menu.
2. Use the **Import** button to open the importer.
3. Paste or type your machine code into the text area.
4. Use the **Import** button to import your machine, overwriting your current machine.

#### How to import code to overwrite a machine from the machines list

1. Open the **Machines** list from the left drawer menu.
2. Use the **...** icon alongside a machine to open the machine options menu.
3. Use the **Import Code** option to open the import text area.
5. Paste or type your machine code into the text area.
6. Use the **Import** button to import your machine, overwriting the selected machine.

#### Create a new machine inside a project using import code

1. Open the **Machines** list from the left drawer menu.
2. Use the **+** icon alongside the **Machines** heading to open the new machine options.
3. Enter a name for your new machine in the text input.
4. Select the **Import Code** switch to open the import text area.
5. Paste or type your machine code into the text area.
6. Use the **Create machine** button to import your machine as a new machine in your project.