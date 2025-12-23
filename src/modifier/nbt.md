---
title: NBT
---

# {{ $frontmatter.title }}

This modifier will apply the NBT data to the item.

::: warning
This modifier will reset all item settings. Therefore, It's recommended to order the settings in the following pattern:
`ID (Material)`, `NBT`, `other item settings`.
:::

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
  name: "&aColored Leather Chestplate"
  lore:
    - "This is a colored leather chestplate"
  position-x: 2
  position-y: 1
```

## How to set NBT

This modifier uses a library to convert the YAML settings to a proper SNBT that can be used to apply to the item.

This will guide the basic of the YAML settings to set the NBT value

### Basic Use

Let's start with an example. Suppose we want to apply the following NBT:

:::tabs key:nbt-mode
== Legacy

```
{CustomModelData:12}
```

== Data Component

```
[custom_model_data=12]
```

:::

The NBT settings would be:

:::tabs key:nbt-mode
== Legacy

```yaml
nbt:
  CustomModelData: 12
```

== Data Component

```yaml
nbt:
  custom_model_data: 12
```

:::

Now, what if we want to add some enchantments to the NBT? Let's add Unbreaking 1 and Sharpness 2 to the NBT

:::tabs key:nbt-mode
== Legacy

```
{CustomModelData:12,ench:[{lvl:2,id:sharpness},{lvl:1,id:unbreaking}]}
```

== Data Component

```
[custom_model_data=12,enchantments={sharpness:2,unbreaking:1}]
```

:::

:::tabs key:nbt-mode
== Legacy

```yaml
nbt:
  CustomModelData: 12
  ench:
    - id: sharpness
      lvl: 2
    - id: unbreaking
      lvl: 1
```

== Data Component

```yaml
nbt:
  custom_model_data: 12
  enchantments:
    sharpness: 2
    unbreaking: 1
```

:::

As you can see, the NBT settings are straight-forward without hacks.
Since the entry in the SNBT consists of a key and a value, the NBT value in the settings will always follow the same
format.
A setting with multiple sub-settings will result in a compound in the SNBT (the part within the curly brackets `{}`).
A setting with list entries (those with `-` before them) with result in a list in the SNBT (the part within the square
brackets `[]`).

### Forced-Value Map

So far we can set the NBT value of Strings and Integers without anything more.

But now the question remains: What if we want to use [Variable](/misc/variable) in the NBT value?

This is where "Forced-Value Map" comes into play.

Let's take an example: Suppose we want to increase the Unbreaking level based on the player's level (with the variable
`{level}`).

Since the enchantment level must be an integer, We will set the value to be a setting of `$type` for the type and
`$value` for the value, like this:

:::tabs key:nbt-mode
== Legacy

```yaml
nbt:
  ench:
    - id: unbreaking
      lvl:
        $type: "integer"
        $value: "{level}"
```

== Data Component

```yaml
nbt:
  enchantments:
    unbreaking:
      $type: "integer"
      $value: "{level}"
```

:::

Here is the full list of all the available `$type`:

- `byte`
- `boolean`
- `short`
- `int` or `integer`
- `long`
- `float`
- `double`
- `string`
- `raw`
- `list`
- `compound`
- `byte_array`
- `int_array`
- `long_array`

For `byte_array`, `int_array` and `long_array`, the `$value` must be a list, like this:

```yaml
$type: "int_array"
$value:
  - "12"
  - "{level}"
  - "23"  
```

### Raw Data

If you want to set the SNBT directly, you can set it directly as the value of the NBT setting, like this:

:::tabs key:nbt-mode
== Legacy

```yaml
nbt: "{CustomModelData:12,ench:[{lvl:2,id:sharpness},{lvl:1,id:unbreaking}]}"
```

== Data Component

```yaml
nbt: "[custom_model_data=12,enchantments={sharpness:2,unbreaking:1}]"
```

:::