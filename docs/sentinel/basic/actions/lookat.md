---
title: "Look At Actions"
---
# LOOK AT ACTIONS

Look at actions allow you to change the model based on if a player is looking at or off a model.

For each model a "bound" area must be set.

```yml
look-at:
  corner1: "-2;-2;-2" # X, Y, Z
  corner2: "2;2;2"
```

## LOOK AT

Once looking at a model within bounds. This example hides a model but shows a different one.

```yml
  look-at-actions:
    - type: message
      message: "You are looking at Example"
    - type: show-player-interactable
      id: state2
    - type: hide-player-interactable
      id: state1
    ...
```

## LOOK OFF

Once looking off a model within bounds. This example shows a model but hides a different one.

```yml
  look-off-actions:
    - type: message
      message: "You have stopped looking at Example"
    - type: show-player-interactable
      id: state1
    - type: hide-player-interactable
      id: state2
```