---
title: Predicate Button
---

# {{ $frontmatter.title }}

This is a conditional button which displays the button if the requirements are met, or the fallback button otherwise.

## Format

```yaml
button-name:
  type: predicate
  button:
    <button-settings>
  fallback:
    <button-settings>
  view-requirement:
    <requirement-set>
    <requirement-set>
    <requirement-set>
    ...
  check-only-on-creation: <true/false>
  click-requirement:
    left:
      <requirement-set>
      <requirement-set>
      <requirement-set>
      ...
    right:
      <requirement-set>
      <requirement-set>
      <requirement-set>
      ...
    middle:
      <requirement-set>
      <requirement-set>
      <requirement-set>
      ...
    ...
    default:
      <requirement-set>
      <requirement-set>
      <requirement-set>
      ...
```

## Note

* `view-requirement`: the [Requirement](/requirement/overview) to check before displaying the [Button](/overview).
* `button`: the [Button](/overview) to show if the `view-requirement` are met.
* `fallback`: the fallback [Button](/overview) to show if the `view-requirement` are not met.
* `click-requirement`: the pairs of [Click Type](/misc/click) & [Requirement](/requirement/overview) to check when the button is clicked.
* `check-only-on-creation`: whether to only check `view-requirement` when the menu is opened.

## Example

```yaml
permission:
  SLOT: 1
  type: predicate
  CLICK-REQUIREMENT:
    default:
      permission:
        PERMISSION: bettergui.test
        fail-command: 'tell: &cYou don''t have the correct permission!'
  button:
    COMMAND: 'tell: &a[v] You have the correct permission!'
    NAME: '&8Permission test'
    LORE:
      - 'To use this item, you need the'
      - 'permission "bettergui.test".'
      - 'Otherwise, a configurable error'
      - 'message will be displayed.'
    ID: iron bars
```

```yaml
level-view-requirement:
  type: predicate
  slot: 2
  button:
    id: exp_bottle
    name: "&cA exp bottle"
    lore:
      - "You will see this icon when the level is higher than 5"
  fallback:
    id: stone
    name: "&cA stone"
    lore:
      - "You will see this icon when the level is lower than 5"
  view-requirement:
    level:
      level: 5
```