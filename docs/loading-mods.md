# Loading a mod

## File structure

Mods for both of our clients can be loaded through a folder you create called `mods` in the game folder.

<img src="img/mods/mods_folder.png" width="656" height="134"></img>

Inside of the mods folder, you can download any mod that has a `mod.ff` and other additional content, like dedicated `scripts` and `maps` folders for GSC, or additional `.paks` and `.sabs` may be included if the mod does stuff with images and sounds.

### Installing a mod from a .zip

If you download a mod from somewhere and it's in a `.zip` file, you will want to use a `.zip` extractor, *like 7-Zip or WinRar*, to extract the zip to disk as a folder. When you do this, make sure the structure follows something like below for the mod to properly load and show up in the `Mods` menu ingame:

### H1-Mod
```
Modern Warfare Remastered
├── mods *(you create this folder)*
│   ├── mp_example_mod
│   │   ├── scripts
|   |   |   └── example.gsc
|   |   ├── mod.ff
|   |   ├── mod.pak
└── h1-mod.exe
```

### IW7-Mod
```
Infinite Warfare
├── mods *(you create this folder)*
│   ├── mp_example_mod
│   │   ├── scripts
|   |   |   └── example.gsc
|   |   ├── mod.ff
|   |   ├── mod.pak
|   |   ├── mod.sabs
└── iw7-mod.exe
```

### Loading a mod ingame

Once you setup the mod, you can load the mod ingame by going to the dedicated `Mods` menu each client offers. Inside there, you will find your mod which you can load. This will trigger a `vid_restart`, which often refreshes the game as if it was restarting. On H1-Mod, the game may actually do a full restart to load assets that cannot be added on the fly.

### Loading a mod via command line

To load a mod via command line or batch, you can follow something like below:

```bat
@echo off
h1-mod.exe -multiplayer +set fs_game "mods/mp_example_mod" +set developer_script 1 
```