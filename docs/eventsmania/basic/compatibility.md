---
title: "Compatibility"
---

# COMPATIBILITY
We currently support PaperAPI for events and PAPI placeholders to track player progress. For customizing messages we support MiniMessage formatting.

## PaperAPI Event Type
For the full event list check it out here.

```yml
    type: BLOCK_BREAK
    types:
      # - ALL
      - GOLD_ORE
      - IRON_ORE
```
Example of `BLOCK_BREAK` event that only counts `GOLD_ORE` and `IRON_ORE`.

## PAPI Placeholder Event Type
With the support of PAPI placeholders you can create any event to your liking!

```yml
    type: PLACEHOLDER
    placeholder: "%statistic_crouch_one_cm%"
```
This example uses the `%statistic_crouch_one_cm%` placeholder to create a leaderboard between players.

## INTERNAL ACTION PLACEHOLDERS
Internal placeholders can be used in Actions.

`%leaderboard-name-<place>%` - Replacing <place> returns the placers IGN in the leaderboard.

`%leaderboard-value-<place>%` - Replacing <place> returns the placers value in the leaderboard. 

`%leaderboard-value-self%` - Returns the players own live value on the active leaderboard. 

`%leaderboard-rank%` - Returns the players own leaderboard ranking live.