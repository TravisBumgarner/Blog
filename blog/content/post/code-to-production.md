{
    "title": "Move Faster by Writing More Code not Destined for Production",
    "date": "2022-04-18T13:52:11+02:00",
    "draft": true,
    "tools": [],
    "topics": [
        "My Process",
    ],
    "project": "",
    "description": "",
    "preview_image": "https://placedog.net/500"
}

<!-- Templates

{{< youtube id >}} 
{{< figure src="/image/code-to-production/file.jpg" caption="Title" >}}

-->

<!-- What are your three yeses? (Readers should nod their head yes to the headline, subheading, and first sentence.)


-->

<!-- Where to Post


 -->

 <!-- Keywords
 
 -->

<!-- Brainstorm


 -->

Introduction


Software engineers run upon a perpetual treadmill. They move tasks from the todo column to the done column as quickly as possible. The result is that all too often, they muddle and bundle brainstorming, researching, learning, prototyping, rough drafts, and the final draft code together . What they end up with is an absolute mess of code. At first, it seems legible. But that's because they've spent all of their working time over the past few weeks, neck deep in it. Will it continue to be legible six months from now? Could a coworker comprehend it? I suspect that coworker might feign comprehension because they have lots of other tasks that require their attention. The codebase eventually crumbles with the weight of its complexity. We forget, as we write code, that the majority of our time in the future will be spent reading and rereading it.

What I've found, is that separating the learning from the doing un-muddles a lot of things. For the rest of this post, I want to share with you, my strategies for doing so.


Why does Muddling Matter?


Tell me if you've ever experienced this before - you're tasked with implementing some new library, lib-foo , into your codebase. You install the package and get to implementing it. Out of nowhere, a bug. Off to Stack Overflow. You copy some snippet of code, bug gone. Oh wait, another bug. You play the game of  whack-a-mole with bugs. You wonder, are you learning anything about this new library?

Now it's time to jump into that file nobody wants to touch with a ten foot pole. You tiptoe as lightly as you can and somehow get the library working with that file. Just kidding, more vague bugs. Is the bug from lib-foo or from this mess of a file? Or the combination of the two? You have no idea.

After days of banging your head against the wall, you get something that compiles and does what you want. Was that the best way to do it? Who knows. You create a pull request and take a look over your code. What a mess. But you're done, you'll never have to read that code again.

Three months, a new version of lib-foo comes out. You take a look at the mess of code and you wonder who wrote it? Oh you did, cool. What even did this library do, you can't remember. You grit your teeth and jump in. The task gets completed, it's sloppy. You hope you never have to go near lib-foo again. 

You look to the next task, lib-bar . Ahhhh!

Two years later, you're at a new job. You've just finished a task and are looking for something else to start. Implement lib-foo . 

Sound familiar? Don't fear!  What we'll look at next is a collection of strategies to alleviate 


How to Un-muddle?


Use tools you know so you can focus entirely on what you don't know.

I think one of the most mentally draining and frustrating activities for a developer is troubleshooting multiple bugs at the same time.  Nothing kills enthusiasm and motivation more quickly. When you're learning something new, everything that isn't about learning should get itself out of the way so you can focus on what's important. 

I do a lot of work with React. I've found myself repeatedly doing a git clone on an old project, stripping out all of the project specific code, and then building my new project off of that. A friend of mine introduced me to Cookiecutter (https://github.com/cookiecutter/cookiecutter) , a Python tool (no Python experience required) for generating a project's boilerplate from a template. I've gone ahead and generated a React Cookiecutter for myself (https://github.com/TravisBumgarner/cookiecutter-react). I know the code well. All I have to do is run python -m cookiecutter gh:travisbumgarner/cookiecutter-react  and I've got a sandbox to start learning about some new React library. 

Aside > 
Some other great tools include 
- Fiddles are great tools that give you a small sandbox that you can code in and share with others and they can iterate on it. Try searching on Google for things like "JavaScript Fiddle" or "Python Fiddle"
- Need a database or some other complex system running locally? Docker is an amazing tool. With a few quick commands, you can have a Postgres database running locally to do your sandboxing with. 

You might be thinking, "Why didn't you use Create React App (https://create-react-app.dev/)?". Well, because I don't know Create React App. I have been maintaining my React Cookiecutter for several years now, and it just works. If Create React App is a tool you know, use it. Use what you know, the code that isn't important should get out of the way so you can focus on what you're learning. 

Create a Collection of References

Have you ever written an essay that was perfect on the first attempt? Highly unlikely.  The eloquent essay comes from trial and error, from feedback, from iteration. The same can be applied to writing code. Your first attempt at solving a problem is going to be bad, sloppy, inefficient.  If you're tackling a problem in a domain you're unfamiliar with, do it in isolation. 

Furthermore, building off of the previous point, you want to explore the problem without the distraction of issues that aren't part of the learning.  If you need to both learn a thing, and figure out how that thing integrates with the rest of the system, at the same time, the solution will be less than ideal.

So how do I address these two issues? I like to create coding environments, similar to where I'll be working, but without the complexity of the rest of the codebase to consider. This process usually starts with me using my React Cookiecutter (mentioned in the previous section) to get a working environment up and running. This will give me a sandbox to play around in. 

Some might argue that I'm writing throwaway code. I prefer to call it reference code. I'm creating a collection of references for when I need to use that technology in a different codebase, months or years from now. Furthermore, the majority of the code I write in a sandbox gets copied into the codebase. 

As I start working in the actual codebase, I might get stuck on something, perhaps integrating the new library, lib-foo  with some other library lib-bar . In this situation, I can jump back into my sandbox. I'll duplicate my current sandbox so I'll have two references one for learning lib-foo and another for integrating lib-foo with lib-bar . Now I can look at the integration, isolated from the rest of the codebase. 

Now imagine, you're two years down the road and you need to implement lib-foo again. You could try and take a look at where you originally implemented it, but maybe you don't have access to that codebase anymore. Instead, what you have is a code reference you can look at. 

For some inspiration, you can check out my collection of references. I have two repositories, one for learning new technologies and another more in-depth of proof of concepts. 
https://github.com/TravisBumgarner/learning/tree/master/archives
https://github.com/TravisBumgarner/proof-of-concepts. 

Conclusion


Points 
- 

### Call to Action

