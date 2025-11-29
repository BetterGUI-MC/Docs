---
title: Pattern Mask
---

# {{ $frontmatter.title }}

It is a mask that allows you to create a pattern of buttons. The [Buttons](button/overview.md) are elements that can be used to draw on a grid-like pattern.

## Format

```yaml
mask-name:
  mask: pattern
  pattern:
    - "xxxxxxxxx"
    - "x       x"
    - "x       x"
    - "x       x"
    - "xxxxxxxxx"
  child:
    button-name-1:
      <button-settings>
    button-name-2:
      <button-settings>
    ...
```

## Note

* `pattern`: The pattern that will be drawn. The pattern is a list of strings. Each string represents a row of the pattern. The length of each string must be the same. The character in the string represents the button that will be drawn on that position. The character must be unique.
* The name of each button in the `child` section is the character that is used to draw on the pattern. The character must be unique.

## Example

```yaml
demo-slot:
  mask: pattern
  pattern:
    - "xxxxxxxxx"
    - "x       x"
    - "x       x"
    - "x       x"
    - "x       x"
    - "xxxxxxxxx"
  child:
    x:
      id: emerald
      name: "&a&lEmerald"
```

![Pattern 1](pattern-1.png)

```yaml
demo-slot:
  mask: pattern
  pattern:
    - "xxxxxxxxx"
    - "x       x"
    - "x 1 1 1 x"
    - "x  2 2  x"
    - "x       x"
    - "xxxxxxxxx"
  child:
    x:
      id: black_stained_glass_pane
      name: "&r"
    ' ':
      id: gray_stained_glass_pane
      name: "&r"
    1:
      id: emerald
      name: "&a&lEmerald"
    2:
      id: diamond
      name: "&b&lDiamond"
```

![Pattern 2](pattern-2.png)