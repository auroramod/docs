# Zonetool Basics

## x64-zt
x64-zt is a tool for reading/writing assets from & into newer Call of Duty games. You can find the tool on the [official x64-zt GitHub repository](https://github.com/Joelrau/x64-zt).

As far as x64-zt goes, this tool is mainly for newer Call of Duty games. Anything listed in the conversion support table below is what is supported. For map porting and for older Call of Duty porting, check [Map Porting](#map-porting).

:::warning
This documentation has **not** been completely finished. Parts of this process are documented and you may still run into issues.
:::

## Conversion support

|| **IW6** | **S1** | **H1** | **H2** | **IW7** |
| --- | --- | --- | --- | --- | --- |
| **IW6** | ✔️ | ❌ | ⚠️ | ⚠️ | ❌ |
| **S1** | ❌ | ✔️ | ✔️ | ✔️ | ❌ |
| **H1** | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| **H2** | ❌ | ❌ | ✔️ | ✔️ | ❌ |
| **IW7** | ❌ | ❌ | ❌ | ❌ | ✔️ |

## Map Porting (IW3-IW4-IW5 -> H1)
To port maps from IW3, IW4, & IW5, you *need* to use [Joelrau's zonetool DLL](https://github.com/Joelrau/zonetool/tree/h1) on the **h1** branch. Using this version of zonetool will target H1 for asset dumps and is expected to be used with **x64-zt** for building custom H1 assets.

:::warning
Due to lighting changes after IW6, maps before IW6 don't take advantage of H1 lighting. Conversions handle this all for you, but it is up to each map porter to fix their map to the best of their ability
:::

To start the map porting process, you'll need:
- the [zonetool binary](https://github.com/ZoneTool/zonetool-binaries) for your specific game, which goes in the game files of that game
- the [zonetool DLL](https://github.com/Joelrau/zonetool/tree/h1) from *Joelrau* compiled, which is used next to the binary

Once you find the zone you want to dump *(ex: mp_bog)*, use the `dumpzone mp_bog` command and wait for your zone to dump. 
1. find the finalized dumped zone folder at `%game files%/dump/mp_bog/`
2. move the dumped folder to `%MWR game files%/zonetool/mp_bog/`
3. create a zone_source folder in your root folder, and then create a Zone Source CSV at `%MWR game files%/zone_source/mp_bog.csv`

### Older game techsets
When porting from older games into H1, techsets are mapped out to use H1 techsets instead. Lots of these techsets still exist in one way or another, but it takes manual work to find them. Luckily, you can download the [H1 Asset Listing](../static/h1_asset_listing.rar) and then use a ZIP extractor to get the zone sources of H1 techsets. A recommended program to Navigate these would be [Notepad++](https://notepad-plus-plus.org/downloads/) or [VSCode](https://code.visualstudio.com/)

Before you start finding missing techsets, dump `techsets_common_mp`, `techsets_mp_killhouse`, and `techsets_ac130`. 

### Missing techsets
To find missing techsets your map needs, try building your zone numerous times. When going through the asset listing to find your desired techset, you'll need to look for techsets that are **NOT** references to dump. ***Singleplayer may be required for some missing techsets.***

non-reference example:
`techset,my_beautiful_techset_p0n0`

reference example:
`techset,,my_beautiful_techset_p0n0`

When you dump the zone that contains your desired techset, it'll start with "techsets_" most likely. Find the dumped techsets zone folder in your dumped zones, and then put it in `%MWR game files%/zonetool_paths/techsets_mp_crash/`. x64-zt will now look here for techsets before erroring!

### Map zone source
Your map zone source is what matters the most for x64-zt to correctly build the map. We've created a simple template you can copy & paste into your zone source.

Before copying this into your CSV, run through a checklist of things:
- change every reference of mp_template to your map name
- if you have aipaths, uncomment the d3dbsp line for it (supports Bot Warfare waypoints)
- change rawfile parsing to your map, and for each gsc your map includes. this also includes vision files

```csv
// map assets (col_map_mp is first to fix possible crashes)
col_map_mp,maps/mp/mp_template.d3dbsp
com_map,maps/mp/mp_template.d3dbsp
gfx_map,maps/mp/mp_template.d3dbsp
fx_map,maps/mp/mp_template.d3dbsp
glass_map,maps/mp/mp_template.d3dbsp
map_ents,maps/mp/mp_template.d3dbsp
phys_worldmap,maps/mp/mp_template.d3dbsp
// use mp_vlobby_room aipaths and rename to your map if none
#aipaths,maps/mp/mp_template.d3dbsp

// netconstrings
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
iterate,true
```

## Map Porting (S1 -> H1)
No documentation at this time. For S1 or any other game's asset listing, join our Discord and go to #zonetool for the [asset listing message](https://discord.com/channels/945420505157083208/1032511834420420640/1196505669805822103).