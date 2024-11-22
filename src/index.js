import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Instructions from "./components/Instructions";

// storyblokInit function, let us to initialize 'storyblok'
const accessTokenAPI = process.env.REACT_APP_API_ACCESS_TOKEN
storyblokInit({
  accessToken: accessTokenAPI,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    hero: Hero,
    instructions: Instructions,
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*
Línea 6 "@storyblok/react" es la librería

*We are passing an 'access token' to the 'storyblokInit' function, each space has its own 'access token', we can get these access tokens 
going to storyblok app > getting into our space(In my case 'Technical-Support-Engineer) > settings > Access Tokens.

*Each space has different 'access tokens', because they have different 'Access level' (Example: There are preview access level, also public
 access level )

 i) Preview access level: It gives you access to draft data and to publish data.
 ii) Public access level: It gives you access to publish data.

SDK: provides features and capabilities to developers to basically manage three areas related to storyblok
  i) Retrieving the content from the server blok API that you want to render on your website.
  ii) Set up the real time visual preview inside Storyblok as you create them.
  iii) Rendering dynamic content no matter which components you are or which blocks you are using inside storyblok, rendering the proper
       component in the frontend of your application.


**INSIDE STORYBLOK you CANNOT use HTTP, that is why we need to create a 'quick proxy', because in storyblok we need to use a HTTPS connection.


*/