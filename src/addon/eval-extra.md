---
title: Eval Extra
---

# {{ $frontmatter.title }} [<Badge type="tip" text="Code" />](https://github.com/BetterGUI-MC/EvalExtra/) [<Badge type="info" text="Download" />](https://ci.codemc.io/job/BetterGUI-MC/view/Addon/job/EvalExtra/)

## Description
* This is an addon to apply math expressions in some settings of the menu
* With this, you can write advanced math in menu. Especially, this addon is useful to write advanced conditions in [Condition Requirement](/requirement/condition)

## Example
```yaml
stone:
  id: stone
  amount: "25 + 3"
```
```yaml
stone:
  id: stone
  amount: "FLOOR(SQRT(18))" # The amount will be the floor value of the square root of 18, which is 4
```
```yaml
test-view-requirement:
  type: predicate
  slot: 1
  button:
    id: exp_bottle
    name: "&cA exp bottle"
    lore:
      - "You will see this icon when the level is higher than 5"
  view-requirement:
    level:
      condition: "{level} > 5" # This will check if the player's level is higher than 5
```

## Operator
* The basic is the use of math operators in the expressions (`+`, `-`, `*`, `/`, etc)
* Examples:
```yaml
amount: "5 + 7" # The amount will be 11
```
```yaml
amount: "{level} % 64 + 1" # The amount will be from 1 to 64, based on the level
```
* Along with math operators, you can also use Boolean operators (`>`, `<`, `=`, `>=`, `<=`, etc) to compare values.
* Example:
```yaml
condition: "{level} > 5" # This will check if the player's level is higher than 5
```
* [Supported Operators](https://github.com/ezylang/EvalEx/tree/2.x#supported-operators)

## Function
* Functions are the process of "input to output", take the input and returns the corresponding output.
* [Functions](https://github.com/ezylang/EvalEx/tree/2.x#supported-functions)
* Example:
```yaml
amount: "FLOOR(SQRT(18))" # The amount will be the floor value of the square root of 18, which is 4
```

### String Functions
* This addon also accepts comparing strings with String Functions
* It includes:
  * `STRCT("this", "is")` check if `is` is in `this` (`this` contains `is`)
  * `STREDW("String", "ing")` check if `String` ends with `ing`
  * `STREQ("str1", "str1")` check if `str1` equals `str1`
  * `STREQIC("str1", "str1")` check if `str1` equals `str1` (case-insensitive)
  * `STRLEN("Hello World")` get the length of `Hello World`
  * `STRMP("String", "String-?")` check if `String` matches the RegExr pattern `String-?`
  * `STRSTW("String", "Str")` check if `String` starts with `Str`

## Skip the Evaluation
* If you want to skip your string from evaluation for some reason, put `[skip-eval]` before your string
  * Example: If you want to skip `1 + 1`, put `[skip-eval]` like this `[skip-eval] 1 + 1`

## Variable

You can evaluate an expression as a variable by using the variable `{eval_<expression>}`

For example:
* `{eval_1 + 2}`
* `{eval_{level} * 100}`
* `{eval_FLOOR(SQRT(18))}`