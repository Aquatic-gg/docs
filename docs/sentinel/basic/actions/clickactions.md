---
title: "Click Actions"
---
# CLICK ACTIONS

Click actions are when players click on the npc.

## TYPES

What type of hit should we register.

Options: `LEFT`, `RIGHT`, `SHIFT_LEFT`, `SHIFT_RIGHT`

## ACTIONS

### PLAY MODEL ANIMATION (MODELENGINE)

```yml
    - type: play-model-animation
      id: example-model
      animation: play
      fade-in: 0.0 # Optional
      fade-out: 0.0 # Optional
      speed: 1.0 # Optional
```

### PLAY MODEL ANIMATION (BETTERMODEL)

```yml
    - type: play-bm-model-animation
      id: example-model
      animation: play
      fade-in: 0.0 # Optional
      fade-out: 0.0 # Optional
      speed: 1.0 # Optional
```

### SHOW PLAYER INTERACTABLE

:::tip

Good for lookat/off actions!

:::

```yml
    - type: show-player-interactable
      id: state1 # the id of the interactable
```

### MESSAGE

```yml
    - type: message
      message: "Your message"
```

### TITLE

```yml
    - type: title
      title: "Your Title"
      subtitle: "Subtitle text"
      fade-in: 20
      stay: 20
      fade-out: 20
```


