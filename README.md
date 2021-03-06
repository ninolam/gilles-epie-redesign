# Gille Epié Portfolio

- [Gille Epié Portfolio](#gille-epi%c3%a9-portfolio)
  - [I - Useful links](#i---useful-links)
  - [II - Install](#ii---install)
    - [Requirements](#requirements)
    - [Project installation and configuration](#project-installation-and-configuration)
  - [III - Workflow Rules](#iii---workflow-rules)
    - [Branches](#branches)
    - [Commits](#commits)
  - [IV - App structure](#iv---app-structure)
    - [Client](#client)
      - [Stack](#stack)
      - [Install & Run](#install--run)
    - [API](#api)
      - [Stack](#stack-1)
      - [Install & Run](#install--run-1)
  - [V - Team](#v---team)
  - [License](#license)

> As part of a **group project** at [HETIC](https://hetic.net), we are responsible for **redesigning** and **developing** a portfolio. Our choice turned to [Gille Epié](http://www.gillesepie.com/).

## I - Useful links

- [Zeplin sketchs](https://app.zeplin.io/project/5ea14eee2bc979ae50730436/dashboard)
- [Epics & User stories](https://docs.google.com/document/d/1vaWID_KFF5FfbPPCprHcCSBTRMAFMc8QzDJhIuKTBg8)
- [Storybook](https://blyndusk.github.io/gilles-epie-redesign)

## II - Install

### Requirements

I assume you **already have** these elements **installed** and **configured**:

- Nodejs
- MongoDB

### Project installation and configuration

```bash
git clone https://github.com/blyndusk/gilles-epie-redesign.git
# set executable our own commit message rules
chmod +x ./.githooks/commit-msg
# add custom config to the git environment
git config core.hooksPath .githooks

```

## III - Workflow Rules

### Branches

```bash
 └── master
     └── develop
         ├── feature/your-branch
         └── fix/your-branch
```

- **NEVER** directly push to `master` branch
- **NEVER** directly push to `develop` branch
  - **ALWAYS** work on **YOUR BRANCH** cloned from `develop` branch
  - **ALWAYS** do a **MERGE REQUEST** from **YOUR BRANCH** to `develop` branch
- **ALWAYS** name your branch like that:
  - `feature/name-of-the-feature`
  - `fix/name-of-the-fix`

### Commits

- **ALWAYS** name your commit message like that
  - `"(Add|Fix|Remove|Update): commit message"`
- **ELSE**, your commit will be rejected by **Git hooks**

## IV - App structure

### Client

#### Stack

- [Reactjs](https://reactjs.org/)

#### Install & Run

```bash
cd client
npm i
npm start
```

The client app will run on port `3000`.

### API

This API is a **RESTful API** with **CRUD** on all points.

The **routes** are `http://localhost:27017/api`

- `/recipes`
- `/restaurants`
- `/articles`
- `/socials`
- `/infos`

You can `PUT`, `POST`, `PATCH` & `DELETE` **each item of each route** directly in [Postman](https://www.postman.com/) app.

#### Stack

- [NodeJS](https://nodejs.org/)
- [MongoDb](https://www.mongodb.com/)

#### Install & Run

Shell 1:

```bash
cd api
cp .env.sample .env
npm i
npm start
```

Shell 2:

```
mongod
```

The application will run on port `27017`.

## V - Team

- Maxime CHARPENTIER
- Sophia GOUNANI
- Alexandre DELALOY
- Nancy CAMPBELL
- Nino LAMOUREUX
- Jason GOUROVITCH
- Nicolas MARTIN
- José GUIGNERY TEIXEIRA

## License

Under [MIT](./LICENSE) license.
