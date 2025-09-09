---
title: Open Restrictions
---

# OPEN RESTRICTIONS

Open conditions of the crate. When conditions are not met, fail-actions can be executed and fail-animation can be played.

<Page url="aquaticcrates/basic/animations/failanimation">Open Animation</Page>

All conditions that have the ``negate`` option you can switch the returned boolen. (from true to false, from  false to true)

``negate: true``

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


### All ANIMATIONS GLOBAL RADIUS RESTRICTION

Using this you can limit how many animations can be played by ANY crate with ANY animation by ANY player in a defined radius.

```yml
open-restrictions:
  - type: all-global
    radius: 1.0
```

### ALL ANIMATIONS PER PLAYER RADIUS RESTRICTION

Using this you can limit how many animations can be played by ANY crate with ANY animation by a certain player in a defined radius.

```yml
open-restrictions:
  - type: all-player
    radius: 1.0
```

### PER ANIMATION GLOBAL RADIUS RESTRICTION

Using this you can limit how many current crate animations by ANY player in a defined radius.

```yml
open-restrictions:
  - type: global
    radius: 1.0
```

### PER ANIMATION PER PLAYER RADIUS RESTRICTION

Using this you can limit how many current crate animations by a certain player in a defined radius.

```yml
open-restrictions:
  - type: player
    radius: 1.0
```

### GLOBAL OPENINGS LIMIT

Limit of how many times a crate can be opened in TOTAL by all players.

```yml
open-restrictions:
  - type: global-open-limit
    timeframe: ALLTIME
    limit: 10
```

### PLAYER OPENINGS LIMIT

Limit of how many times a crate can be opened in TOTAL by a certain player.

```yml
open-restrictions:
  - type: per-player-open-limit
    timeframe: ALLTIME
    limit: 10
```

### EMPTY INVENTORY SLOTS

Checks if a player has a certain amount of empty slots in their inventory.

```yml
open-restrictions:
  - type: full-inventory
    slots: 2
```

### WORLD BLACKLIST

Blacklist of worlds where crates cannot be opened.

```yml
open-restrictions:
  - type: world-blacklist
    blacklist:
      - "SPAWN"
```
