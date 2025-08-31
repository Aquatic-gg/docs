---
title: Win Limits
---

# WIN LIMITS

This feature allows you to set rewards to be won either globally or individually a certain amount of times. Look down below for an example setup.

```yml
rewards:
  exampleReward:
    ...
    global-limits:
      ALLTIME: 1 # This reward can be won just once globally
    per-player-limits:
      ALLTIME: 1 # This reward can be won just once per player
```

Here are the following options how often a player can win a reward.

- `ALLTIME`
- `MONTHLY`
- `WEEKLY`
- `DAILY`