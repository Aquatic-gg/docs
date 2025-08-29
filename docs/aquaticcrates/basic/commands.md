# COMMANDS
Base command alias:
- aquaticcrates
- acrates

Using the main command you are then able to view more in depth commands such as give crate, key, logs etc... View all commands below.

:::tip

All commands require `aquaticcrates.admin` to use.

:::

## KEY

  **`<id>`**
    - The id is the name of the file. (ex. "demo1")
    
  **`<player>`**
    - Player name. (ex. "ColdSight21")
  
  **`<amount>`**
    - An int amount. (ex. "5")

  **`[Flg]`** (Optional) 
    - Options: `-nokey` (doesn't require key)/`-instant` (open instantly)/`-s` (Give silently)/`-v` (Virtual key) Flags are able to be stacked.

  **`[Thd]`** (Optional)
      - Amount of cpu threads. This is used for the mass open command.
    
  
## MORE COMMANDS

- `acrates crate give <id>`
    - Give a crate to a player and turns into a physical crate once placed.

- `acrates crate open <id> <player> [Flg]`
    - Open a crate via a command.

- `acrates crate massopen <id> <player> <amount> [thd] [Flg]`
    - Mass open a crate for a player.

- `acrates preview <id> <player>`
    - Preview a crate via a command.

- `acrates key give <id> <player> <amount> [Flg]`
    - Give a crate key to a player.

- `acrates key giveall <id> <amount> [Flg]`
    - Give a crate key to every player online.

- `acrates key bank [player]`
    - View a player's virtual key bank.

- `acrates log`
    - View all crate logs. Tracks when a player has opened a key, reward won, crate opened.

- `acrates reload`
    - Reload the plugin asynchronously

- `acrates rewardmenu` (Being worked on)
    - Opens rewards that were given when a player's inventory was full.

- `waves itemconvert`
    - While holding item in hand run this command to copy the exact item information and input into the rewards section by copying the base64 data then adding it to `material: base64:<string>`.