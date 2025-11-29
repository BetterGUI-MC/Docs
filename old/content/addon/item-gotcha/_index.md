+++
title = "Item Gotcha"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/ItemGotcha/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ItemGotcha/" style="green" icon="download" %}}Download{{% /button %}}

## Config.yml
```yaml
stone:
  id: STONE
  amount: 32

advanced_stone:
  id: STONE
  amount: "32"
  name: "&c{player}'s Stone"
  lore:
    - "A dummy Stone"
    - ''
    - "&kYes, it's very dummy and stupid"
```

### Create an item
* The config should be easy if you are familiar with [**Button**]({{% ref "button/overview" %}})
  and, particularly, [**Dummy Button**]({{% ref "button/dummy" %}})
* Yes, you can think of the `config.yml` as a Menu setup, but with [**dummy buttons**]({{% ref "button/dummy" %}})
* Therefore, if you want to make an item, you can set it up in the `config.yml` as how you did in your menu (Name,
  Material, Lore, etc)

## Command
| Command | Permission | Description |
| --- | --- | --- |
| `giveitem <item_name>` | bettergui.items | Give `<item_name>` to the player |

## Action

### Format
* `give: <item>`
* `give: <item>, <amount>`
* `give: <material>, <amount>`

### Description
This action will give the player the `<item>` (specified in the `config.yml`) or
  the [`<material>`](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) with the `<amount>`

### Example
```yaml
give-stone:
  slot: 1
  id: stone
  name: "&cGive me stone"
  command: "give: stone"

give-advanced-stone:
  slot: 2
  id: stone
  name: "&cGive me advanced stone"
  command: "give: advanced_stone"

give-kits:
  slot: 3
  id: diamond sword
  name: "&cGive kits"
  command:
  - "give: DIAMOND_SWORD"
  - "give: STONE, 10"
```

## Requirement

### Format
```yaml
item: <item>
```
```yaml
item:
  value: <item>
  take: <true/false>
```
```yaml
item: <item>, [amount]
```
```yaml
item:
  value: <item>, [amount]
  take: <true/false>
```

### Description
* This requirement will check if the player has the `<item>` (specified in the `config.yml`) in his inventory
* You can set the `amount` value to specify the amount of `<item>` the requirement should check
* You can set the `take` value (`true` or `false`) to allow/disallow the plugin to take the items of the player alter checking successfully

### Example
```yaml
take-stone:
  slot: 1
  type: predicate
  button:
    id: stone
    name: "&cTake Stone"
  click-requirement:
    left:
      take-one: # Take one stone
        item: "stone"
    right:
      take-ten: # Take ten stone
        item: "stone, 10"
    middle:
      take-multi: # Take 10 stone and 1 cobblestone
        item:
          value:
            - "stone, 10"
            - "cobblestone"
          take: true
    default:
      check-stone: # Check (not take) if the player has 20 stone
        item:
          value:
            - "stone, 20"
          take: false
```
