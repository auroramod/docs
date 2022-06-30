# Troubleshooting

## My game won't open for some reason

- Please download Visual Studio C++ redists using [Chase's Redist Installer](https://github.com/chxseh/Redist-Installer/releases/download/latest/Redist-Installer.bat)

- Please update your GPU and any other outdated drivers.

## Verify game files (Torrent version)

1. Open your torrent client or install the [qBittorrent Windows Client](https://www.fosshub.com/qBittorrent.html)

2. Get the torrent file for the game files [h1_full_files](https://h1.gg/h1_full_files.torrent)

3. Open the torrent file and select the install folder you wish to verify. (Point 1 on the image below)

4. Please make sure to follow point 2 on the image below, and make sure that the drop down matches the image.

![](/img/torrent.png)

4. Press OK, and the torrent client should start checking/verifying the file integrity of your game. Once it is done, if there are any issues, it will replace the missing files. It will have finished the verification when you can see "seeding" on the torrent download section.

## Verify game files (Steam version)

1. Go to Steam, and navigate to your Call of Duty: Modern Warfare Remastered installation.

2. Right click the installed game, and press "Properties"

3. In the "Local Files" tab, press "Verify integrity of game files". 

4. This will begin the process of verification. Once it is done, and all files are verified, you may start H1-Mod again, and see if it launches.

## "I get a black screen when trying to load some maps"

- You don't have the DLC maps installed. Please refer to the DLC section of our [tutorial](install#i-already-have-the-steam-version--i-dont-have-the-dlc).

## "My HUD and hitmarkers are desynchronized from the gameplay"

- Stop the jitter mod you have, and it will fix itself. Same goes for open scroll wheel exploits.

## "The launcher splash screen doesn't respond and eventually closes"

- Anti-viruses like Avast can throw H1-Mod into a sleep loop and the game will refuse to open. You need to completely uninstall the anti-virus or find some way to stop it from interfering with processes. (Windows Defender works just fine)