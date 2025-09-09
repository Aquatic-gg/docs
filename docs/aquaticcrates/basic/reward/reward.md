---
title: Rewards
---

# REWARDS SYSTEM

Rewards on Aquatic Crates are extremely configurable. Take a look down below on all the options.
<details>
  <summary>Regular reward config example</summary>

  ```yml
  rewards:
    demo_axe:
      item:
        material: DIAMOND_AXE
        display-name: "<#f786be>Diamond Axe"
        amount: 1
        enchants:
        - EFFICIENCY:1
        - UNBREAKING:1
        flags:
        - HIDE_ATTRIBUTES
        lore:
        - ''
      chance: 9
      give-item: false
      actions:
      - type: message
        message: "<#90EE90>You've won a Diamond Axe."
      - type: giveitem
        item:
          display-name: "<#f786be>Diamond Axe"
          material: DIAMOND_AXE
          amount: 1
          enchants:
          - EFFICIENCY:1
          - UNBREAKING:1
          lore: []
  ```

</details>

<details>
  <summary>Advanced reward config example</summary>

  ```yml
  possible-rewards:
  - min: 1
    max: 2
    chance: 100
  rarities:
    common:
      chance: 50
      display-name: "<gray>Common"
    uncommon:
      chance: 30
      display-name: "<#EAF18D>Uncommon"
    rare:
      chance: 20
      display-name: "<#83D1F1>Rare"
  rewards:
    demo_axe:
      item:
        material: DIAMOND_AXE
        display-name: "<#f786be>Diamond Axe"
        amount: 1
        enchants:
        - EFFICIENCY:1
        - UNBREAKING:1
        flags:
        - HIDE_ATTRIBUTES
        lore:
        - ''
      chance: 9
      give-item: false
      rarity: common
      actions:
      - type: message
        message: "<#90EE90>You've won a Diamond Axe."
      - type: giveitem
        item:
          display-name: "<#f786be>Diamond Axe"
          material: DIAMOND_AXE
          amount: 1
          enchants:
          - EFFICIENCY:1
          - UNBREAKING:1
          lore: []
      reward-showcase:
        type: ITEM
        interactables:
          - type: MODELENGINE
            model: example_model
            offset: "0;0;0"
        spawn-actions:
          - type: message
            message: "Reward showcase has been spawned"
  ```
  
</details>

## ITEM

The item is basically the key item of your reward!
You can disable the item giving and let them item to be used just for preview, etc.

### Disable giving
In order to disable giving the item, set ``give-item`` to false

```yml
give-item: false
```

### Other Settings
All item options can be found here:

<Page url="aquaticcrates/miscellaneous/itemsettings"></Page>

## Chance
Chance of the item can exceed 100.0 and is a floating number.
The chance gets automatically calculated, so you do not have to have reward chances sum of 100.

If you are using [Rarities](#rarities), the base chance is being used from there and then the reward chance is being used.

If you want to have chances just from rarities, simply set reward chance to 1.

```yml
chance: 1
```

## POSSIBLE REWARDS

Possible rewards is a range that can be set (min-max) and random amount is generated while opening the crate.

You can also create groups of ranges with given chances, so the plugin chooses the chance group first and then generates the random amount of that group.

```yml
possible-rewards:
  - min: 1
    max: 2
    chance: 100
```

Having min set to 1 and max to 2 means that the player can win 1-2 rewards from the crate that are randomly chosen

```yml
possible-rewards:
  - min: 1
    max: 1
    chance: 100
```

Having min set to 1 and max to 1 means that the player can win only 1 reward

<details>
  <summary>Other possible rewards examples</summary>

  ```yml
  possible-rewards:
    - min: 1
      max: 1
      chance: 25
    - min: 2
      max: 2
      chance: 25
    - min: 3
      max: 3
      chance: 25
    - min: 4
      max: 4
      chance: 25
  ```

  ```yml
  possible-rewards:  
    - min: 1
      max: 2
      chance: 80
    - min: 2
      max: 5
      chance: 20
  ```

</details>

## AMOUNT RANGES
Amount ranges syntax is pretty much the same as Amount Ranges.
Using amount ranges you can generate a random amount for your reward.
Each amount range is separated into its own group with chance, so you can make higher numbers more rare.

```yml
amount-ranges:
  - min: 1
    max: 100000
    chance: 100
```

In order to retrieve the amount generated in actions, simply use ``%random-amount%`` placeholder.

## REWARD SHOWCASE

Reward showcase is a relatively new system which simplifies how rewards are displayed in animations. It gives the option to change every single reward and how it handles. For example: type, interactable, hologram, and more...

<Page url="aquaticcrates/basic/reward/rewardshowcase">Reward Showcase</Page>

## RARITIES

Define rarities to individual rewards to increase certain chances! 

<Page url="aquaticcrates/basic/reward/rarities">Reward Rarities</Page>

## LIMITS

This feature allows you to set rewards to be won either globally or individually a certain amount of times.

<Page url="aquaticcrates/basic/reward/winlimits">Win Limits</Page>

## REQUIREMENTS

Using requirements you can setup extra conditions in order to be able to win a reward!

```yml
examplereward:
  item:
    ...
  requirements:
    - type: permission
      permission: "example.permission"
```

**Global options:**
- ``negate`` - negates the condition (true becomes false and false becomes true)

<Page url="aquaticcrates/basic/reward/rewardrequirements">Requirements</Page>

## VARIABLES

## ACTIONS

<Page url="aquaticcrates/miscellaneous/globalactions">Actions</Page>
