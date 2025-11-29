---
title: List Mask
---

# {{ $frontmatter.title }}

This is a conditional mask that loops through a list of masks and display a mask if it can be shown.

It can be used with [Predicate Mask](../predicate.md) to make more complex checks.

## Format

```yaml
mask-name:
  mask: list
  child:
    mask1:
      <mask-settings>
    mask2:
      <mask-settings>
    ...
```

## Example

```yaml
demo-slot:
  mask: list
  child:
    level-10:
      mask: predicate
      view-requirement:
        test-level:
          level:
            value: 10
            take: false
      success:
        mask: pattern
        pattern:
          - "..x..xxx."
          - ".xx..x.x."
          - "..x..x.x."
          - "..x..x.x."
          - ".xxx.xxx."
        child:
          x:
            id: green_stained_glass_pane
            name: "&a&lYou have reached level 10!"
    level-5:
      mask: predicate
      view-requirement:
        test-level:
          level:
            value: 5
            take: false
      success:
        mask: pattern
        pattern:
          - "...xxx..."
          - "...x....."
          - "...xxx..."
          - ".....x..."
          - "...xxx..."
        child:
          x:
            id: green_stained_glass_pane
            name: "&a&lYou have reached level 5!"
    level-0:
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
          name: "&c&lFail"
```

![List 1](list-1.gif)