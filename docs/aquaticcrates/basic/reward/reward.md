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

  Something here...

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

## REWARD SHOWCASE

<Page url="aquaticcrates/basic/reward/rewardshowcase">Reward Showcase</Page>

## RARITIES

<Page url="aquaticcrates/basic/reward/rarities">Reward Rarities</Page>

## LIMITS

<Page url="aquaticcrates/basic/reward/winlimits">Win Limits</Page>

## REQUIREMENTS

## VARIABLES

## PREVIEW FALLBACK ITEM

## ACTIONS