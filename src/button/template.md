---
title: Template Button
order: 9
---

# Template Button

This is an arbitrary button that can be used as a template for various copies of the buttons with slightly different settings and/or values.

## Format

```yaml
button-name:
  type: template
  template: <name> # The name from template folder
  variable:
    <variable1>: <value1>
    <variable2>: <value2>
    ...
  <button-settings>
```

## Note

* `template`: the name of the button in the template folder
  * The template folder (located at `plugins/BetterGUI/template`) is basically a folder containing `yml` files defining common buttons to use in all menus
  * You can get the registered template buttons by using the command [`gettemplatebuttons`](/basic/command)
* `variable`: the variables to apply to the template button. This will help you to create many buttons with different attributes from one single template button.

## Example

### Using Template Button

* **Normal Case**
```yaml
# Not using template
button1:
  id: stone
  name: "&cThis is button"
  lore:
  - "This is a line"
  - "This is a 2 line"
  - "This is a 3 line"
  - "This is a 4 line"
  command: "tell: &cYou clicked"

button2:
  id: stone
  name: "&cThis is button"
  lore:
  - "This is a line"
  - "This is a 2 line"
  - "This is a 3 line"
  - "This is a 4 line"
  command: "tell: &cYou clicked this again"
```

* **Using Template Button**
```yaml
# Using template
button1:
  type: template
  template: test # The name from template folder
  command: "tell: &cYou clicked"
button2:
  type: template
  template: test # The name from template folder
  command: "tell: &cYou clicked this again"

# Template File
test:
  id: stone
  name: "&cThis is button"
  lore:
  - "This is a line"
  - "This is a 2 line"
  - "This is a 3 line"
  - "This is a 4 line"
```

### Use `variable` option
```yaml
# This will create 4 buttons with different XP amount. These buttons give XP to the player
test-xp-100:
  type: template
  template: test-xp
  variable:
    xp: 100

test-xp-200:
  type: template
  slot: 12
  template: test-xp
  variable:
    xp: 200

test-xp-300:
  type: template
  template: test-xp
  variable:
    xp: 300

test-xp-400:
  type: template
  template: test-xp
  variable:
    xp: 400

# Template File
test-xp:
  id: paper
  name: "&eGive &f{xp} XP"
  lore:
  - ""
  - "&fThis is a test template button"
  command: "console: xp {xp} {player}"

# Notice that the template button has {xp} in it. It will be replaced with the value from the variables of the button using this template button
```