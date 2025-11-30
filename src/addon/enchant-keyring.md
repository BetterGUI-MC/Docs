---
title: Enchant Keyring
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/EnchantKeyring/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/EnchantKeyring/)

This addon adds an [Item Modifier](/modifier) similar to [Enchantment](/modifier/enchantment) but it uses Minecraft's keys instead of Bukkit's ones. It is useful for those who use custom enchantment plugins and want to add these enchantments to the menu.

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