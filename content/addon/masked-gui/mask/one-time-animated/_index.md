+++
title = "One-Time Animated Mask"
weight = 7
+++

This is a special type of [Animated Mask]({{% ref "../animated" %}}) that only plays once. It will not loop back to the first frame after it reaches the last frame.

## Format

```yaml
mask-name:
  mask: animated
  update: <ticks>
  async: <true/false>
  keep-last: <true/false>
  child:
    mask-1:
      <mask-settings>
    mask-2:
      <mask-settings>
    ...
```

## Note

* `keep-last`: Whether the last frame will be kept after the animation is finished. The default value is `false`.

## Example

```yaml
demo-slot:
  mask: one-time-animated
  update: 5
  child:
    frame1:
      slot: 0-8
      id: black_stained_glass_pane
      name: "&c&lFrame 1"
    frame2:
      slot: 9-17
      id: black_stained_glass_pane
      name: "&c&lFrame 2"
    frame3:
      slot: 18-26
      id: black_stained_glass_pane
      name: "&c&lFrame 3"
    frame4:
      slot: 27-35
      id: black_stained_glass_pane
      name: "&c&lFrame 4"
    frame5:
      slot: 36-44
      id: black_stained_glass_pane
      name: "&c&lFrame 5"
    frame6:
      slot: 45-53
      id: black_stained_glass_pane
      name: "&c&lFrame 6"
```

![One-Time Animated 1](one-time-animated-1.gif)
