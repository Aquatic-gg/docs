---
title: Open Prices
---

# OPEN PRICES

Using open prices you can setup what is required in order to open the crate.

Difference between open restrictions and open prices is that open prices also take currency, item, etc. It is like checking if a player has a certain balance and if so, then taking a certain value from that player.

## NO KEY MESSAGE

AquaticCrates has a simplified syntax for those users that just want to use crate's key as the only open price and also want to setup the fail message when the player has no key.

Simply add this to your config:

```yml
no-key-message: "You need a key to open the crate!"
```

## PRICE TYPES

A requirement needed to pass in order to
open a crate.

### CRATE KEY

Using Crate Key open price you can use ANY key from ANY crate in order to open the crate.

You can also setup how many of those keys you need to open that crate.

```yml
open-price-groups:
  - prices:
      - type: "crate-key"
        crate: "demo2" # Optional - When not set, current crate's key is used
        amount: 1
        fail-actions:
          - type: message
            message: "You do not have Demo2 crate key!"
```
