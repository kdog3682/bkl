spellcheck:
does anyone want to | would anyone like to


nnoremap <buffer> 1 :call DialogueBackslash()<CR>
nnoremap <buffer> <silent> ` :call DialogueBackslash()<CR>
speakers: alvin, haoxiang, michelle, mr.eric
inoremap <buffer> <silent> ` <esc>:call DialogueBackslash()<CR>
inoremap <buffer> <silent> <cr> <esc>:call DialogueLineFix()<CR>



------------------------------------------------------------
speaker: alvin

hi everyone!
------------------------------------------------------------
speaker: haoxiang

hi alvin!
------------------------------------------------------------
speaker: michelle

hi haoxiang!
------------------------------------------------------------
speaker: mr.eric

hi guys.

------------------------------------------------------------
speaker: alvin

mr.eric, what are we learning today?
------------------------------------------------------------
speaker: mr.eric

today we are going to learn about lists
------------------------------------------------------------
speaker: michelle

what kind of list?

like a grocery list?
------------------------------------------------------------
speaker: mr.eric

just like a grocery list michelle.
------------------------------------------------------------
speaker: alvin
does anyone want to look at my fruits list?
------------------------------------------------------------
speaker: haoxiang

only if it has pineapples.
------------------------------------------------------------
speaker: alvin

it doesnt have any pineapples, but we can add some haoxiang 
------------------------------------------------------------
speaker: michelle

i want to look at your fruits list alvin.
------------------------------------------------------------
speaker: alvin

thank you mch.

here it is.

let fruits = [
    "apples",
    "bananas",
    "strawberries",
]
------------------------------------------------------------
speaker: haoxiang

mr.eric, what are these things `[` `]` called?
------------------------------------------------------------
speaker: mr.eric

they are called square brackets.
------------------------------------------------------------
speaker: michelle

you use them to show the stuff inside is in a list. 

------------------------------------------------------------
speaker: mr.eric

we have to add pineapples to alvin's fruit list.
how many should we add hx?
------------------------------------------------------------
speaker: haoxiang

3 pineapples
------------------------------------------------------------
speaker: mr.eric

we do it like this:

    fruits.push("pineapple")
    fruits.push("pineapple")
    fruits.push("pineapple")

 
------------------------------------------------------------
speaker: michelle

can we add 2 peaches to alvin's fruit list?
------------------------------------------------------------
speaker: alvin

of course mch.
ill add them for you

    fruits.push("peach")
    fruits.push("peach")
    fruits.push("peach")
    fruits.push("peach")


------------------------------------------------------------
speaker: haoxiang
  
alvin, you added too many peaches! mch only wanted 2.
mr.eric, what should we do?
------------------------------------------------------------
speaker: mr.eric

we will pop them.
------------------------------------------------------------
speaker: haoxiang

pop them like popcorn?
------------------------------------------------------------
speaker: mr.eric
show: true

pop it like popcorn! 
popping removes the last item in our list.
    
    fruits.pop()
    fruits.pop()

since alvin added 2 extra peaches, we will pop both of them.
------------------------------------------------------------
speaker: michelle

what if I want to pop the first item in the list?
------------------------------------------------------------
speaker: alvin

mch, instead of using `pop`, we will use `shift`.
------------------------------------------------------------
speaker: haoxiang

like this alvin?
    fruits.shift()
------------------------------------------------------------
speaker: alvin

yup.
------------------------------------------------------------
speaker: michelle

but how do you know that alvin?
we never learned this before.

------------------------------------------------------------
speaker: alvin

we are learning it right now mch. 
and now you've learned it too.
------------------------------------------------------------
speaker: mr.eric

is everyone ready for a practice question about lists?
------------------------------------------------------------
speaker: haoxiang

im not.
------------------------------------------------------------
speaker: alvin

yes you are haoxiang.

------------------------------------------------------------
speaker: haoxiang

but i dont even know how to find how big a list is.

------------------------------------------------------------
speaker: michelle

you use `length`.
------------------------------------------------------------
speaker: haoxiang

what's `length`?

------------------------------------------------------------
speaker: alvin

`length` tells you how many items are in the list.


@alphabet

the alphabet has 26 letters in it.

That means alphabet.length equals 26.

------------------------------------------------------------
speaker: mr.eric

hx, are you ready for the first question?
------------------------------------------------------------
speaker: haoxiang

but what if i get it wrong?
------------------------------------------------------------
speaker: michelle

if you get it wrong, ill give you a dollar
------------------------------------------------------------
speaker: haoxiang

in that case, ill do my best to get it wrong!
------------------------------------------------------------
speaker: michelle

please dont get it wrong haoxiang. i dont want to give you a dollar.
------------------------------------------------------------
speaker: mr.eric

hx, the question is:

    Alvin starts with a fruits list.

    Then, hx pushes 3 pineapples into the list.
    Then, alvin pushes 4 peaches into the list.
    Then, mr.eric pops the last 2 items.

    What is the size of alvin's fruit list now?

------------------------------------------------------------
speaker: haoxiang

Alvin starts with 3 fruits.
Then we added 3 pineapples.
Then we added 4 peaches.
But that's 2 too many because mch only wanted 2.
So we took 2 away.
I think the answer is 3 + 3 + 4 - 2 = 8.

mr.eric, give us a harder question. 

------------------------------------------------------------
speaker: mr.eric

a really hard one?
------------------------------------------------------------
speaker: michelle

a medium hard one

------------------------------------------------------------
speaker: alvin

medium hard with pepperoni and green peppers
------------------------------------------------------------
speaker: haoxiang

and bacon.

------------------------------------------------------------
speaker: mr.eric

Hmm.

medium hard with pepperoni, green peppers, and bacon.

here is the question

alvin, mch, and hx are building a pizza.

Alvin has 20 pepperonis in `alvinPepperonis`.
mch has 15 green peppers in `michellePeppers`.
And hx has 10 bacons in `haoxiangBacons`.

To build the pizza, they take ingredients by popping them out one at a time.
For example, when hx pops a bacon, that means he uses 1 bacon from his haoxiangBacons list.
When mch pops a green pepper, michellePeppers goes down by 1.

The rule is, every time hx pops 1, mch pops 2, and alvin pops 3.
However, once you can no longer pop the amount that you need to pop, everyone stops, popping, and the pizza is finished.

For example, maybe Alvin only has 1 pepperoni left. But the rule says he always pop 3. That means he can't pop anymore which means the pizza is finished for everyone.

The popping cycle begins with hx.

This question has 3 parts.

A. Who will the last popper be?
B. How many total toppings will the pizza have?
C. At the very end, what does alvinPepperonis.length + michellePeppers.length + haoxiangBacons.length equal?


// to be unambiguous with the words


Whenever you see something like, abc.def() or pepperonis.boogabooga() 

The part that comes after the period, is called a method.

A method, is like a special ability which belongs to the thing in front of the period.

not everything has the same method.

birds can fly. that's why they have the fly method.
    bird.fly()

fish don't have it.
but airplanes do.
    airplane.fly()

we have the eat() method.
alvin.eat("pepperoni")

whales also have the eat method
lunaWhale.eat("plankton")

but whales don't have the rideBicycle method

hx.rideBicycle()

luna: i want to ride a bicycle too!


The biggest giveaway that a method is happening is 2 things.

1. you see the pattern of word dot word
    bob.jump()
    sam.sleep()
    monkey.bananaTime()

2. you see parentheses like this: "()"

    The () is crucial.
    Soon, you will be seeing lots and lots of ()

    Sometimes empty ()
    Sometimes the () is filled with something: ("howdy")

    sam.sleep() <-- empty
    sam.speak("howdy") <-- filled with a "howdy"

    This () is different from the parentheses you see in math.
    In math, () are used for PEMDAS and order of operations.

    In coding, () signals a call action.

    sam.sleep wont do anything.
    but sam.sleep() will tell sam, sammy, it's bedtime!
    The () calls the action to happen.

















Indexing

reverse()




mr.eric, what exactly are we learning?


We are learning a language called javascript.

can i make websites with javascript?

you can

can i draw pictures with javascript?

absolutely

can javascript do all of my math homework?

it can, but for doing your math homework, you should use python.

what's python?

it's another language.

lists today, didn't seem very hard mr.eric.

that's because we are at the start of the mountain mch.

how high is this mountain?

as high as the stars.

we're never going to get there!

we will. 

one step at a time. we will get there.


Fix Smart Equal

Math ... Coding ... Science
I feel engaged writing this today.

problem
    let a = fruits.length
    let b = vegetables.length

    What does a + b equal?


















We cant use fruits.pop()
But we can use fruits.shift()

------------------------------------------------------------
speaker: haoxiang

mch, i think shift does the same thing that pop does except it does it from the start
------------------------------------------------------------
speaker: alvin

what if i want to pop something from the middle?








What does reverse do? We haven't learned this one yet.

Oh Michelle. I already know it. And so do you.







hi hx
hi guys
hi mre

just lk a groc list 4

guys, do you want to see my fruits list?

does it have pineapples?

not yet. 

i want to see it .

Here it is!

What are those things?


They are called "square brackets" and 








to make money.
that i was around once.
that it feels easy.

student-teaching ... if it is funny, will have a powerful effect.
the idea is one of communal learning

the heart of a child.

the story makes me feel happy.

Hanging out. Want to hang out?
She's okay.

Mr. Kevin





that all of a sudden, the student discovers ...
to hide inside of this stuff ... some very hard entities.
