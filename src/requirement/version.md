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

* The `<value>` is the Minecraft version
* You can use the full Minecraft version or just the major part:
  - Use `1.12.2` if you want to check for versions above 1.12.2
  - Use `12` if you want to check for versions starting with major version `12` (1.12, 1.12.1, and above)

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
