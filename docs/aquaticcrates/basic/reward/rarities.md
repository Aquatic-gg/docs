---
title: Rarities
---

# RARITIES
Define rarities to individual rewards to increase certain chances! 

In order to create rarities you need to define the rarity name, chance, and display name. This is done outside of any section.

```
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

  etc etc
```
Then you need to define which items are a certain rarity within each configured reward. Here is how it's done:

```
rewards:
  rewardname:
    item:
      material: IRON_INGOT
      etc etc

    rarity: "uncommon"
```


:::tip

Add %rarity% into the preview reward-lore to give more info to players. Check it out here **ADD LINK**

:::

