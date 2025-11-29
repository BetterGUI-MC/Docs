---
title: Animated Button
---

# {{ $frontmatter.title }}

This is a dynamic button which displays the frame buttons one-by-one.

## Format

```yaml
button-name:
  type: animated
  update: <ticks>
  shift: <number>
  reverse: <true/false>
  child:
    button1:
      <button-settings>
    button2:
      <button-settings>
    button3:
      <button-settings>
    ...
```

## Note

* `child`: the list of [Button](/overview) that serves as the frames of the animattion.
* `update`: the ticks between two frames.
* `shift`: the index of the starting frame.
  * If you set a positive value (`n`), the `n`-th frame will be the start frame.
  * If you set a negative value (`-n`), the `n`-th frame from the bottom will be the start frame.
* `reverse`: whether to flip the frames, so that the frames will go bottom-up.

## Example

```yaml
animated-icon:
  type: animated
  update: 5
  child:
    frame_icon1:
      name: "&cFrame 1"
      id: red_wool
      lore:
        - "This is part of an animated icon"
    frame_icon2:
      name: "&aFrame 2"
      id: green_wool
      lore:
        - "This is part of an animated icon"
    frame_icon3:
      name: "&bFrame 3"
      id: light_blue_wool
      lore:
        - "This is part of an animated icon"
```