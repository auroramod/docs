# Map Porting (between AW, MWR, MW2:CR)

:::tip
Doing a quick read of the [Zonetool Basics](zonetool-basics) will explain **many things** that are talked about on this guide. We recommend checking the [x64-zt commands](zonetool-basics#commands) and to check whether [you can port from your desired game to the new one](zonetool-basics#game-conversion-support).
:::

To port maps between the next-generation games, use [x64-zt](https://github.com/Joelrau/x64-zt). You can [download it here](https://github.com/Joelrau/x64-zt/releases/tag/latest).

First, find the zone of the map you want to port. Look in the source game's `zone/` folder for the map name. This guide ports **Greenband** from AW (S1) to MWR (H1). Its zone is `mp_greenband`.

1. Put `zonetool.exe` in the **source** game folder (AW), and open a terminal there.
2. Dump and convert the map:

   ```bash
   zonetool.exe dumpmap mp_greenband --target h1
   ```

   If MWR is not in the default Steam folder, also give its folder:

   ```bash
   zonetool.exe -target_path "D:\Games\MWR" dumpmap mp_greenband --target h1
   ```

3. Move the dump from `<AW folder>/dump/mp_greenband/` to `<MWR folder>/zonetool/mp_greenband/`.
4. Put `zonetool.exe` in the **target** game folder (MWR), open a terminal there, and make the CSV:

   ```bash
   zonetool.exe generatecsv mp_greenband
   ```

5. Build the map:

   ```bash
   zonetool.exe buildzone mp_greenband
   ```

The map is now at `<MWR folder>/zone/mp_greenband.ff`.

:::tip
To keep one copy of `zonetool.exe`, save the folder of each game in `zonetool.json` and select the game with `-game`. See [Running from another folder](zonetool-basics#running-from-another-folder).
:::

### Extra steps
For the map to look correct, you must create a GSC file for your map. This will be a script that will be executed once the map starts. This script differs on multiplayer & singleplayer. Dumping a map from S1 or H2 should have a map GSC you can use or reference to make a new one.

Multiplayer:
```cpp
main()
{
    maps\createfx\mapname_fx::main();
    maps\mp\mapname_fx::main();
    maps\mp\_load::main();
    maps\mp\_compass::setupminimap("compass_map_mapname");  // change compass name here
}
```

Singleplayer:
```cpp
main()
{
    maps\createfx\mapname_fx::main(); // only if this script exists
    maps\mapname_fx::main(); // only if this script exists
    maps\_load::main();
    maps\_compass::setupminimap("compass_map_mapname"); // change compass name here
}
```

### Red images
Red images indicates that you are missing images. Dump the source game's common fastfile *(most of the time it is called `common_mp` for multiplayer and `common` for singleplayer)* using the command:
```bash
zonetool.exe dumpzone common_mp --target h1
```

Note that a "patch" version of the common fastfile always exists (example: `patch_common_mp`), so the assets could also be there.

You should then move this folder from `dump/` into a folder called `zonetool_paths` in your target game's root directory. x64-zt will look for assets in any folder inside zonetool_paths. Alternatively, you can copy the contents of the dumped folder into the map's zonetool folder, but this is not advised as it will take a long time.

### "REF" red models
The process to fix is relatively the same with images.

### Textures are black/gray/white/red
This probably means that zonetool failed to dump the streamed images. To check if this is the case, see if the `streamed_images` folder contains .pixels files, if not then something went wrong. Most likely zonetool was unable to find the source game's image files. This should not happen.

### Vertex type X doesn't have the information used by shader Y in material Z
This most likely indicates you are missing that particular material, the same fix as issue #1 should apply.

### Bad weaponinfo X specified for turret. It likely needs to be precached in script.
This indicates that the original map includes a turret, you can either:

Remove the turret entirely (this is advised unless you really want the turret). To do this, open the `<mapname>.d3dbsp.ents` file you will find in `zonetool/mapname/maps/mp` or `zonetool/mapname/maps/` and search for `"weaponinfo"`. Once found, remove the entire section that includes it, example:
```json
{
"bottomarc" "70"
"rightarc" "40"
"leftarc" "40"
"targetname" "minigun_turret_2"
"spawnflags" "0"
"toparc" "10"
"classname" "misc_turret"
"export" "1"
"model" "npc_minigun_turret"
"weaponinfo" "turret_minigun_mp"
"origin" "1004.5 -80 865"
"angles" "0 180 0"
}
```

Everything from and including the opening bracket to the closing bracket should be removed. Repeat this for every case of "weaponinfo" in the file.

**Or** you can add the required assets (usually just the weapon): Repeat the same process as for removing it but don't actually remove it and simply save every instance of the value of `"weaponinfo"`.

For example, the value of one of the weaponinfo's is `turret_minigun_mp`. This just gets parsed in your CSV as:
```
weapon,turret_minigun_mp
```

### animation 'X' not defined in anim tree '{animtree name}'
This means the map is using an animation tree that is not defined on the target game. Dump the `{animtree name}.atr` of the source game, which is usually found in the common fastfile *(refer to issue #1)*, copy the file (including its folder: `animtrees/{animtree name}.atr`) into a folder called **override** (create it if it doesn't exist) inside `[target game]/zonetool/mapname/`, then include it in the csv (refer to issue #1).

```
rawfile,override/animtrees/{animtree name}.atr
```