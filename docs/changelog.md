# Changelog

This is a list of updates H1-Mod has, and the changes through the updates. New updates will be prompted via a popup in the main menu when you open H1-Mod.

## v2.0.0

### Changes
* Added Wine (and Proton) Compatibility
* Added custom zone loading
* Added Usermap/mod downloading
    * Added popup prompt to accept/deny downloading 3rd-party content
* Added [GSC support](gsc-load-script)
    * Reimplement GSC functions (`print`, `println`, `assert`, `assertex`, `logprint`)
    * Added custom GSC functions/methods (check our [custom functions](gsc-scripting-syntax#custom-functions) section)
* Added bouncing to Singleplayer
* Added "Unlock All" button in Singleplayer
* Added Team Balance from MW3
* Added [client language localizations](languages)

### Minor Changes
* Game log logging is now built into the client
* Branding changes
* Added new universal font
    * Offers more character/glyph coverage [image](https://user-images.githubusercontent.com/13555921/180659375-fa84e52f-ac9a-43c7-8541-920de4c9e0c2.png)
    * Replaces built-in fallback fonts (used in CJK, Polish, and Russian) with increased text sizes and tabular figures [image](https://i.imgur.com/XKVom9m.png)
* Game localization changes
* UI changes
    * In-game menu blur changes
        * Singleplayer: Less background blur
        * Multiplayer: Blur completely removed
    * Scoreboard compatibility for usermaps/mods
