# NgInmemoryapiTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Add-On to Angular CLI generated content

## InMemoryDB Implementation

Additional folders are added in `app`

> `__interface`: Holds interface of db entries

> `__services`: To add Angular consumable services

> `in-memory-api`: To implement In-Memory API

In Memory DB Services will be initialized by `HttpClientInMemoryWebApiModule` and hence not included `@Injectible()` decorator.

All In Memory DB Services are registered in `InMemoryApiModule` which is imported in `AppModule` in development environment.

### Important Files

1. `in-memory-users.service.ts`: To create in memory DB table: `users`
2. `users.service.ts`: Service to consume `in-memory-users` api
3. `app.component.ts`: Consumes `users.service` to perform CRUD operations with user action in UI

**Note**: UI is implemented with minimal HTML and CSS. So, it may not look attractive.
