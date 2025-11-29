+++
title = "Player List Mask"
weight = 15
+++

This mask is similar to [Button Paginated Mask]({{% ref "../button-paginated" %}}). The only difference is that this mask will fetch all online players and display each of them as a [Button]({{% ref "button/overview" %}}).

## Format

```yaml
mask-name:
  mask: player-list
  slot: <slot>
  cycle: <true/false>
  signal: <signal>
  view-self: <true/false>
  view-offline: <true/false>
  player-update: 20
  viewer-update: 0
  player-condition:
  - condition1
  - condition2
  - condition3
  viewer-condition:
  - condition1
  - condition2
  - condition3
  button:
    <button-settings>
```

## Note

* `cycle`: Whether the buttons should cycle when you reach the end of the page. If this is set to `true`, then when you reach the end of the page, it will go back to the first page. If this is set to `false`, then when you reach the end of the page, it will stop at the last page.
* `signal`: The signal name used by actions to change the page.
* `view-self`: Whether the mask will display the player that opens then menu.
* `view-offline`: Whether the mask will display all offline players instead of just online ones.
* `player-condition`: The list of [Condition Requirement]({{% ref "requirement/condition" %}}) that the player must meet to appear in the list.
* `viewer-condition`: The list of [Condition Requirement]({{% ref "requirement/condition" %}}) that the viewer must meet to see the player's button.
* The difference between `player-condition` and `viewer-condition` is that the `player-condition` will be checked for each online players to gather the list of "passed" players to display in the menu, while `viewer-condition` will be checked between the viewer (who opens the menu) and the player in the "passed" players to determine if the viewer can see the player in the menu.
* `button`: The [Button]({{% ref "button/overview" %}}) to be displayed for each players.
* `player-update`: The ticks to wait before the player list is refreshed.
* `viewer-update`: The ticks to wait before the "passed" player list from the viewer view is refreshed.

## Action

* `next-page: <signal>`: Changes the page to the next page.
* `previous-page: <signal>`: Changes the page to the previous page.
* `set-page(<signal>): <page>`: Changes the page to `<page>`.

## Player Variable

* It's possible to define variables for each players in the list in `player-condition` and `button`
* To do that, the mask introduces 2 new variables:
  * `{current_player_<variable_name>}` to fetch the variable `<variable_name>` of the target player
    * Example:
      * `{player}` -> `{current_player}`
      * `{ping}` -> `{current_player_ping}`
      * `{exp_to_level}` -> `{current_player_exp_to_level}`
  * `{current_player_papi_<placeholder_name>}` to fetch the PlaceholderAPI's placeholder `<placeholder_name>` of the target player

## Example

```yaml
demo-slot:
  mask: player-list
  signal: demo-page-signal # This is the signal name used by actions to change the page.
  slot: 2-1-8-1
  view-self: true
  button:
    id: player_head
    skull: "{current_player}"
    name: "&c{current_player}"
    lore:
    - "&eX: &f{current_player_x}"
    - "&eY: &f{current_player_y}"
    - "&eZ: &f{current_player_z}"
    command: "console: tp {player} {current_player}"
    close-on-click: true

# The button to go to the previous page
previous-button:
  slot: 0
  id: arrow
  name: "&c&lPrevious"
  command: "previous-page: demo-page-signal" # The action to change the page

# The button to go to the next page
next-button:
  slot: 8
  id: arrow
  name: "&a&lNext"
  command: "next-page: demo-page-signal" # The action to change the page
```

![Player List 1](player-list-1.gif)
