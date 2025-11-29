---
title: XCross
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/XCross/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/XCross/)

## Description
This addon integrates [XSeries](https://github.com/CryptoMorin/XSeries) so that you can use version-independent values in some item modifiers & actions.

## Item Modifier

### Material Modifier

#### Format
```yaml
xmaterial: <material>
xid: <material>
xmat: <material>
```

#### Description
* This modifier will set the `<material>` of the item

#### Example
```yaml
stone-button:
  slot: 1
  xid: stone
```
```yaml
player-head:
  slot: 2
  xid: player_head
```

### Enchantment Modifier

#### Format
```yaml
xenchantment:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```
```yaml
xenchant:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```
```yaml
xenc:
- <enchantment>, [level]
- <enchantment>, [level]
- <enchantment>, [level]
...
```

#### Description
* This modifier will add the `<enchantment>`s to the item
* You can set the `[level]` of the `<enchantment>`. It's optional.

#### Example
```yaml
enchanted-sword:
  NAME: '&aEnchanted sword'
  LORE:
    - 'This sword is glowing.'
  ID: diamond_sword
  XENCHANTMENT:
    - "durability, 1"
  POSITION-X: 1
  POSITION-Y: 1
```

### Potion Effect Modifier

#### Format
```yaml
xpotion:
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
...
```
```yaml
xeffect:
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
- <potion>, [duration], [amplifier]
...
```

#### Description
* This modifier will add the `<potion>` effect to the item.
* You can set the `[duration]` and `[amplifier]` of the `<potion>` effect. These are optional.

#### Example
```yaml
potion:
  position-x: 1
  position-y: 1
  name: "&bPotion"
  id: potion
  xpotion:
    - "SPEED"
    - "WEAKNESS, 30, 1"
```

### Skull Modifier

#### Format
```yaml
xskull: <skull>
xhead: <skull>
```

#### Description
* This modifier will set the `<skull>` of the item
* `<skull>` accepts a player name, an UUID (unique id), an Base64 value, or a `texture.minecraft.net` URL

#### Example
```yaml
skull:
  position-x: 1
  position-y: 1
  name: "&bSkull"
  id: player_head
  xskull: "HSGamer"
  #xskull: "7acc67dc-8b84-4f8d-b7ad-ec81e758f5a1"
  #xskull: "http://textures.minecraft.net/texture/ffcdae586b52403b92b1857ee4331bac636af08bab92ba5750a54a83331a6353"
  #xskull: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmZjZGFlNTg2YjUyNDAzYjkyYjE4NTdlZTQzMzFiYWM2MzZhZjA4YmFiOTJiYTU3NTBhNTRhODMzMzFhNjM1MyJ9fX0="

per-player-skull:
  position-x: 2
  position-y: 1
  name: "&bPer Player Skulls"
  id: player_head
  xskull: "{player}"
```

## Action

### Play Sound

#### Format
* `xsound: <sound>, [volume], [pitch]`
* `xsound: <sound> [volume] [pitch]`

#### Description
* This action will send the `<sound>` to the player
* You can specify the `[volume]` and the `[pitch]` of the `<sound>`. Those are optional

#### Example
* `xsound: BLOCK_NOTE_BLOCK_PLING`
* `xsound: BLOCK_NOTE_BLOCK_PLING 1 2`