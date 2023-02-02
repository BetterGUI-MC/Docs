+++
title = "Condition Requirement"
weight = 6
+++

The requirement to check on conditions & expressions (Mainly [Math extension](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#math))

## Format

```yaml
condition: <condition>
```

## Note

* This requirement will check if `<condition>` is `true`, `yes`, `on` or `0`

## Example

```yaml
test-view-requirement:
  type: predicate
  slot: 1
  button:
    id: exp_bottle
    name: "&cA exp bottle"
    lore:
      - "You will see this icon when the level is 0"
  view-requirement: # View Requirement
    level: # Requirement Set name
      condition: "%math_{level} >= 0%" # Here we are
```
