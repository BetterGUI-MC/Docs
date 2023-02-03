+++
title = "Bungee Link"
weight = 1
+++

{{% button href="https://github.com/BetterGUI-MC/BungeeLink/" style="gray" icon="code" %}}Code{{% /button %}} {{% button href="https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/BungeeLink/" style="green" icon="download" %}}Download{{% /button %}}

{{% notice warning %}}
Depend: [BungeeCord](https://www.spigotmc.org/wiki/bungeecord/) or its forks
{{% /notice %}}

## Action

### Send To Server

#### Format
* `server: <server-name>`

#### Description
This action will send the player to the server `<server-name>`

#### Example
```yaml
send-to-pvp:
  slot: 1
  id: diamond sword
  name: "&c&lPVP"
  lore:
  - "&fGo to PVP Server"
  command: "server: pvp"
```

### Alert

#### Format
* `alert: <message>`

#### Description
This action will send `<message>` to all servers in the network

#### Example
```yaml
ping-everyone:
  slot: 1
  id: paper
  name: "&ePing @everyone"
  command: "alert: &b&l@everyone"
```
