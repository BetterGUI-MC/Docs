+++
title = "Enchant Keyring"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/EnchantKeyring/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/EnchantKeyring/" style="green" icon="download" %}}Download{{% /button %}}

This addon adds an [Item Modifier]({{% ref "modifier/overview" %}}) similar to [Enchantment]({{% ref "modifier/enchantment" %}}) but it uses Minecraft's keys instead of Bukkit's ones. It is useful for those who use custom enchantment plugins and want to add these enchantments to the menu.

## Format

```yaml
enchant-key:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
```

## Note

* The `<enchantment>` use Minecraft's key in the format of `<name>:<key>` (Similar to the enchantment key you use in the `/enchant` command in Vanilla).
* You can set the `[level]` of the `<enchantment>`. It's optional.

## Example

```yaml
enchanted-sword:
  NAME: '&aEnchanted sword'
  LORE:
    - 'This sword is glowing.'
  ID: diamond_sword
  enchant-key:
    - "minecraft:unbreaking, 1"
  POSITION-X: 1
  POSITION-Y: 1
```
