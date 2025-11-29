---
title: ASCII-Placeholders
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/ASCII-Placeholders/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ASCII-Placeholders/)

## Config.yml
```yaml
# This is the config for all static variables
# Format: {ascii_<name_of_variable>}
# Example: {ascii_<3}, {ascii_*}, {ascii_cross}, e.g.
#
# List of unicode symbols: http://www.fileformat.info/info/unicode/index.htm
<3: \u2764
"*": \u2605
"**": \u2739
"p": \u2022
"v": \u2714
"+": \u25C6
"++": \u2726
"x": \u2588
"/": \u258C
"cross": \u2720
"arrow_right": \u27A1
"arrow_left": \u2B05
"arrow_up": \u2B06
"arrow_down": \u2B07
```

## Variable
* `{ascii_<name>}` gets the value (symbol) from the `config.yml` at the key `<name>`