# Port Forwarding

1. Open up Command Prompt. (Windows key + R -> `cmd`).
2. Type in `ipconfig`, and take the default gateway of the network device that you are using (Wireless/Ethernet).
3. Open your internet browser and type in the default gateway IP Address (usually 192.168.X.X)
4. Log in with your router login details (not your wifi password) and navigate to the "Virtual Server" or "Port Forwarding" area for your specific router.
5. This is the part where you will likely need to help yourself. If something asks for an application name, put anything (we recommend "H1"). For the port, use `27016` or `27017`, and for the "forwarded IP address" (text might be different), put in your IP address. If something mentions "protocol" such as UDP or TCP, put both. If you can't, then do the process 2 times, 1 for UDP and the 2nd, TCP.
6. Test your server by asking a friend to join. If they can join from their own PC, you did it right. If it fails, then you either did something wrong or your router does not support port forwarding (usually happens to Modem+Router Combo Devices).
