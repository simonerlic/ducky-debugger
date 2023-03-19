# The Ducky Debugger

Hi, and welcome to my rubber ducky debugger project! This project aims to create a digital debugging assistant that you can chat to over the web.

## About

If you're eager to dive right in, head over to the [Quickstart](#quickstart) section. Otherwise, continue reading to learn more about the project!
About

For those who aren't familiar, the rubber ducky technique is a method of debugging code by talking to a physical rubber ducky toy.
The rationale behind this approach is that by forcing yourself to verbally walk through your code, you can identify bugs and errors that might otherwise go unnoticed.

While that's fun and all, I wanted to take it a step further and bring it into the modern age. Instead of chatting with a _physical_ rubber ducky, I envisioned debugging my code by conversing with a _render_ of a rubber duck on my computer, and having it explain precisely _how_ and _why_ my code is broken.

_Say hello to the future of debugging._

## Quickstart

To get started, follow these simple steps:

1. Clone this repository to your desired location.
2. Run the following commands:

```bash
$ cd ducky-debugger
$ npm i
```

This process clones the repository and installs the dependencies.

3. Add your API and organization ID to the environment. To do this, create a file named `.env` at the root of the project and include the following:

```
OPENAI_ORG = *your organization ID here*
OPENAI_API = *your API key here*
```

Note: You can obtain your API key and organization ID from the [OpenAI dashboard](https://platform.openai.com/account/api-keys).

4. With everything set up, start the Astro server and open the website in your browser.

```bash
$ npm start
```

And there you go! Enjoy playing around with the debugger!

## Features

The Ducky Debugger offers a modern and interactive debugging experience, thanks to its AI-powered capabilities. Some of its main features include:

1. **AI-powered debugging:** The Ducky Debugger is powered by OpenAI's GPT-3.5-turbo, enabling it to understand your code and provide useful feedback on potential issues and improvements.
2. **Monaco Text Editor:** The Ducky Debugger uses the Monaco Text Editor, which is a lightweight, embeddable code editor that supports syntax highlighting, code completion, and more. This is the same engine that powers VSCode!
3. **Conversational interface:** Interact with the Ducky Debugger through a user-friendly chat interface, making the debugging process feel more like a conversation with a helpful friend than a tedious chore.
4. **Customizable UI:** Since the project is built in Astro, the project's UI can be easily customized to suit your preferences. For example, you can change the color scheme, add your own logo, or even add your own custom components.

## Contributing

As an early version of this project, there's plenty of room for growth and development. If you're interested in contributing, feel free to open a PR or an issue.

Keep in mind that this was my first experience working with both Astro (which is amazing, by the way—learn more here) and OpenAI's API. First-time projects are rarely perfect, so I'm sure there's ample opportunity for improvement. Don't hesitate to open a PR or an issue if you come across something that could be enhanced.

If you'd like to propose a new feature, please open an issue first so we can discuss it.

In case you decide to fork this project, please give credit to me and link back to this repository (and let me know what you end up making with it— I'm excited to see what y'all create)!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
