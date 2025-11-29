+++
title = "Switch Icon"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/SwitchIcon/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/SwitchIcon/" style="green" icon="download" %}}Download{{% /button %}}

## Format
```yaml
button-name:
  type: switch
  child:
    button1:
      <button-settings>
    button2:
      <button-settings>
    button3:
      <button-settings>
    ...
```

## Description
This is a button that changes everytime the user clicks

## Example
```yaml
switch-icon:
  type: switch
  child:
    frame_icon1:
      name: "&cFrame 1"
      id: red_wool
    frame_icon2:
      name: "&aFrame 2"
      id: green_wool
    frame_icon3:
      name: "&bFrame 3"
      id: light_blue_wool
```
