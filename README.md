# {{ site_name }}

> {{ site_description }}

## Build with

- [Nuxt](https://nuxt.com) and [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Cypress](https://cypress.io/) - E2E Tests
- [Jest](https://jestjs.io/) - Unit tests
- [LightHouse CI](https://www.npmjs.com/package/lighthouse-ci) - Performance monitoring
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatter
- [Husky](https://github.com/typicode/husky) - Modern native Git hooks made easy.
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

## Getting started

### Pre-Requisites

- Node > 18. It might work with lower versions, but was not tested.

### Install Dependencies

This project uses [Yarn](https://classic.yarnpkg.com/lang/en/) to manage dependencies.

Run the following command to install them:

```bash
yarn install
```

### Setup envrionment variables.

Project envrionment variables will be defined in `.env` file in the root of the project.

Run `copy .env.example .env` to set the default environment variables and modify any according to your needs.

It´s also recommneded to use [direnv](https://direnv.net/) to simplify the management and auto loading of these envrionment variables in your shell. After installing direnv, make sure
to run `direnv allow` in the root of the project, to enable direnv for your project.

### Start the development Server

To start the application dev server:

```bash
yarn dev
```

This will start a development server on http://localhost:3000, by default. You can change the port, by specifying the `PORT` variable on the `.env` file.

If you prefer to use Docker, a docker-compose file is provided. You can run `yarn docker:up` to start a docker container for the application.

Both ways, you will have hot reload working, when you do any change in your code.

### Run the tests

This project uses [Jest](https://jestjs.io/) for unit testing and [Cypress](https://cypress.com) for E2E tests.

To run unit tests:

```bash
yarn test
```

To run E2E tests:

```bash
yarn cy:run
```

#### Lighthouse Tests

This project also includes [Lighthouse cli](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md) to run performance tests. It will fail the tests, if your project, doesn´t reach the recommended performance theresholds.

To run lighthouse locally:

```bash
yarn lh
```

**Note**: Lighthouse CLI will start a `preview` server automatically for you, but to be sure that you are testing the most recent version of the application, your run build the site with `yarn build` before, running Lighthouse.

## Build for Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Author

👤 **Bruno Paz**

- Website: [brunopaz.dev](https://brunopaz.dev)
- Github: [@brpaz](https://github.com/brpaz)
