# {{ site_name }}

> {{ site_description }}


## Development


### Install Dependencies

This project uses [Yarn](https://classic.yarnpkg.com/lang/en/) to manage dependencies.

Run the following command to install them:

```bash
yarn install
```

### Setup envrionment variables.

Project envrionment variables will be defined in `.env` file in the root of the project.

Run `copy .env.example .env` to set the default environment variables and modify any according to your needs.

It´s also recommneded to use [direnv](https://direnv.net/) to simplify the management and auto loading of these envrionment variables in your shell.  After installing direnv, make sure
to run `direnv allow` in the root of the project, to enable direnv for your project.

### Development Server

To start the application dev server:

```bash
yarn dev
```

This will start a development server on http://localhost:3000, by default. You can change the port, by specifying the `PORT` variable on the `.env` file.

If you prefer to use Docker, a docker-compose file is provided. You can run `yarn docker:up` to start a docker container for the application.


## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
