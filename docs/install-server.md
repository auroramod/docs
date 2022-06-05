# How to make a Dedicated Server

## Getting Started

A step-by-step guide on setting up a Dedicated Server for H1-Mod.
At the current point in time, the dedicated server can be run on Windows only. (Dedicated Server CPU compatibility is undergoing upgrades, as some older Xeon processors have issues with the MWR binary)

### Prerequisites

* The server requires a static ip address.
* The server requires port forwarding. A tutorial can be found [here](#port-forwarding).
* The server requires some redists which can be easily installed via this [batch file](https://git.io/redists)

### Installation

1. Download and Install [h1_dedicated_server_full.torrent](/files/h1_dedicated_server_full.torrent).
2. Download and Install the latest H1-Mod release from [here](https://github.com/h1-mod/h1-mod/releases).
3. Drop the latest H1-Mod release in your `h1_dedicated_server_full` directory.
4. Download the H1-Mod Server Config directly from [here](https://github.com/FragsAreUs/h1-mod-server-config/archive/refs/heads/main.zip).
5. Extract the `H1-Mod Server Config` to your `h1_dedicated_server_full` directory.
6. Modify your server config file through the `main/server.cfg`.
7. Run `server.bat` and Enjoy!

## Port forwarding

1. Open up Command Prompt. (Windows key + R -> "cmd").
2. Type in "ipconfig", and take the default gateway of the network device that you are using (Wireless/Ethernet).
3. Open your internet browser and type in the default gateway IP Address (usually 192.168.X.X)
4. Log in with your router login details (not your wifi password) and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.
5. This is the part where you will likely need to help yourself. If something asks for an application name, put anything (we recommend "H1"). For the port, use 30120, and for the "forwarded IP address" (text might be different), put in your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can't, then do the process 2 times, 1 for UDP and the 2nd, TCP.
6. Test your server by asking a friend to join. If they can join from their own PC, you did it right. If it fails, then you either did something wrong or your router does not support port forwarding (usually happens to Modem+Router Combo Devices).