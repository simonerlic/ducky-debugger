# The Ducky Debugger

Hi, and welcome to my little rubber ducky debugger project!

If you want to get right into it, head over to the [Quickstart](#quickstart) section. Otherwise, read on to learn more about the project!

## About

For those who don't know, the rubber ducky technique is a way to debug your code by talking to physical rubber ducky toy.
The idea behind it is that by forcing yourself to talk through your code, you can find bugs and errors that you would otherwise miss.

Now, that's cool and all, but I wanted to take it a step further and modernize it. I wanted to be able to debug my code without having to talk to a rubber ducky- instead I wanted to be able to debug my code by talking to my computer with a photo of a rubber duck and have it tell me exactly _how_ and _why_ my code is always broken.

_Welcome to the future._

## Quickstart

To get started, clone this repository to a location of your choice, and run the following commands:

```bash
$ cd ducky-debugger
$ npm i
```

This will clone the repository and install the dependencies.

Now, you need to add your API and organization ID the environment. To do this, create a file named `.env` at the root of the project, and add the following:

```dotenv
OPENAI_ORG = *your organization ID here*
OPENAI_API = *your API key here*
```

You can get your API key and organization ID from the [OpenAI dashboard](https://beta.openai.com/dashboard).

Now, with that all set up, all you have left to do is start the Astro server and open the website in your browser.

```bash
$ npm start
```

Enjoy!

## Contributing

This is a very early version of this project, and there's a lot of work to be done. If you want to contribute, feel free to open a PR or an issue.

Keep in mind, this was both my first time working with Astro (amazing by the way, you can read more about it [here](https://astro.build/)) and my first time working with OpenAI's API. Nobody's first project in something is perfect, so I'm sure there's a lot of room for improvement, so seriously feel free to open a PR or an issue when you inevitably find something that I did poorly.

If you want to add a feature, please open an issue first so we can discuss it.

If you want to fork this project, please give credit to me and link back to this repository (and also let me know, I'd love to see what you do with it)!
