+++
title = "Alternative Command Listener"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/AlternativeCommandListener/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/AlternativeCommandListener/" style="green" icon="download" %}}Download{{% /button %}}

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
