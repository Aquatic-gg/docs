# COMPATIBILITY
We aim to support as many plugins as possible. If you are looking for us to add a new plugin to support please let us know in our discord!

## MODELENGINE
To specify ModelEngine you need to define it in the type (refer to interactable section). Then the model id is the same as the .bb file name.

```
  - type: MODELENGINE
    model: iron_crate_1
```

You are also able to define animations in the animation section by doing `animation: <name>`. More info in the animation docs section.

## BETTERMODEL
To specify BetterModel you need to define it in the type (refer to interactable section). Then the model id is the same as the .bb file name.

```
  - type: BETTERMODEL
    model: iron_crate_1
```

You are also able to define animations in the animation section by doing `animation: <name>`. More info in the animation docs section.

## NEXO
To specify using nexo as a key or a reward it's very simple!

`material: NEXO:<id>`

## ITEMSADDER
To specify using ItemsAdder as a key or a reward it's very simple!

`material: itemsadder:<id>`

## ORAXEN
To specify using Oraxen as a key or a reward it's very simple!

`material: oraxen:<id>`

## PLACEHOLDERAPI