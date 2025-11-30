---
title: Template Mask
order: 13
---

# {{ $frontmatter.title }}

While you are creating menus with masks, you may find yourself repeating the same mask settings over and over again. This is where the template mask comes in handy. It allows you to create a template mask and use it in other masks.

## Format

```yaml
mask-name:
  mask: template
  template: <name> # The name from template folder
  variable:
    <variable1>: <value1>
    <variable2>: <value2>
    ...
  <mask-settings>
```

## Template Folder

The template folder (located at `plugins/BetterGUI/addon/MaskedGUI/template`) is a folder containing `yml` files defining common masks to use in all menus. That means you can create a template mask by simply creating a `yml` file in the template folder, add the common mask settings, and use it in other masks.

## Note

* `variable`: The variable is a way to pass values to the template mask. Check out [Use `variable` option](/button/template#use-variable-option) for more information.

## Example

```yaml
# Template File
test-pattern:
  mask: pattern
  button:
    "*":
      id: purple_stained_glass_pane
      name: "&b&lBody"
    "x":
      id: red_stained_glass_pane
      name: "&c&lTarget"
    "#":
      id: pink_stained_glass_pane
      name: "&a&lHead"
```

```yaml
demo-slot:
  mask: animated
  update: 3
  child:
    1:
      mask: template
      template: test-pattern
      pattern:
      - "......x.."
      - "........."
      - "........."
    2:
      mask: template
      template: test-pattern
      pattern:
      - "......x.."
      - "........."
      - "#........"
    3:
      mask: template
      template: test-pattern
      pattern:
      - "......x.."
      - "........."
      - "*#......."
    4:
      mask: template
      template: test-pattern
      pattern:
      - "......x.."
      - "........."
      - "**#......"
    5:
      mask: template
      template: test-pattern
      pattern:
      - "......x.."
      - "..#......"
      - "***......"
    6:
      mask: template
      template: test-pattern
      pattern:
      - "..#...x.."
      - "..*......"
      - ".**......"
    7:
      mask: template
      template: test-pattern
      pattern:
      - "..*#..x.."
      - "..*......"
      - "..*......"
    8:
      mask: template
      template: test-pattern
      pattern:
      - "..**#.x.."
      - "..*......"
      - "........."
    9:
      mask: template
      template: test-pattern
      pattern:
      - "..***#x.."
      - "........."
      - "........."
    10:
      mask: template
      template: test-pattern
      pattern:
      - "..****#.."
      - "........."
      - "........."
    11:
      mask: template
      template: test-pattern
      pattern:
      - "...****.."
      - "......#.."
      - "........."
    12:
      mask: template
      template: test-pattern
      pattern:
      - "....***.."
      - "......*.."
      - "......#.."
    13:
      mask: template
      template: test-pattern
      pattern:
      - ".....**.."
      - "......*.."
      - "......*#."
    14:
      mask: template
      template: test-pattern
      pattern:
      - "......*.."
      - "......*.."
      - "......**#"
    15:
      mask: template
      template: test-pattern
      pattern:
      - "........."
      - "......*.."
      - "......***"
    16:
      mask: template
      template: test-pattern
      pattern:
      - "........."
      - "........."
      - "......***"
    17:
      mask: template
      template: test-pattern
      pattern:
      - "........."
      - "........."
      - ".......**"
    18:
      mask: template
      template: test-pattern
      pattern:
      - "........."
      - "........."
      - "........*"
    19:
      mask: template
      template: test-pattern
      pattern:
      - "........."
      - "........."
      - "........."
```

![Template 1](template/template-1.gif)