+++
title = "Value List Mask"
weight = 16
+++

This mask is similar to [Button Paginated Mask]({{% ref "../button-paginated" %}}), but you can specify a list of values and display each of them as a [Button]({{% ref "button/overview" %}}).

## Format

```yaml
mask-name:
  mask: value-list
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
  - value1
  - value2
  - value3
  button:
    <button-settings>
```

## Note

* `cycle`: Whether the buttons should cycle when you reach the end of the page. If this is set to `true`, then when you reach the end of the page, it will go back to the first page. If this is set to `false`, then when you reach the end of the page, it will stop at the last page.
* `signal`: The signal name used by actions to change the page.
* `viewer-condition`: The list of [Condition Requirement]({{% ref "requirement/condition" %}}) that the viewer must meet to see the button.
* `value`: The list of values
* `button`: The [Button]({{% ref "button/overview" %}}) to be displayed for each values.
* `value-update`: The ticks to wait before the value list is refreshed.
* `viewer-update`: The ticks to wait before the "passed" value list from the viewer view is refreshed.

## Action

* `next-page: <signal>`: Changes the page to the next page.
* `previous-page: <signal>`: Changes the page to the previous page.
* `set-page(<signal>): <page>`: Changes the page to `<page>`.

## Variable

* On `button`, you can get the current value from the `value` list by using the variable `{current_value}`

## Example

```yaml
# The paginated mask
demo-slot:
  mask: value-list
  slot: 1-7
  cycle: false
  signal: demo-page-signal # This is the signal name used by actions to change the page.
  value:
  - red_stained_glass_pane
  - green_stained_glass_pane
  - blue_stained_glass_pane
  - yellow_stained_glass_pane
  - purple_stained_glass_pane
  - orange_stained_glass_pane
  - pink_stained_glass_pane
  - black_stained_glass_pane
  - white_stained_glass_pane
  - gray_stained_glass_pane
  - light_gray_stained_glass_pane
  button:
    id: "{current_value}"
    name: "&c&lButton"

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

![Value List 1](value-list-1.gif)
