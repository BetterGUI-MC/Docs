---
title: Adventure Component
---

# {{ $frontmatter.title }}

For some components that display Text (label, title, etc.), there are variants that can be used for advanced purposes.

This page will provide the possible ways to use the Adventure Component.

## MiniMessage

> Support: PaperMC

You can use MiniMessage to format text in your components by wrapping the key option in either the prefix `mini-` or the postfix `$`. For example:
- `title` will be `mini-title` or `title$`
- `label` will be `mini-label` or `label$`

```yaml
name:
  type: text
  text$: "Hello <rainbow>world</rainbow>, isn't <blue><u><click:open_url:'https://docs.advntr.dev/minimessage'>MiniMessage</click></u></blue> fun?"
```

### MiniPlaceholders

You can use the placeholders provided by MiniPlaceholders to display dynamic information in your components.

```yaml
ping:
  type: text
  text$: "<player_name>: <player_ping>"
```

## JSON

> Support: PaperMC, PacketEvents

You can use JSON to format text in your components by wrapping the key option in either the prefix `json-`. For example:
- `title` will be `json-title`
- `label` will be `json-label`

```yaml
json:
  type: text
  json-text: '["",{"text":"Welcome "},{"text":"to","italic":true},{"text":" BetterDialogs","bold":true,"color":"yellow"}]'
```

## Example

```yaml
menu-settings:
  menu-type: notice-dialog
  title: "Example Dialog"
  command: exampledialog

name:
  type: text
  text$: "Hello <rainbow>world</rainbow>, isn't <blue><u><click:open_url:'https://docs.advntr.dev/minimessage'>MiniMessage</click></u></blue> fun?"

ping:
  type: text
  text$: "<player_name>: <player_ping>"

json:
  type: text
  json-text: '["",{"text":"Welcome "},{"text":"to","italic":true},{"text":" BetterDialogs","bold":true,"color":"yellow"}]'
```

![Example](adventure/example.png)None