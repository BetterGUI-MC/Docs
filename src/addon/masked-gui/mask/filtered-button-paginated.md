---
title: Filtered Button Paginated Mask
---

# {{ $frontmatter.title }}

This mask is similar to [Button Paginated Mask](../button-paginated.md), but you can filter out the buttons with specific requirements.

## Format

```yaml
mask-name:
  mask: filtered-button-paginated
  slot: <slot>
  cycle: <true/false>
  signal: <signal>
  update: 20
  child:
    button-1:
      <button-settings>
      filter-requirement:
        <requirement-set>
        <requirement-set>
        <requirement-set>
        ...

    button-2:
      <button-settings>
      filter-requirement:
        <requirement-set>
        <requirement-set>
        <requirement-set>
        ...

    button-3:
      <button-settings>
      filter-requirement:
        <requirement-set>
        <requirement-set>
        <requirement-set>
        ...
    ...
```

## Note

* `cycle`: Whether the buttons should cycle when you reach the end of the page. If this is set to `true`, then when you reach the end of the page, it will go back to the first page. If this is set to `false`, then when you reach the end of the page, it will stop at the last page.
* `signal`: The signal name used by actions to change the page.
* `update`: The ticks to wait before the mask is refreshed.
* You can use `filter-requirement` on the button to remove it from the list if the player doesn't meet the requirements.
  * It's similar to `view-requirement`, but the difference is that, while buttons with `view-requirement` will leave an empty button on the list, those with `filter-requirement` will be removed from the list if the player doesn't meet the requirements.

## Action

* `next-page: <signal>`: Changes the page to the next page.
* `previous-page: <signal>`: Changes the page to the previous page.
* `set-page(<signal>): <page>`: Changes the page to `<page>`.

## Example

```yaml
# The paginated mask
demo-slot:
  mask: filtered-button-paginated
  slot: 1-7
  cycle: false
  signal: demo-page-signal # This is the signal name used by actions to change the page.
  child:
    button1:
      id: red_stained_glass_pane
      name: "&c&lButton 1"
      filter-requirement:
        test-level:
          level:
            value: 1
            take: false
    button2:
      id: green_stained_glass_pane
      name: "&a&lButton 2"
      filter-requirement:
        test-level:
          level:
            value: 2
            take: false
    button3:
      id: blue_stained_glass_pane
      name: "&9&lButton 3"
      filter-requirement:
        test-level:
          level:
            value: 4
            take: false
    button4:
      id: yellow_stained_glass_pane
      name: "&e&lButton 4"
      filter-requirement:
        test-level:
          level:
            value: 5
            take: false
    button5:
      id: purple_stained_glass_pane
      name: "&5&lButton 5"
      filter-requirement:
        test-level:
          level:
            value: 6
            take: false
    button6:
      id: orange_stained_glass_pane
      name: "&6&lButton 6"
      filter-requirement:
        test-level:
          level:
            value: 10
            take: false
    button7:
      id: pink_stained_glass_pane
      name: "&d&lButton 7"
      filter-requirement:
        test-level:
          level:
            value: 11
            take: false
    button8:
      id: black_stained_glass_pane
      name: "&0&lButton 8"
      filter-requirement:
        test-level:
          level:
            value: 11
            take: false
    button9:
      id: white_stained_glass_pane
      name: "&f&lButton 9"
      filter-requirement:
        test-level:
          level:
            value: 11
            take: false
    button10:
      id: gray_stained_glass_pane
      name: "&7&lButton 10"
      filter-requirement:
        test-level:
          level:
            value: 12
            take: false
    button11:
      id: light_gray_stained_glass_pane
      name: "&8&lButton 11"
      filter-requirement:
        test-level:
          level:
            value: 12
            take: false

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

# Button to give XP
give-xp:
  slot: 9-17
  id:
    - EXPERIENCE_BOTTLE
    - EXP_BOTTLE
  name: "&eGive &f10 XP"
  lore:
    - ""
    - "&fLevel: {level}"
  click-requirement:
    old-version:
      version: 13 # Check if the server is at 1.13.X
      success-action: "console: xp add {player} 10 points"
      fail-action: "console: xp 10 {player}"
```

![Filtered Button Paginated 1](filtered-button-paginated-1.gif)