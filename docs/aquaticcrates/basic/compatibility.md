# COMPATIBILITY
We aim to support as many plugins as possible. If you are looking for us to add a new plugin to support please let us know in our discord!

## MODELENGINE
To specify ModelEngine you need to define it in the type (refer to interactable section). Then the model id is the same as the .bb file name.

```
  - type: MODELENGINE
    model: iron_crate_1
```

You are also able to define animations in the animation section by doing `animation: <name>`. More info in the animation docs section.

## BETTERMODEL
To specify BetterModel you need to define it in the type (refer to interactable section). Then the model id is the same as the .bb file name.

```
  - type: BETTERMODEL
    model: iron_crate_1
```

You are also able to define animations in the animation section by doing `animation: <name>`. More info in the animation docs section.

## NEXO
To specify using nexo as a key or a reward it's very simple!

`material: NEXO:<id>`

## ITEMSADDER
To specify using ItemsAdder as a key or a reward it's very simple!

`material: itemsadder:<id>`

## ORAXEN
To specify using Oraxen as a key or a reward it's very simple!

`material: oraxen:<id>`

## PLACEHOLDERAPI
You must install [PAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) in order to parse these placeholders.

### KEY

  **`<crate>`**
    - Crate ID or `all`.

  **`<player>`**
    - Player name or can be `self`.

  **`<timeframe>`**
    - Timeframe options are: `daily`, `weekly`, `monthly`, `alltime`.

  **`<time-in-ticks>`**
    - Int amount based on ticks.

  **`<place>`**
    - Leaderboard place. For example "1", "5" etc (int amount).

  **`<milestone>`**
    - ID Name of a milestone.



`%aquaticcrates_keys_<player>_<crate>%`
   - Returns the number of virtual keys a player has.

`%aquaticcrates_totalkeys_<player>%`
  - Returns the number of all keys a player has.

`%aquaticcrates_statistic_crate_<crate-id>_<timeframe>%`
  - Returns how many times a crate has been opened in a specific amount of time.

`%aquaticcrates_statistic_crate_<crate-id>_<timeframe>_<player>%`
  - Returns how many times a crate has been opened in a specific amount of time regarding a player.

`%aquaticcrates_statistic_reward_<crateid:rewardid>_<timeframe>%`
  - Returns how many times a reward has been won in a certain crate in a specific timeframe.

`%aquaticcrates_statistic_reward_<crateid:rewardid>_<timeframe>_<player>%`
  - Returns how many times a reward has been won in a certain crate in a specific  timeframe regarding a player.

`%aquaticcrates_randomreward_<crate>_<time-in-ticks>_<only-winnable>%`
  - Returns a random reward name of a crate in a specific amount of time.

`%aquaticcrates_latest-reward_<crate>_<place>_name%`
  - Returns the name of the reward in a specified position on the latest reward winners list for the given crate.

`%aquaticcrates_latest-reward_<crate>_<place>_id%`
  - Returns the id of the reward in a specified position on the latest reward winners list for the given crate.

`%aquaticcrates_latest-reward_<crate>_<place>_timestamp%`
  - Retuns the timestamp (10s ago, 30m ago, etc) from the last won reward in a specified position on the latest reward winners list for the given crate.

`%aquaticcrates_latest-reward_<crate>_<place>_winner%`
  - Returns the player name from the last won reward in a specified position on the latest reward winners list for the given crate.

`%aquaticcrates_milestone_<crate>_<milestone>_reached%`
  - Returns yes/no if the milestone was reached.

`%aquaticcrates_milestone_<crate>_<milestone>_remaining%`
  - Returns the int amount until the next milestone.

`%aquaticcrates_milestone_<crate>_<milestone>_name%`
  - Returns the display name of the milestone.

`%aquaticcrates_repeatable-milestone_<crate>_<milestone>_remaining%`
  - Returns the int amount until the next repeatable milestone.

`%aquaticcrates_repeatable-milestone_<crate>_<milestone>_name%`
  - Returns the display name of the next repeatable milestone.