# Referencing GSC and GSC dump

The [H1 GSC Dump](https://github.com/mjkzy/h1-gsc-dump) is still a work-in-progress that dump that mostly contains disassembled "GSC asm" files, which contains the bytecode for GSC. Some files have decompiled into plain GSC format, but the decompiler currently has a error that needs to be fixed. GSC bytecode is stack based, so it may be a bit confusing at first but it's easy to understand when it comes down to it. If you need help with GSC bytecode, refer to the `#scripting` channel in the Discord and assistance is provided.

(this documentation is based off the [README of H1 GSC Dump](https://github.com/mjkzy/h1-gsc-dump/blob/main/README.md))

## Resources

- [IW6 GSC Dump](https://github.com/mjkzy/iw6-gsc-dump) (provides comments, functions, methods, variables, dev comments, etc.)
- [gsc-tool fork for H1](https://github.com/mjkzy/gsc-tool-h1/tree/h1-symbols)

## Calling GSC functions

Calling GSC functions from Lua is made easy thanks to fed. To do so, you need to use the GSC dump and figure out what a file may be named and what a function may be named. A function/file may have a `_ID<decimal>` or `_id_<hex>` prefix, which you'll figure out from testing and the GSC dump.

The `scriptcall` function is usually called on any sort of player entity or the level entity. To call on a player, doing `player:scriptcall(file, function, args)` will work. However, if the function you are calling is from the level entity, you would use `game:scriptcall(file, function, args)` from the game object.

In this example, we are going to be calling `maps/mp/_utility::_unsetPerk` on last stand, martyrdom, and juggernaut perks. This code should be ran in a function that has access to a player variable.
```lua
function entity:player_spawned()
    self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_pistoldeath")
    self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_grenadepulldeath")
    self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_armorvest")
end

level:onnotify("connected", function(player)
    player:onnotify("spawned_player", function()
        player:player_spawned()
    end)
end)
```
(at the time of writing this, `_unsetperk` doesn't contain a token in version v1.0.3. however, on v1.0.4, `_ID1659` should be `_unsetperk`)

### "Include" functions

To "include" functions from files like in GSC, you can use the `game:include(file)` function from the game object.
```lua
game:include("maps/mp/_utility")

function entity:player_spawned()
    -- Included function names are lowercase
    self:_id1659("specialty_pistoldeath")
    self:_id1659("specialty_grenadepulldeath")
    self:_id1659("specialty_armorvest")
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
    utility._ID1659(self, "specialty_pistoldeath")
    utility._ID1659(self, "specialty_grenadepulldeath")
    utility._ID1659(self, "specialty_armorvest")
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

To disable or enable a detour, the `.disable()` and `.enable()` methods exist.

## Incorrect/missing symbols on H1-Mod

This GSC dump may contain symbols that H1-mod may or may not have named or is not correctly named. Navigating to [the function table](https://github.com/h1-mod/h1-mod/blob/develop/src/client/game/scripting/function_tables.cpp) and finding the function_map, method_map, & token_map maps will help you. `CTRL + F` (Find) and search your desired value (ex: `isplayer`) and see if it exists.

If the symbol you are trying to call isn't named, then you have to the `_func_<hex>` or `_meth_<hex>` prefix. For example, if `isplayer` wasn't properly named, then you would refer to the hexdecimal value (`0x1AD`). You would call this function as `game:_func_1AD(player)`.
