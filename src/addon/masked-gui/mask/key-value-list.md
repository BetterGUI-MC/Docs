---
title: Key-Value List Mask
order: 17
---

# Key-Value List Mask

This mask is similar to [Button Paginated Mask](./button-paginated), but you can specify a list of map-like values and display each of them as a [Button](/button).

## Format

```yaml
mask-name:
  mask: key-value-list
  slot: <slot>
  cycle: <true/false>
  signal: <signal>
  value-update: 20
  viewer-update: 0
  viewer-condition:
  - condition1
  - condition2
  - condition3
  value:
  - key1: value1
    key2: value2
    key3: value3
  - key1: value11
    key2: value12
    key3: value13
  - key1: value21
    key2: value22
    key3: value23
  button:
    <button-settings>
```

## Note

* `cycle`: Whether the buttons should cycle when you reach the end of the page. If this is set to `true`, then when you reach the end of the page, it will go back to the first page. If this is set to `false`, then when you reach the end of the page, it will stop at the last page.
* `signal`: The signal name used by actions to change the page.
* `viewer-condition`: The list of [Condition Requirement](/requirement/condition) that the viewer must meet to see the button.
* `value`: The list of map-like values
* `button`: The [Button](/button) to be displayed for each values.
* `value-update`: The ticks to wait before the value list is refreshed.
* `viewer-update`: The ticks to wait before the "passed" value list from the viewer view is refreshed.

## Action

* `next-page: <signal>`: Changes the page to the next page.
* `previous-page: <signal>`: Changes the page to the previous page.
* `set-page(<signal>): <page>`: Changes the page to `<page>`.

## Variable

* On `button`, you can use a key to get the value from the `value` list by using the variable `{key_<name>}`
* For examples: With this `value` list
```yaml
value:
- material: red_stained_glass_pane
  name: "Button 1"
- material: green_stained_glass_pane
  name: "Button 2"
```
  * You can use `{key_material}` to get the `material` part of the value
  * You can use `{key_name}` to get the `name` part of the value

## Example

```yaml
# The paginated mask
demo-slot:
  mask: key-value-list
  slot: 1-7
  cycle: false
  signal: demo-page-signal # This is the signal name used by actions to change the page.
  value:
  - material: red_stained_glass_pane
    name: Button 1
  - material: green_stained_glass_pane
    name: Button 2
  - material: blue_stained_glass_pane
    name: Button 3
  - material: yellow_stained_glass_pane
    name: Button 4
  - material: purple_stained_glass_pane
    name: Button 5
  - material: orange_stained_glass_pane
    name: Button 6
  - material: pink_stained_glass_pane
    name: Button 7
  - material: black_stained_glass_pane
    name: Button 8
  - material: white_stained_glass_pane
    name: Button 9
  - material: gray_stained_glass_pane
    name: Button 10
  - material: light_gray_stained_glass_pane
    name: Button 11
  button:
    id: "{key_material}"
    name: "&c&l{key_name}"

# The button to go to the previous page
previous-button:
  slot: 0
  id: arrow
  name: "&c&lPrevious"
  command: "previous-page: demo-page-signal" # The action to change the page

# The button to go to the next page
next-button:
  slot: 8
  id: arrow
  name: "&a&lNext"
  command: "next-page: demo-page-signal" # The action to change the page
```

![Key Value List 1](key-value-list/key-value-list-1.gif)