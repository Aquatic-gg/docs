---
title: Mass Opening
---

# MASS OPEN

Mass opening allows players to open any amount of keys all at once and bypasses any crate animation. Extremely useful if your server gives out tens to hundreds of keys easily.

## KEY

`per-reward-tasks`
    - This triggers an action on each individual action that is ran

`final-tasks`
    - Runs the final actions once the mass opening is complete

`%total-won-excluded`
    - Returns an int of the amount of rewards that were given in the mass open

`%amount%`
    - Stacks the amount of items won of each reward (1x, 2x, etc)

`%reward%`
    - The reward display name

## EXAMPLE

```
mass-open:
  final-tasks:
    - type: message
      message: "<#90EE90>You have won %total-won-excluded% rewards in a mass opening!"
  per-reward-tasks:
    - type: message
      message: "<dark_gray>➥<#FBFFDF> %amount%x %reward%"
```

Once the above section has been added you then also have the option in each reward configuration to disable individual actions that each reward runs. By default every reward action is ran.

```
rewards:
  examplereward:
    item:
      material: STONE
      display-name: "Stone"
    actions:
    - type: message
      message: "You've won a stone."
      mass-open-execute: false # this is the configurable part
```

`mass-open-execute: false` disables the message action being ran ontop of the above mass open `pre-reward-tasks`. It is best to set the message action to false to avoid duplicate messages.