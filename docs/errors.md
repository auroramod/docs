# Errors

## "Out of memory" error

- The memory error crash can be fixed by doing the following:

1. Create a shortcut of H1-Mod on your desktop.
2. Right click the shortcut, and press "Properties".
3. At the end of "Target" section, please add a space and **-memoryfix** and click apply.

![](/img/memoryfix.png)

This should generate a valid `players2` folder, and after that, you can remove the memory fix parameter.

## "MISSING FILE" error

- The inability to load the necessary files (`MISSING FILE eng_code_pre_gfx_mp.ff`) usually happens due to file structure in Steam version and can be fixed by using [MWR Files Cleaner](https://github.com/skkuull/mwr-files-cleaner) or doing the following:

1. Move all .bik files to `/raw/video/` folder
2. Move all .ff, .pak files and localization folder (`english` or any other) to `/zone/` folder

- Install DLCs

- Make sure your language zone folder is valid. The default language is `english`, so this could also be it.

## "Failed to read game binary" error

- Copy the h1-mod.exe into your Modern Warfare Remastered install folder and run it from there.

## "Create2DTexture" error

- Any of the following can fix this issue:

1. Disable shader cache preloading
2. Update GPU drivers
3. Free up RAM
4. Lower your graphics settings


## "virtualLobby is read only" error

- Install [steam](https://store.steampowered.com/about/)

