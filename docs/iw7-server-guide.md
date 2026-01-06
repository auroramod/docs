# Creating a IW7 Dedicated Server

To create a "dedicated" server, you must have a Computer or VPS that is constantly online 24/7 with good internet connection. It **is recommended** to use a VPS that is not your machine and home connection hosting it. If you are simply hosting a local server you turn on and off, this guide will work perfect for you. 

You may need to [Port Forward your server](port-forwarding) for people to see it in the Server Browser.

### Requirements

- [Redistributables required for Call of Duty](https://chse.dev/redists)
- A text editor **([VSCode](https://code.visualstudio.com/) or [Notepad++](https://notepad-plus-plus.org/downloads/) is recommended)**
- A valid installation of [Call of Duty®: Infinite Warfare](https://store.steampowered.com/app/292730/Call_of_Duty_Infinite_Warfare/) from Steam

### Setting up your server

:::warning
The server files have not been optimized and perfected yet. The game does require around ~90GB of space, so be sure to have some storage allocated to setup your server.
:::

1. Download the [IW7 Dedicated Server Resources](https://github.com/auroramod/iw7-dedi-resources) from GitHub. You can do so by clicking the green `Code` dropdown box, and clicking `Download ZIP` **on the bottom.**
2. Move the **iw7-mod folder** and the **.bat** files into your Infinite Warfare folder. <img src="https://media.discordapp.net/attachments/803370151453524008/1458032589591023676/image.png?ex=695e2a2a&is=695cd8aa&hm=e861ac8b7bd95ecb4a9f12f9db8d1d9b1743f6d09f9d4ffa1200405cf60f5b7a&=&format=webp&quality=lossless&width=818&height=551" width="400" height="275"></img>
3. Port Forward the UDP port(s) [your launcher scripts](iw7-server-guide#editing-your-server-launcher-scripts) will use. By default, it is 27016. [To learn more about Port Forwarding, click here.](port-forwarding)
4. Now you can [edit your configs](iw7-server-guide#editing-your-server-configuration) and [edit your server launcher scripts](iw7-server-guide#editing-your-server-launcher-scripts)!

### "I can't port forward and just play with friends"

No problem, just read this guide on [Using a VPN to play with friends](port-forwarding#using-a-vpn-to-play-with-friends)!

### Editing your server configuration

You can edit the `.cfg` files in the **iw7-mod folder** to your liking. This includes settings like:
- server name (hostname)
- gametype
- maps
- MOTD (Message of the Day)

<img src="https://media.discordapp.net/attachments/803370151453524008/1458036081134932018/image.png?ex=695e2d6a&is=695cdbea&hm=91c28d34a8131eb7acd7d730e280e91a3009b5ba8af8635dfe0cd826adc4f90d&=&format=webp&quality=lossless&width=1230&height=666" width="600" height="300"></img>

### Editing your server launcher scripts

You can edit the `.bat` files in your Infinite Warfare directory to your liking also. This includes settings like:
- mod (fs_game)
- port
- developer script (for debugging)

<img src="https://media.discordapp.net/attachments/803370151453524008/1458036641854918819/image.png?ex=695e2df0&is=695cdc70&hm=1d06a48e8726a4225e5a3867e89952b6c897b06f47c07b0eeefa4f534c43ffde&=&format=webp&quality=lossless&width=844&height=366" width="600" height="275"></img>