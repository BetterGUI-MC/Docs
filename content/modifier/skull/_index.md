+++
title = "Skull"
weight = 10
+++

This modifier will set the skull of the item.

## Format

```yaml
skull: <skull>
head: <skull>
skull-owner: <skull-owner>
```

## Note

* `<skull>` accepts a player name, an UUID (unique id), or a `texture.minecraft.net` URL

## Example

```yaml
skull:
  position-x: 1
  position-y: 1
  name: "&bSkull"
  id: player_head
  skull: "HSGamer"
  #skull: "7acc67dc-8b84-4f8d-b7ad-ec81e758f5a1"
  #skull: "http://textures.minecraft.net/texture/ffcdae586b52403b92b1857ee4331bac636af08bab92ba5750a54a83331a6353"

per-player-skull:
  position-x: 2
  position-y: 1
  name: "&bPer Player Skulls"
  id: player_head
  skull: "{player}"
```
