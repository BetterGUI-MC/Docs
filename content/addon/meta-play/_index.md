+++
title = "Meta Play"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/MetaPlay" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/MetaPlay/" style="green" icon="download" %}}Download{{% /button %}}

## Description

This addon adds a new variable to get and set metadata of players. This can be used to store data for the player.

## Variable

* `{meta_<key>}` gets the value from the metadata of the player at the key `<key>`
* `{meta_number_<key>}` gets the value from the metadata of the player at the key `<key>` and converts it to a number

## Action

* `meta: <key> <value>` sets the value of the metadata of the player at the key `<key>` to `<value>`
* `meta-number: <key> <value>` sets the value of the metadata of the player at the key `<key>` to `<value>` as a number
* `meta: <key>` removes the value of the metadata of the player at the key `<key>`

Note: In `<value>` you can use the variable `{value}` to get the previous value of the metadata.

## Example

```yaml
T:
  id: diamond
  name: "&b&lMeta: &f{meta_number_diamond_count}"
  command:
    left: "meta-number: diamond_count {value} + 1" # Requires EvalExtra to use expressions
    right: "meta: diamond_count 0"
```
