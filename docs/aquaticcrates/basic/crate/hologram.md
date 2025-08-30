---
title: Hologram
---

# HOLOGRAMS

Utilizing new display entities you are now able to customize holograms even further to your preference! Holograms are hidden when a crate animation is started (on success) and spawn back once the animation has finished. 

## KEY

- `offset: "0;0;0"`
    - Offset of the hologram location. X;Y;Z
- `type: "text/animated/item"`
    - There are 3 options for the type of hologram. Text uses the normal text display, animated combines multiple of either item/text/both, and item displays an item.
- `text: "line1\nline2"`
    - The text displayed on the hologram. Use `\n` for a new line on the hologram.
- `line-width: 175`
    - The width of a single hologram line. Defaults to 150 if not present.
- `stay: 20`
    - Useful for animated holograms you are able to configure in ticks how long a hologram stays until the next hologram.
- `has-shadow: true`
    - Enable or disable text shadow. Defaults to false if not present.
- `is-see-through: false`
    - If you want the hologram to be see through. If not present it defaults to true.
- `billboard: FIXED`
    - Change how holograms function visually to the player. Options are: FIXED, CENTER (default), VERTICAL, HORIZONTAL. (Not to be biased but FIXED looks the best)
- `default-background: true`
    - Defaults to true and uses default `background-color`.
- `background-color: 255;255;255;255`
    - If `default-background` is set to false it will use this color background. Example: 255;255;255;255 equals to red, green, blue, alpha.
- `height: 0.5`
    - The height (space ) between lines.
- `scale: 1.0`
    - Change the scale (size) of the hologram. Defaults to 1.

- `conditions`
    - Condition to show the hologram based on something. Check the bottom of the page for an example. 
- `fail-line`
    - something

example for condition here 


## HOLOGRAM EXAMPLES

Static Hologram:
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
```

Animated Hologram:
```yml
hologram:
  offset: "0;3;0"
  lines:
    - type: "animated"
      height: 0.5
      frames:
        - type: "text"
          stay: 20
          text: "<gradient:#8833de:#5424a6>Another Frame\n&f\n&7[Left-Click] &fto Preview\n&7[Right-Click] &fto Open\n&7[Shift-Right-Click] &fto quick Open"
          line-width: 200
          height: 0.5
          has-shadow: true
          is-see-through: false
          default-background: false
          background-color: "255;255;255;0"
        - type: "text"
          stay: 20
          text: "<gradient:#8833de:#5424a6>Example Crate\n&f\n&7[Left-Click] &fto Preview\n&7[Right-Click] &fto Open\n&7[Shift-Right-Click] &fto quick Open"
          line-width: 200
          height: 0.5
          has-shadow: true
          is-see-through: false
          default-background: true
```