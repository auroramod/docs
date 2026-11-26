# x64-zt

:::warning
x64-zt is still in development, and some parts of the modding process are not documented yet. If you get stuck, [you can join our Discord](http://auroramod.dev/discord) and ask or look around.
:::

## What is x64-zt?

x64-zt is a standalone command-line tool that reads and writes "Fast File" zones for the next-generation Call of Duty games. x64-zt supports dumping (unlinking), building (linking), and conversions of assets to other games.

[Download the x64-zt 2 pre-release from GitHub](https://github.com/auroramod/x64-zt/releases/tag/develop-latest).

### Supported games

Each game has a codename for the studio and its game number. For example, Ghosts is **Iw6**, Infinity Ward's 6th game. **S1** (Sledgehammer's 1st game Advanced Warfare) and **H1** (Halfmoon's 1st game Modern Warfare Remastered) are the first games of their teams. Use the codename everywhere x64-zt asks for a game.

Rows are the source game (the game you dump). Columns are the target game to use with `--target`.

:::warning
The new x64-zt 2 has `IW3`, `IW4`, & `IW5` included. Joelrau/zonetool is no longer needed to port old generation Call of Duty games. Conversions like `H1` -> `S1` that used to work as experiments has been removed.
:::

| From ↓ / To → | IW6 | S1 | H1 | H2 | S2 | IW7 | IW8 | T9 | S4 |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| **IW3** (Call of Duty 4) | 🚧 | 🚧 | 🚧 | 🚧 | 🚧 | ✅ | ❔ | ❌ | ❌ |
| **IW4** (Modern Warfare 2) | 🚧 | 🚧 | 🚧 | 🚧 | 🚧 | 🚧 | ❔ | ❌ | ❌ |
| **IW5** (Modern Warfare 3) | 🚧 | 🚧 | 🚧 | 🚧 | 🚧 | ⚠️ | ❔ | ❌ | ❌ |
| **IW6** (Ghosts) | ✅ | ❌ | ✅ | ❔ | ❔ | ❌ | ❌ | ❌ | ❌ |
| **S1** (Advanced Warfare) | ❌ | ✅ | ✅ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| **H1** (Modern Warfare Remastered) | ❌ | ❌ | ✅ | ✅ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ |
| **H2** (Modern Warfare 2 Campaign Remastered) | ❌ | ❌ | ✅ | ✅ | ❔ | ❌ | ❌ | ❌ | ❌ |
| **S2** (WWII) | ❌ | ❌ | ⚠️ | ❔ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **IW7** (Infinite Warfare) | ❌ | ❌ | ⚠️ | ❌ | ❌ | ✅ | ⚠️ | ❌ | ❌ |
| **IW8** (Modern Warfare 2019) | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ✅ | ❌ | ❌ |
| **T9** (Black Ops Cold War) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🧪 | 🧪 | ❌ |
| **S4** (Vanguard) | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ✅ |

| | Status | Meaning |
| :-: | --- | --- |
| ✅ | **Supported** | Works for the assets of this game pair |
| ⚠️ | **Partial** | Unfinished (some assets may work, like weapons) |
| 🧪 | **Experimental** | Broken or incorrect outputs |
| ❔ | **Possible** | Can be done with a chain of conversions (like `IW5 → IW7 → IW8`) |
| 🚧 | **Planned** | x86 games from Joelrau/zonetool for dumping only |
| ❌ | **Not supported** | No conversion |

IW3 and IW5 are for dumping only. x64-zt cannot build zones for them. T9 is experimental.

See [Game conversion support](#game-conversion-support) for notes on each conversion.

## First run

1. Put `zonetool.exe` in your game folder, next to the game exe.
2. Run `zonetool.exe -h`. This prints every command and option, then exits.
3. Run `zonetool.exe` with no command. This opens the **interactive console**, where you type commands one after another. Type `quit` to close it.

The first line of the console shows the game and the folder that x64-zt selected:

```
zonetool [h1] C:\Program Files (x86)\Steam\steamapps\common\Call of Duty Modern Warfare Remastered
```

If the game or the folder is wrong, see [Game and folder selection](#game-and-folder-selection). If x64-zt does not find a game at all, it prints the setup steps and the games in your build, then waits for you to press Enter.

You can also run one command and exit, without the console:

```bash
zonetool.exe dumpzone mp_shipment
```

:::tip
Run x64-zt from inside the game folder. The `dump/`, `zonetool/`, `zone_source/` and `zonetool_paths/` folders are all read from and written to the **current folder** of your terminal. Only the built `.ff` always goes to the game's `zone/` folder.
:::

## Folder layout

All of the folders below are in the game folder. x64-zt makes `dump/` and `asset_listing/` for you. You make the others.

```
Modern Warfare Remastered
├── zone/                      buildzone writes here
├── dump/                      dumpzone, dumpmap and dumpasset write here
│   └── mp_shipment/
├── zonetool/                  your mod and map asset files
│   └── my_mod/
├── zone_source/               zone sources (asset list CSV)
│   └── my_mod.csv
├── zonetool_paths/            optional extra asset folders for every build
│   └── common_mp/
├── asset_listing/             listzone writes here
├── zonetool.exe
└── h1_mp64_ship.exe
```

The name ties it all together. To build a zone called `my_mod`, x64-zt reads the list in `zone_source/my_mod.csv`, finds the asset files in `zonetool/my_mod/`, and writes `zone/my_mod.ff`.

## Dumping a zone

A dump unpacks a `.ff` zone into files. Dumps are the best way to learn how the game's assets are made, and a dump of a stock zone is the usual start for a mod.

```bash
zonetool.exe dumpzone mp_shipment
```

The assets go to `dump/mp_shipment/`, together with `mp_shipment.csv`, which lists every asset in the zone. You can leave out the `.ff` extension.

Other dump commands:

- `dumpmap <map>` dumps a map with all of the zones it loads, into `dump/<map>/` with one merged CSV. Use it when you port a map. It works for H1, H2, IW6 and S1. Add `--skip-common` to leave out the common zones, if you already have them in `zonetool_paths/`.
- `dumpasset <type> <name> <zone>` dumps one asset to `dump/assets/`. Use `*` as the name to dump all assets of that type, for example `dumpasset material * mp_shipment`.

Useful dump options (put them before the command):

- `-dds` writes images as `.dds` files too, so you can open them in an image editor.
- `-dump_streamed_image` also reads the `imagefile*.pak` files and writes the high-resolution streamed images.
- `-castdump` writes a `.cast` file next to each model and animation, which you can import into Blender or Maya with [Cast](https://github.com/dtzxporter/cast). It works for IW6, S1, H1, H2, S2, IW7 and T9.

```bash
zonetool.exe -dds -dump_streamed_image dumpzone mp_shipment
```

### Converting while you dump

Add `--target <game>` to `dumpzone`, `dumpmap` or `dumpasset` to convert the assets into another game's format. x64-zt reads the zone from the current game and writes the dump for the target game.

```bash
zonetool.exe dumpmap mp_greenband --target h1
```

Some conversions need files from the target game. If the target game is not in the default Steam folder, set its folder with `-target_path`:

```bash
zonetool.exe -target_path "D:\Games\MWR" dumpmap mp_greenband --target h1
```

See [Game conversion support](#game-conversion-support) for the conversions that work.

## Building a zone

1. Make a folder for your mod in `zonetool/`, for example `zonetool/my_mod/`.
2. Put your asset files in it. Use the same paths as a dump. A weapon file from `dump/<zone>/weapons/<weapon>` goes to `zonetool/my_mod/weapons/<weapon>`.
3. Make the asset list `zone_source/my_mod.csv`. A dump CSV is a good start: copy it, then remove the lines you do not need. For maps, `generatecsv` can make it for you (see below).
4. Build:

   ```bash
   zonetool.exe buildzone my_mod
   ```

The result is `zone/my_mod.ff`. Add `-use_usermaps` to write it to `usermaps/my_mod/` instead, or `-copy_to <folder>` to also copy the `.ff` and `.pak` files to another folder.

:::danger
`buildzone` replaces a zone that has the same name. If you build `mp_shipment`, your build overwrites the stock `zone/mp_shipment.ff`. Back up the stock zone first, or give your zone a new name.
:::

x64-zt keeps a build cache, so a rebuild only writes what changed. If a build looks wrong after you change files, build again with `-no_cache`. If a big zone fails because it runs out of memory, build with `-more_memory`, which doubles the zone memory limit.

### Where x64-zt looks for asset files

When it builds `my_mod`, x64-zt looks for each asset file in this order:

1. `zonetool/my_mod/`
2. `zonetool/` (files here are shared by all of your mods)
3. Each folder in `zonetool_paths/`

`zonetool_paths/` is the place for big sets of assets that many builds use, such as a dump of `common_mp`. Put the whole dump folder in it, for example `zonetool_paths/common_mp/`. You do not have to copy those files into each mod.

### Generating a map CSV

After you dump or port a map to `zonetool/<map>/`, run:

```bash
zonetool.exe generatecsv mp_greenband
```

This writes `zone_source/mp_greenband.csv` with the map assets, the map scripts and the other assets it finds in the folder. Add `sp` for a singleplayer map (`generatecsv <map> sp`). Add `--path <folder>` to also scan another folder. You can use `--path` more than once.

## The zone source CSV

The CSV in `zone_source/` tells x64-zt which assets go in the zone. Each line is one asset or one instruction. The first field is the asset type and the second field is the asset name:

```
material,compass_map_mp_template
rawfile,maps/mp/mp_template.gsc
weapon,turret_minigun_mp
```

Lines that start with `//` or `#` are comments. x64-zt skips them. Comment out a line with `#` to turn it off without deleting it.

### Instructions

| Line | Effect |
| --- | --- |
| `iterate,<type>` | Adds every file in that asset folder of the mod. `<type>` is `fx`, `material`, `xmodel` or `xanim`. `iterate,true` adds all four |
| `include,<csv>` | Reads another CSV from `zone_source/` at this point, for example a shared list of assets |
| `ignore,<csv>` | Leaves out every asset that is listed in another CSV in `zone_source/` |
| `require,<zone>` | Loads a zone from the game's `zone/` folder, so your zone can use the assets in it without including them |
| `reference,true` | Writes the asset lines after it as references only. `reference,false` turns this off |
| `addpath,<folder>` | Adds one folder to the asset search folders |
| `addpaths,<folder>` | Adds each subfolder of a folder to the asset search folders, as `zonetool_paths/` does |

A **reference** asset is a name only. The game finds the real asset in another zone that is already loaded. To make one reference, leave the name field empty and put the name in the third field: `techset,,my_techset`. In asset listings, two commas after the type also mean a reference.

### Example map CSV

```
// map assets (col_map_mp first to prevent crashes)
col_map_mp,maps/mp/mp_template.d3dbsp
com_map,maps/mp/mp_template.d3dbsp
gfx_map,maps/mp/mp_template.d3dbsp
fx_map,maps/mp/mp_template.d3dbsp
glass_map,maps/mp/mp_template.d3dbsp
map_ents,maps/mp/mp_template.d3dbsp
phys_worldmap,maps/mp/mp_template.d3dbsp

// for bots and AI: use the aipaths of mp_vlobby_room renamed to your map,
// or the aipaths of the map you port
#aipaths,maps/mp/mp_template.d3dbsp

// net const strings (do not remove)
netconststrings,ncs_lsr_level
netconststrings,ncs_lui_level
netconststrings,ncs_acl_level
netconststrings,ncs_fxt_level
netconststrings,ncs_anm_level
netconststrings,ncs_hnt_level
netconststrings,ncs_att_level
netconststrings,ncs_wep_level
netconststrings,ncs_sel_level
netconststrings,ncs_mic_level
netconststrings,ncs_nps_level
netconststrings,ncs_hic_level
netconststrings,ncs_tag_level
netconststrings,ncs_mnu_level
netconststrings,ncs_shk_level
netconststrings,ncs_snl_level
netconststrings,ncs_sbx_level
netconststrings,ncs_snd_level
netconststrings,ncs_loc_level
netconststrings,ncs_vfx_level
netconststrings,ncs_veh_level
netconststrings,ncs_rmb_level
netconststrings,ncs_mat_level
netconststrings,ncs_mdl_level

// map scripts (use a stock GSC dump as a reference)
rawfile,vision/mp_template.vision
rawfile,maps/mp/mp_template.gsc
rawfile,maps/mp/mp_template_fx.gsc
rawfile,maps/mp/mp_template_precache.gsc
rawfile,maps/createfx/mp_template_fx.gsc
rawfile,maps/createart/mp_template_art.gsc
rawfile,maps/createart/mp_template_fog.gsc
rawfile,maps/createart/mp_template_fog_hdr.gsc

// compass image
material,compass_map_mp_template

// add every model, animation and effect in zonetool/mp_template/
iterate,xmodel
iterate,xanim
iterate,fx
```

## Mods and maps

A mod and a map are built the same way. Both are a folder in `zonetool/` and a CSV in `zone_source/`. A map is usually 90% assets that you never edit.

This mod adds an extinction weapon converted from Ghosts, and a `_gametypes.txt` override that adds more game modes:

```
Modern Warfare Remastered
├── zonetool
│   └── custom_gamemode
│       ├── override
│       │   └── maps/mp/gametypes/_gametypes.txt
│       └── weapons
│           └── alienbomb_mp
├── zone_source
│   └── custom_gamemode.csv
└── h1-mod.exe
```

For `override/`, custom LUI and other client features, see [Zonetool Extra](zonetool-extra). To load a built mod or map in the game, see [Loading Mods](loading-mods) and [Loading Usermaps](loading-usermaps).

## Commands

Type these in the console, or put them after `zonetool.exe` on the command line. `<zone>` is a zone name, with or without `.ff`.

| Command | Result |
| --- | --- |
| `inspect <zone>` | Shows the fastfile header and container data: version, signature, stream files, block sizes and asset count |
| `inspect --all` | Reads the header of every zone and reports the zones that fail |
| `verifyzone <zone>` | Reads every asset in the zone and checks that the whole zone is read correctly |
| `verifyzone --all` | Verifies every zone |
| `dumpzone <zone> [--target <game>]` | Dumps the zone to `dump/<zone>/`. `--target` converts the assets |
| `dumpmap <map> [--target <game>] [--skip-common]` | Dumps the map and the zones it loads to `dump/<map>/`, with one merged CSV. H1, H2, IW6 and S1 only |
| `dumpasset <type> <name\|*> <zone> [--target <game>]` | Dumps one asset to `dump/assets/`. `*` dumps all assets of the type |
| `listzone <zone>` | Writes the asset list of the zone to `asset_listing/<game>/<zone>.zone`, without dumping assets |
| `listzone --all` | Writes the asset list of every zone |
| `listzones` | Prints the name of every zone in the game, one per line |
| `buildzone <zone>` | Builds `zone/<zone>.ff` from `zone_source/<zone>.csv` and `zonetool/<zone>/`. Not for IW3 and IW5 |
| `generatecsv <map> [sp] [--path <folder>]` | Writes `zone_source/<map>.csv` from the files in `zonetool/<map>/` |
| `help` | Prints the help |
| `quit` | Closes the console |

:::note
Older versions of x64-zt (the `main` branch) had `loadzone`, `unloadzones` and an asset type filter, and put the target game first (`dumpzone h1 <zone>`). These do not exist in the current version. Use `--target <game>` after the zone name.
:::

## Options

Options change how x64-zt runs. Put them on the `zonetool.exe` command line, **before** the command. Options typed in the console do nothing. To use an option with the console, start the console with it: `zonetool.exe -dds`.

| Option | Use | Effect |
| --- | --- | --- |
| `-game <name>` | All | Selects the game: `iw3`, `iw5`, `iw6`, `s1`, `h1`, `h2`, `s2`, `iw7`, `iw8`, `t9` or `s4` |
| `-path <folder>` | All | Selects the game folder, the folder that holds `zone/` |
| `-target_path <folder>` | All | Selects the game folder of the `--target` game |
| `-no_cache` | All | Ignores the build cache and writes every file again |
| `-threads <n>` | All | Limits the number of worker threads |
| `-dds` | Dump | Writes images as `.dds` files too |
| `-dump_streamed_image` | Dump | Reads `imagefile*.pak` and writes the streamed images |
| `-castdump` | Dump | Writes a `.cast` file next to each model and animation. IW6, S1, H1, H2, S2, IW7 and T9 |
| `-lambert` | Dump | Converts IW8 materials to the stock IW7 lambert techsets with `--target iw7`. Without it, x64-zt uses the PBR techsets |
| `-max_image_size <n>` | Dump | Limits images to `<n>` pixels on the longest side. IW7 → IW8 |
| `-no_gpu` | Dump | Compresses BC6H and BC7 images on the CPU instead of the GPU. IW7 → IW8 |
| `-use_usermaps` | Build | Writes the zone to `usermaps/<zone>/` instead of `zone/` |
| `-copy_to <folder>` | Build | Copies the built `.ff` and `.pak` files to this folder |
| `-more_memory` | Build | Doubles the zone memory limit |
| `-keep_mp_traverse_nodes` | Build | Keeps invalid multiplayer traverse nodes in aipaths. H2 only |
| `-uncompressed` | Build | Writes a stored (uncompressed) zone. IW8 only. mw120rproxy needs it for custom weapons |

## Game and folder selection

If you do not give `-game`, x64-zt selects the game in this order:

1. The game exe in the `-path` folder. Without `-path`, the game exe in the folder of `zonetool.exe` or in the current folder.
2. The `game` value in `zonetool.json`.
3. The first game in the build.

| Game exe | Game |
| --- | --- |
| `iw3mp.exe`, `iw3sp.exe` | `iw3` |
| `iw5mp.exe`, `iw5sp.exe` | `iw5` |
| `iw6mp64_ship.exe`, `iw6sp64_ship.exe` | `iw6` |
| `s1_mp64_ship.exe`, `s1_sp64_ship.exe` | `s1` |
| `h1_mp64_ship.exe`, `h1_sp64_ship.exe` | `h1` |
| `MW2CR.exe`, `h2_sp64_bnet_ship.exe` | `h2` |
| `s2_mp64_ship.exe` | `s2` |
| `iw7_ship.exe` | `iw7` |
| `game_dx12_ship_replay.exe`, `ModernWarfare.exe` | `iw8` |
| `BlackOpsColdWar.exe` | `t9` |
| `Vanguard.exe` | `s4` |

If you do not give `-path`, x64-zt uses the folder in `zonetool.json`. If not, it uses the folder of `zonetool.exe` or the current folder when it has the game exe or a `zone/` folder, then the default Steam folder of the game.

### Running from another folder

You do not have to copy `zonetool.exe` into each game. Give the game and its folder on the command line:

```bash
zonetool.exe -game h1 -path "D:\Games\MWR" dumpzone mp_shipment
```

Or save them in `zonetool.json`, next to `zonetool.exe`:

```json
{
  "game": "h1",
  "paths": {
    "h1": "D:/Games/MWR",
    "s1": "D:/Games/AW",
    "s2": "D:/Games/WWII"
  }
}
```

`game` selects the default game. `paths` gives the folder of each game. It is also used for the `--target` game, so you do not need `-target_path`. Options on the command line always win over `zonetool.json`.

:::caution
When you run x64-zt from another folder, `dump/`, `zonetool/` and `zone_source/` are in **that** folder, not in the game folder.
:::

## Common errors

| Message | Fix |
| --- | --- |
| `game "x" is not in this build` | Your copy of x64-zt does not include that game. Use a game listed in `zonetool.exe -h` |
| `zone "x" not found in ...` | The zone is not in the game folder. Check the zone name and `-path` |
| `x64-zt did not find the <game> game folder` | Give the game folder with `-path` or in `zonetool.json` |
| `set the <game> game folder with -target_path or zonetool.json` | x64-zt did not find the `--target` game folder. Give it with `-target_path` or in `zonetool.json` |
| `buildzone is not supported for <game>` | IW3 and IW5 are for dumping only |
| `no converter from <game> to <game> in this build` | That conversion is not supported, or not in your copy. See [Game conversion support](#game-conversion-support) |
| `dumpmap is not supported for <game>` | Use `dumpzone` on each map zone instead |
| `Could not find csv file "x" to build zone` | `zone_source/x.csv` is missing, or you run x64-zt from another folder |
| `unknown command "x"` | Check the spelling. Commands are lowercase. Options start with `-` and go before the command |
| The wrong game is selected | Give `-game`, or check the game exe in the folder |
| An option does nothing | Options work only on the `zonetool.exe` command line, before the command. Not in the console |

## Game conversion support

The full table is in [Supported games](#supported-games). Notes on specific conversions:

- The pipeline is built to do `IW3 → IW4 → IW5` or `IW4 → IW5`, as IW5 is an extremely studied source game that is proven to work *(but we plan to make this better in the future)*. `IW3 → IW7` uses this chain. `IW5 → IW7` is partial. `IW4 → IW7` is not offered on its own yet.
- `IW3/IW4/IW5 → IW8` is possible by converting to IW7 first, then `IW7 → IW8`.
- `IW3/IW4/IW5 → IW6/S1/H1/H2/S2` are not reimplemented in x64-zt yet. Until then, use the [old-gen map porting guide](map-porting-iw5).
- H1 is the hub. `S1 → H2` converts through H1, and `S1 → S2` is possible by doing `S1 → H1`, and then `H1 → S2`. A build of x64-zt needs H1 for these.
- `IW6 → H1` and `H1 → S2` convert techsets and shaders natively.
- `H1 → S2` and `S1 → S2` are experimental, but work way better as of **November 15th, 2026**.
- `H1 → S1` is left out due to backporting issues, and may be added again in the future. The legacy code on `main` contains it.
- `IW7 → H1` converts images, materials and models only.
- `IW7 → IW8` is experimental. Attachments and muzzle effects are not converted yet. See [Weapon Porting (IW7 → IW8)](iw7-to-iw8-weapon).
- `IW8 → IW7` is experimental for backporting *([read issue #317](https://github.com/auroramod/x64-zt/issues/317))*. It converts world geometry, collision, static models, models, materials, images and the vision file. Some materials, models and effects are still dropped. Add `-lambert` to use the stock IW7 lambert techsets instead of the PBR techsets.
- `S4 → IW8` is partial. S4 (Vanguard) can also dump and build its own zones.
- T9 (Black Ops Cold War) support is experimental. `T9 → T9` and `T9 → IW8` give broken or incorrect outputs.

## Asset listings

An asset listing is the asset CSV of every zone in a game. Use it to find which zone has the asset you want, before you dump anything. Each `.zone` file has the same name as a `.ff` zone in the game.

You can make your own with `listzone --all`, or download one:

- [Ghosts (IW6)](/assets/listing/iw6_asset_listing.zip)
- [Advanced Warfare (S1)](/assets/listing/s1_asset_listing.zip)
- [Modern Warfare Remastered (H1)](/assets/listing/h1_asset_listing.zip)
- [MW2 Campaign Remastered (H2)](/assets/listing/h2_asset_listing.zip)
- [WWII (S2)](/assets/listing/s2_asset_listing.zip)
- [Infinite Warfare (IW7)](/assets/listing/iw7_asset_listing.zip)
- [Modern Warfare 2019 (IW8 1.20)](/assets/listing/iw8_asset_listing.zip)
- [Vanguard (S4 1.14)](/assets/listing/s4_asset_listing.zip)

Extract the `.zip` with a tool like 7-Zip or WinRAR. To search all of the files at once, open the folder in [VSCode](https://code.visualstudio.com/) and use **Find in Files** (`Ctrl+Shift+F`).

## Next steps

- [Port maps from CoD4, MW2 or MW3](map-porting-iw5) to the next-generation games.
- [Port maps between AW, MWR and MW2CR](map-porting-s1).
- [Port weapons from IW7 to IW8](iw7-to-iw8-weapon).
- [Zonetool Extra](zonetool-extra): `override/`, custom LUI and other fixes.

### Fully custom assets

You can make new assets with the official [CoD4 Mod Tools](https://github.com/promod/CoD4-Mod-Tools) and build them into a CoD4 fastfile. Dump that fastfile with the **x64** branch of [Joelrau's zonetool](https://github.com/Joelrau/zonetool/tree/x64), then build it for a next-generation game with x64-zt, as in the [old-gen map porting guide](map-porting-iw5). The CoD4 Mod Tools have been documented on YouTube and other websites since 2008, so we do not give much help with them here.
