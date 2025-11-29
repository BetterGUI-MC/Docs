---
title: Predicate Mask
---

# {{ $frontmatter.title }}

This is a conditional mask. It will show the mask if the requirement is met. If not, it will show the fallback mask.

## Format

```yaml
mask-name:
  mask: predicate
  view-requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...
  check-only-on-creation: <true/false>
  success:
    <mask-settings>
  fallback:
    <mask-settings>
```

## Note

* `success`: The [Mask](/./..) that will be shown if the `view-requirement` is met. If you don't set it, the mask will be empty.
* `fallback`: The [Mask](/./..) that will be shown if the `view-requirement` is not met. If you don't set it, the mask will be empty.
* `view-requirement`: The [Requirement](/requirement/overview) that must be met for the `success` mask to be shown.
* `check-only-on-creation`: If this value is set to `true`, the plugin will only check the `view-requirement` when the player opens the menu.

## Example

```yaml
demo-slot:
  mask: predicate
  view-requirement:
    test-level:
      level:
        value: 10
        take: false
  success:
    mask: pattern
    pattern:
      - "...xxx..."
      - "..x...x.."
      - "..x...x.."
      - "..x...x.."
      - "...xxx..."
    child:
      x:
        id: green_stained_glass_pane
        name: "&a&lSuccess"
  fallback:
    mask: pattern
    pattern:
      - "..x...x.."
      - "...x.x..."
      - "....x...."
      - "...x.x..."
      - "..x...x.."
    child:
      x:
        id: red_stained_glass_pane
        name: "&c&lFail"
```

![Predicate 1](predicate/predicate-1.gif)None