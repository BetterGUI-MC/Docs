+++
title = "World and Region"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/World-And-Region/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/World%20And%20Region/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [WorldGuard](https://dev.bukkit.org/projects/worldguard) (for Region & Flag)
{{% /notice %}}

## Variable
* `{region}` gets the name of the region the user standing on
* `{flag_<flag_name>}` gets the status of the flag `<flag_name>` at the region the user standing on

## Requirement

### World

#### Format
```yaml
world: <world_name>
```
```yaml
world:
- <world_name>
- <world_name>
```

#### Description
This requirement checks if the player is at the world `<world_name>`

### Region

#### Format
```yaml
region: <region_name>
```
```yaml
region:
- <region_name>
- <region_name>
```

#### Description
This requirement checks if the player is at the region `<region_name>`

### Region Owner

#### Format
```yaml
region-owner: <region_name>
```
```yaml
region-owner:
- <region_name>
- <region_name>
```

#### Description
This requirement checks if the player is the owner of the region `<region_name>`

### Region User

#### Format
```yaml
region-user: <region_name>
```
```yaml
region-user:
- <region_name>
- <region_name>
```

#### Description
This requirement checks if the player is the user of the region `<region_name>`

### Flag

#### Format
```yaml
flag:
  flag1: <value1>
  flag2: <value2>
  flag3: <value3>
  ...
```

#### Description
This requirement checks if the status of the `flag` at the region the player standing on matches the `value`
