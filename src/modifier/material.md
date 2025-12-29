---
title: Material
---

# Material

This modifier will set the material of the item.

## Format

```yaml
material: <material>
id: <material>
mat: <material>
```

## Note

* [List of Materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html).
* You can set multiple materials as a list for the plugin to check for one available material. This helps Setup Makers to support both old and new version of the material.

## Example

```yaml
stone-button:
  slot: 1
  id: stone
```
```yaml
player-head:
  slot: 2
  id:
  - player_head
  - skull_item:3
```