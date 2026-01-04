# Zonetool Basics

:::warning
This documentation **has not** been completely finished. Parts of this process are not well documented and you may run into issues. For further help, you can [join our Discord](http://auroramod.dev/discord) and talk to modders in the community.
:::

## x64-zt
x64-zt is a tool for reading/writing fastfile assets for newer Call of Duty games. [You can download the tool here](https://github.com/Joelrau/x64-zt/releases/tag/latest).

This tool is mainly for newer Call of Duty games like Ghosts, Advanced Warfare, Modern Warfare, and Infinite Warfare. Anything listed in the conversion support table below is what is supported.

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

## Porting maps (IW3/4/5 -> H1)
Learn how to port maps for IW3, IW4, & IW5 to newer gen games (S1, H1, & H2) [here](map-porting-iw5).

## Porting maps (S1 -> H1 <- H2)
Learn how to port maps for newer games like S1 to H1 [here](map-porting-s1).

## Porting assets
Any other asset that is built into a fastfile in a game like CoD4, MW2, or MW3 will be ported over into the newer desired format. This goes for newer games too. You can port mods already created that have models, sounds, or even scripts and use them in your mods easily.