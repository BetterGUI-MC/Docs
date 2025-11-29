+++
title = "Potion Effect"
weight = 9
+++

This modifier will add the potion effects to the item.

## Format

```yaml
potion:
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
...
```
```yaml
effect:
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
...
```

## Note

* [List of Potion Effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html).
* You can set the `[duration]` and `[amplifier]` of the `<potion>` effect. These are optional.

## Example

```yaml
potion:
  position-x: 1
  position-y: 1
  name: "&bPotion"
  id: potion
  potion:
    - "SPEED"
    - "WEAKNESS, 30, 1"
```
