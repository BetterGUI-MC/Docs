---
title: Switch Mask
---

# {{ $frontmatter.title }}

This mask allows you to store a list of masks. Then you can make it switch to a specific mask from that list.

## Format

```yaml
mask-name:
  mask: hybrid
  signal: <signal>
  default: <mask-name>
  child:
    mask-1:
      <mask-settings>
    mask-2:
      <mask-settings>
    ...
```

## Note

* `signal`: The signal name used by actions to switch the mask.
* `default`: The name of the mask from the `child` section used as a default mask. If it's not set, the default mask will be empty.

## Action

* `set-mask(<signal>): <mask>`: Switch the mask to `<mask>`

## Example

```yaml
demo-slot:
  mask: switch
  signal: demo-page-signal # This is the signal name used by actions to switch the mask.
  default: 0 # The default mask name
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

button-1:
  slot: 47
  name: "&e&l1"
  id: arrow
  command: "set-mask(demo-page-signal): 1"

button-2:
  slot: 48
  name: "&e&l2"
  id: arrow
  command: "set-mask(demo-page-signal): 2"

button-3:
  slot: 49
  name: "&e&l3"
  id: arrow
  command: "set-mask(demo-page-signal): 3"

button-4:
  slot: 50
  name: "&e&l4"
  id: arrow
  command: "set-mask(demo-page-signal): 4"

button-5:
  slot: 51
  name: "&e&l5"
  id: arrow
  command: "set-mask(demo-page-signal): 5"
```

![Switch 1](switch-1.gif)