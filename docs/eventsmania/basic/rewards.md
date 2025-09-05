---
title: "Rewards"
---

# REWARDS
Rewards are triggered per each leaderboard placement.

```yml
    rewards:
      1: #first place
        - type: message
          message: "You have won first place"
      2: #second place
        - type: message
          message: "You have won second place"
      3: #third place
        - type: message
          message: "You have won third place"
```

Using Waves's action system you can change the type to anything you'd like. The placement limit is unlimited and can be triggered for the 100th placement. 