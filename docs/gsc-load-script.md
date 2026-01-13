# Loading a GSC script

## File structure

GSC scripts should be placed in `<game folder>/<h1|iw7>-mod/scripts/`. In the scripts folder, any GSC script with the `.gsc` suffix will be attempted to be loaded by the clients. Refer to the folder structure below to understand what mode-specific GSCs you can load.

To figure out what your file structure should look like, refer to below.

### H1-Mod
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

### IW7-Mod
```
Modern Warfare Remastered
├── iw7-mod
│   ├── scripts
│   │   ├── all_modes.gsc
|   |   ├── mp
|   |   |   └── my_multiplayer_script.gsc
|   |   ├── cp
|   |   |   └── my_zombies_script.gsc
|   |   ├── cp_mp
|   |   |   └── multiplayer_and_zombies.gsc
|   |   ├── sp
|   |   |   └── my_singleplayer_script.gsc
└── iw7-mod.exe
```

### Handles

Custom GSC files will look for `main()` and `init()` functions in your scripts. 
- The `main()` function is called **BEFORE** the engine loads any GSC, which is primarily useful for using `replacefunc` early.
- The `init()` function is called **AFTER** the engine loads many of the necessary GSCs, which is used for general use cases.

After you setup your `main` and/or `init` entrypoint(s), you are good to go. 

### Includes

If you want to include another script, use `#include "<file>"`. This will load the script using the client's functionality for loading scripts.
```c
#include maps\mp\_utility;
--- [...]
```
