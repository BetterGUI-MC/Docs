---
title: Argument Processor
---

# {{ $frontmatter.title }}

* Argument Processor is a special unit that handles the arguments of a menu, mainly from [Open Menu Command](/basic/command) and [Open Menu Action](/action/menu-open)
* The arguments are splitted and handled by multiple processors in the configured order.
* The processors are specified in the `argument-processor` section of the `menu-settings`.
* There are many built-in types of processors (Check the sidebar). A developer can also create his own processor and register to this plugin.

## Example
```yaml
menu-settings:
  command: testargs
  argument-processor:
    hello:
      length: 2
      suggest:
      - Hello you
      - Welcome back
      action: "tell: &cHello is required"
    message:
      take-remaining: true
      suggest:
      - HSGamer
      - Minecraft World
      action: "tell: &cMessage is required"

button:
  slot: 0
  id: stone
  name: "&bTest Arguments"
  lore:
  - "{arg_hello}, {arg_message}"
```

## Variable
* Each processor provide its own variable to be used in the menu.
* The format: `{arg_<processor_name>}`
* For example: `{arg_hello}`, `{arg_message}`
