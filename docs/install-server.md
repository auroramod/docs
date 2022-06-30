# How to make a Dedicated Server

## Getting Started

A step-by-step guide on setting up a Dedicated Server for H1-Mod.
At the current point in time, the dedicated server can be run on Windows only. (Dedicated Server CPU compatibility is undergoing upgrades, as some older Xeon processors have issues with the MWR binary)

### Prerequisites

* The server requires a static ip address.
* The server requires port forwarding. A tutorial can be found [here](port-forwarding).
* The server requires some redists which can be easily installed via this [Redist Installer](https://git.io/redists)

### Installation

1. Download and install [h1_dedicated_server_full.torrent](https://h1.gg/h1_dedicated_server_full.torrent).
2. Download and install the latest H1-Mod release from [here](https://github.com/h1-mod/h1-mod/releases/latest).
3. Drop the latest H1-Mod release in your `h1_dedicated_server_full` directory.
4. Download the H1-Mod dedicated server config directly from [here](https://github.com/FragsAreUs/h1-mod-server-config/archive/refs/heads/main.zip).
5. Extract the `H1-Mod Server Config` to your `h1_dedicated_server_full` directory.
6. Modify your server config file through the `main/server.cfg`.
7. Run `server.bat` and Enjoy!
   