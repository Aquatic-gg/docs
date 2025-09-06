---
title: Item Settings
---
# ITEM SETTINGS

Items are extremely configurable and are created with the user in mind. Have any questions feel free to reach out to our discord.

## Example
```yml
material: STONE
display-name: "<red>Example Item Stack"
lore:
  - "Your"
  - "Lore"
```

### KEY

`material: <ID>`
  - Depending on your server version. This is where you paste your item ID (ex. DIAMOND_AXE). Also involves multiple compatibilities such as replacing &lt;id&gt; with the following: `nexo:<id>`, `itemsadder:<id>`, `oraxen:<id>`, `base64<value>` (Base64 also includes using `/waves itemconvert`). 


## Flags

### Display Name

**Example:**
```yml
display-name: "<red>Example Item Stack"
```

### Lore (Description)

**Example:**
```yml
lore:
  - "Example"
  - "Lore"
```

### Amount
The item amount.

**Example:**
```yml
amount: 1
```

### Enchants

**Example:**
```yml
enchants:
  - "DURABILITY:2" # EnchantName : Level
  - "AE-Custom:2" # Support for AdvancedEnchantments plugin - Add the AE- prefix
```

Available enchantment names:
https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html

### Custom Model Data (Legacy)
Legacy option for the custom model data using number.

**Example:**
```yml
model-data-legacy: 1
```

### Custom Model Data
Option for the advanced custom model data.

**Example:**
```yml
model-data:
  floats: # Optional
    - 1
  strings: # Optional
    - "example"
  flags: # Optional
    - true
    - false
  colors: # Optional
    - "255;255;255" # RGB
```

### Damage
Option of the item durability

**Example:**
```yml
damage: 100 # Cannot be higher than item's max damage
```

### Dye
Dye option for dyeable items.

**Example:**
```yml
dye: "255;255;255" # RGB
```

### Flags

**Example:**
```yml
flags:
  - HIDE_ENCHANTS
```

Available flags:
https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html

### Item Model
Modern version for setting the item custom model.

**Example:**
```yml
item-model: "namespace:custom-model"
```

### Max Damage
Max durability of the item.

**Example:**
```yml
max-damage: 200
```

### Max Stack Size

**Example:**
```yml
max-stack-size: 99 # Min 1, Max 99
```

### Item Rarity

**Example:**
```yml
rarity: COMMON
```

Possible values: https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemRarity.html

### Spawner Entity Type

**Example:**
```yml
entity-type: ZOMBIE
```

### Tooltip Style
Design of the tooltip.

**Example:**
```yml
tooltip-style: "namespace:custom-style"
```

### Unbreakable

**Example:**
```yml
unbreakable: true
```