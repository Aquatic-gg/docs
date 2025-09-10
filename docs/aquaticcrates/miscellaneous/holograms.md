---
title: "Holograms"
---
# HOLOGRAMS

Utilizing new display entities you are now able to customize holograms even further to your preference! 

## Simple hologram usage
```yml
hologram:
  offset: "0;2;0"
  lines:
    - "Line 1\nLine 2 (Multiline)"
    - "Line 3"
```

## Simple multiline usage
```yml
hologram:
  offset: "0;2;0"
  lines:
    - - "Line 1"
      - "Line 2"
    - "Line 3"
```

### What are multilines more?
Multilines are simply multiple lines, but in a single entity!
It is most optimized way for client to handle the hologram that can ever exist.

## Advanced usage
```yml
hologram:
  offset: "0;2;0"
  lines:
    - type: "text"
      text: "<#75CCD7>Example Line1\n<gray>Example Line2"
      line-width: 175
      has-shadow: true
      is-see-through: false
      billboard: FIXED
      default-background: false
      background-color: "255;255;255;0"
      height: 0.5
    - "Another line - simple"
```

### Explanation
Using this format you can set per-line properties, so each line can behave differently.
You can also mix it with the simplified syntax.

Read more about [line types (Click)](#line-types)

## Simple animation
```yml
hologram:
  offset: "0;2;0"
  lines:
    - - 10: Animated
      - 10: Line
    - "Another line"
```

### Explanation
In order to animate your hologram lines, you need to specify a duration of how long the frame should stay.
For example 10 means that the frame is gonna stay for 10 ticks (0.5 second) and then switches to another frame.

## Items in line animations
```yml
hologram:
  offset: "0;2;0"
  lines:
    - - 10: "Example - text"
      - 10: # Our item line frame
          type: ITEM
          item:
            material: STONE
```

## Common options
You can setup common options in hologram, so they are shared across all hologram lines and are not needed to be setup per line.

### Example
```yml
hologram:
  offset: "0;2;0"
  scale: 1.0
  billboard: FIXED
  lines:
    - "Example"
    - "Line"
```

### Options
``scale`` - Simply scale... (Decimal number) - OPTIONAL

``billboard`` - What should be the billboard of the line, how should it rotate - OPTIONAL

``transformation-duration`` - Interpolation of transformation, so when you for example change scale in animated line, it smoothly transforms to new scale (NUMBER) - OPTIONAL

``teleport-interpolation`` - Interpolation of movement (NUMBER) - OPTIONAL

``translation`` - Offset from base location (Vector - "X;Y;Z") - OPTIONAL

## Line types

### TEXT

**Options**

``text`` - Text of the line

``background-color`` - Simply background color... (RGBA - "R;G;B;A") - OPTIONAL

``line-width`` - Max width of the line in pixels. If the max is reached, the text is moved to another line (NUMBER) - OPTIONAL

``height`` - Height of the line (Decimal number) - OPTIONAL

``scale`` - Simply scale... (Decimal number) - OPTIONAL

``billboard`` - What should be the billboard of the line, how should it rotate - OPTIONAL

Billboard types can be checked [HERE](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Display.Billboard.html)

``view-conditions`` - View conditions of the line - OPTIONAL

``fail-line`` - What line should be shown when conditions are not met - OPTIONAL

``has-shadow`` - If the text should have shadow (TRUE/FALSE) - OPTIONAL

``is-see-through`` - (TRUE/FALSE) - OPTIONAL

``transformation-duration`` - Interpolation of transformation, so when you for example change scale in animated line, it smoothly transforms to new scale (NUMBER) - OPTIONAL

``teleport-interpolation`` - Interpolation of movement (NUMBER) - OPTIONAL

``translation`` - Offset (Vector - "X;Y;Z") - OPTIONAL

### ITEM

**Options**

``item`` - Simply item...

Check more about item settings [HERE](https://docs.aquatic.gg/aquaticcrates/miscellaneous/itemsettings)

``height`` - Height of the line (Decimal number) - OPTIONAL

``scale`` - Simply scale... (Decimal number) - OPTIONAL

``billboard`` - What should be the billboard of the line, how should it rotate - OPTIONAL

Billboard types can be checked [HERE](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Display.Billboard.html)

``view-conditions`` - View conditions of the line - OPTIONAL

``fail-line`` - What line should be shown when conditions are not met - OPTIONAL

``has-shadow`` - If the text should have shadow (TRUE/FALSE) - OPTIONAL

``is-see-through`` - (TRUE/FALSE) - OPTIONAL

``transformation-duration`` - Interpolation of transformation, so when you for example change scale in animated line, it smoothly transforms to new scale (NUMBER) - OPTIONAL

``teleport-interpolation`` - Interpolation of movement (NUMBER) - OPTIONAL

``translation`` - Offset (Vector - "X;Y;Z") - OPTIONAL

### ANIMATED