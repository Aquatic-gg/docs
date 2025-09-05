---
title: "Actions"
---

# ACTIONS
There are 3 different types of configurable actions. Pre, During, and end actions. Read down below to view info on each one. Also every Waves type is supported with actions.

This example's event duration is set to 2000 ticks.

## PRE EVENT ACTIONS
You are able to define actions that occur before the event begins on each tick.

```yml
    delayed:
      duration: 100 # ticks
      actions:
        0:
          - type: message
            message: "Event is starting in 5 seconds!"
        20:
          - type: message
            message: "Event is starting in 4 seconds!"
        40:
          - type: message
            message: "Event is starting in 3 seconds!"
        60:
          - type: message
            message: "Event is starting in 2 seconds!"
        80:
          - type: message
            message: "Event is starting in 1 seconds!"
```

## DURING EVENT ACTIONS
You are able to define actions that occur during the event on each tick. You are also able to use the internal placeholders for broadcasting leaderboard position and IGN. Checkout COMPATIBILITY to view them.

```yml
    actions:
      "every-200": #reruns this action every 200 ticks
        - type: message
          message: 
          - " "
          - "#1 %leaderboard-name-1% - %leaderboard-value-1%"
          - "#2 %leaderboard-name-2% - %leaderboard-value-2%"
          - "#3 %leaderboard-name-3% - %leaderboard-value-3%"
          - " "
      "every-1": #reruns this every tick
        - type: actionbar
          message: "Score: %leaderboard-value-self% | Rank: %leaderboard-rank%"
      1900:
        - type: message
          message: "Event is ending in 5 seconds!"
      1920:
        - type: message
          message: "Event is ending in 4 seconds!"
      1940:
        - type: message
          message: "Event is ending in 3 seconds!"
      1960:
        - type: message
          message: "Event is ending in 2 seconds!"
      1980:
        - type: message
          message: "Event is ending in 1 seconds!"
```

## END EVENT ACTIONS
You are able to define actions that occur after the event on each tick. You are also able to use the internal placeholders for broadcasting the end leaderboard position and IGN. Checkout COMPATIBILITY to view them.

```yml
    end-actions:
      - type: message
        message:
          - " "
          - "Event has ended!"
          - " "
          - "#1 %leaderboard-name-1% - %leaderboard-value-1%"
          - "#2 %leaderboard-name-2% - %leaderboard-value-2%"
          - "#3 %leaderboard-name-3% - %leaderboard-value-3%"
          - " "
```