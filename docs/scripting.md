# Scripting

## Introduction to LUA

LUA was the scripting language used in place of GSC on the X Labs clients. This was because at the time of IW6x, there was no GSC compiler. On H1-Mod, we adapt this language from the former clients because it is easy to work with and it is easy to provide a C++ API between the client and LUA scripting. Because LUA scripting is the alternative language for the game's scripting, it can still communicate with GSC (the game's scripting language) just fine. Alongside that, it adds new features that help you modify the game's stock GSC scripts to make it all the better.

If you have never used LUA before, [read up here](https://www.lua.org/pil/contents.html) to better understand it.

## Writing a basic script

In this little tutorial, we are going to write a simple LUA script that will count the amount of spawns on a player and do a bold print only the first time a player spawns.

```lua
level:onnotify("connected", function(player) -- this function will fire EVERY TIME a new player has connected
    player.spawns = 0 -- setup a new variable to keep count of player spawns
    
    player:onnotify("spawned_player", function() -- this function will fire EVERY TIME the player has spawned
        player.spawns = player.spawns + 1 -- we add 1 to this variable everytime the player spawns
    end)
    
    player:onnotifyonce("spawned_player", function() -- this function will fire when the player has spawned ONCE.
        player:clientiprintlnbold("Hello World!")
    end)
end)
```
