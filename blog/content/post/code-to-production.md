{
 "title": "Write Good Code While Move Fast",
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

Software engineers are often forced to deliver value quickly for the customer. They move fast. What they create is a mixture of researching, brainstorming, learning, prototyping, and final drafting. It's an absolute mess. It's important to seperate the mixture of activities. Do one activity. Do it well. Focus on getting your final draft into production and nothing else. 

### How does it happen?

You are tasked with implementing some new library, `lib-foo`, into your codebase.

You install the package and immediately get faced with bugs. You play the game of whack-a-mole, solving one bug after the next. Are you learning anything about this new library?

After days of banging your head against the wall, you get something that compiles and does what you want. Was that the best way to do it?

You create a pull request and take a look over your code. What a mess. Will you be able to understand it six months in the future?

Two years later, you're at a new job and are again tasked with implementing `lib-foo`. Do you remember anything about the library?

Sound familiar?

### There's a Better Way

Engineers face a lot of frustrating situations. The most frustrating activity is troubleshooting several bugs at the same time.
Nothing is more effective at killing enthusiasm and motivation. When you're learning something new, you should focus on learning something new. Everything else should get out of the way.

I do a lot of work with React. When I wanted to learn something new with React, I'd copy an old project, gut it, and use that to start. At some point, I learned of [Cookiecutter](https://github.com/cookiecutter/cookiecutter). It's a a Python tool for generating a project's boilerplate from a template. No Python experience required. Tired of copying, pasting, and gutting, I wrote myself a [React Cookiecutter](https://github.com/TravisBumgarner/cookiecutter-react) to speed things up. I know the code well. With a simple Python command I've got a sandbox to start learning about some new React library.

You might be thinking, "Why didn't you use [Create React App](https://create-react-app.dev/)?". Well, because I don't know Create React App. I have been maintaining my React Cookiecutter for several years now, and it just works. If Create React App is a tool you know, use it. Use what you know, the code that isn't important should get out of the way so you can focus on what you're learning. 

Now that I have an environment to play around in, it's time to start learning. 

I tend to do my learning with one of those goals in mind.

When I want to try out a new technology in isolation I'll create a new folder in my [Learning Repo](https://github.com/TravisBumgarner/learning/tree/master/archives). My process is usually the following: 

1. Use one of my Cookiecutters to spin up a sandbox to play in.
2. Follow along with a tutorial to learn the basics of the library.
3. Explore the libraries ideas and concepts.
4. When I'm content with my learnings I'll add it to my Learning Repo.

For more complicated tasks, I'll create a folder in my [Proof of Concepts Repo](https://github.com/TravisBumgarner/proof-of-concepts). An example of such a task would be integrating two libraries I don't know with each other. I'll start by exploring each seperately in the Learning Repo. Then I'll use those two explorations as references to integrate the two together. If at any point I get stuck integrating the two, I always have the Learning Repo to go back and experiment with each library in isolation. 

Some might argue that I'm writing throwaway code. I prefer to call it reference code. I have a place to look if I need to use that technology in a different codebase in the future. Furthermore, the majority of the code I write in a sandbox gets copied into the codebase. 

As I start working in the actual codebase, I might get stuck on something. In this situation, I can jump back into any of my reference code and troubleshoot in isolation. I can figure out if the issue is from the new libraries or from pre-existing code. 

Now imagine, you're two years down the road and you need to implement `lib-foo` again. You could try and take a look at where you originally implemented it, but maybe you don't have access to that codebase anymore. Instead, what you have is a code reference you can look at. 

Over time, the collection of references grows. You can share them with others who are learning what you've learned. You can implement those technologies more easily the second time around. You're moving at a better pace!

### Fast Forward Two Years

You sit down to begin a new project integrating `lib-foo`, `lib-bar`, and `lib-buzz` into an existing code base. Will you rush to get a pull request open that's at best, a rough draft?

Or will you have learning repos for `lib-foo` and `lib-bar`? A proof of concept on how the two connect together? Where you can build a solution more easily, elegantly, and more quickly? 

The choice is yours.


