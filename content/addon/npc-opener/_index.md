+++
title = "NPC Opener"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/NPC-Opener/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/NPC-Opener/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [Citizens](https://www.spigotmc.org/resources/citizens.13811/)
{{% /notice %}}

## Command
| Command | Permission | Description |
| --- | --- | --- |
| `setnpcmenu  <menu> [isLeftClick] [isRightClick] [args]` | `bettergui.setnpcmenu` | Set the NPC the user selecting to be the trigger to open the `<menu>` with the arguments `[args]`. You can enable `[isLeftClick]` & `[isRightClick]` (`true/false`) to specify if the menu can be opened by left-clicking and/or right-clicking the NPC |
| `removenpcmenu` | `bettergui.removenpcmenu` | Remove the *open-menu* trigger of the NPC the user selecting |
