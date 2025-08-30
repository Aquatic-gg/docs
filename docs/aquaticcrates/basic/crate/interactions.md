---
title: Interactions
---


# INTERACTIONS

Using interactions you can modify what will happen when interacting with the crate. Here's a short example of how it works by default (doesn't need to be added to the crate config to work).

```
interaction:
  RIGHT: # Click type
    type: "open-crate" # Action type
  SHIFT_RIGHT:
    type: "open-crate-instant"
  LEFT:
    type: "preview-crate"
  SHIFT_LEFT:
    type: "destroy-crate" # Only players with "aquaticcrates.admin" can  break it
```

## INTERACTION TYPES

- `LEFT`
- `SHIFT_LEFT`
- `RIGHT`
- `SHIFT_LEFT`

## ACTION TYPES

- `open-crate`
    - Open crate normally with animation (if there is one).
- `open-crate-instant`
    - Open crate instantly skipping animation.
- `preview-crate`
    - Preview crate rewards.
- `destroy-crate'
    - Destroy the crate. Requires `aquaticcrates.admin`.
- `execute-actions`
    - Execute any amount of actions. Find the list here. Here is an example action:

```
  SHIFT_LEFT:
    type: "execute-actions"
    actions:
      - type: "message"
        message: "test message"
```