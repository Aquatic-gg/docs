---
title: "Reward Requirements"
---
## REWARD REQUIREMENTS

Using reward requirements you can setup requirements that are needed to be met in order to win the reward.

All conditions have a ``negate`` option which you can switch the returned boolen. (from true to false, from  false to true)

``negate: true``

## PREVIEW FALLBACK ITEM

By default the reward is hidden in the preview menu when the conditions are not met, however there's a way to setup a new item which is shown in the preview as a fallback.

```yml
rewards:
  example-reward:
    item:
      material: DIAMOND
    fallback-preview-item:
      material: STONE
      display-name: "Fallback item"
```

## CONDITION TYPES

### PERMISSION

Limits opening to players with certain permission.

```yml
open-restrictions:
  - type: permission
    permission: "example.permission"
```

### WEEK REPEAT

Checks if current week of year is divisible by number.

```yml
open-restrictions:
  - type: week-repat
    week: 2 # Every 2nd week
```

### DAY REPEAT

Checks if current day of year is divisible by number.

```yml
open-restrictions:
  - type: day-repat
    week: 2 # Every 2nd week
```