# Port Forwarding

Port Forwarding is letting a port that is protected by your internet's firewall, usually in the router, from being accessed from the outside world. This is done to protect you, but in this case, the server's port will be public to allow incoming and outcoming requests. **If you are on a VPS, your provider may have a different way of Port Forwarding. Use Google to figure out how your provider handles ports.**

:::info
If you are just trying to play with friends locally in Private Match, refer to the [Using a VPN to play with friends](#using-a-vpn-to-play-with-friends) guide below as none of this will apply to you otherwise.
:::

## Get your IP for port forwarding

1. Open up Command Prompt. (Windows key + R -> `cmd`).
2. Type in `ipconfig`, and take the default gateway of the network device that you are using (Wireless/Ethernet).
3. Open your internet browser and type in the default gateway IP Address (usually 192.168.X.X)
4. Login with your router login details (not your wifi password) and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.
5. This is the part where you will likely need to help yourself. If something asks for an application name, put anything (we recommend "H1"). For the port, use `27016` or `27017`, and for the "forwarded IP address" (text might be different), put in your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can't, then do the process 2 times, 1 for UDP and the 2nd, TCP.
6. Test your server by asking a friend to join. If they can join from their own PC, you did it right. If it fails, then you either did something wrong or your router does not support port forwarding (usually happens to Modem+Router Combo Devices).

## Allow port through Windows Firewall

1. Open your Windows start, and search for "firewall & network protection".
2. Click on `Advanced Settings` on the bottom.
3. Click on `Inbound Rules`, and then make a `New Rule...`.
4. Select `Port`, and click `Next >`.
5. Select `UDP` and type in your ports, and click `Next >`. *(ex: `27016-27018` will open all 3 ports in between)*
6. Select `Allow the connection` if it's not, and click `Next >`.
7. Select past the Profile section and click `Next >`. Name your new rule, and now you are done

## Using a VPN to play with friends

You can easily play with friends using a software like [RadminVPN](https://www.radmin-vpn.com/help/code56/). **While you all will need it installed**, it is extremely lightweight and lets various computers be connected under one local network, which allows people to join your server as if they were on the same network as you. This **does not** make your port public and is **only recommended for playing with friends.**

:::note
Using a VPN like RadminVPN does not require you to open ports.
:::

## "How do I figure out which ports to open?"

The ports your server will be publicly running on is **all that matters.** By default, the port used is **27016** or **27018**. If you are hosting servers with multiple ports, they all need to be open, otherwise no one will be able to see or join your server.

:::info
If you are hosting a Private Match, this is not required.
:::

## "Why can't I find my server hosted at home while others can?"

Your router probably doesn't support NAT-Loopback (aka. NAT-Reflection) and that's why it doesn't know how to forward the network traffic. In order to connect to your server, open the ingame console and type `connect 127.0.0.1:yourPort` (If you are hosting on the same machine you are playing on), If not, you will need to find your servers private IP address (same one you used for port forwarding) and connect using that. For example: `connect 192.168.1.5:yourPort`
