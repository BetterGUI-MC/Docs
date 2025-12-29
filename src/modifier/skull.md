---
title: Skull
---

# Skull

This modifier will set the skull of the item.

## Format

```yaml
skull: <skull>
head: <skull>
skull-owner: <skull-owner>
```

## Note

* `<skull>` accepts a player name, an UUID (unique id), a Base64 value, or a `texture.minecraft.net` URL

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
  #skull: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTM1ODNkNTNlOWNhZjE3MGUwNWI1MTYxN2E2N2QxMzEwZDJkODExYTUxNTg4NjI5ODZjMTVlMjg2NzhhNTA1ZiJ9fX0="

per-player-skull:
  position-x: 2
  position-y: 1
  name: "&bPer Player Skulls"
  id: player_head
  skull: "{player}"
```