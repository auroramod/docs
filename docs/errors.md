# Errors

## "Out of memory" error

- The memory error crash can be fixed by doing the following:

1. Create a shortcut of H1-Mod on your desktop.
2. Right click the shortcut, and press "Properties".
3. In the "Target" section, after the quotation marks (""), please add **-memoryfix** and click apply. (Picture below for reference). This should generate a valid `players2` folder, and after that, you can remove the memory fix parameter.

Or by:
1. Restarting your computer in safe mode
   - Windows Key + R
   - Type 'msconfig' and hit Enter
   - Go to the 'Boot' tab
   - Click the box 'Safe Boot' and hit the button 'Network' in the list
   - Click 'OK' and restart through the pop-up menu
2. Open MWR Multiplayer (this may take a lot longer than usual) it will create the player2 folder with the config files
3. Close out of MWR Multiplayer when you get to the main menu
4. (Optional) Open MWR Singleplayer (this may take a lot longer than usual)
5. (Optional) Close out of MWR Singleplayer when you get to the main menu
6. Restart your computer without safe mode
   - Windows Key + R
   - Type 'msconfig' and hit Enter
   - Go to the 'Boot' tab
   - Uncheck the box 'Safe Boot'
   - Click 'OK' and restart through the pop-up menu
7. Your game should start without the 'Out of memory' error

## "MISSING FILE" error

- The inability to load the necessary files (`MISSING FILE eng_code_pre_gfx_mp.ff`) usually happens due to file structure in Steam version and can be fixed by doing the following:

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
