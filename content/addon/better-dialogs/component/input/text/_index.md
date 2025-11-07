+++
title = "Text"
weight = 1
+++

This is an input component that allows players to enter text.

## Format

```yaml
text-input-name:
  # The type of the input component.
  type: input

  # The label of the input component.
  # If not provided, the label will be hidden.
  label: "Text Input"

  # The width of the input component.
  # If not provided, the width will be 200px.
  width: 200

  # The initial value of the input component.
  # If not provided, the initial value will be empty.
  initial: "Hello World"

  # The maximum length of the input component.
  # If not provided, the length will be 32.
  max-length: 32

  # The maximum number of lines the input component can have.
  # Optional.
  max-lines: 5

  # The height of the input component.
  # Optional.
  height: 100
```

## Example

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

![Example](example.png)
