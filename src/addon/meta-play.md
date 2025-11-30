---
title: Meta Play
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/MetaPlay) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/MetaPlay/)

## Description

This addon adds a new variable to get and set metadata of players. This can be used to store data for the player.

## Variable

* `{meta_<key>}` gets the value from the metadata of the player at the key `<key>`
* `{meta_number_<key>}` gets the value from the metadata of the player at the key `<key>` and converts it to a number

## Action

* `mete(<key>): <value>` sets the value of the metadata of the player at the key `<key>` to `<value>`
* `meta(<key>, number): <value>` sets the value of the metadata of the player at the key `<key>` to `<value>` as a number
* `meta(<key>)` removes the value of the metadata of the player at the key `<key>`

Note: In `<value>` you can use the variable `{value}` to get the previous value of the metadata.

## Example

```yaml
T:
  id: diamond
  name: "&b&lMeta: &f{meta_number_diamond_count}"
  command:
    left: "meta(diamond_count, number): {value} + 1" # Requires EvalExtra to use expressions
    right: "meta(diamond_count): 0"
```