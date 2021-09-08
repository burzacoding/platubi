# How I worked on this project

My goal was to build something useful for people living in latin america that own cryptocurrencies.

 - I built this web app from a design made by me. [Link](https://www.figma.com/file/sOsL9kBkhNnoFDfTcpyVAg/Platubi?node-id=801%3A973)
 - I worked in a goal-oriented way with a Trello board [here](https://trello.com/b/8wV1Vst7/platubi-development).
 - I used dev and production branches for better control over the project.

# How to navigate this project

 - Styled-components constants are stored in the Elemets folder, they also feature responsive CSS: [Example code](https://github.com/burzacoding/platubi/blob/main/src/elements/Dashboard.ts).
 - The application fetches data from the Firestore database when the user logs in: [Example code](https://github.com/burzacoding/platubi/blob/main/src/contexts/ApiContext.tsx).
 - The cloud-functions run every certain given minutes to update crypto's prices every 5 minutes and worldwide currencies every day (API keys are stored in enviroment variables): [Example code](https://github.com/burzacoding/platubi/blob/main/functions/src/index.ts).
 - Complex mathematical logic is made using custom hooks and are optimised with memoization: [Example code](https://github.com/burzacoding/platubi/blob/main/src/Hooks/dashboardLogic/useMainCalc.ts).
 - Global state is stored in the `/context` folder: [Example code](https://github.com/burzacoding/platubi/blob/main/src/contexts/DashboardContext.tsx).

# If I had more time I would change this

 - Migrate the project to an own database deployed in a linux server.
 - Drop use of context in exchange of a better state management library like `zustand` or `redux`.
 - Convert the web app to a PWA.

# What is Platubi

I invite you to check [Platubi](https://platubi.com) online.

Platubi is a free website useful for checking the sum of all the currencies and cryptos you registered, you dont have to pay or fund nothing, it's just a calculator.


For example, let's say I add AS A NOTE a register that says USD 500 and another one containing EUR 200.
And let's say I choose to visualize all my money in a single currency: USD.
The platform is going to make all of the calculations for you and show you the value of USD 500 + EUR 200 = 735 USD.
It also works with cryptos and with literally every currency in the world.

# Available Scripts

Please remember to install the dependecies before trying to run the project:
`yarn` or `npm i`

In the project directory, you can run:
#### `yarn deploy`

Runs `yarn build` and `firebase deploy` sequentially.
