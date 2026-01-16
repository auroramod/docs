# Command Line Flags

For optional features you can toggle on both **H1-Mod** and **IW7-Mod**, we have a list of every flag and what they do here.

## Both
- `-demonware_debug`: see demonware prints by the game & the emulated server
- `-dedicated`: launches game into dedicated server state
- `-allow_root_io`: allows GSC to use IO functions in fs_basepath instead of fs_game (mod)
- `-nosteam`: disables our custom Steam proxy *(may fix crashes, especially on Linux)*
- `-stdout`: sends console output to std pipe

## IW7-Mod only
- `-noconsole`: disable external console entirely *(ignored on dedicated)*
- `-wincon`: use a basic windows console
- `-terminal`: use a more enhanced windows terminal **(default)**
- `-syscon`: use Call of Duty's external console
- `-cpMode`: automatically sets gametype to GAME_MODE_CP (zombies)
- `-zombies`: *same as -cpMode* 
- `-update-only`: only runs the updater and closes
- `-debugupdate`: see updater prints

## H1-Mod only
- `-multiplayer`: skips GUI from launcher and launches MP
- `-singleplayer`: skips GUI from launcher and launches SP
