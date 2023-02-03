+++
title = "Store Argument"
weight = 1
+++

This is a processor to store the arguments as [Variables](../Variable.md)

## Format

```yaml
menu-settings:
  argument-processor: # Add the processor to the menu
  - store-argument

  min-args: <number>
  args:
  - arg1
  - arg2
  - arg3
  ...
  min-args-action:
  - action
  - action
  - action
  ...
  default-args: "string with space"
  <other-settings>

button1:
  <button-settings>
button2:
  <button-settings>
...
```

## Note

* It introduces 4 more sections in the `menu-settings`
  * `min-args`: the minimum amount of arguments in the command to open the menu
  * `args`: the arguments
  * `min-args-action`: the [Action]({{% ref "action/overview" %}}) when the number of arguments is lower than `min-args`
  * `default-args`: the default arguments
* When using this processor, the menu will create some [Variables](../Variable.md):
  * `{merged_args}`: the completed arguments that the player typed to open the menu
  * `{arg_<arg>}`: the value of the argument at the `<arg>` position from the menu

## Example

```yaml
menu-settings:
  argument-processor:
  - store-argument

  # The minimum number of arguments is 2
  min-args: 2

  # Register 2 arguments and create 2 variables: {arg_test} and {arg_otest}
  args:
  - test
  - otest

  # Set the default arguments of "test" and "otest" to "hello" and "world"
  default-args: "hello world"

  # The action when failed to meet the min-args
  min-args-action: "tell: &cAt least 2 arguments"

# The button
button:
  slot: 0
  id: stone
  name: "&bTest Arguments"
  lore:
  - "Arg 1: {arg_test}"
  - "Arg 2: {arg_otest}"
  - "Merged Args: {merged_args}"
```
