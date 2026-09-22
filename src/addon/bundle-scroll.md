---
title: BundleScroll
---

# BundleScroll [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/BundleScroll/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/BundleScroll/)

::: warning
Depend: [PacketEvents](https://modrinth.com/plugin/packetevents)
:::

## Format
```yaml
button-name:
  type: scroll
  next-action:
  - action
  - action
  previous-action:
  - action
  - action

  modifier1: <value1>
  modifier2: <value2>
  modifier3: <value3>
  ...
```

## Description
This button type allows you to trigger actions when scrolling the bundle.

## Note
* `next-action`: the [Action](/action) triggered when the player scrolls down the bundle.
* `previous-action`: the [Action](/action) triggered when the player scrolls up the bundle.

## Example
```yaml
menu-settings:
  title: "Scroll Test"
  rows: 3
  open-action: "meta(count, number): 0"

scroll-button:
  type: scroll
  slot: 0
  
  material: BUNDLE
  name: "&eScroll me"
  lore: "&bNumber: &f{meta_number_count}"
  action: "meta(count, number): 0"
  
  next-action: "meta(count, number): {value} + 1"
  previous-action: "meta(count, number): {value} - 1"
```

::: info
This example uses [MetaPlay](meta-play) to store the `count` value.
:::

<video autoplay="autoplay" controls="controls" src="./bundle-scroll/example.webm" />