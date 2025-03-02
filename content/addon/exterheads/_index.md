+++
title = "ExterHeads"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/ExterHeads/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/ExterHeads/" style="green" icon="download" %}}Download{{% /button %}}

This addon adds [Item Modifiers]({{% ref "modifier/overview" %}}) to get heads from popular head plugins.

## [Head Database](https://www.spigotmc.org/resources/head-database.14280/)

### Format

```yaml
head-database: <head-id>
head-db: <head-id>
hdb: <head-id>
```

### Example

```yaml
head-item:
  hdb: 1
  name: "&cHead Database"
  lore:
  - ""
  - "&7This is a head item from Head Database"
```

## [TheSilentPro's HeadDB](https://www.spigotmc.org/resources/headdb.84967/)

### Format

```yaml
tsp-head: <head-id>
tsp-head-name: <head-name>
```

### Example

```yaml
head-item:
  tsp-head: 1
  name: "&cHeadDB"
  lore:
  - ""
  - "&7This is a head item from HeadDB"
```

## [zHead](https://www.spigotmc.org/resources/zhead-database-plugin-for-heads.115717/)

### Format

```yaml
zhead: <head-id>
```

### Example

```yaml
head-item:
  zhead: 1
  name: "&czHead"
  lore:
  - ""
  - "&7This is a head item from zHead"
```

## [Skulls](https://www.spigotmc.org/resources/skulls-the-ultimate-head-database.90098/)

### Format

```yaml
skulls: <head-id>
```

### Example

```yaml
head-item:
  skulls: 1
  name: "&cSkulls"
  lore:
  - ""
  - "&7This is a head item from Skulls"
```
