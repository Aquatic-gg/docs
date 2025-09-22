---
title: "Nearby Actions"
---
# NEARBY ACTIONS

Nearby actions allow you to change the model or run an action when a player reaches within the range of the model.

```yml
nearby-actions:
  - range: 10 # Blocks
    cooldown: 100 # Ticks - so players cannot spam the nearby actions
    actions:
      - type: play-model-animation
        animation: example
      - type: message
        message: "You have entered the range"
      ...
```