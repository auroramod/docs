# Changelog

This is a list of updates H1-Mod has, and the changes through the updates. New updates will be prompted via a popup in the main menu when you open H1-Mod.

## v2.0.2

### Changes
- Added `com_waitEndFrameMode` dvar
- Added `branding` dvar
- Added `r_reflectionProbeGenerate`
- Stat & prestige reset no longer crash game
- tag_weapon hack enabled for Release
- Server browser shows map name in red text if missing & shows colored ping
- Fix `Exceeded limit of X localize assets` error (Singleplayer)
- Fix Depot credits not accumulating in certain gamemodes
- Fix clients on same network infinite loading into match
- Fix out of memory error
- Added sensitivity slider
- Add line & column errors for GSC errors (`developer_script` must be enabled)
- & other non-important fixes & changes 😸 

### Changes (Debug)
- Added `cg_drawMaterial`
- Added vision & fog editor + asset viewer (Multiplayer, F11 to open)
- Fix Singleplayer not launching on Debug

## v2.0.1

### Changes
- Fix gsc
- Fix UI popups
- and other small changes
- Added `sv_discordImageUrl` & `sv_discordImageText` for servers to show off in Discord RPC

## v2.0.0

### Changes
* Added Wine (and Proton) compatibility
* Added custom zone loading
* Added usermap/mod downloading
    * Added popup prompt to accept/deny downloading 3rd-party content
* Added [GSC support](gsc-load-script)
    * Reimplement GSC functions (`print`, `println`, `assert`, `assertex`, `logprint`)
    * Added custom GSC functions/methods (check our [custom functions](gsc-scripting-syntax#custom-functions) section)
* Added bouncing to Singleplayer
* Added "Unlock All" button in Singleplayer
* Added Team Balance from MW3
* Added [client language localizations](languages)

### Minor changes
* Game log logging is now built into the client
* Branding changes
* Added new universal font
    * Offers more character/glyph coverage ([image](https://user-images.githubusercontent.com/13555921/180659375-fa84e52f-ac9a-43c7-8541-920de4c9e0c2.png))
    * Replaces built-in fallback fonts (used in CJK, Polish, and Russian) with increased text sizes and tabular figures ([image](https://i.imgur.com/XKVom9m.png))
* Game localization changes
* UI changes
    * In-game menu blur changes
        * Singleplayer: Less background blur
        * Multiplayer: Blur completely removed
    * Scoreboard compatibility patches
