+++
title = "Target Menu"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/TargetMenu/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/TargetMenu/" style="green" icon="download" %}}Download{{% /button %}}

## Format
```yaml
menu-settings:
  argument-processor:
  - target # To use settings from Target Menu
  ...

...
```

## Description
This is [Argument Processor]({{% ref "argument" %}}) that supports specifying the target player to do actions with

## Note

The menu will register 2 [Menu Variables]({{% ref "misc/variable" %}}#menu-variables):
* `{target_<variable_name>}` to fetch the variable `<variable_name>` of the target player
  * Example:
    * `{player}` -> `{target_player}`
    * `{ping}` -> `{target_ping}`
    * `{exp_to_level}` -> `{target_exp_to_level}`
* `{target_papi_<placeholder_name>}` to fetch the PlaceholderAPI's placeholder `<placeholder_name>` of the target player

## Example

### Target Menu

```yaml
menu-settings:
  argument-processor: target
  name: "&c&lTest Target &f&l| &a&lCurrent: &4&l{target_player}"
  command: target
  rows: 1

info:
  slot: 0
  name: "&bTarget Info"
  id: paper
  lore:
  - "&dWorld: &f{target_world}"
  - "&dPing: &f{target_ping}"
  - "&dLocation: &f{target_x} {target_y} {target_z}"

fly:
  slot: 1
  name: "&bToggle Fly"
  id: feather
  command: "console: fly {target_player}"
```

### Target Menu with [Store Argument Processor]({{% ref "argument/store" %}})

```yaml
menu-settings:
  arg-processor:
  - target # To use settings from Target Menu
  - store # To use settings from Store Argument Processor

  # The settings of Store Argument Processor
  min-args: 2
  args:
  - test
  - otest
  default-args: "hello world"
  min-args-action: "tell: &cAt least 2 arguments"

  command: testarg
  title: "{target_player}"

button:
  slot: 1
  id: stone
  name: "&bTest Arguments"
  lore:
  - "Arg 1: {arg_test}"
  - "Arg 2: {arg_otest}"
  - "Merged Args: {merged_args}"
```
