# GSC syntax

Learn the syntax for GSC including basic examples and notes to help you.

## Comments

Comments exist in two ways, one-line, or multi-line block comments.
```c
// This is a one-line comment.

/*
This is a comment across
multiple lines!
*/
```

## Function Declaration

Declaring functions in GSC require you to give it a name, followed by a () and a bracket scope.
```c
my_function()
{   // start of bracket scope
    // [...]
}   // end of bracket scope
```

## Calling functions

GSC functions can be "threaded" or called sequentially (in logical order/sequence). If a function is "threaded", then the execution of the function being called will not hold the execution of the parent function that contains the call.
```c
my_function()
{
    print("my_other_function execution starting");
    my_other_function(); // my_function() will not continue past this line until the execution of my_other_function() finishes
    print("my_other_function execution completed");

    print("my_other_function thread execution starting");
    thread my_other_function(); // my_function() will continue past this line and carry on doing other stuff
    print("my_other_function thread execution still continuing, but it's threaded");
}

my_other_function()
{
    wait 3; // this function executes a 3 second wait
    print("3 seconds waited");
}

/*
"my_other_function execution starting"
"3 seconds waited"
"my_other_function execution completed"
"my_other_function thread execution starting"
"my_other_function thread execution still continuing, but it's threaded"
"3 seconds waited"
*/
```

If you call a function on an entity, the `self` keyword is reversed as the entity who called the function
```c
my_function()
{
    getplayers()[0] hello_world(); // index 0 will get the first player in the game
}

hello_world() // self == player
{
    self iprintln("hello world!");
}
```

## Using variables

Variables are used to store data for the span of the current game. Variables will reset upon map rotation unless stored outside of the GSC VM context. However, for round-based gamemodes, persistent variables will keep the data through restarts.

A local variable is a variable that can be used in the whole function scope it's defined in. A variable can b e used to call a function or passed to a function via parameters. Defining a local variable is as easy as:
```cs
variable = 1;
```

Variables can also be global:
```cs
level.variable = 1;
```

or defined on an object (or entity) and be passed through to functions:
```c
my_function()
{
    variable = spawnstruct();
    variable.message = "hi!";

    variable print_message();
}

print_message() // self == variable
{
    print(self.message);
}

/*
"hi!"
*/
```

# Math

Math can play a huge part in gameplay scripting depending on what you are doing. The operators you can use for math in GSC include the following:
```
+       Addition
-       Subtraction
*       Multiplication
/       Division
%       Modulus (Remainder)
=       Equals
++      Increment (+1)
--      Decrement (-1)
+=      Incrementation (requires number)
-=      Decrementation (requires number)
```

Example some of the operations:
```c
var++;
var--;
var += int;
var -= int;
```

<Details title="Bitwise Information">

You can also use [Bitwise (Wikipedia)](https://en.wikipedia.org/wiki/Bitwise_operation) operations in GSC.

```
&       Bitwise And
|       Bitwise Or (inclusive or)
^       Bitwise Xor (exclusive or)
<<      Left Shift
>>      Right Shift
~       Bitwise NOT (one's complement)
```

</Details>

# If statements

An 'if' statement is used to see if a condition is met, and then execute code (delared in a scope) as the result. The operators you can use for comparing data in GSC include the following:
```
==      Equal To
!=      Not Equal To
!       Negation (Not equal to)
<       Less than
>       Greater than
<=      Less or Equal to
>=      Greater or Equal to
&&      And
||      Or
```

Example:
```c
if (9 > 10)
{
    print("9 is above 10");
}
else
{
    print("9 is below 10");
}

/*
"9 is below 10"
*/
```

You can also do if statements on <b>any</b> sort of variables
```c
message = "hi!";

if (message == "hi!")
{
    print("hello variable!");
}
else
{
    print("variable didn't say hi? :(");
}

/*
"hello variable!"
*/
```

The conditions can also have a "else if" to check multiple conditions
```c
big_number = 100;

if (big_number < 20)
{
    print("big number is below the number 20");
}
else if (big_number < 150)
{
    print("big number is below the number 150");
}
else
{
    print("big number is above the number 150");
}

/*
"big number is below the number 150"
*/
```

In GSC, you can check if a variable is defined with a value. This is because if a variable was undefined, and you check if it's true, it'll invoke on the condition. To do this, use the function `isdefined(var)`, which returns `true`/`false`. If a variable equals keyword `undefined` or isn't defined at all, you should get `false` as the return type.
```c
variable_one = 5;
variable_two = 6;

if (isdefined(variable_one))
{
    print("variable_one is defined!");
    variable_two = undefined; // undefined is a reserved keyword
}

if (variable_two) // the variable is undefined, but it'll still think this condition as met
{
    print("variable_two claimed to be true, but is it defined?");
    if (isdefined(variable_two))
    {
        print("is not defined");
    }
    else
    {
        print("is defined");
    }
}

/*
"variable_one is defined!"
"variable_two claimed to be true, but is it defined?"
"is not defined"
*/
```

This is why the GSC scripts will check if a variable `isdefined` before checking if it is `true`:
```c
if (isdefined(variable_two) && variable_two)
{
    print("variable_two is defined and is true");
}

/*
"variable_two is defined and is true"
*/
```

In GSC, the ternary operator is also supported.
```c
condition = (5 > 2) ? true : false;
print(condition);

/*
"true"
*/
```

# Loops

Loops in GSC can be somewhat similar to C, but may come in different forms.

- A `while` loop is a loop that will keep looping while the condition provided is true
- A `for` loop is a loop that loops a set amount of times
- A `foreach` loop is a simplified `for` loop meant to be used on all items of an array.

### ``while``

In this example, we will check if number X is above 10.
```c
x = 0;
while (x < 6)
{
    print(va("x = %s", x));
    number++;
}

print("while loop condition was met");

/*
"x = 0"
"x = 1"
"x = 2"
"x = 3"
"x = 4"
"x = 5"
"x = 6"
"while loop condition was met
*/
```

### `for`

In this example, we will create an infinite loop that will never end.
```c
my_function()
{
    thread infinite_loop(); // make sure the loop you are doing doesn't halt the parent function
}

infinite_loop()
{
    for(;;)
    {
        print("infinite loop");
        wait 0.05; // infinite loops NEED to wait a server frame else your script will lag terribly or your game will crash.
    }
}
```

### `foreach`

In this example, we will create a loop that prints every single player in the game's name.
```c
foreach (player in getplayers())
{
    print(va("player: %s", player.name));
}
```

The `for` loop equivalent to this would be:
```c
players = getplayers();
for (i = 0; i < players.size; i++)
{
    print(va("player %s: %s", i, players[i].name));
}
```

## Wait

GSC is ran on every server frame, and 20 server frames equal to 1 second.
```c
wait 0.05;  // 1 server frame
wait 0.5;   // 10 server frames
wait 1;     // 20 server frames
wait (1);   // 20 server frames
```

## Switch

Switch cases are useful for checking the case of many possibly values. This is usually recommended if you are have more than 4-5 variables as it may be faster and more organized compared to a `if` statement.
```c
value = 5;
switch (value)
{
    case 1:
        print("value is 1");
        break;
    case 2:
        print("value is 2");
        break;
    case 3:
        print("value is 3");
        break;
    case 4:
        print("value is 4");
        break;
    case 5:
        print("value is 5");
        break;
    default:
        print("value is not any of the cases listed");
        break;
}
```

## notify, endon, waittill

TODO