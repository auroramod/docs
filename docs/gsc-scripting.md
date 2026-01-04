# Introduction to GSC

GSC is a derivative of the 'C' programming language, but made easy for doing gameplay-related stuff. If you understand C or C++, then GSC will come familiar to you. And if you don't know know any other programming languages - don't worry! GSC is made to be easy.

Before learning about the language and writing it, read up on [how to load a GSC script](gsc-load-script.md).

## Writing a basic script

In this little tutorial, we are going to write a simple GSC script that will count the amount of spawns on a player and do a print to the console.

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
        level waittill("connected", player); // this notify will run EVERY TIME a new player has connected
        player thread on_player_spawned();
    }
}

on_player_spawned()
{
    self endon("disconnect");
    level endon("game_ended");

    self.spawns = 0; // we setup a new variable to keep count of spawns on the player entity

    for(;;)
    {
        self waittill("spawned_player"); // this notify will run EVERY TIME the player has spawned

        self.spawns += 1; // we add 1 to this variable everytime the player spawns
 
        print(va("Player %s has spawned %s times!", self.name, self.spawns));
    }
}
```

And after that, you have successfully made a basic GSC script. You can refer to [GSC Syntax](gsc-scripting-syntax) on the basics of GSC.
