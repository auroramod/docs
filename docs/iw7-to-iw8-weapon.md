# Weapon Porting (IW7 -> IW8)

:::warning
IW7 -> IW8 weapon porting is **experimental**. A converted weapon builds and verifies, but it does not completely port over from IW7 original (see [Known issues](#known-issues)).
:::

This guide takes a weapon from **Call of Duty: Infinite Warfare (IW7)** and builds it as a custom weapon for **Call of Duty: Modern Warfare (2019), version 1.20.4 (IW8)**. We use the EMC pistol (`iw7_emc_mp`) as the example. You can swap in any multiplayer weapon.

New to x64-zt? Read [Zonetool Basics](x64-zt) first. It takes a few minutes and explains the folders used below.

## What you need

- **x64-zt 2** (`zonetool.exe`) from the [releases page](https://github.com/Joelrau/x64-zt/releases/tag/latest).
- **Infinite Warfare**
- **Modern Warfare 2019 1.20** (currently only supports `game_dx12_ship_replay.exe` and the `Data/` folder)

:::note
IW8 has no `zone/` folder. x64-zt reads IW8 directly from `Data/` (CASC storage), and it needs the `oo2core_*_win64.dll` that ships with the game. You do not have to extract anything.
:::

## Step 1: Setup x64-zt

Next to `zonetool.exe`, make a file called `zonetool.json`:

```json
{
  "paths": {
    "iw7": "D:/Games/Infinite Warfare",
    "iw8": "D:/Games/Modern Warfare"
  }
}
```

Change both paths to match your PC, and use `/` instead of `\`. x64-zt now knows where to read from and where to write to, and you never have to type a game folder again.

## Step 2: Find your weapon

A weapon is made of a few zones:

| What | Zone | Example |
| --- | --- | --- |
| Weapon | `global_core_mp` | `iw7_emc_mp` |
| View model (1st person) | `mp_weapon_view_<name>_tr` | `mp_weapon_view_iw7_emc_tr` |
| World model (3rd person) | `mp_weapon_world_<name>_tr` | `mp_weapon_world_iw7_emc_tr` |

Animations live in `common_core_mp`, which x64-zt loads automatically.

To look up a weapon or its zones, download the [IW7 asset listing](/assets/listing/iw7_asset_listing.zip), open the folder in [VSCode](https://code.visualstudio.com/), and press `Ctrl+Shift+F` to search for the weapon name.

## Step 3: Convert it

Open a terminal in your **Infinite Warfare** folder. Run these three commands, one after another:

```bash
zonetool.exe dumpzone mp_weapon_view_iw7_emc_tr --target iw8
zonetool.exe dumpzone mp_weapon_world_iw7_emc_tr --target iw8
zonetool.exe dumpasset weapon iw7_emc_mp global_core_mp --target iw8
```

Together, these commands convert:

- the weapon (stats, handling, recoil, zoom, crosshair and bullet impact effect)
- the models and their materials and images
- the animations and the animation package
- the sounds, as a new IW8 sound package and sound bank
- the tracer

You now have files in `dump/assets/` and `dump/transient_assets/`, plus a CSV for each command. The CSV lists every asset the weapon needs.

## Step 4: Gather the files

Now switch to your **Modern Warfare** folder. If you'd like to, you can put a copy of `zonetool.exe` there.

1. Make the folder `zonetool/zt_emc/` if it doesn't exist.
2. Copy everything from both `dump/assets/` and `dump/transient_assets/` of your **Infinite Warfare** folder into it. Merge the folders when asked.
3. Make the folder `zone_source/` if it doesn't exist.
4. Merge the three CSVs into one file, `zone_source/zt_emc.csv`. Put every line that starts with `require,` at the top.

```
Modern Warfare
├── zonetool/
│   └── zt_emc/              all converted files
├── zone_source/
│   └── zt_emc.csv           the merged list
├── zonetool.exe
└── game_dx12_ship_replay.exe
```

## Step 5: Build and check

From the Modern Warfare folder:

```bash
zonetool.exe buildzone zt_emc
zonetool.exe verifyzone zone/zt_emc
```

`verifyzone` re-reads the zone and checks that it is whole. If it prints no errors, the build is good.

:::danger
`buildzone` writes into a new `zone/` folder in your Modern Warfare folder. IW8 **fails to start** when that folder exists. Move `zt_emc.ff` and `zt_emc.pak` out right after the check, then delete the empty `zone/` folder.
:::

## Known issues

These are the open problems. Most are not bugs in your steps.

- **Materials look approximate.** Every converted material uses a stock IW8 shader (a side effect for example is shiny or detailed surfaces will not match IW7)
- **The left hand eases back to the grip** half a second after most animations. The cause is not found yet.
- **Footsteps are silent.** IW7 weapon animations have no footstep data, so the converter fills it with blanks.
- **Attachments and muzzle effects are not converted.** The weapon fires, but its `vfxPackage` is empty.
- **Tracers fade at long range.**
- **Sound curves use the default curve.** The sound is native and volume-matched to IW8, but IW7 sound curves are not mapped.
- **Some bullet impacts show nothing.** Only small, large and shotgun bullet types convert. Other types fall back to no effect.

## Common problems

| Problem | Fix |
| --- | --- |
| `IW8 game folder is not set` | Add the `iw8` path to `zonetool.json`, or add `-target_path "D:\Games\Modern Warfare"` to the command |
| `zone "global_core_mp" not found` | Run from the Infinite Warfare folder, and check the `iw7` path in `zonetool.json` |
| `Could not find csv file "zt_emc"` | The CSV must be `zone_source/zt_emc.csv`, in the folder where you run the command |
| The game will not start | Delete the `zone/` folder in the Modern Warfare folder |
| The weapon has no sound | The `.sabs` file is missing from `mods\mw120r\weapons\` |
| The weapon is missing in Create-a-Class | Check that the name starts with `iw8_cw_` and the weapon ends in `_mp` |
| The proxy ignores your zones | Rebuild each zone with `-uncompressed` |
| You edited files and nothing changed | Build again with `-no_cache` |
