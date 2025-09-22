---
title: "Actions"
---
# ACTIONS

Actions that are able to be ran throughout the plugin.

## PLAY MODEL ANIMATION (MODELENGINE)

```yml
  actions:
    - type: play-model-animation
      id: example-model
      animation: play
      fade-in: 0.0 # Optional
      fade-out: 0.0 # Optional
      speed: 1.0 # Optional
```

## PLAY MODEL ANIMATION (BETTERMODEL)

```yml
  actions:
    - type: play-bm-model-animation
      id: example-model
      animation: play
      fade-in: 0.0 # Optional
      fade-out: 0.0 # Optional
      speed: 1.0 # Optional
```

## SHOW PLAYER INTERACTABLE

:::tip

Good for lookat/off actions!

:::

```yml
  actions:
    - type: show-player-interactable
      id: state1 # the id of the interactable
```

## MESSAGE

```yml
  actions:
    - type: message
      message: "Your message"
```

## TITLE

```yml
    - type: title
      title: "Your Title"
      subtitle: "Subtitle text"
      fade-in: 20
      stay: 20
      fade-out: 20
```


