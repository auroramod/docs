# Loading a GSC script

## File structure

GSC scripts should be placed in `<MWR root folder>/h1-mod/scripts/`. In the scripts folder, any GSC script with the `.gsc` suffix will be attempted to be loaded by H1-Mod. If you want your GSC script to only be loaded in the multiplayer context, or only in the singleplayer context, make a folder in the `scripts` folder called `mp` (for multiplayer) or `sp` (for singleplayer) and then store your GSC script in there.

To figure out what your file structure should look like, refer to below:
```
Modern Warfare Remastered
├── h1-mod
│   ├── scripts
│   │   ├── mp_and_sp_script.gsc
|   |   ├── mp
|   |   |   └── my_multiplayer_script.gsc
|   |   ├── sp
|   |   |   └── my_singleplayer_script.gsc
└── h1-mod.exe
```

After you setup your `main` and/or `init` entrypoint(s), you are good to go. If you want to include another script, use `#include "<file>"`. This will load the script using H1-Mod's functionality for loading scripts.
```c
#include maps\mp\_utility;
--- [...]
```
