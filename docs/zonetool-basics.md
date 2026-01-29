# Zonetool Basics

:::warning
This documentation **has not** been completely finished. Parts of this process are not well documented and you may run into issues. For further help, you can [join our Discord](http://auroramod.dev/discord) and talk to modders in the community.
:::

## What is x64-zt?

x64-zt is a tool for reading and writing fastfiles and their assets for the *next-generation* **classic** Call of Duty games. [You can download the tool here](https://github.com/Joelrau/x64-zt/releases/tag/latest).

This tool is mainly for newer Call of Duty games like Ghosts, Advanced Warfare, Modern Warfare, Infinite Warfare, and Modern Warfare 2: Campaign Remastered. The codenames for each game represent the company who developed it, and what iteration of game it is. So Ghosts is **IW6**, IW's 6th game, while **S1** (AW) and **H1** (MWR) are Slegehammer & Halfmoon's first games. Anything listed in the conversion support table below is what is supported.

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
