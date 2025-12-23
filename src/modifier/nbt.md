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

:::tabs key:nbt-mode
== Legacy

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

== Data Component

```yaml
custom-model-chestplate:
  id: leather_chestplate
  nbt:
    custom_model_data: 104230
  name: "&aCustom Model Chestplate"
  lore:
    - "This is a custom model chestplate"
  position-x: 1
  position-y: 1

colored-leather-chestplate:
  id: leather_chestplate
  nbt:
    dyed_color: 16175144
  name: "&aColored Leather Chestplate"
  lore:
    - "This is a colored leather chestplate"
  position-x: 2
  position-y: 1
```

:::

## How to set NBT

BetterGUI automatically converts YAML-structured NBT settings into valid SNBT (Stringified Named Binary Tag) format. The following section describes the structure and syntax required for proper NBT configuration.

### Basic Conversion Rules

YAML structure mapping to NBT equivalents:

- **Objects** → NBT compound tags (denoted by curly brackets `{}` in SNBT)
- **Lists** → NBT list/array tags (denoted by square brackets `[]` in SNBT)  
- **Key-value pairs** → individual NBT entries

#### Example 1: Primitive Value

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

Corresponding YAML configuration:

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

#### Example 2: Compound Structures with List Elements

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

Corresponding YAML configuration:

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

### Type Enforcement with Forced-Value Maps

In basic scenarios, string and integer values are inferred automatically from their YAML representation. However, when incorporating [Variables](/misc/variable) into NBT values, explicit type specification becomes necessary.

When a value is dynamic (contains a variable reference), use a forced-value map with `$type` and `$value` properties to explicitly declare the NBT data type. This ensures correct type conversion when the variable is resolved at runtime.

#### Example: Dynamic Enchantment Level

To set an enchantment level based on a player variable `{level}`

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

#### Supported Data Types

The following data types are available for the `$type` property:

- `byte` - Signed 8-bit integer
- `boolean` - True/false value
- `short` - Signed 16-bit integer
- `int` or `integer` - Signed 32-bit integer
- `long` - Signed 64-bit integer
- `float` - 32-bit floating-point
- `double` - 64-bit floating-point
- `string` - Text string
- `raw` - Raw SNBT string (parsed as-is)
- `list` - Homogeneous list
- `compound` - Compound tag (object)
- `byte_array` - Array of bytes
- `int_array` - Array of integers
- `long_array` - Array of longs

For array types (`byte_array`, `int_array`, `long_array`), the `$value` must be specified as a list:

```yaml
$type: "int_array"
$value:
  - "12"
  - "{level}"
  - "23"  
```

### Raw SNBT Strings

For advanced use cases, SNBT can be specified directly as a string value instead of using structured YAML. This bypasses automatic type inference and conversion, allowing direct SNBT syntax:

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