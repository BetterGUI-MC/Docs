---
title: Level Requirement
---

# {{ $frontmatter.title }}

The requirement to check if the level of the player is higher or equal to the specific level

## Format

```yaml
level: <level>
```
```yaml
level:
  value: <level>
  take: <true/false>
```

## Note

* You can specify the `take` value (`true` or `false`) to allow/disallow the plugin to take the level of the player alter checking successfully

## Example

```yaml
test-view-requirement:
  type: predicate
  slot: 1
  button:
    id: exp_bottle
    name: "&cA exp bottle"
    lore:
      - "You will see this icon when the level is higher than 5"
  view-requirement: # View Requirement
    level: # Requirement Set name
      level: 5 # Here we are
```
```yaml
test-click-requirement:
  type: predicate
  slot: 1
  button:
    id: exp_bottle
    name: "&cA level checker"
    command: "tell: &aYou reached level 5"
  click-requirement: # Click Requirement
    default: # Click type
      test-level: # Requirement Set name
        level: # Here we are
          value: 5
          take: true # Take the level
      fail-command:
        - "tell: &cTrain more"
```