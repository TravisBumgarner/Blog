{
 "title": "Write Better Code While Moving Fast",
 "date": "2022-04-18T13:52:11+02:00",
 "draft": true,
 "tools": [],
 "topics": [
 "My Process"
 ],
 "project": "",
 "description": "Engineers are pushed to write code quickly and the quality suffers because of it. How can you move quickly while maintaining a high level of quality?",
 "preview_image": "/image/code-to-production/preview_image.jpg"
}

<!-- What are your three yeses? (Readers should nod their head yes to the headline, subheading, and first sentence.)


-->

<!-- Where to Post
 - /r/learnprogramming
 - /r/??
 - My blog
 - DEPT's blog

 -->

 <!-- Keywords
 
 -->

Bits I need to add in somewhere...
- You can move just as fast as before but now you're writing better code.


### Code Quality Suffers Because Engineers Have to Move too Fast

Software engineers run upon a perpetual treadmill. They move tasks from the todo column to the done column as quickly as possible. When they open a pull request they take a look at their code. It's a mixture of brainstorming, researching, learning, prototyping, rough drafting, and final drafting. It's an absolute mess.

At first, it seems legible. But that's because they've spent their working time over the past few weeks neck deep in it. Will it continue to be legible six months from now? Could a coworker comprehend it? I suspect that coworker might feign comprehension. They too are running on a perpetual treadmill.

The codebase crumbles under the weight of its complexity. We forget, as we write code, that the majority of our time in the future is spend reading and rereading it.

I've found that avoiding the mixing brings a much higher level of quality to the codebase. 

### An Example - An Exploration in `lib-foo` Implementation

Tell me if you've ever experienced this before.

You are tasked with implementing some new library, `lib-foo`, into your codebase. You install the package and get to implementing it. Out of nowhere, a bug. Off to Stack Overflow. You copy some snippet of code, bug gone. Oh wait, another bug. You play the game of whack-a-mole with bugs. You wonder, are you learning anything about this new library?

Now it's time to jump into that file nobody wants to touch. Your eyes gloss over. You're attempting to add a library to a file you don't understand. Somehow you get the library working with that file. Just kidding, more vague bugs. Is the bug from `lib-foo` or from this mess of a file? Or the combination of the two? You have no idea.

After days of banging your head against the wall, you get something that compiles and does what you want. Was that the best way to do it? Who knows. You create a pull request and take a look over your code. What a mess. But you're done. You'll never have to look at that code again.

Three months go by. A new version of `lib-foo` comes out. You take a look at the mess of code and you wonder who wrote it? Oh you did, cool. What even did this library do? You can't remember. You grit your teeth and jump in. The task gets completed, it's sloppy. You hope you never have to go near `lib-foo` again. 

Two years later, you're at a new job. You've just finished a task and are looking for something else to start. One card remains ready to be completed - Implement `lib-foo`. 

Sound familiar? In the next section we'll look at some strategies to remedy this situation.

### There's a Better Way

#### Use What you Know to Your Advantage so you can Focus on What you Don't

Engineers face a lot of frustrating situations. The most frustrating activities is troubleshooting several bugs at the same time.
Nothing is more effective at killing enthusiasm and motivation. When you're learning something new, you should focus on learning something new. Everything else should get out of the way.

I do a lot of work with React. When I wanted to learn something new with React, I'd copy an old project, gut it, and use that to start. At some point, I learned of [Cookiecutter](https://github.com/cookiecutter/cookiecutter). It's a a Python tool for generating a project's boilerplate from a template. No Python experience required. Tired of copying, pasting, and gutting, I wrote myself a [React Cookiecutter](https://github.com/TravisBumgarner/cookiecutter-react) to speed things up. I know the code well. With a simple Python command I've got a sandbox to start learning about some new React library.

You might be thinking, "Why didn't you use [Create React App](https://create-react-app.dev/)?". Well, because I don't know Create React App. I have been maintaining my React Cookiecutter for several years now, and it just works. If Create React App is a tool you know, use it. Use what you know, the code that isn't important should get out of the way so you can focus on what you're learning. 

Some other great tools that give you a sandbox to learn in include: 
- Have a simple snippet of code you want to play around with and don't need an entire app worth of boilerplate? Fiddles are great tools that give you a small sandbox.  You can code in it and share it with others and they can iterate on it. Try searching on Google for things like "JavaScript Fiddle" or "Python Fiddle".
- Need a database or some other complex system running locally? Docker is an amazing tool. With a few quick commands, you can have a Postgres database running locally to do your sandboxing with. 

#### Create a Collection of References

Have you ever written an essay that was perfect on the first attempt? Highly unlikely. The eloquent essay comes from trial and error, from feedback, from iteration. The same can be applied to writing code. Your first attempt at solving a problem is going to be bad, sloppy, inefficient. If you're tackling a problem in a domain you're unfamiliar with, do it in isolation. 

Furthermore, building off of the previous point, you want to explore the problem without the distraction of issues that aren't part of the learning. If you need to both learn a thing, and figure out how that thing integrates with the rest of the system, at the same time, the solution will be less than ideal.

So how do I address these two issues? I like to create coding environments, similar to where I'll be working, but without the complexity of the rest of the codebase to consider. This process usually starts with me using my React Cookiecutter (mentioned in the previous section) to get a working environment up and running. This will give me a sandbox to play around in. 

Some might argue that I'm writing throwaway code. I prefer to call it reference code. I'm creating a collection of references for when I need to use that technology in a different codebase, months or years from now. Furthermore, the majority of the code I write in a sandbox gets copied into the codebase. 

As I start working in the actual codebase, I might get stuck on something, perhaps integrating the new library, lib-foo with some other library lib-bar . In this situation, I can jump back into my sandbox. I'll duplicate my current sandbox so I'll have two references one for learning lib-foo and another for integrating lib-foo with lib-bar . Now I can look at the integration, isolated from the rest of the codebase. 

Now imagine, you're two years down the road and you need to implement lib-foo again. You could try and take a look at where you originally implemented it, but maybe you don't have access to that codebase anymore. Instead, what you have is a code reference you can look at. 

For some inspiration, you can check out my collection of references. I have two repositories, [one for learning new technologies](https://github.com/TravisBumgarner/learning/tree/master/archives) and [another for more in-depth of proof of concepts](https://github.com/TravisBumgarner/proof-of-concepts). 

### Fast Forward Two years

You sit down to begin a new project integrating `lib-foo`, `lib-bar`, and `lib-buzz` into an existing code base. Will you rush to get a pull request open that's at best, a rough draft?

Or will you have sandboxes for `lib-bar` and `lib-buzz` that you can reference? Where you can build a solution more easily, elegantly, and more quickly? 

The choice is yours.


