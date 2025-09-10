---
title: "Guaranteed Reward"
---
# GUARANTEED REWARDS

Using guaranteed rewards you can setup what kind of reward should be won at Xth crate opening.

For example when a player opens a crate for 10th time, the random reward is replaced with the guaranteed reward.

**Example:**

```yml
rewards: # Your regular rewards pool
  example-reward: # Reward used as guaranteed
    chance: 10
    item:
      material: DIAMOND
  another-reward:
    ...

guaranteed-rewards:
  example-reward: 10 # Id of the reward - amount of openings needed
```
