+++
title = "Vault Bridge"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/VaultBridge/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/VaultBridge/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [Vault](https://www.spigotmc.org/resources/vault.34315/)
{{% /notice %}}

## Variable
* `{money}` gets the money the player having
* `{money_formatted}` gets the money the player having (formatted)
* `{group}` gets the group the player is currently in

## Action

### Format
* `give-money: <money>`

### Description
This action gives `<money>` to the player

### Example
```yaml
give-money:
  slot: 1
  id: emerald
  name: "&cGive money"
  command: "give-money: 10"
```

## Requirement

### Money

#### Format
```yaml
money: <value>
```
```yaml
money:
  value: <value>
  take: <true/false>
```

#### Description
* This requirement checks if the money the player having is at least `<value>`
* You can set the `take` value (`true` or `false`) to allow/disallow the plugin to take the money of the player alter checking successfully

#### Example
```yaml
check-money:
  slot: 1
  id: emerald
  name: "&cTake money"
  click-requirement:
    left:
      take-money: # Take 10 money
        money: 10
    right:
      check-money: # Check if the players has 10 money
        money:
          value: 10
          take: false
        success-action: "tell: &a You have enough money"
        fail-action: "tell: &a You don't have enough money"
```

### Group

#### Format
```yaml
group: <name>
```

#### Decription
This requirement checks if the player is in the group `<name>`

#### Example
```yaml
check-group:
  slot: 1
  id: stone
  name: "&cStone Group"
  click-requirement:
    default:
      stone-group: # Check if the player is in the "stone" group
        group: stone
        success-action: "tell: &aYou are welcome"
        fail-action: "tell: &cGet out of here"
```
