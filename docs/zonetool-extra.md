# Zonetool Extra

:::warning
This documentation **has not** been completely finished. Parts of this process are not well documented and you may run into issues. For further help, you can [join our Discord](http://auroramod.dev/discord) and talk to modders in the community.
:::

## How to use override/

H1-Mod can replace some assets with loose files from a mod's `override/` folder when the mod loads. You can override these asset types:
- TTF (font)
- RawFile
- StringTable (CSV)
- DDL (stats/rank stuff)
- .menu files (Quake)

For example, to add a custom game mode, the game must read a custom `maps/mp/gametypes/_gametypes.txt`. Put the file in your mod folder:
```
Modern Warfare Remastered
├── zonetool
│   ├── custom_gamemode
│   │   ├── override
|   |   |   ├── maps
|   |   |   |   ├── mp
|   |   |   |   |   ├── gametypes
|   |   |   |   |   |   └── _gametypes.txt
└── h1-mod.exe
```

## How to load custom LUI in mods

H1-Mod loads custom UI scripts that are built into the zone as rawfiles with a path like `ui_scripts/my_cool_script/__init__.lua`. Put the file at `zonetool/<mod>/ui_scripts/my_cool_script/__init__.lua` and add it to the zone source CSV:
```
rawfile,ui_scripts/my_cool_script/__init__.lua
```
Then build the mod with `zonetool.exe buildzone <mod>`.

## Stuck on "waiting for more players"/cannot do anything

Add this entity at the start of your map's `.ents` file (`zonetool/<map>/maps/mp/<map>.d3dbsp.ents`), then build the map again:
```json
{
"classname" "script_model"
"origin" "0 0 0"
"angles" "0 0 0"
}
```

## Convert GSC Waypoints -> .csv

*This is a placeholder. We plan to make an interactive waypoint editor to help you set up pathing for bots and agents on custom maps.*