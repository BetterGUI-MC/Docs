+++
title = "Item Flag"
weight = 8
+++

This modifier will add the flags to the item.

## Format

```yaml
flag:
- <flag>
- <flag>
- <flag>
...
```
```yaml
item-flags:
- <flag>
- <flag>
- <flag>
...
```
```yaml
itemflag:
- <flag>
- <flag>
- <flag>
...
```
```yaml
itemflags:
- <flag>
- <flag>
- <flag>
...
```
```yaml
item-flag:
- <flag>
- <flag>
- <flag>
...
```

## Note

* [List of flags](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemFlag.html).

## Example

```yaml
enchanted-sword-flag:
  NAME: '&aEnchanted sword'
  LORE:
    - 'This sword is glowing. (literally)'
  ID: diamond_sword
  ENCHANTMENT:
    - "durability, 1"
  FLAG:
    - HIDE_ENCHANTS
  POSITION-X: 1
  POSITION-Y: 1
```
