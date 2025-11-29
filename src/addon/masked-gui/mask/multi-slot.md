---
title: Multi-Slot Mask
---

# {{ $frontmatter.title }}

It's the same as the [Simple Mask](/simple) but there is a special feature when you add multiple [Buttons](/button/overview).

## Format

```yaml
mask-name:
  mask: multislot
  slot: <slot>
  child:
    button-name-1:
      <button-settings>
    button-name-2:
      <button-settings>
    ...
```

## Example

```yaml
demo-slot:
  mask: multislot
  slot: 1-1-9-6
  child:
    emerald-button:
      id: emerald
      name: "&a&lEmerald"
```

![MultiSlot 1](multi-slot/multislot-1.png)None

```yaml
demo-slot:
  mask: multislot
  slot: 1-1-9-6
  child:
    emerald-button:
      id: emerald
      name: "&a&lEmerald"
    diamond-button:
      id: diamond
      name: "&b&lDiamond"
```

![MultiSlot 2](multi-slot/multislot-2.png)None

```yaml
demo-slot:
  mask: multislot
  slot: 1-1-9-6
  child:
    emerald-button:
      id: emerald
      name: "&a&lEmerald"
    diamond-button:
      id: diamond
      name: "&b&lDiamond"
    redstone-button:
      id: redstone
      name: "&c&lRedstone"
```

![MultiSlot 3](multi-slot/multislot-3.png)None

You may now understand what is the special feature of this mask. This mask will loop through the [`child` buttons](/button/overview) and display them for each slot in the `slot` section.