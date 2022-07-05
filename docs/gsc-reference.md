# Referencing GSC (+ GSC dump)

The [H1 GSC Dump](https://github.com/mjkzy/h1-gsc-dump) is still a work-in-progress that dump that mostly contains disassembled "GSC asm" files, which contains the bytecode for GSC. Some files have decompiled into plain GSC format, but the decompiler currently has a error that needs to be fixed. GSC bytecode is stack based, so the instructions are confusing but it's easy to understand when it comes down to it. If you need help, refer to the `#scripting` channel in the Discord and assistance is provided.

(this documentation is based off the [README of H1 GSC Dump](https://github.com/mjkzy/h1-gsc-dump/blob/main/README.md))

## Resources

- [IW6 GSC Dump](https://github.com/mjkzy/iw6-gsc-dump) (provides comments, functions, methods, variables, dev comments, etc.)
- [gsc-tool Fork for H1](https://github.com/mjkzy/gsc-tool-h1/tree/h1-symbols)

## Calling GSC functions

Calling GSC functions from Lua is made easy thanks to fed. To do so, you need to use the GSC dump and figure out what a file may be named and what a function may be named. A function/file may have a `_ID%d` or `_id_%x` prefix, which you'll figure out from the GSC dump.

The `scriptcall` function is usually called on any sort of entity or the game object. It is called on an entity (ex: `player:scriptcall`) when the function you are calling is also called on a entity, and it is called on the game object (ex: `game:scriptcall`) if an entity doesn't need to call it.

In this example, we are going to be calling maps/mp/_utility::_unsetPerk on Last Stand, Martyrdom, and Juggernaut. This code should be ran in a function that has access to the entity's `self` keyword. Read [Callbacks](script-syntax#callbacks) to understand this.
```lua
self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_pistoldeath")
self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_grenadepulldeath")
self:scriptcall("maps/mp/_utility", "_ID1659", "specialty_armorvest")
```
(at the time of writing this, `_unsetPerk` doesn't contain a token in version v1.0.3. however, on v1.0.4, `_ID1659` should be `_unsetperk`)

## Hooking (detouring) GSC functions

Same as above, you need to know what a file may be named and what a function may be named.

Detouring a function redirects the function to your provided function callback before you either optionally call the original game's function or do your own stuff functionality. The `game:detour` function is always from the game object. When you hook a function that a player entity may be calling, the first parameter of the detour will always be the player (as defined `self_` in example).

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

## Incorrect/missing symbols on H1-Mod

This GSC dump may contain symbols that H1-mod does not have named or is not correctly named. Navigating to [the function table](https://github.com/h1-mod/h1-mod/blob/develop/src/client/game/scripting/function_tables.cpp) and finding the function_map, method_map, & token_map maps will help you. `CTRL + F` (Find) and search your desired value (ex: `isplayer`) and see if it exists.<br/>

If H1-mod doesn't have the specific symbol you need named, then you'll need to use the `_ID%d` or `_id_%x` prefix.<br/>

For example, if H1-mod theroetically didn't have [this symbol](https://github.com/mjkzy/gsc-tool/blob/97abc4f5b1814d64f06fd48d118876106e8a3a39/src/h1/xsk/resolver.cpp#L877), then you'll refer to the '0x1ad' part. This is the hexdecimal key of the value `isplayer`. So, if `isplayer` wasn't defined with a proper name in H1-mod's function/method table, you would call this function as `game:_id_1AD(player)` (or `game:_ID429(player)` depending if the first one doesn't work)<br/>