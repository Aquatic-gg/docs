---
title: Reward Showcase
---

# REWARD SHOWCASE

Reward showcase is a relatively new system which simplifies how rewards are displayed in animations. It gives the option to change every single reward and how it handles. For example: type, interactable, hologram, and more...

**Example**
```yml
reward-showcase:
  type: EMPTY
  hologram: []
  hologram-translation: "x;y;z"
  interactables:
    - type: MODELENGINE
      model: example_model
      offset: "0;0;0"
  spawn-actions:
    - type: message
      message: "Reward showcase has been spawned"
  despawn-actions:
    - type: message
      message: "Reward showcase has been despawned"
```

Options:
- ``hologram`` - Hologram of the showcase, read more in the **Hologram** page!

- ``hologram-translation`` - Offset from the base location of the spawned reward showcase.

- ``interactables`` - Interactables that are going to be spawned along with the reward showcase.

- ``spawn-actions`` - Animation actions that are going to be executed when the reward showcase is spawned.

- ``despawn-actions`` - Animation actions that are going to be executed when the reward showcase is despawned or reward of the showcase is updated.

<Page url="aquaticcrates/miscellaneous/holograms">Holograms</Page>
<Page url="aquaticcrates/basic/visuals">Visuals (Interactables)</Page>

## ITEM REWARD SHOWCASE
This type spawns an item entity (same as dropped item).

```yml
reward-showcase:
  type: ITEM
  item:
    material: STONE
  hologram: []
  hologram-translation: "x;y;z"
  interactables:
    - type: MODELENGINE
      model: example_model
      offset: "0;0;0"
  spawn-actions:
    - type: message
      message: "Reward showcase has been spawned"
  despawn-actions:
    - type: message
      message: "Reward showcase has been despawned"
```

Options:
- ``item`` - Item, that is going to be used for the item showcase. You can completely ignore this option if you want to use the item of the reward!

<Page url="aquaticcrates/miscellaneous/itemsettings">Item Settings</Page>

## EMPTY REWARD SHOWCASE
This showcase type was created in order to have complete freedom of what you want to spawn, etc.

Empty Reward showcase does not spawn anything on its own, it only spawns the Interactables, Hologram and the executed actions.

```yml
reward-showcase:
  type: EMPTY
  hologram: []
  hologram-translation: "x;y;z"
  interactables:
    - type: MODELENGINE
      model: example_model
      offset: "0;0;0"
  spawn-actions: []
  despawn-actions: []
```
