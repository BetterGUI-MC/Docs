---
title: Version Requirement
---

# Version Requirement

The requirement to check if the server is at a specific version or higher.

## Format

```yaml
version: <value>
```

## Note

* The `<value>` is the major part of the version of Minecraft.
  * `1.12.2` will be `12`
  * `1.18.2` will be `18`
  * `1.8.8` will be `8`

## Example

```yaml
test-xp:
  slot: 0
  id:
    - EXPERIENCE_BOTTLE
    - EXP_BOTTLE
  name: "&eGive &f10 XP"
  lore:
    - ""
    - "&fThis is a test template button"
    - "&fLevel: {level}"
  click-requirement:
    old-version:
      version: 13 # Check if the server is at 1.13.X
      success-action: "console: xp add {player} 10 points"
      fail-action: "console: xp 10 {player}"
```