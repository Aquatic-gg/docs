---
title: Visuals
---

# VISUALS

Our plugin has a special system called "interactables" which allows for multiple types of visuals. It includes ModelEngine, BetterModel, entities, and blocks.

You are also able to stack multiple types of interactables together for example having multiple blocks and a ModelEngine crate.

## MODELENGINE

```
interactables:
  - type: MODELENGINE
    model: aquaticcrate1 #.bb file name
    offset: "0;0;0" #X, Y, Z
```

## BETTERMODEL

```
interactables:
  - type: BETTERMODEL
    model: aquaticcrate1 #.bb file name
    offset: "0;0;0" #X, Y, Z
```

## BLOCKS

```
interactables:
  - type: BLOCK
    material: BARRIER #Block type
    offset: "0;0;0" #X, Y, Z
  - type: BLOCK
    material: WHITE_SHULKER_BOX #Block type
    face: UP #Faces the shulker pointing up
    offset: "0;1;0" #X, Y, Z
```
