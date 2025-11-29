---
title: Action
---

# {{ $frontmatter.title }}

This is a button component, one that can be used to perform an action when clicked.

## Common Format

```yaml
action-name:
  # The label of the button
  label: "Click me!"

  # The tooltip of the button
  # If the tooltip is not provided, there will be no tooltip
  tooltip: "This is a tooltip"

  # The width of the button
  # If the width is not provided, it will default to 150
  width: 150
```

## Button Types

### Copy To Clipboard

This button copies the specified text to the clipboard.

#### Format

```yaml
action-name:
  # The type of the button
  type: copy

  # The text to copy to the clipboard
  text: "Hello, world!"
```

#### Example

```yaml
copy-command:
  type: copy
  label: "Click here to copy a command"
  tooltip: "Copy the command to your clipboard"
  text: "/kill {player}"
```

### Open URL

This button will prompt the player to open a URL.

#### Format

```yaml
action-name:
  # The type of the button
  type: url

  # The URL to open
  url: "https://example.com"
```

#### Example

```yaml
open-url:
  type: url
  label: "Click here to open a URL"
  tooltip: "Open a URL in your browser"
  url: "https://bettergui-mc.github.io/Docs/"
```

### Suggest Command

This button will suggest a command to the player.

#### Format

```yaml
action-name:
  # The type of the button
  type: suggest

  # The command to suggest
  command: "/kill {player}"
```

#### Example

```yaml
suggest-command:
  type: suggest
  label: "Click here to suggest a command"
  tooltip: "Suggest a command to your player"
  command: "/kill {player}"
```

### Run Command

This button will control the player to execute a command.

#### Format

```yaml
action-name:
  # The type of the button
  type: run

  # The command to execute
  command: "/kill {player}"
```

#### Example

```yaml
run-command:
  type: run
  label: "Click here to run a command"
  tooltip: "Run a command on your player"
  command: "/kill {player}"
```

### Custom Action

This button will execute custom actions on the server.

#### Format

```yaml
action-name:
  # The type of the button
  type: action

  # The list of actions to execute
  command:
  - action1
  - action2

  # The requirement to check when clicking the button
  click-requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
```

Check [Action](/action/overview) for more information about the available actions in `command`.

Check [Requirement](/requirement/overview) for more information about the available requirements in `click-requirement`.

### Example

```yaml
action-custom:
  type: action
  label: "Click here to execute custom actions"
  tooltip: "Execute custom actions on your player"
  command:
  - "tell: &aYou met the requirement"
  - "tell: &aHere is your reward"
  - "console: give {player} diamond 64"
  click-requirement:
    check-level:
      level:
        value: 10
        take: false
      fail-action: "tell: &cYou don't have enough level"
```

## Full Example

```yaml
menu-settings:
  menu-type: action-dialog
  title: "Example Dialog"
  command: exampledialog

copy-command:
  type: copy
  label: "Click here to copy a command"
  text: "/kill {player}"

open-url:
  type: url
  label: "Click here to open a URL"
  tooltip: "Open a URL in your browser"
  url: "https://bettergui-mc.github.io/Docs/"

suggest-command:
  type: suggest
  label: "Click here to suggest a command"
  tooltip: "Suggest a command to your player"
  command: "/kill {player}"

run-command:
  type: run
  label: "Click here to run a command"
  tooltip: "Run a command on your player"
  command: "/kill {player}"

action-custom:
  type: action
  label: "Click here to execute custom actions"
  tooltip: "Execute custom actions on your player"
  command:
    - "tell: &aYou met the requirement"
    - "tell: &aHere is your reward"
    - "console: give {player} diamond 64"
  click-requirement:
    check-level:
      level:
        value: 10
        take: false
      fail-action: "tell: &cYou don't have enough level"
```

![Example](action/example.png)None