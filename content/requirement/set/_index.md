+++
title = "Requirement Set"
weight = 2
+++

* A requirement set is a set of requirements that the player are required to pass before doing actions.
* It consists of:
  * The [Requirements]({{% relref "../overview" %}}).
  * `success-action` (`success-command`): the [Action]({{% ref "action/overview" %}}) when the player passes all requirements.
  * `fail-action` (`fail-command`): the [Action]({{% ref "action/overview" %}}) when the player doesn't pass any of the requirements.
* You can set multiple sets of requirements.
  * The plugin will check for one set that the player meet its requirements. If none of the sets is matched, these are simply passed as failed and the actions will not be executed.

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
        fail-command: 'tell: &cYou don''t meet the requirements!'
        success-command: 'tell: &a[v] You passed the requirements!'
  button:
    NAME: '&8Requirement Test'
    LORE:
      - 'To use this item, you need to pass all requirements.'
      - 'Otherwise, a configurable error'
      - 'message will be displayed.'
    ID: iron bars
```
