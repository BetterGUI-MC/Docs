---
title: Permission Requirement
---

# {{ $frontmatter.title }}

The requirement to check if the player has the specific permission

## Format

```yaml
permission: <permission>
```
```yaml
permission:
- <permission>
- <permission>
- <permission>
...
```

## Note

* You can add `-` before `<permission>` to indicate that the plugin should check if the player doesn't have the `<permission>`

## Example

```yaml
permission:
  slot: 1
  type: predicate
  CLICK-REQUIREMENT: # Click Requirement
    default: # Click type
      permission: # Requirement set name
        PERMISSION: bettergui.test # Here we are
        fail-command: "tell: &cYou don''t have the correct permission!"
  button:
    COMMAND: "tell: &a[v] You have the correct permission!"
    NAME: '&8Permission test'
    LORE:
      - 'To use this item, you need the'
      - 'permission "bettergui.test".'
      - 'Otherwise, a configurable error'
      - 'message will be displayed.'
    ID: iron bars
```
```yaml
permission-list:
  slot: 2
  type: predicate
  CLICK-REQUIREMENT: # Click Requirement
    default: # Click type
      permission: # Requirement set name
        PERMISSION: # Here we are
        - bettergui.test
        - bettergui.test.1
        fail-command: "tell: &cYou don''t have the correct permission!"
  button:
    COMMAND: "tell: &a[v] You have the correct permission!"
    NAME: '&8Permission test'
    LORE:
      - 'To use this item, you need the'
      - 'required permissions.'
      - 'Otherwise, a configurable error'
      - 'message will be displayed.'
    ID: iron bars
```