---
title: Alternative Command Listener
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/AlternativeCommandListener/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/AlternativeCommandListener/)

This addon adds an alternative feature for menu commands to solve the "duplicated command" issue.

## Config.yml

```yaml
# The list of ignored commands
ignored-commands:
- warp test

# Ignore case-sensitive when checking commands
case-insensitive: true

# Should we ignore the commands in ignored-commands
# If set to false, the plugin will do the opposite (override the commands in ignored-commands)
should-ignore: true
```