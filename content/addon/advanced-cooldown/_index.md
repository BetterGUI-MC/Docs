+++
title = "Advanced Cooldown"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/AdvancedCooldown/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/AdvancedCooldown/" style="green" icon="download" %}}Download{{% /button %}}

## Config.yml
```yaml
# Format:
# <name>: <value>
#
# Example:
# simple-cooldown: 100
simple-cooldown: 100
cooldown-10000: 10000
cooldown-999: 999
```

## Variable
> `<name>` is the cooldown name from the `config.yml`
* `advanced_cooldown_<name>`
* `advanced_cooldown_<name>_s` or `advanced_cooldown_<name>_seconds`
* `advanced_cooldown_<name>_m` or `advanced_cooldown_<name>_minutes`
* `advanced_cooldown_<name>_h` or `advanced_cooldown_<name>_hours`
* `advanced_cooldown_<name>_format_<time-format>`
    * Example Format: `advanced_cooldown_<name>_format_HH:mm:ss`

## Requirement

### Format
```yaml
advanced-cooldown: <name>
```

### Description
* This requirement will check if the player is not in a cooldown timer named `<name>`.
* After checking the requirement, the addon will start the cooldown timer for the player.

### Example
```yaml
advanced-cooldown:
  slot: 1
  id: clock
  name: "&cAdvanced Cooldown"
  command:
    - "tell: &aHello"
  click-requirement:
    left:
      test:
        advanced-cooldown: "simple-cooldown" # from config.yml
      fail-command:
        - "tell: &cYou need to wait {advanced_cooldown_simple-cooldown_s} seconds"
    right:
      test:
        advanced-cooldown: "cooldown-10000" # from config.yml
      fail-command:
        - "tell: &cYou need to wait {advanced_cooldown_cooldown-10000_s} seconds"
    middle:
      test:
        advanced-cooldown: "cooldown-999" # from config.yml
      fail-command:
        - "tell: &cYou need to wait {advanced_cooldown_cooldown-999_s} seconds"
```

## Time Format

| character | duration element |
| --- | --- |
| y | years |
| M | months |
| d | days |
| H | hours |
| m | minutes |
| s | seconds |
| S | milliseconds |

* Example:
    * `HH:mm:ss`: show hours, minutes and seconds
    * `YY:MM:dd HH:mm:ss`: show years, months, days, hours, minutes and seconds
