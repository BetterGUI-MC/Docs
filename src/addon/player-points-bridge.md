---
title: PlayerPoints Bridge
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/PlayerPointsBridge/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/PlayerPointsBridge/)

::: warning
Depend: [PlayerPoints](https://www.spigotmc.org/resources/playerpoints.80745/)
:::

## Variable
* `{points}` gets the points the player having

## Action

### Format
* `give-point: <point>`

### Description
This action gives `<point>` to the player

### Example
```yaml
give-point:
  slot: 1
  id: emerald
  name: "&cGive points"
  command: "give-point: 10"
```

## Requirement

### Format
```yaml
point: <value>
```
```yaml
point:
  value: <value>
  take: <true/false>
```

### Description
* This requirement checks if the player has at least `<value>` points
* You can set the `take` value (`true` or `false`) to allow/disallow the plugin to take the points of the player alter checking successfully

### Example
```yaml
check-points:
  slot: 1
  id: emerald
  name: "&cTake Points"
  click-requirement:
    left:
      take-point: # Take 10 points
        point: 10
    right:
      check-point: # Check if the players has 10 points
        point:
          value: 10
          take: false
        success-action: "tell: &a You have enough points"
        fail-action: "tell: &a You don't have enough points"
```