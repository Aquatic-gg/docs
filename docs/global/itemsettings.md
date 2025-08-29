# ITEM SETTINGS

Items are extremely configurable and are created with the user in mind. Have any questions feel free to reach out to our discord.

### KEY

`material: <id>`
  - Depending on your server version. This is where you paste your item ID (ex. DIAMOND_AXE). Also involves multiple compatibilities such as replacing <id> with the following: `nexo:<id>`, `itemsadder:<id>`, `oraxen:<id>`, `base64:<id>` (Base64 also includes using `/waves itemconvert`). 

`display-name: "<gray>Example"`
  - Display name is what the item is displayed as. Uses minimessage for formatting LINK

`amount: 1`
  - The amount of the item (int amount). Also useful for give-item.

```
enchants:
 - EFFICIENCY:1
```
  - Adds the ability to define an enchant onto the item. SPIGOTAPI LINK

```
flags:
 - HIDE_ATTRIBUTES
```
  - Item flags. SPIGOTAPI LINK

```
lore:
 - "<gray>Example lore"
```
  - The lore of the item. Uses minimessage formatting LINK

`give-item: false`
  - Enables or disables (default is disabled) the ability to give the item without specifying any actions.

### ITEM EXAMPLE

```
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
```