# Errors

## "MISSING FILE" error

This is due to the file structure in the Steam version and can be fixed by using the [COD Files Cleaner](https://github.com/skkuull/cod-files-cleaner) to re-structure your directory or by doing the following:

1. Move all .bik files to `/raw/video/` folder
2. Move all .ff, .pak files and localization folder (`english` or any other) to `/zone/` folder

You may also need to:
- Install DLCs
- Make sure your language zone folder is valid. The default language is `english`, so this could also be it.

## "Failed to read game binary" error

Copy the h1-mod.exe/iw7-mod.exe into your desired game's folder and run it from there.

## "Create2DTexture" error

Any of the following may be able fix this issue:

1. Disable shader cache preloading
2. Update GPU drivers
3. Free up RAM
4. Lower your graphics settings

## Fatal error (0xC0000005) at 0x00000000140E8EE64

This is a error **in IW7-Mod** that happens when RAM usage on your computer has been maxed out or stressed. 

![](/img/iw7/memory-err.png)

To fix, you need to enable Virtual Memory:
1. Click your Windows key and type `view advanced system settings` into the search
2. From there, go to the **Performance** section and click `Settings...`
3. Now in **Performance Options**, go to `Advanced`, find the **Virtual memory** section at the bottom, and click `Change...`
4. Un-check `Automatically managwe paging file size for all devices` if it's enabled
5. Now go to the bottom and check the `System managed memory` checkbox
6. Finally, re-check the `Automatically managwe paging file size for all devices` checkbox and try again.
