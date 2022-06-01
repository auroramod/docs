# Getting Started

A step-by-step guide on setting up a Dedicated Server for H1-Mod.
At the current point in time, the dedicated server can be run on Windows only. (Dedicated Server CPU compatibility is undergoing upgrades, as some older Xeon processors have issues with the MWR binary)

### Prerequisites

* The server requires an static ip address.
* The server requires port forwarding. A tutorial can be found [here](#port-forwarding).
* The server requires [NET Framework 4.5](https://www.microsoft.com/en-us/download/details.aspx?id=30653).

### Installation

TBA

## Port forwarding

1. Open up Command Prompt. (Windows key + R -> "cmd").
2. Type in "ipconfig", and take the default gateway of your network device that you are using (Wireless/Ethernet).
3. Open your internet browser and type in the default gateway Address.
4. Log in and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.
5. This is the part where you kinda need to help yourself. If something asks for an application name, put anything (we recommend CitizenFX). For the port, put 30120, and for the "forwarded IP address" (might be a little different), put your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can't, then do this 2 times, 1 with UDP and the 2nd TCP.
6. Enjoy.