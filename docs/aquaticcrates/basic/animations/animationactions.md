---
sidebar_position: 4
title: Actions
---
# ANIMATION ACTIONS

## PRE ANIMATION

TODO

## TYPE
There are 3 types of animations, `INSTANT`, `REGULAR`, `CINEMATIC`.

Instant has no animation, regular keeps the player in a physical state, while cinematic teleports the player to a specific location and then runs the animation.

`type: instant` OR `type: regular` OR `type: cinematic`

## CINEMATIC LOCATION
When using the cinematic animation this defines where the location of the player is teleported to and what camera angle the player looks at.

```yaml
  location:
    world: "exampleworld"
    x: 0
    y: 0
    z: 0
    yaw: 0
  camera-location:
    world: "exampleworld"
    x: 0
    y: 0
    z: 0
    yaw: 0
    pitch: 0
```

## PERSONAL
If you want to have other players view the animation or not.

`personal: true`

## SKIPPABLE
Add the option of `shift` to skip animations. By default, this is set to false.

`skippable: true`

## LENGTH
The length of the animation in ticks.

`length: 150`

## TASKS
How animation tasks are ordered using ticks. The end value must be within the specified length to function properly.

```yaml
  tasks:
    0: #on open
      - type: show-model
        model: "example_crate_2"
        animation: "open"
        id: base-model # you can keep this like that
        location-offset: "0;0;0;0;0" # x,y,z,yaw,pitch
    20: #20th tick etc
    ...
````
