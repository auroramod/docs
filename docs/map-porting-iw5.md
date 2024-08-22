## Map Porting (IW3/4/5 -> H1/H2/S1)
To port maps from IW3, IW4, & IW5, you must use [Joelrau's zonetool DLL](https://github.com/Joelrau/zonetool/tree/h1) on the **h1** branch from GitHub. This version of zonetool will target H1 for asset dumping and is expected to be used with **x64-zt** for building custom H1 assets from disk.

:::warning
Due to massive lighting changes done from MW3 -> Ghosts, maps ported from games before Ghosts don't take full advantage of H1 technology and may not look the best. For better lightgrid lighting, you can set the dvar `r_lightGridNonCompressed` to **1** before loading into your map.
:::

To start the map porting process, you'll need:
- the [zonetool .exe](https://github.com/ZoneTool/zonetool-binaries) for your game, which goes in the game files of that game
- the [zonetool .dll](https://github.com/Joelrau/zonetool/tree/h1) from ***Joelrau*** compiled, which goes right alongside the exe

Once you find the zone you want to dump *(example: mp_bog)*, use the `dumpzone mp_bog` command and wait for your zone to dump. 
1. find the finalized dumped zone folder at `%game files%/dump/mp_bog/`
2. move the dumped folder to `%MWR game files%/zonetool/mp_bog/`
3. open x64-zt, and run `generatecsv <zone>` *(example: `generatecsv mp_bog`)*

### Older game techsets
When porting from older games into H1, techsets are remapped to use H1 techsets instead since older games are DX9. Lots of these techsets still exist in one way or another, but it takes some manual work to find them. Luckily, you can download the [H1 Asset Listing](../static/h1_asset_listing.rar) and then use a ZIP extractor to get the zone sources of H1 techsets. A recommended program to navigate these would be [Notepad++](https://notepad-plus-plus.org/downloads/) or [VSCode](https://code.visualstudio.com/).

Before you start finding missing techsets, use `dumpzone <zone name>` for:
- `techsets_common_mp`
- `techsets_mp_killhouse`
- `techsets_ac130`

These will help you filter out any common techset errors you'll get.

### Singleplayer techset dumping
Before dumping techsets from singleplayer, you must run the command `loadzone techsets_common`, and then you can use dump your singleplayer techsets zone.

### Missing techsets
To find missing techsets your map needs, try building your zone. When your zone is building, you might recieve a error alongside something to do with "statebit info", "techset", or a very long and weird name. This usually indicates missing techset errors and are easy to resolve.

:::warning
When going through the asset listing to find your desired techset, you'll need to look for techsets that are **NOT** reference assets. For example:

non-reference example (good):
`techset,my_beautiful_techset_p0n0`

reference example (bad, uses two commas):
`techset,,my_beautiful_techset_p0n0`

(Singleplayer game files **may be required** for some missing techsets)
:::

When you dump the zone that contains your desired techset, it should start with **techset_**. After running the `dumpzone <zone>` command, find your desired techset zone folder in your dump folder *(located at `%game files%/dump/`)*, and then put it in `%game files%/zonetool_paths/techsets_mp_bog/`. x64-zt will now look here for techsets before erroring!

### Fullbright lighting on models (odd techsets)
Some models/foliage on your map may be fullbright and not responding correctly to the lighting. The reasoning may be due to your foliage/model using `mc_ambient_t0c0_nfwpf`. If this is the case, replace it with techset `mc_l_sm_t0c0_nfwpf`. This **should be fixed** on newer ZoneTool versions on Joelrau's fork, however older maps & dumps may have this problem.
