---
title: View Requirement
---

# {{ $frontmatter.title }}

You can use `view-requirement` to any component so that it will only be shown in the form if the player meets the [Requirement](/requirement/overview).

## Example

```yml
menu-settings:
  menu-type: modal-form
  command: modalform
  title: "Modal Form"
  content: "&eAre you beautiful, &f{player} &e?"

  open-action: "tell: &eYou opened the form"
  close-action: "tell: &cYou closed the form"
  java-action: "tell: &cYou can't open this form because you're not a Bedrock player"

yes:
  text: "&b&lYes"
  click-requirement:
    check-level:
      level:
        value: 10
        take: false
      success-action: "tell: &eThanks for paticipating the form"
      fail-action: "tell: &eImprove yourself..."

no:
  text: "&bNo"
  action: "tell: &aIt's fine, you're beautiful as always"
  view-requirement: # Only show this component if the player meets the following requirement
    check-level: # Check if the level of the player is higher than or equal to 10
      level:
        value: 10
        take: false
```