# Creating a IW7 Dedicated Server

To create a "dedicated" server, you must have a Computer or VPS that is constantly online 24/7 with good internet connection. It **is recommended** to use a VPS that is not your machine and home connection hosting it. If you are simply hosting a local server you turn on and off, this guide will work perfect for you. 

You may need to [Port Forward your server](port-forwarding) for people to see it in the Server Browser.

### Requirements

- [Redistributables required for Call of Duty](https://chse.dev/redists)
- A text editor **([VSCode](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/downloads/) is recommended)**
- A valid installation of [Call of Duty®: Infinite Warfare](https://store.steampowered.com/app/292730/Call_of_Duty_Infinite_Warfare/) from Steam

:::warning
The server files have not been optimized and perfected yet, therefore a standalone server files download is not available. The game files require around **~90GB** of storage, so make sure you have this before setting up your server.
:::

### Setting up your server

1. Download the [IW7 Dedicated Server Resources](https://github.com/auroramod/iw7-dedi-resources) from GitHub. You can do so by clicking the green `Code` dropdown box, and clicking `Download ZIP` **on the bottom.**
2. Move the **iw7-mod folder** and the **.bat** files into your Infinite Warfare folder. <img src="img/server-guide/image1.png" width="400" height="275"></img>

3. Port Forward the UDP port(s) [your launcher scripts](iw7-server-guide#editing-your-server-launcher-scripts) will use. By default, it is 27016. [To learn more about Port Forwarding, click here.](port-forwarding)
4. Now you can [edit your configs](iw7-server-guide#editing-your-server-configuration) and [edit your server launcher scripts](iw7-server-guide#editing-your-server-launcher-scripts)!

### "I can't port forward and just play with friends"

No problem, just read this guide on [Using a VPN to play with friends!](port-forwarding#using-a-vpn-to-play-with-friends)

### Editing your server configuration

You can edit the `.cfg` files in the **iw7-mod folder** to your liking. This includes settings like:
- server name (hostname)
- gametype
- maps
- MOTD (Message of the Day)

:::tip
Going through the entire configuration is recommended to understand what settings you want for your server.
:::

<img src="img/server-guide/image2.png" width="600" height="300"></img>

### Editing your server launcher scripts

You can edit the `.bat` files in your Infinite Warfare directory to your liking also. This includes settings like:
- mod (fs_game)
- port
- developer script (for debugging)

<img src="img/server-guide/image3.png" width="600" height="275"></img>