+++
title = "Cooldown Requirement"
weight = 3
+++

The requirement to check if the player is not in a cooldown timer (seconds). After checking successfully, the cooldown timer will start for the player.

## Format

```yaml
cooldown: <seconds>
```

## Example

```yaml
cooldown:
  slot: 1
  type: predicate
  button:
    COMMAND: "tell: &e You will need to wait 10 seconds to click again"
    NAME: '&aCooldown'
    LORE:
      - 'This is a example of icon with cooldown'
    ID: paper
  click-requirement: # Click Requirement
    default: # Click type
      test-cooldown: # Requirement Set name
        cooldown: 10 # Here we are
      fail-command:
        - "tell: &cWait until the cooldown is finished"
```
