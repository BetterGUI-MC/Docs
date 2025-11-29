---
title: OP Executor
---

# {{ $frontmatter.title }}

This action will execute the command as an operator (`/op`)

{{% notice warning %}}
This action will give the player OP `/op`, execute the `<command>` and then de-op the player. Since it uses `/op`, this action is considered "dangerous". A hacker can use a Crasher to exploit the action.
It's recommended to use [Permission Executor](../permission.md) instead.
{{% /notice %}}

## Format

* `op: <command>`

## Example

* `op: stop`