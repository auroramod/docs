# Troubleshooting

## My game won't open for some reason

- Please download Visual Studio C++ redists using [Chase's Redist Installer](https://github.com/chxseh/Redist-Installer/releases/download/latest/Redist-Installer.bat)

- Please download the [DirectX Runtime Web Installer](https://download.microsoft.com/download/1/7/1/1718CCC4-6315-4D8E-9543-8E28A4E18C4C/dxwebsetup.exe)

- Please update your GPU and any other outdated drivers.

## Verify game files (Torrent Version)

1. Open your torrent client or install the [qBittorrent Windows Client](https://www.fosshub.com/qBittorrent.html)

2. Get the torrent file for the game files h1_full_files(LINK HERE)

3. Open torrent file and select the install folder you wish to verify. (Point 1 on the image below)

4. Please make sure to follow point 2 on the image below, and make sure that the drop down matches the image.

![](/img/torrent.png)

4. Press OK, and the torrent client should start checking / verifying the file integrity of your game. Once it is done, if there are any issues, it will replace the missing files. It will have finished the verification when you can see "seeding" on the torrent download section.

## Verify game files (Steam Version)

1. Go to Steam, and navigate to your Call of Duty: Modern Warfare Remastered installation.

2. Right click the installed game, and press "properties"

3. In the "local files" tab, press "verify integrity of game files". 

4. This will begin the process of verification. Once it is done, and all files are verified, you may start H1-Mod again, and see if it launches.

## "Memory Error Crash"

- The memory error crash can be fixed by doing the following:

1. Create a shortcut of H1-Mod on your desktop.

2. Right click the shortcut, and press "properties".

3. In the "target" section, after the quotation marks (""), please add **-memoryfix** and click apply. (Picture below for reference).

![](/img/memoryfix.png)

## "I get a black screen when trying to load some maps"

- You don't have the DLC maps installed. Please refer to the DLC section of our [tutorial](install#i-already-have-the-steam-version--i-dont-have-the-dlc).

## "My HUD and hitmarkers are desynchronized from the gameplay"

- Stop the jitter mod you have, and it will fix itself. Same goes for open scroll wheel exploits.