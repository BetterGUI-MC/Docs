---
title: Mask Paginated Mask
---

# {{ $frontmatter.title }}

Unlike [Button Paginated Mask](/button-paginated), this mask paginates [Masks](/./..) instead of [Buttons](/button/overview).

## Format

```yaml
mask-name:
  mask: mask-paginated
  cycle: <true/false>
  signal: <signal>
  child:
    mask-1:
      <mask-settings>
    mask-2:
      <mask-settings>
    ...
```

## Note

* `cycle`: Whether the buttons should cycle when you reach the end of the page. If this is set to `true`, then when you reach the end of the page, it will go back to the first page. If this is set to `false`, then when you reach the end of the page, it will stop at the last page.
* `signal`: The signal name used by actions to change the page.

## Action

* `next-page: <signal>`: Changes the page to the next page.
* `previous-page: <signal>`: Changes the page to the previous page.
* `set-page(<signal>): <page>`: Changes the page to `<page>`.

## Example

```yaml
# The paginated mask
demo-slot:
  mask: mask-paginated
  cycle: false
  signal: demo-page-signal # This is the signal name used by actions to change the page.
  child:
    0:
      mask: pattern
      pattern:
        - "...xxx..."
        - "...x.x..."
        - "...x.x..."
        - "...x.x..."
        - "...xxx..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&c&l0"
    1:
      mask: pattern
      pattern:
        - "....x...."
        - "...xx...."
        - "....x...."
        - "....x...."
        - "...xxx..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&a&l1"
    2:
      mask: pattern
      pattern:
        - "...xxx..."
        - ".....x..."
        - "...xxx..."
        - "...x....."
        - "...xxx..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&b&l2"
    3:
      mask: pattern
      pattern:
        - "...xxx..."
        - ".....x..."
        - "...xxx..."
        - ".....x..."
        - "...xxx..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&d&l3"
    4:
      mask: pattern
      pattern:
        - "...x.x..."
        - "...x.x..."
        - "...xxx..."
        - ".....x..."
        - ".....x..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&e&l4"
    5:
      mask: pattern
      pattern:
        - "...xxx..."
        - "...x....."
        - "...xxx..."
        - ".....x..."
        - "...xxx..."
      child:
        x:
          id: red_stained_glass_pane
          name: "&f&l5"

# The button to go to the previous page
previous-button:
  slot: 18
  id: arrow
  name: "&c&lPrevious"
  command: "previous-page: demo-page-signal" # The action to change the page

# The button to go to the next page
next-button:
  slot: 26
  id: arrow
  name: "&a&lNext"
  command: "next-page: demo-page-signal" # The action to change the page
```

![Mask Paginated](mask-paginated/mask-paginated-1.gif)None