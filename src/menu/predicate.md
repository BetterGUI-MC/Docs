---
title: Predicate Menu
---

# {{ $frontmatter.title }}

This is an arbitrary menu that serves as a switch that you can add some [Menus](/overview) and some [Requirements](/requirement/overview) for each [Menu](/overview) to check before opening one of them.

## Format

```yaml
menu-settings:
  menu-type: predicate

  permission: bettergui.test

  command:
  - command1
  - command2
  ...

  argument-processor:
  - <argument-processor>
  - <argument-processor>

menu-name1:
  menu: <menu-file>
  argument: <args>
  requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...

menu-name2:
  menu: <menu-file>
  argument: <args>
  requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...

```

## Note

* `menu-settings`
  * `permission`: the required permission to open the menu.
  * `command`: the commands to open the menu.
  * `argument-processor`: the [Argument Processor](/argument) to handle the arguments of the command to open the menu.

* `menu-name1`, `menu-name2`, etc.
  * `menu`: the file of the menu to open,
  * `argument`: the argument to pass when opening the menu. It's optional
  * `requirement`: the [Requirement](/requirement/overview) to check before opening the menu. If it's not set, the plugin will assume that the menu can always be opened.

* The plugin will check the requirement of each menus in the top-down order of the config. If it found a menu whose requirements are met, it would open that menu. Otherwise, nothing happened.

## Example

```yaml
# level-predicate.yml
menu-settings:
  menu-type: predicate
  command: level

level-5:
  menu: level-5.yml
  requirement:
    check-level:
      level:
        value: 5
        take: false

level-2:
  menu: level-2.yml
  requirement:
    check-level:
      level:
        value: 2
        take: false

level-0:
  menu: level-0.yml

# level-5.yml
menu-settings:
  title: "&aYou reached level 5!"

# level-2.yml
menu-settings:
  title: "&aYou reached level 2!"

# level-0.yml
menu-settings:
  title: "&cYou don't have enough levels!"
```