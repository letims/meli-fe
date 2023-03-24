## Author

Leticia Marenco

## Overview

- The react app was created using Vite.js with the react-ts template, Vite is an OOO solution which serves files on demand over native ESM, it also offers a bundle for production environments. The following package dependencies were added: react-router-dom, Material-UI, Redux.
- The backend was created using Node.js using inline commands, and the following package dependencies were added: Typescript, Express, Nodemon
- A decision early on the start of the project was to use Material library to reuse basic components to avoid having to implement them. This library customization utilizes inline CSS which isn't the ideal but the styles added were minimal.
- MercadolibreService folder is already included on the meli-be project and needs to be on that path in order to work.


## Pre-requisites:

- Nodejs LTS (18.15)
- Reactjs 18.2

## Setup for both meli-fe y meli-be

```terminal
# install dependencies
> npm install

# build project
> npm run build

# run project
> npm run dev
```

## Notes

* This was tested on Mac, if you're using a different OS I recommend going to Node or React setup page to see if there are any missing dependencies

* meli-fe runs by default on localhost:5173, and meli-be on localhost:8000. Make sure those ports are free or edit the configuration to use different ones.

* Unit testing was left out to the scope of the project due to time restrictions.

## Contact

If you have any issues please write to letims@gmail.com