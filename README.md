# AutoPublishNgNpm
This project is a simple proof of concept on automating the publishing of a NPM library on NPM Registry whenever you have changes in your git repository. Project is made using Node, Angular and CircleCI.

Link to the published NPM Library, [auto-publish-ng-npm](https://www.npmjs.com/settings/rsarmiento-pl/packages)

The project itself was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Generating the Npm Library/Project

Run `npm run generate-library` to generate the npm library/project if it does not exist yet.

## Building the Npm Library/Project

Run `npm run build-library` to build the npm library/project.

## Building the Npm Library/Project

Run `npm run publish-to-npm` to publish the npm library/project to the Npm Registry.
Change the credentials in the `npm-login.js` for authentication. Note that you have to PATCH the version of your project (version is on package.json) in order to properly update your existing NPM Library on the NPM registry.
