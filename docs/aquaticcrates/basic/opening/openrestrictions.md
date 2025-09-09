---
title: Open Restrictions
---

# OPEN RESTRICTIONS

Open conditions of the crate. When conditions are not met, fail-actions can be executed and fail-animation can be played.

<Page url="aquaticcrates/basic/animations/failanimation">Open Animation</Page>

All conditions got ``negate`` option using which you can switch the returned boolen. (from true to false, from  false to true)

``negate: true``

## Condition types

### Permission

Limits opening to players with certain permission

```yml
open-restrictions:
  - type: permission
    permission: "example.permission"
```

### Week repeat

Checks if current week of year is divisible by number.

```yml
open-restrictions:
  - type: week-repat
    week: 2 # Every 2nd week
```

### Day repeat

Checks if current day of year is divisible by number.

```yml
open-restrictions:
  - type: day-repat
    week: 2 # Every 2nd week
```


### All animations global radius restriction

Using this you can limit how many animations can be played by ANY crate with ANY animation by ANY player in defined radius.

```yml
open-restrictions:
  - type: all-global
    radius: 1.0
```

### All animations per player radius restriction

Using this you can limit how many animations can be played by ANY crate with ANY animation by certain player in defined radius.

```yml
open-restrictions:
  - type: all-player
    radius: 1.0
```

### Per animation global radius restrction

Using this you can limit how many current crate's animations by ANY player in defined radius.

```yml
open-restrictions:
  - type: global
    radius: 1.0
```

### Per animation per player radius restriction

Using this you can limit how many current crate's animations by certain player in defined radius.

```yml
open-restrictions:
  - type: player
    radius: 1.0
```

### Global openings limit

Limit of how many times can be crate opened in TOTAL by all players.

```yml
open-restrictions:
  - type: global-open-limit
    timeframe: ALLTIME
    limit: 10
```

### Player openings limit

Limit of how many times can be crate opened in TOTAL by certain player.

```yml
open-restrictions:
  - type: per-player-open-limit
    timeframe: ALLTIME
    limit: 10
```

### Empty Inventory Slots

Checks if player has certain amount of empty slots in his inventory.

```yml
open-restrictions:
  - type: full-inventory
    slots: 2
```

### World blacklist

Blacklist of worlds where crate cannot be opened.

```yml
open-restrictions:
  - type: world-blacklist
    blacklist:
      - "SPAWN"
```
