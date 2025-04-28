+++
title = "ItemBridge Hook"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/ItemBridgeHook" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ItemBridgeHook/" style="green" icon="download" %}}Download{{% /button %}}

This addons add support for some plugins that generate custom items

{{% notice warning %}}
The item modifier is order-sensitive. You have to set it before other modifiers.
{{% /notice %}}

## [ItemBridge](https://polymart.org/product/4/)

### Format

```yaml
itembridge: <id>
item-bridge: <id>
```

### Example

```yaml
test-itembridge:
  slot: 0
  itembridge: "minecraft:stone"
  name: "&bItemBridge"
```

## [ItemsAdder](https://www.spigotmc.org/resources/73355/)

### Format

```yaml
itemsadder: <id>
ia: <id>
```

### Example

```yaml
test-itemsadder:
  slot: 0
  ia: "iasurvival:ruby_block"
  name: "&bItemsAdder"
```

## [Oraxen](https://www.spigotmc.org/resources/72448/)

### Format

```yaml
oraxen: <id>
```

### Example

```yaml
test-oraxen:
  slot: 0
  oraxen: "onyx_axe"
  name: "&bOraxen"
```

## [Nexo](https://polymart.org/product/6901/)

### Format

```yaml
nexo: <id>
```

### Example

```yaml
test-nexo:
  slot: 0
  nexo: "my_item"
  name: "&bNexo"
```
