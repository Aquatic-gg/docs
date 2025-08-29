# REWARDS SYSTEM

Rewards on Aquatic Crates are extremely configurable. Take a look down below on all the options.


## POSSIBLE REWARDS

Possible rewards is a range that can be set (min-max) and random amount is generated while opening the crate.

You can also create groups of ranges with given chances, so the plugin chooses the chance group first and then generates the random amount of that group.

```
possible-rewards:
  - min: 1
    max: 2
    chance: 100
```

Having min set to 1 and max to 2 means that the player can win 1-2 rewards from the crate that are randomly chosen


```
possible-rewards:
  - min: 1
    max: 1
    chance: 100
```

Having min set to 1 and max to 1 means that the player can win only 1 reward

### OTHER POSSIBLE REWARD EXAMPLES

```
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

```
possible-rewards:  
  - min: 1
    max: 2
    chance: 80
  - min: 2
    max: 5
    chance: 20
```

## REWARDS

Rewards are extremely configurable and are created with the user in mind. Have any questions feel free to reach out to our discord.

### KEY

`material: <id>`
  - Depending on your server version. This is where you paste your item ID (ex. DIAMOND_AXE). Also involves multiple compatibilities such as replacing <id> with the following: `nexo:<id>`, `itemsadder:<id>`, `oraxen:<id>`, `base64:<id>` (Base64 also includes using `/waves itemconvert`). 

`display-name: "<gray>Example"`
  - Display name is what the item is displayed as. Uses minimessage for formatting.

`amount: 1`
  - The amount of the item (int amount). Also useful for give-item.

`enchants:
 - EFFICIENCY:1`
  - Adds the ability to define an enchant onto the item. SPIGOTAPI LINK

`flags:
 - HIDE_ATTRIBUTES`
  - Item flags. SPIGOTAPI LINK

`lore:
 - "<gray>Example lore"`
  - The lore of the item. Uses minimessage formatting.

`give-item: false`
  - Enables or disables (default is disabled) the ability to give the item without specifying any actions.

### REWARDS EXAMPLE

```
rewards:
  demo_axe: #id of the item, can be anything just don't repeat it elsewhere in rewards
    item:
      material: DIAMOND_AXE
      display-name: "<#9bc1c2>Diamond Axe"
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
    
    # More info on actions HERE
    actions:
    - type: message
      message: "<#90EE90>You've won a Diamond Axe."
    - type: giveitem
      item:
        display-name: "<#9bc1c2>Diamond Axe"
        material: DIAMOND_AXE
        amount: 1
        enchants:
        - EFFICIENCY:1
        - UNBREAKING:1
        lore: []
```