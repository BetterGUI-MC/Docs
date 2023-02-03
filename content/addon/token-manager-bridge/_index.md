+++
title = "TokenManager Bridge"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/TokenManagerBridge/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/TokenManagerBridge/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [TokenManager](https://www.spigotmc.org/resources/tokenmanager.8610/)
{{% /notice %}}

## Variable
* `{tokens}` gets the tokens the player having

## Action

### Format
* `give-token: <token>`

### Description
This action gives `<token>` to the player

### Example
```yaml
give-token:
  slot: 1
  id: emerald
  name: "&cGive tokens"
  command: "give-token: 10"
```

## Requirement

### Format
```yaml
token: <value>
```
```yaml
token:
  value: <value>
  take: <true/false>
```

### Description
* This requirement checks if the player has at least `<value>` tokens
* You can set the `take` value (`true` or `false`) to allow/disallow the plugin to take the tokens of the player alter checking successfully

### Example
```yaml
check-tokens:
  slot: 1
  id: emerald
  name: "&cTake tokens"
  click-requirement:
    left:
      take-token: # Take 10 tokens
        token: 10
    right:
      check-token: # Check if the players has 10 tokens
        token:
          value: 10
          take: false
        success-action: "tell: &a You have enough tokens"
        fail-action: "tell: &a You don't have enough tokens"
```
