---
sidebar_position: 1
title: Open Animations
toc_min_heading_level: 2
toc_max_heading_level: 5
---
# Open Animation

## Options

## Actions

### Entity Actions

#### Show Entity

```yml
- type: show-entity
  id: "example-entity"
  entity-type: ITEM_DISPLAY
  properties: []
  location-offset: "x;y;z"
```

#### Hide Entity

```yml
- type: hide-entity
  id: "example-entity"
```

#### Add Passenger

```yml
- type: add-passenger
  passenger: "entity:example-entity"
  seat: "entity:another-entity"
```

#### Remove Passenger

```yml
- type: remove-passenger
  passenger: "entity:example-entity"
  seat: "entity:another-entity"
```

#### Update Entity Properties

TODO

### Inventory Actions

#### TODO

### Model Actions

#### Show Model (ModelEngine)

```yml
- type: show-model
  id: example-model
  model: modelID
  animation: play # Optional
  tint: "255;255;255" # Optional
  location-offset: "0;0;0" # Optional
```

#### Show Model (BetterModel)

```yml
- type: show-bm-model
  id: example-model
  model: modelID
  animation: play # Optional
  location-offset: "0;0;0" # Optional
```

#### Hide Model (ModelEngine)

```yml
- type: hide-model
  id: example-model
```

#### Hide Model (BetterModel)

```yml
- type: hide-bm-model
  id: example-model
```

#### Play Animation (ModelEngine)

```yml
- type: play-model-animation
  id: example-model
  animation: play
  fade-in: 0.0 # Optional
  fade-out: 0.0 # Optional
  speed: 1.0 # Optional
```

#### Play Animation (BetterModel)

```yml
- type: play-bm-model-animation
  id: example-model
  animation: play
  fade-in: 0.0 # Optional
  fade-out: 0.0 # Optional
  speed: 1.0 # Optional
```

#### Update Model Tint

:::info
This is ModelEngine only action!
:::

```yml
- type: update-model-tint
  id: example-model
  tint: "255;255;255"
```

### Reward Showcase Actions

#### Show Reward Showcase

```yml
- type: show-reward-showcase
  id: showcase
  location-offset: "0;0;0" # Optional
  velocity: "0;0;0" # Optional
  pitch: 0.0 # Optional - used instead of velocity
  yaw: 0.0 # Optional - used instead of velocity
  power: 1.0 # Optional
```

#### Hide Reward Showcase

```yml
- type: hide-reward-showcase
  id: showcase
```

#### Update Reward Showcase

```yml
- type: update-reward-showcase
  id: showcase
  reward-id: example-reward
```

### Block Actions

#### Set Block

```yml
- type: set-block
  block:
    material: STONE
  offset: "0;0;0"
```

#### Set Multiblock

```yml
- type: set-multiblock
  block:
    material: STONE
  offsets: 
    - "0;0;0"
    - "0;1;0"
```

### BossBar Actions

#### Show BossBar

```yml
- type: show-bossbar
  id: example
  message: "message"
  color: BLUE # Optional
  style: SOLID # Optional
  progress: 1.0 # Optional
```

#### Hide BossBar

```yml
- type: hide-bossbar
  id: example
```

#### Set BossBar data

```yml
- type: set-bossbar-data
  id: example
  test: "message" # Optional
  color: BLUE # Optional
  style: SOLID # Optional
  progress: 1.0 # Optional
```

### Hologram Actions

#### Show Hologram

```yml
- type: show-hologram
  id: example
  hologram:
    - line 1
    - line 2
  location-offset: "0;0;0" # Optional
  seat: "entity:example" # Optional - attaches hologram to an entity
```

#### Hide Hologram

```yml
- type: hide-hologram
  id: example
```

### Other Actions

#### Show Particle

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

#### Push Player

```yml
- type: push-player
  velocity: "0;0;0" # Optional
  yaw: 0.0 # Optional - used when velocity is not specified
  pitch: 0.0 # Optional - used when velocity is not specified
  power: 1.0
```

When a velocity or yaw & pitch is not specified, then vector is automatically calculated to push the player from the crate.

#### Play Sound

```yml
- type: play-sound
  sound: "ui.button_click"
  pitch: 1.0 # Optional
  volume: 100 # Optional
  category: AMBIENT # Optional
```

#### Stop Sound

```yml
- type: play-sound
  sound: "ui.button_click"
```

#### Throw Entity

```yml
- type: throw-entity
  prop: "entity:example-entity"
  velocity: "0;0;0" # Optional
  yaw: 0.0 # Optional - used when velocity is not specified
  pitch: 0.0 # Optional - used when velocity is not specified
  power: 1.0
```

#### Variable

```yml
- type: variable
  id: example
  value: "example value"
```

#### Equipment

```yml

```

#### Rumbling Reward

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

#### String Deobfuscation

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

#### Action bar message

```yml
- type: actionbar
  message: "Your actionbar message"
```

#### Broadcast message

```yml
- type: broadcast
  message: "Your broadcast message"
```

#### Command

```yml
- type: command
  player-executor: false # Optional
  command: "say Hello %player%"
```

#### Give Item

```yml
- type: give-item
  item:
    material: STONE
```

#### Message

```yml
- type: message
  message: "Your message"
```

#### Title

```yml
- type: title
  title: "Your Title"
  subtitle: "Subtitle text"
  fade-in: 20
  stay: 20
  fade-out: 20
```

#### Conditional Actions

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

#### Random Action

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

#### Later Actions

```yml
- type: later-actions
  delay: 10
  actions:
   - type: message
     message: Example
```

#### Start Ticker

```yml
- type: start-ticker
  id: ticker1
  tick-every: 10 # Every 0.5s
  repeat-limit: -1
  actions:
   - type: message
     message: "This message is sent every 10 ticks!"
```

#### Timed Actions

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

#### Close Inventory

```yml
- type: close-inventory
```
