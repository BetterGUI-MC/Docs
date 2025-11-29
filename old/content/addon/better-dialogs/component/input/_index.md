+++
title = "Input"
weight = 3
+++

This is a component for inputs from the player. It allows the player to interact with the dialog and provide user input so that the dialog can send the information to the server.

The next sections will provide more information about each type of input component.

## Get Input Value

For each input, you can retrieve the value using the `{dialog_<name>}` variable, where `<name>` is the name of the input component.

For example, if you have an dialog with an input component like this:

```yaml
menu-settings:
  menu-type: notice-dialog
  title: "Example Dialog"
  command: exampledialog

name:
  type: input
  label: "Name"

hello:
  type: action
  command: "tell: &b&lHello, &f&l{dialog_name}"
```

You can retrieve the value of the `name` component using the `{dialog_name}` variable, as shown in the `hello` action.
