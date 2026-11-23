# Weapon Porting (H1 -> S2)

:::warning
H1 -> S2 weapon porting is **experimental**. The AK-47 converts, builds, shows up in WWII and works completely. Bones for xanims are automatically converted. See [Known issues](#known-issues) for what is still missing.
:::

This guide takes a weapon from **Call of Duty: Modern Warfare Remastered (H1)** and puts it in **Call of Duty: WWII (S2)**. We use the AK-47 (`h1_ak47_mp`) as the example. The same steps work for any other multiplayer weapon.

New to x64-zt? Read [Zonetool Basics](x64-zt) first. It explains the folders used below.

## What you need

- **x64-zt 2** (`zonetool.exe`), from the [releases page](https://github.com/Joelrau/x64-zt/releases/tag/latest).
- **Modern Warfare Remastered 1.15**, the folder with `h1_mp64_ship.exe`.
- **Call of Duty: WWII** on Steam, the folder with `s2_mp64_ship.exe`.
- **[S2x](https://github.com/Brentdevent/S2x)**, the WWII client mod. It supports `loadzone` and loading mods just like H1-Mod and IW7-Mod do.

## Step 1: Setup x64-zt

Next to `zonetool.exe`, make a file called `zonetool.json`:

```json
{
  "paths": {
    "h1": "E:/Call of Duty Modern Warfare Remastered (1.15)",
    "s2": "D:/SteamLibrary/steamapps/common/Call of Duty WWII"
  }
}
```

Change both paths to match your PC, and use `/` instead of `\`. x64-zt now knows where to read H1 and where to write S2, so you never type a game folder again.

## Step 2: Find your weapon

An H1 weapon is made of three pieces. Each has a predictable name:

| What | Name | AK-47 example |
| --- | --- | --- |
| Weapon | `h1_<name>_mp` | `h1_ak47_mp` |
| View model zone | `mp_vm_<name>_base_tr` | `mp_vm_ak47_base_tr` |
| World model zone | `mp_wm_<name>_base_tr` | `mp_wm_ak47_base_tr` |

To look up another weapon, download the [H1 asset listing](/assets/listing/h1_asset_listing.zip), open the folder in [VSCode](https://code.visualstudio.com/), and press `Ctrl+Shift+F` to search for the name.

## Step 3: Convert it

Open a terminal in your **WWII folder** and run these three commands:

```bash
zonetool.exe -game h1 dumpasset weapon h1_ak47_mp common_mp --target s2
zonetool.exe -game h1 dumpzone mp_vm_ak47_base_tr --target s2
zonetool.exe -game h1 dumpzone mp_wm_ak47_base_tr --target s2
```

For the AK-47 this converts:

- the weapon and its **12 attachments**
- **24 models**, with their materials and images
- **71 animations**, re-aimed so H1's arms fit the WWII arm rig
- **82 sounds** and their audio files

The files land in two places: `dump/assets/` and `dump/weapon_models/`.

:::caution
Clear `dump/assets/` before you convert a new weapon. If old files are left over from another conversion, they get built into your mod too.
:::

## Step 4: Gather the files

Pick a name for your mod. We use `h1_ak47_test`. **Do not** use the name of a stock zone, because a build replaces a zone with the same name.

1. Make the folder `zonetool/h1_ak47_test/`.
2. Copy everything from `dump/assets/` into it.
3. Copy the folders from `dump/weapon_models/` into it too (`xmodel`, `material`, `images`, and so on). **Skip** the two folders that start with `mp_`.
4. Delete the `.csv` files that came along into `zonetool/h1_ak47_test/`.
5. Make the folder `zone_source/`.
6. Make `zone_source/h1_ak47_test.csv` from these three lists, with duplicate lines removed:
   - `dump/assets/common_mp.csv`
   - `dump/weapon_models/mp_vm_ak47_base_tr.csv`
   - `dump/weapon_models/mp_wm_ak47_base_tr.csv`

   Leave out any line that starts with `rawfile,mp_`. Do not use the `.h1.csv` files.

Your folder now looks like this:

```
Call of Duty WWII
├── zonetool/
│   └── h1_ak47_test/        all converted files
├── zone_source/
│   └── h1_ak47_test.csv     the merged list
├── zonetool.exe
├── zonetool.json
└── s2_mp64_ship.exe
```

## Step 5: Build and check

```bash
zonetool.exe -game s2 -no_cache buildzone h1_ak47_test
zonetool.exe -game s2 verifyzone h1_ak47_test
```

`verifyzone` re-reads the zone and checks that it is whole. You want to see `zone "h1_ak47_test" passed`.

The build writes two files into the WWII `zone/` folder: `h1_ak47_test.ff` and `h1_ak47_test.pak`. The AK-47 is about 45 MB and 60 MB.

## Known issues

The converter is still a work in progress. These are the open problems:

- **Gun and arms.** The weapon keeps WWII's own arm model. The converter re-aims H1's animations onto it. The knuckles line up within 0.05 units, but the fingertips end 0.2 to 0.4 units short because WWII's fingers are shorter.
- **Additive animations are not re-aimed.** The AK-47 has none, but some weapons do, and you will see a warning.
- **Sound and effect overrides are dropped.** Rumble and effect notetracks are empty, so expect no muzzle flash and no rumble.
- **HUD icons come from a stock WWII weapon,** not from the H1 weapon.
- **Some attachment fields are dropped,** with a warning. This includes extended mags (`xmagmwr`) and long barrel ranges (`longbarrelmwr`). Fields WWII does not have, such as `thermalScope`, are dropped too.
- **Some animations are missing.** A few ADS animations of the holosight are not in the zones the converter reads. The grenade launcher's alt raise also fails.
- **Only the AK-47 was played.** The M40A3, Colt 45 and M1014 build and verify, but nobody has tested them in the game.

## Common problems

| Problem | Fix |
| --- | --- |
| `zone "common_mp" not found` | The `h1` path in `zonetool.json` is wrong, or you left out `-game h1` |
| `Could not find csv file "h1_ak47_test"` | The CSV must be `zone_source/h1_ak47_test.csv`, in the folder where you run the command |
| `loadzone: zone 'h1_ak47_test' could not be found` | The zone is not in the WWII `zone/` folder. Run the build again |
| `give` says `Unable to give weapon` | Type `loadzone` **before** you load the map, then check the console log for `mod weapons loaded` |
| The gun is black or has no arms | Check that you built from a clean dump. Old files in `dump/assets/` can break it |
| You edited files and nothing changed | Build again with `-no_cache` |
| The build replaced a stock zone | You used a stock name. Give your mod a new name and restore the stock zone from Steam (verify game files) |
