---
title: Enchantment
---

# {{ $frontmatter.title }}

This modifier will add the enchants to the item.

## Format

```yaml
enchantment:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```
```yaml
enchant:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```
```yaml
enc:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```

## Note

* [List of Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html).
* You can set the `[level]` of the `<enchantment>`. It's optional.

## Example

```yaml
enchanted-sword:
  NAME: '&aEnchanted sword'
  LORE:
    - 'This sword is glowing.'
  ID: diamond_sword
  ENCHANTMENT:
    - "durability, 1"
  POSITION-X: 1
  POSITION-Y: 1
```