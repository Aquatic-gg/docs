---
title: Block Settings
---

# BLOCK SETTINGS

Items are extremely configurable and are created with the user in mind. Have any questions feel free to reach out to our discord.

## KEY

`material: <ID>`
  - Depending on your server version. This is where you paste your block type ID (ex. DIAMOND_BLOCK). Also involves multiple compatibilities such as replacing &lt;id&gt; with the following: `nexo:<id>`, `itemsadder:<id>`, `oraxen:<id>`. 

## Vanilla Block

Vanilla Block comes up with some extra settings in order to modify extra data of your block.

### Face
Block facing, basically an orientation.

Possible values:
- NORTH
- EAST
- SOUTH
- WEST
- UP
- DOWN

Example:
```yml
face: NORTH
```

### Opened
Whether the block (door, trapdoor, etc.) should be opened or not.

Example:
```yml
opened: true # Or false
```

### Powered
Whether the block (redstone, lamp, etc.) should be powered.

Example:
```yml
powered: true # Or false
```

### Half
Whether a block should be placed at the top or bottom half (for example Stairs, trapdoor, etc. [ ! NOT SLAB ! ]).

Possible values:
- BOTTOM
- TOP

Example:
```yml
half: BOTTOM
```

### Waterlogged
The title is self explanatory.

Example:
```yml
waterlogged: true # Or false
```

### Faces
What faces the block should be oriented to (For example glass pane, iron bars, etc.)
This setting is for the blocks that can be oriented to multiple faces.

Possible values:
- NORTH
- EAST
- SOUTH
- WEST
- UP
- DOWN

Example:
```yml
faces:
  - NORTH
  - EAST
```

### Stairs Shape
Shape of the stairs block.

Possible values:
- STRAIGHT
- INNER_LEFT
- INNER_RIGHT
- OUTER_LEFT
- OUTER_RIGHT

Example:
```yml
stairs-shape: STAIGHT
```

### Slab Shape
Shape of the slab block.

Possible values:
- TOP
- BOTTOM
- DOUBLE

Example:
```yml
slab-type: BOTTOM
```

## BLOCK EXAMPLE

```yml
block:
  material: OAK_SLAB
  slab-type: BOTTOM
```
