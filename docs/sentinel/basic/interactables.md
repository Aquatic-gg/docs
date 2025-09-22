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
  state1: # can be any ID
    type: MODELENGINE
    model: example1
    offset: "0;0.5;0" # X, Y, Z
    spawned-by-default: true # if true this is what model will be spawned first
  state2:
    type: MODELENGINE
    model: example2
    offset: "0;0.0;0" # X, Y, Z
    spawned-by-default: false
```