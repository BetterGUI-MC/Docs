---
title: NBT
---

# {{ $frontmatter.title }}

This modifier will apply the NBT data to the item.

{{% notice warning %}}
This modifier will reset all item settings. Therefore, It's recommended to order the settings in the following pattern: `ID (Material)`, `NBT`, `other item settings`.
{{% /notice %}}

## Format

```yaml
nbt: <nbt>
nbt-data: <nbt>
```

## Example

```yaml
custom-model-chestplate:
  id: leather_chestplate
  nbt:
    CustomModelData: 104230
  #nbt: "{CustomModelData:104230}"
  name: "&aCustom Model Chestplate"
  lore:
    - "This is a custom model chestplate"
  position-x: 1
  position-y: 1

colored-leather-chestplate:
  id: leather_chestplate
  nbt:
    display:
      color: 16175144
  #nbt: "{display:{color:16175144}}"
  name: "&aColored Leather Chestplate"
  lore:
    - "This is a colored leather chestplate"
  position-x: 2
  position-y: 1
```

## Item Component

In 1.20.5 and above, Mojang decided to replace NBT with their new Item Component.
To use Item Component, you can use its square-bracket format `[]` as the value to the modifier.

For example, for a typical `/give` command like this:
```
/give @s leather_helmet[dyed_color={rgb:456345,show_in_tooltip:false}]
```

You can take this part `[dyed_color={rgb:456345,show_in_tooltip:false}]` and use it in the modifier like this:

```yaml
nbt: "[dyed_color={rgb:456345,show_in_tooltip:false}]"
```