# MILESTONES

There are 2 types of milestones in Aquatic Crates. A regular milestone and a repeatable milestone. Milestones allow you to give specified rewards once after a player has opened X rewards. Repeatable milestones allow you to give specified rewards multiple times, for example every 2 reward.

Placeholders for milestones can be found here. ADD LINK

## MILESTONES EXAMPLE

```
milestones:
  400: # 400th opening (given just once)
    display-name: "example milestone"
    rewards:
      examplereward:
        item:
          material: "PAPER"
          display-name: "<gold>Milestone 1</gold>"
          lore:
            - "Given due to reaching 400 openings..."
        chance: 100
        give-item: false
        actions: 
          - type: message
            message: "You have reached milestone 1"

  800: # 800th opening (given just once)
    etc etc
```

This example shows how you are able to configure to give a reward once a player reaches 400 crate openings. Milestones are able to be added multiple times as seen below the code block showcasing at the 800th opening. 

```
repeatable-milestones:
  2: # Every 2 openings
    display-name: "example milestone"
    rewards:
      examplereward:
        item:
          material: "PAPER"
          display-name: "<gold>Milestone 1</gold>"
          lore:
            - "Given every 2 crate openings..."
        chance: 100
        give-item: false
        actions: 
          - type: message
            message: "You have reached milestone 1"

  5: # Every 5 openings
    etc etc
```

This example shows how you are able to give a reward every 2 crate openings with configurable rewards. Also able to add multiple repeatable milestones as shown below with every 5 openings.