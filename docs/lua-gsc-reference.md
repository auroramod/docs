# GSC references in Lua

## Calling GSC functions

Calling GSC functions from the Lua scripting is made easy thanks to fed. To do so, you need to use the H1 GSC dump and figure out what the file and function names. If the file/function you are looking for has a `_ID<decimal>` or `_id_<hex>` prefix, this is most likely new code in H1 that isn't found in IW6 (Ghosts) or S1 (Advanced Warfare).

The `scriptcall` function for Lua scripting is usually called on any sort of player entity or the level entity. To call on a player, doing `player:scriptcall(file, function, args)` will work. However, if the function you are calling is from the level entity, you would use `game:scriptcall(file, function, args)` from the game object.

In this example, we are going to be calling `maps/mp/_utility::_unsetPerk` on last stand, martyrdom, and juggernaut perks. This code should be ran in a function that has access to a player variable.
```lua
function entity:player_spawned()
    self:scriptcall("maps/mp/_utility", "_unsetperk", "specialty_pistoldeath")
    self:scriptcall("maps/mp/_utility", "_unsetperk", "specialty_grenadepulldeath")
    self:scriptcall("maps/mp/_utility", "_unsetperk", "specialty_armorvest")
end

level:onnotify("connected", function(player)
    player:onnotify("spawned_player", function()
        player:player_spawned()
    end)
end)
```

### "Include" functions

To "include" functions from files like in GSC, you can use the `game:include(file)` function from the game object.
```lua
game:include("maps/mp/_utility")

function entity:player_spawned()
    -- Included function names are lowercase
    self:_unsetperk("specialty_pistoldeath")
    self:_unsetperk("specialty_grenadepulldeath")
    self:_unsetperk("specialty_armorvest")
end

level:onnotify("connected", function(player)
    player:onnotify("spawned_player", function()
        player:player_spawned()
    end)
end)
```

Or, you could use the `game:getfunctions(file)` function from the game object.
```lua
local utility = game:getfunctions("maps/mp/_utility")

function entity:player_spawned()
    utility._unsetperk(self, "specialty_pistoldeath")
    utility._unsetperk(self, "specialty_grenadepulldeath")
    utility._unsetperk(self, "specialty_armorvest")
end

level:onnotify("connected", function(player)
    player:onnotify("spawned_player", function()
        player:player_spawned()
    end)
end)
```

### Functions in variables

Functions in variables, such as structs or arrays, will be automatically converted to a Lua function. The first argument must always be the entity to call the function on.

## Hooking (detouring) GSC functions

Same as above, you need to know what a file may be named and what a function may be named.

Detouring a function redirects the function's call to the function callback you provide. The `game:detour` function is always from the game object. The first parameter of the detour will **always** be the entity that called it. (as defined `self_` in example)

In this example, we will be hooking `codecallback_playerkilled` and checking who the attacker is.
```lua
-- we define a variable so we can use this in our callback function
local playerkilled_hook = nil

-- our callback function for the detour
function playerkilled_stub(self_, einflictor, eattacker, idamage, smeansofdeath, sweapon, vdir, shitloc, timeoffset, deathanimduration)
    if eattacker ~= nil or game:isplayer(eattacker) == 1 then
        print("The attacker is " .. eattacker.name)
    else
        print("The attacker is invalid or isn't a player")
    end

    -- [...]

    -- the invoke function will call the original function from the game's stock GSC. we can modify parameters here too!
    playerkilled_hook.invoke(self_, einflictor, eattacker, idamage, smeansofdeath, sweapon, vdir, shitloc, timeoffset, deathanimduration)
end

playerkilled_hook = game:detour("maps/mp/gametypes/_callbacksetup", "codecallback_playerkilled", playerkilled_stub)
```

To disable or enable a detour, the `.disable` and `.enable` methods exist.

## Incorrect/missing symbols on H1-Mod

This GSC dump may contain symbols that H1-Mod may or may not have named or is not correctly named. Navigating to [the function table](https://github.com/auroramod/h1-mod/blob/develop/src/client/game/scripting/function_tables.cpp) and finding the function_map, method_map, & token_map maps will help you. `CTRL + F` (Find) and search your desired value (ex: `isplayer`) and see if it exists.

If the symbol you are trying to call isn't named, then you have to the `_func_<hex>` or `_meth_<hex>` prefix. For example, if `isplayer` wasn't properly named, then you would refer to the hexdecimal value (`0x1AD`). You would call this function as `game:_func_1AD(player)`.
