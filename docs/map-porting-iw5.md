# Map Porting (COD4/MW2/MW3 -> MWR/S1/MW2:CR)

:::tip
Doing a quick read of the [Zonetool Basics](zonetool-basics) will explain **many things** that are talked about on this guide. We recommend checking the [commands for Zonetool](zonetool-basics#commands) and to check whether [you can port from your desired game to the new one](zonetool-basics#game-conversion-support).
:::

To port maps from IW3, IW4, or IW5, you must use [Joelrau's zonetool DLL](https://github.com/Joelrau/zonetool/tree/x64) on the **x64** branch from GitHub. This version of **zonetool** will convert assets from older games to the Ghost-engine games like IW6, S1, H1, or H2. When the converted assets are dumped with older zonetool, you use **x64-zt** for building these converted assets for your game of choice.

:::warning
Due to massive engine changes with lighting and such done from *Modern Warfare 3* to *Ghosts*, maps ported from games before Ghosts don't take full advantage of H1 technology and may not look the best. Multiple patches and conversions are done to the game to restore this data when possible. This **may include fullbright models** which has a solution below.
:::

To start the map porting process, you'll need:
- the [zonetool .exe](https://github.com/ZoneTool/zonetool-binaries) for your game, which goes in the game files of that game
- the [zonetool .dll](https://github.com/Joelrau/zonetool/tree/x64) from **Joelrau** compiled, which dumps old game's assets in a format for x64-zt to build *(targets H1)*

Once you find the zone you want to dump *(example: mp_bog from IW3)*, use the `dumpzone mp_bog <game?>` command and wait for your zone to dump. *(The `<game?>` part can be **IW6**, **S1**, **H1**, or **H2**, and this will dump your map for another game)*
1. Find the finalized dumped zone folder at `%COD4 game files%/dump/mp_bog/`
2. Move the dumped folder to `%MWR game files%/zonetool/mp_bog/`
3. Open x64-zt, and run the command `generatecsv <zone>` *(example: `generatecsv mp_bog`)*

After you've generated your CSV, your map can now be built. Simply run `buildzone <zone>` to build the map.

### Fixing "Could not find mapped X techset for Y techset"
:::warning
Mapping techsets is not a beginner friendly task and requires manual work. Doing so could be time consuming depending if you find proper matches and research the materials in H1 to compare to older game materials. Techsets are also still being researched, and can have artifacts as a result.
:::

To fix this error, you can modify zonetool's [Material class in IW5's Dumper for H1](https://github.com/Joelrau/zonetool/blob/x64/src/IW5/Dumper/H1/Assets/Material.cpp#L10-L15) to map the techsets listed. Using the [H1 Asset Listing](/assets/listing/h1_asset_listing.zip) alongside this, you can search up techsets that are similar in H1 and map them. *(Refer to the comments above the techset map for the latest research and finds. For example, _lmpb_ techsets cause speculars to be very intense!)*

Another way to fix this error is to manually fix the techset used in the material listed, and then using the asset listing above to find materials that may be in H1 with the exact same name or a similar material. Finding materials that may include "og" or the same name as yours are usually newer versions of the same asset, which can help indicate issues with gameflags, sortkeys, camera region, techset, etc.

### Fixing "Could not find mapped X sortkey for sortkey: Y"
Sortkeys are used in materials and must be remapped from older games to H1 or any newer games. A lot of them are mapped, but some are not completely studied or may be incorrect still after remapping. Finding a material similar to your material in terms of what it is/does can help determine a proper sortkey using the *H1 Asset Listing* above.

### Older game techsets
When porting from older games before S1 into H1, techsets are remapped to use H1 techsets instead since older games are DX9 while H1 is DX11. Lots of these techsets still exist in one way or another, but it takes some manual work to find them. Luckily, you can download the [H1 Asset Listing](/assets/listing/h1_asset_listing.zip) and then use a ZIP extractor to get the zone sources of H1 techsets. A recommended program to navigate these would be [Notepad++](https://notepad-plus-plus.org/downloads/) or [VSCode](https://code.visualstudio.com/).

Some things are different in the H1 techset's name. For example, if you have `r0c0n0s0p0` in IW5, it might now be `r0c0n0sd0p0`. Another example is `o0` being `om0`. There are also values with the name first letter like `sr0`.

Before you start finding missing techsets, use `dumpzone <zone name>` to obtain the common assets & techsets:
- `techsets_common_mp`
- `techsets_mp_killhouse`
- `techsets_ac130`

These will help you filter out any common techset errors you'll get. Put all of these dumped folders into a new folder created called `%MWR game files%/zonetool_paths/`.

### SP techset dumping
Before dumping techsets from singleplayer, you must run the command `loadzone techsets_common`, and then you can use dump your singleplayer techsets zone. 

### SP material limit error
If you a hit a material limit dumping a singleplayer zone/map, you must modify zonetool to load `code_post_gfx` + `common` instead of `code_post_gfx_mp` + `common_mp`. You can find the [code for common zones here](https://github.com/Joelrau/x64-zt/blob/main/src/zonetool/component/h1/zonetool.cpp#L251).

### Missing techsets
To find missing techsets your map needs, try building your zone in x64-zt. When your zone is building, you might recieve a error alongside something to do with "statebit info", "techset", or a very long and weird name. This usually indicates missing techset errors and are easy to resolve.

:::warning
When going through the asset listing to find your desired techset, you'll need to look for techsets that are **NOT** reference assets. For example:

non-reference example (good):
`techset,my_beautiful_techset_p0n0`

reference example (bad, uses two commas):
`techset,,my_beautiful_techset_p0n0`

(Singleplayer game files **may be required** for some missing techsets)
:::

When you dump the zone that contains your desired techset, it should start with **techset_**. After running the `dumpzone <zone>` command, find your desired techset zone folder in your dump folder *(located at `%game files%/dump/`)*, and then put it in `%game files%/zonetool_paths/techsets_mp_bog/`. x64-zt will now look here for techsets before erroring!

**You may need to repeat this process multiple times until you have no errors.**

### Fullbright/black lighting on models (bad techs used in mats)
Some models/foliage on your map may be fullbright and not responding correctly to the lighting. The reasoning may be due to your foliage/model using `mc_ambient_t0c0_nfwpf`/`mc_ambient_t0c0_nfwpf_nocast`. If this is the case, replace it with techset `mc_l_sm_t0c0_nfwpf`. This **should be fixed** on newer ZoneTool versions on Joelrau's fork, however older maps & dumps may have this problem.

If you still have fullbright lighting but on every model/foliage, run the command `r_lightGridNonCompressed 1` to use experimental lightgrid data to fix lighting on models & fx before loading your map.

### Map crashing on H1 with 0x1406B33F4
This is simply a error that occurs when a bad material is being used. The current way to debug this is ugly, but it works for now. To do so, from the private match screen, use the map command followed by `debug_materials 1` in your console. This **will tank your FPS** so only use this when needed, aka after a command that's doing something like loading a map. The last material listed before the error occurs is the broken material you have to fix for your map!

Example command: `devmap mp_paris;debug_materials 1`
