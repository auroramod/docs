# Introduction to GSC

GSC is a derivative of the 'C' programming language, but made easy for doing gameplay-related stuff. If you understand C or C++, then GSC will come familiar to you. And if you don't know know any other programming languages - don't worry! GSC is made to be easy.

:::tip
Make sure to read up on **[Loading a GSC script](gsc-load-script.md)** before continuing on with the guide.
:::

## Writing a basic script

This is going to show you how to write a simple GSC script that will count the amount of spawns on a player and do a print to the console.

```c
init()
{
    level thread on_player_connected();
}

on_player_connected()
{
    level endon("game_ended");

    for(;;)
    {
        // this notify will run EVERY TIME a new player has connected
        level waittill("connected", player);

        player thread on_player_spawned();
    }
}

on_player_spawned()
{
    self endon("disconnect");
    level endon("game_ended");

    self.spawns = 0;

    // this creates a infinite loop that lasts forever
    for(;;)
    {
        // this notify will run EVERY TIME the player has spawned
        self waittill("spawned_player");

        // we add 1 to this variable everytime the player spawns
        self.spawns += 1;
 
        print( va("Player %s has respawned %s times!", self.name, self.spawns) );
    }
}
```

You now have basic understanding of a GSC script! You can refer to [GSC Syntax](gsc-scripting-syntax) on the basics of GSC.
