# Zonetool Extra

:::warning
This documentation **has not** been completely finished. Parts of this process are not well documented and you may run into issues. For further help, you can [join our Discord](http://auroramod.dev/discord) and talk to modders in the community.
:::

## How to use override/

H1-Mod adds various ways for specific asset types to be overrided when a new mod loads. You can override the following assets:
- TTF (font)
- RawFile
- StringTable (CSV)
- DDL (stats/rank stuff)
- .menu files (Quake)

For example, in order to load a custom `maps/mp/gametypes/_gametypes.txt` file for the game to recognize a custom gamemode, we would simply put in our mod folder:
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

## Stuck on "waiting for more players"/cannot do anything

Add this to your map's `.ents` file that is JSON-like at the beginning:
```json
{
"classname" "script_model"
"origin" "0 0 0"
"angles" "0 0 0"
}
```

## Convert GSC Waypoints -> .csv

*This is placeholder for the future. We plan to have a interactive waypoint editor to help you setup pathing for custom maps, which may include agents or bots.*