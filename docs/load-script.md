# Loading a Lua script

## File structure

Scripts for H1-Mod should be placed in `<MWR folder>/h1-mod/scripts/`. You'll need to create a folder for your script and name it whatever you want (ex: `my_basic_script`). After that, the main file called by H1-Mod is named `__init__.lua`, so store your code that should be running first.

To figure out what your file structure should look like, refer to below:
```
Modern Warfare Remastered
├── h1-mod
│   ├── scripts
│   │   ├── my_basic_script
│   │   │   ├── __init__.lua
│   │   │   └── other_script.lua
│   │   ├── my_other_script
│   │   │   ├── __init__.lua
│   │   │   └── script.lua
└── iw6x.exe
```

After you setup your `__init__.lua` entrypoint, you can include other scripts. If you want to include another script (ex: `other_script.lua`), use the `include` function. This function will load the script using H1-Mod's functionality for loading scripts.
```lua
include("other_script")
--- [...]
```
