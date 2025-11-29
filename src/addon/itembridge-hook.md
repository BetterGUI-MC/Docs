---
title: ItemBridge Hook
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/ItemBridgeHook) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ItemBridgeHook/)

This addons add support for some plugins that generate custom items, through [UniItem](https://github.com/ProjectUnified/UniItem)

{{% notice warning %}}
The item modifier is order-sensitive. You have to set it before other modifiers.
{{% /notice %}}

## Format

All the Item Modifiers to get items from these item plugins are in the format

```yaml
<type>: <id>
```

Where `<type>` is the type of the item plugin, and `<id>` is the id of the item

You can check the available `<type>` here: [Supported Plugins](https://github.com/ProjectUnified/UniItem#supported-plugins)

## Example

### [ItemBridge](https://polymart.org/product/4/)

```yaml
test-itembridge:
  slot: 0
  itembridge: "minecraft:stone"
  name: "&bItemBridge"
```

### [ItemsAdder](https://www.spigotmc.org/resources/73355/)

```yaml
test-itemsadder:
  slot: 0
  ia: "iasurvival:ruby_block"
  name: "&bItemsAdder"
```

### [Oraxen](https://www.spigotmc.org/resources/72448/)

```yaml
test-oraxen:
  slot: 0
  oraxen: "onyx_axe"
  name: "&bOraxen"
```

### [Nexo](https://polymart.org/product/6901/)

```yaml
test-nexo:
  slot: 0
  nexo: "my_item"
  name: "&bNexo"
```