# Zonetool Basics

:::warning
This documentation **has not** been completely finished. Parts of this process are not well documented and you may run into issues. For further help, you can [join our Discord](http://auroramod.dev/discord) and talk to modders in the community.
:::

## What is x64-zt?

x64-zt is a tool for reading and writing fastfiles and their assets for the *next-generation* **classic** Call of Duty games. [You can download the tool here](https://github.com/Joelrau/x64-zt/releases/tag/latest).

This tool is mainly for newer Call of Duty games like Ghosts, Advanced Warfare, Modern Warfare, Infinite Warfare, and Modern Warfare 2: Campaign Remastered. The codenames for each game represent the company who developed it, and what iteration of game it is. So Ghosts is **IW6**, IW's 6th game, while **S1** (AW) and **H1** (MWR) are Slegehammer & Halfmoon's first games. Anything listed in the conversion support table below is what is supported.

## Where does a map/mod folder go?

The biggest confusion with zonetool is where it loads mods. Any type of zonetool made by rektinator/Joelrau will **always** load mods from a `zonetool` folder, which inside of there, contains all of your actual mod folders.

### Mods
The following is a example of a custom mod folder that has a custom extinction asset from Ghosts converted to MWR, and a _gametypes.txt override to let the engine know about more gamemodes we want to load:
```
Modern Warfare Remastered
├── zonetool
│   ├── custom_gamemode
│   │   ├── override
|   |   |   ├── maps
|   |   |   |   ├── mp
|   |   |   |   |   ├── gametypes
|   |   |   |   |   |   └── _gametypes.txt
│   │   ├── weapons
│   │   |   ├── alienbomb_mp.json
└── h1-mod.exe
```

### Maps
The following is a example of a custom map folder to show you simply where it goes. This is usually made up of 90% assets we never touch, so to save room, `...` is shown:
```
Modern Warfare Remastered
├── zonetool
│   ├── mp_test_map
│   │   └── ...
└── h1-mod.exe
```

## How to add assets to your mod (zone source)
The most **important part** of loading your custom assets for your map OR mod is making sure it has a zone source, so that zonetool knows where to find it. You can simply set this up by making a `zone_source` folder, and matching the .csv name to be just like your mod/map:
```
Modern Warfare Remastered
├── zonetool
│   ├── custom_gamemode
│   │   ├── override
│   │   ├── weapons
├── zone_source
│   ├── custom_gamemode.csv
└── h1-mod.exe
```

A example .csv can be found for a map right below:
```zone
// map assets (col_map_mp is first to fix possible crashes)
col_map_mp,maps/mp/mp_template.d3dbsp
com_map,maps/mp/mp_template.d3dbsp
gfx_map,maps/mp/mp_template.d3dbsp
fx_map,maps/mp/mp_template.d3dbsp
glass_map,maps/mp/mp_template.d3dbsp
map_ents,maps/mp/mp_template.d3dbsp
phys_worldmap,maps/mp/mp_template.d3dbsp

// use mp_vlobby_room aipaths and rename to your map, or use the waypoint editor for future.
// if you are porting a map, this will be uncommented for bots and AI to move
#aipaths,maps/mp/mp_template.d3dbsp

// netconstrings (DO NOT REMOVE)
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

// rawfiles (refer to stock gsc dump for reference)
#rawfile,vision/mp_template.vision

#rawfile,maps/mp/mp_template.gsc
#rawfile,maps/mp/mp_template_fx.gsc
#rawfile,maps/mp/mp_template_precache.gsc

#rawfile,maps/createfx/mp_template_fx.gsc

#rawfile,maps/createart/mp_template_art.gsc
#rawfile,maps/createart/mp_template_fog.gsc
#rawfile,maps/createart/mp_template_fog_hdr.gsc

// compass image
material,compass_map_mp_template

// iterator
#iterate,xmodel
#iterate,xanim
#iterate,fx
```

## Game conversion support

|| **IW6** | **S1** | **H1** | **H2** | **IW7** |
| --- | --- | --- | --- | --- | --- |
| **IW6** | ✔️ | ❌ | ⚠️ | ⚠️ | ❌ |
| **S1** | ❌ | ✔️ | ✔️ | ✔️ | ❌ |
| **H1** | ❌ | ⚠️ | ✔️ | ✔️ | ❌ |
| **H2** | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| **IW7** | ❌ | ❌ | ❌ | ❌ | ✔️ |

## Commands
- `loadzone <zone>`: Loads a zone
- `unloadzones`: Unloads zones
- `verifyzones <zone>`: Lists assets in a zone
- `dumpzone <zone>`: Dumps a zone
- `dumpzone <target game> <zone> <asset filter>`: Dumps a zone **converting assets for a specific game**
- `dumpasset <type> <name>`: Dumps a single assset
- `dumpmap <map>`: Dumps all required assets for a map
- `dumpmap <target game> <map> <asset filter> <skip common>`: Dumps and converts all required assets for a map

### Definitions
- `asset filter`: A filter specifying all the asset types that should be dumped, if not specified or empty it will dump all asset types.  
  Asset types are separated by **commas**. Using **`_`** indicates a empty filter.   
  **Examples**: 
    - `dumpzone h1 mp_clowntown3 sound,material,techset,rawfile`  
    - `dumpmap h1 mp_clowntown3 _ true`
- `skip common`: Skips common zones when dumping a map, can be `true` or `false`. Useful if you already converted source game common files for target game in zonetool_paths.
- `target game`: The game to convert the assets to.

## Asset listings
An asset listing is a dump of the fastfiles' CSVs, which contains data about what assets it contains. This is used to primarily locate specific assets you want, or to find data about a techset so you can dump the zone. The name of a `.zone` file will correlate to a real `.ff` fastfile you have in your game files.

You can download any `.zip` file you need to browse the zone files. You need a `.zip` extractor, *like 7-Zip or Winrar*, to extract the zip to disk as a folder. You can also use [VSCode](https://code.visualstudio.com/) to search through all of the files in the folder at once.
- [Ghosts Asset Listing](/assets/listing/iw6_asset_listing.zip)
- [Infinite Warfare Asset Listing](/assets/listing/iw7_asset_listing.zip)
- [AW Asset Listing](/assets/listing/s1_asset_listing.zip)
- [MWR Asset Listing](/assets/listing/h1_asset_listing.zip)
- [MW2:CR Asset Listing](/assets/listing/h2_asset_listing.zip)

## Porting maps from old-gen to next-gen
You can learn how to port maps from older games into the next-generation games [in this guide here.](map-porting-iw5)

## Porting maps between next-gen
You can learn how to port maps between the next-generation games [in this guide here.](map-porting-s1)

## Porting completely custom assets
You can create entirely new assets for Call of Duty and port them into any game you want, including next-gen games, by simply using the official [CoD4 Mod Tools](https://github.com/promod/CoD4-Mod-Tools) to build your own CoD4 fastfile. Once you build that fastfile, you can dump it using the **x64** branch of zonetool provided above, and port it to a next-gen game. ***We won't give much help on this as it has been documented on YouTube and other websites since 2008.***
