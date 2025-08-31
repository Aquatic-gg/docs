---
title: Visuals
---

# VISUALS

Our plugin has a special system called "interactables" which allows for multiple types of visuals. It includes ModelEngine, BetterModel, entities, and blocks.

You are also able to stack multiple types of interactables together for example having multiple blocks and a ModelEngine crate.

## MODELENGINE

```yml
interactables:
  - type: MODELENGINE
    model: aquaticcrate1 #.bb file name
    offset: "0;0;0" #X, Y, Z
```

## BETTERMODEL

```yml
interactables:
  - type: BETTERMODEL
    model: aquaticcrate1 #.bb file name
    offset: "0;0;0" #X, Y, Z
```

## BLOCKS

```yml
interactables:
  - type: BLOCK
    material: BARRIER #Block type
    offset: "0;0;0" #X, Y, Z
  - type: BLOCK
    material: WHITE_SHULKER_BOX #Block type
    face: UP #Faces the shulker pointing up
    offset: "0;1;0" #X, Y, Z
```

<Page url="/docs/aquaticcrates/miscellaneous/blocksettings">Block Settings</Page>

## ENTITY

```yml
interactables:
  - type: DISPLAY_ENTITY
    offset: "0;1;0" #X, Y, Z
    properties:
      display-item:
        material: DIAMOND
```

**Entity properties page is in progress!**

## ITEM MODEL
This is a short version of the Entity interactable for spawning the Item Display entity.

```yml
interactables:
  - type: ITEM_MODEL
    offset: "0;1;0" #X, Y, Z
    item:
      material: DIAMOND
    item-transform: NONE
    scale: "1;1;1"
    billboard: FIXED
```

## NPC

```yml
interactasbles:
  - type: NPC
    offset: "0;1;0" #X, Y, Z
    skin:
      value: <the skin value>
      signature: <the skin signature> # You can use mineskin.org to get those 2 values
```