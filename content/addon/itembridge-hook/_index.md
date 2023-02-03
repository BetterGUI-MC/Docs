+++
title = "ItemBridge Hook"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/ItemBridgeHook" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ItemBridgeHook/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [ItemBridge](https://www.spigotmc.org/resources/itembridge-save-items-and-use-them-wherever-you-want-including-other-plugins-best-w-customitems.77080/)
{{% /notice %}}

## Format

```yaml
itembridge: <id>
item-bridge: <id>
```

## Description

This item modifier allows you to use the item with the `<id>` from [ItemBridge](https://www.spigotmc.org/resources/itembridge-save-items-and-use-them-wherever-you-want-including-other-plugins-best-w-customitems.77080/) in your menus.

## Note

This item modifier is order-sensitive. You have to set it before other modifiers.

## Example

```yaml
test-itembridge:
  slot: 0
  itembridge: "minecraft:stone"
  name: "&bItemBridge"
```
