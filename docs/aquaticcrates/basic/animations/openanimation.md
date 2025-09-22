---
sidebar_position: 1
title: Open Animations
toc_min_heading_level: 2
toc_max_heading_level: 5
---
# OPEN ANIMATION

Open animations are ran when a player successfully opens a crate with all conditional checks and permissions (if used) are passed.

## ACTIONS

All actions available to currently use.

### ENTITY ACTIONS

Customizable entity actions as well as  passanger actions.

#### SHOW ENTITY

```yml
- type: show-entity
  id: "example-entity"
  entity-type: ITEM_DISPLAY
  properties: []
  location-offset: "x;y;z"
```

#### HIDE ENTITY

```yml
- type: hide-entity
  id: "example-entity"
```

#### ADD PASSANGER

```yml
- type: add-passenger
  passenger: "entity:example-entity"
  seat: "entity:another-entity"
```

#### REMOVE PASSANGER

```yml
- type: remove-passenger
  passenger: "entity:example-entity"
  seat: "entity:another-entity"
```

#### UPDATE ENTITY PROPERTIES

TODO

### INVENTORY ACTIONS

TODO

### MODEL ACTIONS

Actions based on models when using ModelEngine/BetterModel.

#### SHOW MODEL (MODELENGINE)

```yml
- type: show-model
  id: example-model
  model: modelID
  animation: play # Optional
  tint: "255;255;255" # Optional
  location-offset: "0;0;0" # Optional
```

#### SHOW MODEL (BETTERMODEL)

```yml
- type: show-bm-model
  id: example-model
  model: modelID
  animation: play # Optional
  location-offset: "0;0;0" # Optional
```

#### HIDE MODEL (MODELENGINE)

```yml
- type: hide-model
  id: example-model
```

#### HIDE MODEL (BETTERMODEL)

```yml
- type: hide-bm-model
  id: example-model
```

#### PLAY ANIMATION (MODELENGINE)

```yml
- type: play-model-animation
  id: example-model
  animation: play
  fade-in: 0.0 # Optional
  fade-out: 0.0 # Optional
  speed: 1.0 # Optional
```

#### PLAY ANIMATION (BETTERMODEL)

```yml
- type: play-bm-model-animation
  id: example-model
  animation: play
  fade-in: 0.0 # Optional
  fade-out: 0.0 # Optional
  speed: 1.0 # Optional
```

#### UPDATE MODEL TINT

:::info
This is ModelEngine only action!
:::

```yml
- type: update-model-tint
  id: example-model
  tint: "255;255;255"
```

### REWARD SHOWCASE OPTIONS

A relatively new option which allows for simpler customization of showing rewards. Checkout the REWARDSHOWCASE page for more info.

#### SHOW REWARD SHOWCASE

```yml
- type: show-reward-showcase
  id: showcase
  location-offset: "0;0;0" # Optional
  velocity: "0;0;0" # Optional
  pitch: 0.0 # Optional - used instead of velocity
  yaw: 0.0 # Optional - used instead of velocity
  power: 1.0 # Optional
```

#### HIDE REWARD SHOWCASE

```yml
- type: hide-reward-showcase
  id: showcase
```

#### UPDATE REWARD SHOWCASE

```yml
- type: update-reward-showcase
  id: showcase
  reward-id: example-reward
```

### BLOCK ACTIONS

Set block actions during an animation. 

#### SET BLOCK

```yml
- type: set-block
  block:
    material: STONE
  offset: "0;0;0"
```

#### SET MULTIBLOCK

```yml
- type: set-multiblock
  block:
    material: STONE
  offsets: 
    - "0;0;0"
    - "0;1;0"
```

### BOSSBAR ACTIONS

Animation bossbar actions.

#### SHOW BOSSBAR

```yml
- type: show-bossbar
  id: example
  message: "message"
  color: BLUE # Optional
  style: SOLID # Optional
  progress: 1.0 # Optional
```

#### HIDE BOSSBAR

```yml
- type: hide-bossbar
  id: example
```

#### SET BOSSBAR DATA

```yml
- type: set-bossbar-data
  id: example
  test: "message" # Optional
  color: BLUE # Optional
  style: SOLID # Optional
  progress: 1.0 # Optional
```

### HOLOGRAM ACTIONS

Animation holograms, for more info on hologram settings check out the HOLOGRAM page.

#### SHOW HOLOGRAM

```yml
- type: show-hologram
  id: example
  hologram:
    - line 1
    - line 2
  location-offset: "0;0;0" # Optional
  seat: "entity:example" # Optional - attaches hologram to an entity
```

#### HIDE HOLOGRAM

```yml
- type: hide-hologram
  id: example
```

### OTHER ACTIONS

Other animation actions for example sound, particles and more.

#### SHOW PARTICLE

```yml
- type: particle
  particle: EXPLOSION
  block-material: "STONE" # Optional
  dust-scale: 1.0 # Optional
  color: "255;255;255" # Optional
  start-color: "255;255;255" # Optional
  end-color: "255;255;255" # Optional
  sculk-roll: 0.0 # Optional
  duration: 1 # Optional
  delay: 1 # Optional
  vector: "0;0;0" # Optional
  offset: "0;0;0" # Optional
  speed: 0 # Optional
  count: 1 # Optional
  item: # Optional
    material: STONE
  location-offset: 1 # Optional
```

#### PUSH PLAYER

```yml
- type: push-player
  velocity: "0;0;0" # Optional
  yaw: 0.0 # Optional - used when velocity is not specified
  pitch: 0.0 # Optional - used when velocity is not specified
  power: 1.0
```

When a velocity or yaw & pitch is not specified, then vector is automatically calculated to push the player from the crate.

#### PLAY SOUND

```yml
- type: play-sound
  sound: "ui.button_click"
  pitch: 1.0 # Optional
  volume: 100 # Optional
  category: AMBIENT # Optional
```

#### STOP SOUND

```yml
- type: stop-sound
  sound: "ui.button_click"
```

#### THROW ENTITY

```yml
- type: throw-entity
  prop: "entity:example-entity"
  velocity: "0;0;0" # Optional
  yaw: 0.0 # Optional - used when velocity is not specified
  pitch: 0.0 # Optional - used when velocity is not specified
  power: 1.0
```

#### VARIABLE

```yml
- type: variable
  id: example
  value: "example value"
```

#### Equipment

TODO

#### RUMBLING REWARD

```yml
- type: rumbling-reward
  id: example
  rumbling-length: 100 # In ticks
  rumbling-period: 4 # In ticks
  ease-out: false # Optional
  reward-index: 0 # For multi reward opening use - Optional
  rumble-actions: [] # Optional
  rumble-finish-actions: [] # Optional
```

For example rumble actions like throwing a reward join our discord for any help you'd need!

#### STRING DEOBFUSCATION

```yml
- type: string-deobfuscation
  id: example
  deobfuscate-every: 4 # In ticks
  deobfuscation-string: "%reward-name:0%"
  obfuscated-format: "<obfuscated><gray>"
  deobfuscated-format: "<white>"
  deobfuscation-actions: []
  strip-colors: true
```

#### ACTION BAR MESSAGE

```yml
- type: actionbar
  message: "Your actionbar message"
```

#### BROADCAST MESSAGE

```yml
- type: broadcast
  message: "Your broadcast message"
```

#### COMMAND

```yml
- type: command
  player-executor: false # Optional
  command: "say Hello %player%"
```

#### GIVE ITEM

```yml
- type: give-item
  item:
    material: STONE
```

#### MESSAGE

```yml
- type: message
  message: "Your message"
```

#### TITLE

```yml
- type: title
  title: "Your Title"
  subtitle: "Subtitle text"
  fade-in: 20
  stay: 20
  fade-out: 20
```

#### CONDITIONAL ACTIONS

```yml
- type: conditional-actions
  conditions: # Example conditions
    - type: permission
      permission: example.permission
  actions:
    - type: message
      message: "You have got the permission!"
  fail:
    - type: message
      message: "You do not have the permission!"
```

#### RANDOM ACTIONS

```yml
- type: random-action
  choose-amount: 1
  choose-unique: false
  actions:
   - type: message
     message: Example
     chance: 10
   - type: message
     message: Example 2
     chance: 20
```

#### LATER ACTIONS

```yml
- type: later-actions
  delay: 10
  actions:
   - type: message
     message: Example
```

#### START TICKER

```yml
- type: start-ticker
  id: ticker1
  tick-every: 10 # Every 0.5s
  repeat-limit: -1
  actions:
   - type: message
     message: "This message is sent every 10 ticks!"
```

Great to use when wanting sound to run every tick when pairing it with a rumble action! 

#### TIMED ACTIONS

```yml
- type: timed-actions
  actions:
    10:
      - type: message
          message: "This message is sent after 10 ticks!"
    20:
      - type: message
          message: "This message is sent after 20 ticks!"
       
```

#### CLOSE INVENTORY

```yml
- type: close-inventory
```
