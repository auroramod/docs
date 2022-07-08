# Lua Syntax

Learn the syntax for Lua including basic examples and notes to help you.
## Callbacks

Before we show any function examples for syntax examples, you must know what a lambda and a callback is. A lambda is a function that's made when passing the argument. When doing a notify, interval, or timeout event (as shown below later), a function callback that's specified is called.

You can either make a function callback that uses a lambda:
```lua
level:onnotify("connected", function(player)
    -- [...]
end)
```
Or, you can make a function callback by calling the function seperate:
```lua
function on_player_connected(player)
    -- [...]
end

level:onnotify("connected", on_player_connected)
```

Syntax examples shown as mostly lambdas, while some are seperate-called functions.

## Types

There are only 5 distinct types needed to interact with game's scripting environment. LUA, of course, has more types, but what is meant by this is the following:

When dealing with events, functions or fields, no complex LUA types are supported, only these primitive types:

### Strings

Strings are text enclosed by quotes as so: "Hello World". There is not much to say about them, as they are a common concept.

### Integer

Integers are all whole numbers like 0, 1000 or -15.
Boolean values, so true and false, also fall under that category and are handled as 1 and 0 respectively.

### Float

Floating point values are all numbers like 1.05 or -10.5.
1.0 is also a floating point number literal. This is due to the dot notation, even though it's technically a whole number.

### Vector

A vector is a type that groups exactly 3 floating point components. It is used to represent coordinates, angles or colors in the game.

Creating a new vector can be done like this:
```lua
local my_vector = vector:new(1.0, 2.0, 3.0)

-- Statements below will be true
assert(my_vector.x == 1.0)
assert(my_vector.y == 2.0)
assert(my_vector.z == 3.0)
```

You can access the individual components using either `x`, `y`, and `z` property accessors, or `r`, `g` and `b` (note that both notations are equivalent, meaning `x` ≘ `r`, `y` ≘ `g` and `z` ≘ `b`).
```lua
local my_vector = vector:new() -- vector is initialized as (0.0, 0.0, 0.0)
my_vector.x = 5.0
my_vector.y = 1.0
my_vector.z = 2.0

local val1 = my_vector.x -- val1 is 5.0
local val2 = my_vector.r -- val2 is also 5.0, as x and r are equivalent

-- The statements below are always true
assert(my_vector.y == my_vector.g)
assert(my_vector.z == my_vector.b)
```

### Entity

Entities represent 'things' that 'exist' in the game. Players are for example entities.
Vehicles, hud elements, or the level are also entites. They can fire events, but also call functions into the game's scripting environment. Some entites also have certain fields (or properties), like an origin or a name.

## Events

Entites can fire notify events. The concept was previously known as `notify` and `waittill` in GSC.
Popular events are the `connected` event fired by the level, or the `spawned_player` event fired by players.

### Event Listening (waittill)

You can listen to any of these events by calling either `onnotify` or `onnotifyonce` on an entity:
```lua
level:onnotify("connected", function(player)
    -- [...]
end)
```

In the example above, the `player_connected` callback is called every time a player connects. If you don't want to be notified every time, you can use `onnotifyonce` instead, which only fires once.

If you called `onnotify` (or `onnotifyonce`), but want to stop listening for notifications, you can call clear on the object is returned:
```lua
-- [...]

local listener = level:onnotify("connected", function(player)
    -- [...]
end)

-- [...]

listener:clear() -- stops listening for the `connected` event
```

Events can carry arguments. For example, the `connected` event by the level carries the connecting `player` as an argument. You can get these arguments by adding paramters to the callback functions, as seen in the player_connected callback above.

### Firing (notify)

To fire (or notify) a event, you can call the `notify` function on an entity:
```lua
-- this callback function is called by the "connected" event
function entity:connected()
    self:onnotify("hello_world", function()
        print("Callback was recieved for hello_world notify")
    end)

    -- [...]

    self:notify("hello_world")
end
```

Don't forget - you can also pass arguments to the event (there can be any amount, but they must be instances of one of the 5 primitive [types](#types)):
```lua
-- this callback function is called by the "connected" event
function entity:connected()
    self:onnotify("hello_world", function(str1, str2)
        print("Callback was recieved for hello_world notify: " .. str1 " " .. str2)
    end)

    -- [...]

    self:notify("hello_world", "Hello", "World")
end
```

## Timers

Timers are required to delay the execution. GSC had a function called `wait`, which paused the execution of a thread for a specific amount of time. Due to the control flow being different in LUA, there are neither threads, nor is there a wait function.

However, you can do something else to delay the execution. The functions `ontimeout` and `oninterval`, which need to be called on the game object, allow to do that. They take two arguments, a callback and a time to wait in milliseconds.
```lua
game:ontimeout(function()
    -- [...]
end, 1000)
```

Similar to the functions `setTimeout` and `setInterval` known from JavaScript, `ontimeout` executes the callback exactly once when the delay is reached and `oninterval` executes it every time the specified amount of time passes.
```lua
local timer = game:ontimeout(function()
    -- [...]
end, 1000)

-- [...]

timer:clear()
```

Timer callbacks don't and shouldn't take any arguments. If you want to pass an object, like a player, to a callback, you have to capture it, in a lambda for example:
```lua
function entity:do_something_cool()
    print(self.name .. " is now doing something cool.")
    -- [...]
end

-- [...]

local player = -- [...]
game:oninterval(function()
    player:do_something_cool()
end, 1000)
```

## Functions

The game provides a set of global functions and entity methods. The functions provided are pretty much the same as COD4 had them, or any other game that uses GSC. Since this game is heavily based off IW6 (Ghosts) engine and is very very similar, most of the GSC used in IW6 and S1 (Advanced Warfare) is the same.

You can use a community-made [COD4 Scripting Reference](https://znation.nl/cod4script/) website to find some functions (libcod does not exist in stock GSC nor H1-Mod). Any functions, methods, or tokens should be all lowercase.

Global functions are functions that don't need an entity to run. They are called on the `game` object (ex: `game:isplayer(player)`). When referring to the COD4 Scripting Reference, these functions won't have have a `Call this on:` tab.

Example of a global function:
```lua
local player = -- [...]
if game:isplayer(player) == 1 then
    print(player.name .. " is a player")
end
```

There are also member functions. These will have a `Call this on:` tab on the COD4 Scripting Reference. Example of a member function:
```lua
local player = -- [...]
player:freezecontrols(false)
```

For a list of all functions, methods, and tokens available in H1-Mod, have a look at the [function, method, and token tables](https://github.com/h1-mod/h1-mod/blob/develop/src/client/game/scripting/function_tables.cpp).

### Entity-specific functions

Functions defined with an `entity:` prefix give the function the ability to use the `self` keyword, similar to GSC.
```lua
-- entity: prefix defined, makes this function only available to be called on entities
function entity:connected()
    print("Player " .. self.name .. " connected")
end

level:onnotify("connected", function(player)
    player:connected()
end)
```

Syntax examples shown are mostly using entity-defined functions. The alternative to not defining the `entity:` prefix would be passing the player through like normal (as shown in [callbacks](#callbacks)).

## Fields

Entities do have fields (or properties). They differ for each type of entity. For example, players have fields like `name`, `origin`, or `angles` and hud elements have fields like `x`, `y`, or `alpha`.

You can get and set them like this (only the 5 primitive types are supported):
```lua
local player_name = player.name
player.origin = vector:new()
```

There is no complete list of which fields exist. For example, `level.players` is not a field and is a variable. Not every field from GSC is available in LUA and may also have a definition of `_ID<decimal>` or `_id_<hex>`, which you can find in the tutorial for finding variable/field IDs later.

## Noteworthy information

Players can disconnect. It might sound obvious, but is important for scripting. Executing functions on a player that doesn't exist won't work. Additionally, captured player objects need to be freed.

GSC used to have a function called `endon`, which allowed to terminate a thread as soon as an event happend. For example, `player endon("disconnect")` stopped the execution of a thread when a player disconnected.

Back when IW6x had just released Lua scripting, the `endon` functionality did not exist. Later in IW6x, S1x, and now H1-Mod, the `endon` functionality has been implemented like so:
```lua
function entity:do_something_cool()
    print(self.name .. " is now doing something cool.")
    -- [...]
end

-- [...]

local player = -- [...]
local timer = game:oninterval(function()
    player:do_something_cool()
end, 1000)

-- the interval timer loop will stop running when the `disconnect` event is called on the player
timer:endon(player, "disconnect")
```

## Additional Client Features

### Calling/hooking GSC functions

Refer to [GSC Reference](gsc-reference.md) to figure out how to do this. This also contains including files from GSC and calling function variables.

### Chat notifies

When a player sends a chat, you are able to grab that in Lua. All you need to do is monitor the `say` (or `say_team`) notify. The optional `hidden` parameter is only true when the player's chat message starts with `/`.
```lua
level:onnotify("say", function(player, message, hidden)
    print(player.name .. ": " .. message)
end)
```

You can also monitor the notify on a specific player.
```lua
level:onnotify("connected", function(player)
    player:onnotify("say", function(message, hidden)
        print(player.name .. ": " .. message)
    end)
end)
```

### Command execution

You can use the `game:executecommand` function from the game object like this:
```lua
game:executecommand("map mp_crash")
```

### Player damage/killed callbacks

Callbacks can be added using the `game:onplayerkilled` or `game:onplayedamage` functions from the game object. The only data you can modify from this is the damage. Returning anything other than a number (msut be an integer) will not do anything.
```lua
game:onplayerdamage(function(_self, inflictor, attacker, damage, dflags, mod, weapon, point, dir, hitloc)
    damage = 0
    return damage
end)

game:onplayerkilled(function(_self, inflictor, attacker, damage, mod, weapon, dir, hitloc, timeoffset, deathanimduration)
    print(attacker.name .. " killed " .. _self.name)
end)
```

### GSC arrays

GSC arrays are supported and can be accessed similarly to GSC:
```lua
local players = game:getentarray("player", "classname")
for i = 1, #players do
    local player = players[i]
    print("Index " .. i .. ": Player is " .. player.name)
end
```

### GSC structs

GSC structs are also supported similarly as the arrays. To get an entity's struct, you can use the `getstruct()` method or access the `.struct` property.
```lua
-- option 1
local level_struct = level:getstruct()
local grace_period = level_struct.ingraceperiod

-- option 2
local grace_period = level.struct.ingraceperiod
```

### HTTP

(**WARNING: This feature is only available in v1.0.4)**

HTTP functions can be accessed from the global `http` table.

* `http.request(url[, options[, async]])`: Returns a table, you can replace the request's callbacks (`onprogress`, `onerror`, `onload`) with your own and send the request using the `.send()` method.

  The second parameter is the options table, which should contain two other tables for the headers and parameters for POST requests.
  
  The async parameter specifies wheter the request will be executed on the server thread or on a async thread. If you choose to execute it asynchronously then inside the callbacks you must wrap any calls to game functions with `game:ontimeout` in order to call them from the correct thread.

  ```lua
  local request = http.request("https://example.com", {
      headers = {
          ["Content-type"] = "text/html"
      },
      parameters = {
          foo = "bar"
      }
  }, true)
  
  request.onprogress = function(progress)
      print(progress)
  end
  
  request.onerror = function(error, code)
      print(error, code)
  end
  
  -- Request is done
  request.onload = function(data)
      print(data)
      
      game:ontimeout(function()
          game:iprintln("Done!")
      end, 0)
  end
   
  request.send()
  ```
* `http.get(url, callback[, async])`: This function is simpler than `http.request` and only takes the url and callback as parameters (and eventually the async parameter).
  ```lua
  http.get("https://example.com", function(data)
      print(data)
  end, true)
  ```