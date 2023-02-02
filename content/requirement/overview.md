+++
title = "Overview"
weight = 1
+++

* Requirement is one of the interesting parts of the plugin.
* It is used when you want to check if the player meets some sort of requirements before doing anything (Check the level before opening the menu, etc).
* There are many built-in types of requirements, which will be listed below. A developer can also make his own requirement type and register it to the plugin.

{{% notice info %}}
What you see in the examples & set in your [Menu]({{% ref "menu/overview" %}}) is actually [**Requirement Set**]({{% relref "set" %}}).

Make sure to check [**Requirement Set**]({{% relref "set" %}}) to understand how to correctly set requirements in your [Menu]({{% ref "menu/overview" %}}) (Particularly, how to set multiple requirements & set [Actions]({{% ref "action/overview" %}}) when the requirements are met / failed to met).
{{% /notice %}}

## Example

```yaml
permission-list:
  slot: 1
  type: predicate
  CLICK-REQUIREMENT: # Click Requirement
    default: # Click type
      we-permission: # The name of the Requirement set
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

## Built-ins
* [Cooldown Requirement]({{% relref "cooldown" %}})
* [Level Requirement]({{% relref "level" %}})
* [Permission Requirement]({{% relref "permission" %}})
* [Condition Requirement]({{% relref "condition" %}})
