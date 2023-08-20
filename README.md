# CodeCrewLabs

CodeCrewlabs is a free and open source e-learning environment with an interactive codepen-like web playground and a multi-language repl built with the judge0 api and monaco editor. You can create projects in multiple programming languages to practice your coding skills and even ask questions about your code or generate labs with our openai integration.

## Running Locally
You will need to have node, docker, and docker-compose installed on your machine before moving forward.

* Quick Start - You can run a copy of CodeCrewLabs by forking our repo, cloning it down to your own machine, and running a few simple commands. After cloning, cd into your local repo and run the following commands.
1. `npm install` installs all required node packages
2. `docker-compose up` will download and configure the docker containesrs necessary to run the application in development including the judge0 api and mongodb 
3. Once your containers are up and running, and you have the the node packages installed,
we recomend running `npm run build` followed by `npm run start` you can then visiting the running app at http://localhost:3000/.
4. You can also see a live preview with automatic updates every time you save your source code by closing your current session in the terminal with cmd/ctrl c (if running) and run `npm run dev` again you can visit your live preview at http://localhost:3000/
5. In order to use the chat bot and lab generators you need to add and openai api key to your project. Start by adding a .env.local file in the root of your project then add the key value pair `OPENAI_API_KEY=your-api-key-here` ensure that the spelling is correct and you have added your working openai api key. Obtain your key at [Openai's official platform](https://platform.openai.com/). Once you sign up and sign in you will be able view and get your api keys by clicking on the profile icon at the top right and selecting View API Keys

## Development Tech Stack

* Nextjs
* React
* TypeScript
* MongoDB
* judge0
* Openai
* Tailwind
* Docker

## Contributing


