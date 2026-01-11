# Important Commands

:::note
Most of the information here can be used for **H1-Mod** *and* **IW7-Mod** both.
:::

## Opening the console

To open your in-game console, press the  **~** key to type commands. You can also use the external console that is in the form of a Command Prompt window.

![](/img/keyboard.png)

## Unlock/Stats menu

Navigate to the `Stats` menu in the main lobby.

- Unlock All Items: This unlocks all base game items and all camos (including DLC)
- Unlock All Loot: This unlocks all DLC weapons (does not unlock DLC camos)
- Unlock All Classes: This unlocks all prestige-earned additional classes for use.

![](/img/unlockall.png)

## Field of View

- There are 3 commands for Field-of-View (FOV) adjustment:
```
cg_fov <number>
cg_fovScale <decimal number>
cg_fovMin <number>
```
1. cg_fov is the world FOV. This will impact how much of the world you can see, while not affecting your hands and weapon. This setting is the base FOV setting.
2. cg_fovscale is the FOV multiplier. It takes the cg_fov number, and multiplies it. This causes the weapon and hands to be affected, but your zoom multipliers will be unaffected. (Example: 1x zoom at cg_fovscale 1.2 is still a pure 1x zoom)
3. cg_fovmin is the minimum FOV that the game will allow during zoom. Most pronounced with snipers. Example: if you use cg_fov 80 and cg_fovmin 80, you will get no zoom, even on snipers. Looks strange, but can be useful.

Play around with these options, as they are meant to be mixed and matched together.

For starters, you can use this comfortable preset below, which roughly equates to a 100 FOV:

```
cg_fov 75
cg_fovscale 1.25
cg_fovmin <default / unedited>
```

## Unlock Singleplayer missions

Put `mis_cheat 1` in console

## Singleplayer commands

All singleplayer cheats are present and available for use! This list may help you: [CoD4 Cheats List](https://www.liveabout.com/cod-4-cheats-pc-3401820)