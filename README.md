# frontegg-vite-react-ts

<p align="center">
  <a href="https://frontegg.com" target="_blank" rel="noopener noreferrer">
    <img width="360" height="auto" src="public/readme/running.gif" alt="App running gif">
  </a>
</p>

## Vite React w/ Typescript and Frontegg

This is a minimal sample app to get started with [Frontegg](https://frontegg.com) Authentication in a
React app using [Frontegg's React SDK](https://github.com/frontegg/frontegg-react).

The app is bootstrapped with [Vite](https://vite.dev/) and their
[React template (with Typescript)](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), but [Frontegg's React SDK](https://github.com/frontegg/frontegg-react) can be used in any client-side React app.

## Configuring Frontegg

### Frontegg Application Configuration

[Create](https://developers.frontegg.com/guides/management/multi-apps/overview#create-and-configure) or start with an existing Frontegg Application.
And, configure as follows:

- `Type = Web`
- `Frontend stack = React`
- `App URL = http://localhost:5173`
  - the url should match the url where you're app is running
  - `http://localhost:5173` is the default url in Vite in development mode,
  modify as needed
  <details>
   <summary>Create a new application config in the dashboard</summary>
   <picture>
      <source srcset="public/readme/CreateNewApplicationConfig.webp 284w, public/readme/CreateNewApplicationConfig-2x.webp 451w" sizes="(max-width: 800px) 284px, 451px" type="image/webp" />
      <img srcset="public/readme/CreateNewApplicationConfig.png 284w, public/readme/CreateNewApplicationConfig-2x.png 451w" sizes="(max-width: 800px) 284px, 451px" src="public/readme/CreateNewApplicationConfig.png" alt="Create new app config"/>
    </picture>
  </details>

### Don't forget to add your `redirect uri`!

Under `Configurations` > `Authentication` > `Login Method` in your **Frontegg dashboard**,
add a url back to your app.

For example, when running in Vite dev mode<sup>*</sup> (a.k.a `npm run dev`):

```plaintext
http://localhost:5173/oauth/callback
```

<sup>*</sup>Modify the hostname and port as needed if you've changed from the defaults or are running in other modes.

### Environment Variables

`.env.Example` contains the required Frontegg config values used in the app.

To use the template,

1. create a copy of the file and name it `.env`
   - Vite uses [dotenv](https://github.com/motdotla/dotenv) to automatically [load the variables in the `.env` file](https://vite.dev/guide/env-and-mode.html#env-files)<sup>*</sup>
2. replace the placeholder values with your Frontegg details

There are 3 environment variables necessary for a basic Frontegg-React integration:

1. `VITE_FRONTEGG_BASE_URL`
2. `VITE_FRONTEGG_CLIENT_ID`
3. `VITE_FRONTEGG_APP_ID`

> [!CAUTION] *The `VITE_` prefix exposes environment variables client-side!
> Vite treats environment variables with the `VITE_` prefix as special and makes
> them available to the client. This is what we want for the variables above,
> but leave the prefix off if you add any additional variables that are meant to be kept
> secret!

<details>

<summary><strong>`.env`</strong> Template</summary>

```shell
################################################################################
### FRONTEGG CONFIG ###
################################################################################

#
# Frontegg Dashboard > "Keys & Domains"
#

# The "Base URL" can be found under the "Domains" tab, in the
# "Frontegg Domain" section.
# It's labeled as the "Domain Name"
VITE_FRONTEGG_BASE_URL='https://app-rndCharsHere.frontegg.com'

# The "Client ID" can be found under the "General" tab, in the "API Key"
# section.
# It's labeled as the "Client ID"
VITE_FRONTEGG_CLIENT_ID='looks-like-a-rnd-uuid'

#
# Frontegg Dashboard > Applications > {Application-Name}
#

# The "App ID" Can be found by clicking on a specific Application
# on the Applications page (or after creating a new Application).
################################################################################

# Under the "Settings" tab labeled as the "ID"
VITE_FRONTEGG_APP_ID='looks-like-a-rnd-uuid-too'

################################################################################
### FRONTEGG CONFIG ###
################################################################################
```

</details>

## Install

(yarn support coming soon!)

```shell
npm install
```

## Running the App

Start the dev server as you would with any Vite React app.

```shell
npm run dev
```

This opens a slightly modified version of the normal Vite starting template as can be seen with the gif at the top of this README.

Clicking the login button should redirect you to your Frontegg login page.