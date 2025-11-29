---
title: Simple Mask
---

# {{ $frontmatter.title }}

This is the default mask if you don't specify any mask. That means that all [Buttons](button/overview.md) are Simple Mask by default.

```yaml
multi-slot:
  mask: simple # You can omit this line. It's the default mask.
  slot: 0-8,45,46,47-52
  type: animated
  update: 10
  child:
    frame1:
      name: ' '
      id:
        - black stained glass pane
        - STAINED_GLASS_PANE:15
    frame2:
      name: ' '
      id:
        - gray stained glass pane
        - STAINED_GLASS_PANE:7
    frame3:
      name: ' '
      id:
        - white stained glass pane
        - STAINED_GLASS_PANE
```