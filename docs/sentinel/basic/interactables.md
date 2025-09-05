---
title: "Interactables"
---
# INTERACTABLES
There are 2 options of interactables. One creates an interactable globally and the other is per player. 

## GLOBAL INTERACTABLE
This example uses a ModelEngine model.

```yml
interactables:
  - type: MODELENGINE 
    model: example1
    offset: "0;0.5;0" # X, Y, Z
```

## PER PLAYER INTERACTABLE
This example allows you to create multiple states that a player is able to see. 

```yml
interactables: []
player-interactables:
  state1: 
    type: MODELENGINE
    model: acratesdisplay
    offset: "0;0.5;0" # X, Y, Z
    spawned-by-default: true
  state2:
    type: MODELENGINE
    model: discordwumpus2
    offset: "0;0.0;0" # X, Y, Z
    spawned-by-default: false
```