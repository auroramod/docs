# Lua Scripting

## Introduction to Lua scripting

Lua was the scripting language used in place of GSC (the game's scripting language) on the X Labs clients. This was because at the time of IW6x, there was no GSC compiler. On H1-Mod, we adapt this language from the former clients because it is easy to work with provide a API that adds additional features. Although Lua scripting is the alternative language for the game's scripting, it can still communicate with GSC just fine. Alongside that, it adds new features that help you modify the game's stock GSC scripts to make it all the better.

If you have never used Lua before, [read up here](https://www.lua.org/pil/contents.html) to better understand it. This scripting documentation is based off [IW6x Lua Scripting Documentation](https://github.com/XLabsProject/iw6x-client/wiki/Scripting).

## Writing a basic script

In this little tutorial, we are going to write a simple Lua script that will count the amount of spawns on a player and do a bold print only the first time a player spawns.

```lua
-- this callback function will run EVERY TIME a new player has connected
level:onnotify("connected", function(player)
    player.spawns = 0 -- we setup a new variable to keep count of spawns on the player entity
    
    -- this callback function will run EVERY TIME the player has spawned
    player:onnotify("spawned_player", function()
        player.spawns = player.spawns + 1 -- we add 1 to this variable everytime the player spawns
        print("Player " .. player.name .. " has spawned " .. player.spawns .. " times!")
    end)
    
    -- this callback function will run when the player has spawned for the first time only.
    -- this is because we use `onnotifyonce` instead on `onnotify`
    player:onnotifyonce("spawned_player", function()
        player:clientiprintlnbold("Hello World!")
    end)
end)
```

And after that, you have successfully made a basic Lua script. Refer to [Loading a Lua script](load-script) to learn how to use it.
