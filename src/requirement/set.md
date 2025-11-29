---
title: Requirement Set
---

# {{ $frontmatter.title }}

* A requirement set is a set of requirements that the player are required to pass before doing actions.
* It consists of:
  * The [Requirements](../overview.md).
  * `success-action` (`success-command`): the [Action](action/overview.md) when the player passes all requirements.
  * `fail-action` (`fail-command`): the [Action](action/overview.md) when the player doesn't pass any of the requirements.
* You can set multiple sets of requirements.
  * The plugin will check for one set that the player meet its requirements. If none of the sets is matched, these are simply passed as failed and the actions will not be executed.

## Format

```yaml
requirement-set-name: # The name of the Requirement Set
  requirement-1: value-1 # The first requirement
  requirement-2: value-2 # The second requirement
  requirement-3: value-3 # The third requirement
  <requirement..>: <value..> # More requirements

  success-action: # The actions when the requirements are met
  - action1
  - action2
  - action3

  fail-action: # The actions when the requirements are not met
  - action1
  - action2
  - action3
```

## Example

```yaml
check-condition:
  slot: 1
  type: predicate
  CLICK-REQUIREMENT: # Click Requirement
    default: # Click type
      we-permission: # The name of the Requirement Set
        permission: # The permission requirement
        - bettergui.test
        - bettergui.test.1
        level: 10 # The level requirement
        fail-command: "tell: &cYou don''t meet the requirements!"
        success-command: "tell: &a[v] You passed the requirements!"
  button:
    NAME: '&8Requirement Test'
    LORE:
      - 'To use this item, you need to pass all requirements.'
      - 'Otherwise, a configurable error'
      - 'message will be displayed.'
    ID: iron bars
```