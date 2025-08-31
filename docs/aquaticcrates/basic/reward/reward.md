---
title: Rewards
---

# REWARDS SYSTEM

Rewards on Aquatic Crates are extremely configurable. Take a look down below on all the options.


## POSSIBLE REWARDS

Possible rewards is a range that can be set (min-max) and random amount is generated while opening the crate.

You can also create groups of ranges with given chances, so the plugin chooses the chance group first and then generates the random amount of that group.

```yml
possible-rewards:
  - min: 1
    max: 2
    chance: 100
```

Having min set to 1 and max to 2 means that the player can win 1-2 rewards from the crate that are randomly chosen


```yml
possible-rewards:
  - min: 1
    max: 1
    chance: 100
```

Having min set to 1 and max to 1 means that the player can win only 1 reward

### OTHER POSSIBLE REWARD EXAMPLES

```yml
possible-rewards:
  - min: 1
    max: 1
    chance: 25
  - min: 2
    max: 2
    chance: 25
  - min: 3
    max: 3
    chance: 25
  - min: 4
    max: 4
    chance: 25
```

```yml
possible-rewards:  
  - min: 1
    max: 2
    chance: 80
  - min: 2
    max: 5
    chance: 20
```