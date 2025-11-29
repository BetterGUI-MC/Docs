+++
title = "MaskedGUI"
weight = 1
[params]
  alwaysopen = false
  menuPost = ' <i class="fa-solid fa-dollar-sign"></i>'
+++

{{% button href="https://github.com/BetterGUI-MC/MaskedGUI" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://www.spigotmc.org/resources/maskedgui.107475/" style="green" icon="download" %}}Download{{% /button %}}

This is an addon for your existing menus. It introduces new advanced features to make more complex menus and allows for more possibilities, while keeping the same level of simplicity if you are familiar with **BetterGUI**.

Some possible menus you can make with this addon are:
- [A menu with a welcome animation](https://youtu.be/g6r73BCpMU4)
- [Frame-by-frame animation](https://youtu.be/9cmGYL6BTdY)
- [Progress bar](https://youtu.be/txd07psA3NM)
- [Pagination](https://youtu.be/iajNu8t9JnQ)
- _And more!_

## Get Started

After downloading, follow [this guide]({{% ref "basic/addon" %}}) to install the addon.

To start using the addon in your menu, simply set `menu-type` of `menu-settings` to `masked`.

```yaml
menu-settings:
  menu-type: masked
  name: '&c&lExample Menu'
  rows: 6
  ...
```
