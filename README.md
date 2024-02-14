![node](https://img.shields.io/badge/node-%3D16.3.2-green)
![npm](https://img.shields.io/badge/npm-%3D6.13.4-yellowgreen)

# React Tests

Startup project for react test

## Prerequisites

Check node version in .nvmrc

## Install

```bash
npm i
```

## Run

```bash
npm run start:dev
```

## Testing

### Linter

Eslint analyzes our code to find problems related to code style. We declare rules in `.eslintrc`.
You can run that command locally:

```bash
npm run lint:dev
```

### Jest
Run the tests with jest:

```bash
npm run test
```
# 1 - Logic and JS

You're lucky you don't have any logic in JS to do today.

# 2 - Features

Before checking the features to implement. Please run the app, there are some instructions on the home page of the app.
Check the `Troubleshooting` part of this file if you have issues.

You will be given 2 features to implement in this app.
The given time is informative, you can do it faster or slower.
There is also a fix features as a bonus step once you have done 2 features and the CSS. It's only to do if you are satisfied with your dev.

## Feature 4 (MEDIUM - 50 minutes)

We need to update the information of a user.
This feature will be available only on the user details page.

You are free to choose the location of the button to trigger the edit mode.

## Feature 7 (EASY to HARD)
Test the feature you just developed.
You can use any test lib you want.
We tested the user details or user list for some inspiration. (Jest + react testing library).

## Bonus (to do after CSS) Fix and bad practices
There are a few bugs and bad practices in the App, some are even making the app laggy and not rendering as expected.
Please find the most you can.
There are only present in the bugs branch.

# 3 - CSS

You will have to reproduce this page in 40 minutes max on the `<CSSPage />`component. 


- It should be responsive on mobile.
- You have no limit on the tools (JSS, SASS, Mui, tailwind, ...), you can also use MUI if you prefer.
- The basic HTML is done, you can edit it if necessary.
- On this exercise, try to focus on the layout and responsiveness and not the integration details. Don't worry if you don't finish.
- There is are a few typography classes yet present in the style file of the page.

Please try to not make inline style for better reviewing purposes.

These 2 following mockups are available here: `/src/static/img/cssMobile.png` and `/src/static/img/cssDesktop.png`

![Result](/src/static/img/cssMobile.png "CSS Mobile")
![Result](/src/static/img/cssDesktop.png "CSS desktop")

# Troubleshooting

### Env variable
If you have an issue with changing the env variable, delete the .vite folder in the node_modules and restart the dev server.
These values are cached by vite for performance issues.

# Candidate notes

Right here what you want to tell us (feedback, issues, ...). Please make it a different commit after your end result commit.

