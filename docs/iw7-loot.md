# IW7-Mod loot.json

:::warning
Leveling up your missions currently do not give you rewards. This is a known issue and will hopefully be fixed in the future.
:::

Inside `iw7-mod/players2/user/loot/`, a file called `loot.json` is used by the client to show currency data as well as what we should have unlocked. You can edit this JSON and restart your game for new loot data.

## Currency

The Currency part of the JSON includes 3 numbers, which are `11`, `12`, and `20`. In order, these correlate to **keys**, **salvage**, and **cod points**. 1 ingame key = 100 keys, so doing `12000` keys is really **120 keys ingame.**

## Daily Login

The daily login data is emulated for fun, and only offers 60 free keys daily at the moment.

## Loot

The Loot part of the JSON includes all the loot the game can give you via the ID of the loot and how much of it you have.

For example, to give yourself 10 creates for Common & Rare crates, you would simply need to find `"70000"` *(LOOT_COMMON_CRATE)* and `"70001"` *(LOOT_RARE_CRATE)*, and for the `Balance` variable on both, you just change it from null to **10**.
![](/img/iw7-loot.png)

### Resources to understand Loot IDs

To understand Loot IDs and what they are better, there are two resources you can use.

- [KeyPartIW.txt](/assets/KeyPartIW.txt), created by **GrabiouL**
- [iw7_mission_loot_master.csv](/assets/iw7_mission_loot_master.csv), which the game uses to understand what to give for Mission rewards. Each row vertically is for the 5 teams, while the index horizontially is the level up rewards.