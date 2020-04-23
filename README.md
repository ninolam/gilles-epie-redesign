# Gille Epié Portfolio

- [Gille Epié Portfolio](#gille-epi%c3%a9-portfolio)
  - [I - Install](#i---install)
  - [II - Workflow Rules](#ii---workflow-rules)
    - [Branches](#branches)
    - [Commits](#commits)
  - [III - App structure](#iii---app-structure)
    - [Client](#client)
      - [Stack](#stack)
      - [Install & Run](#install--run)
    - [API](#api)
      - [Stack](#stack-1)
      - [Install & Run](#install--run-1)
  - [IV - Team](#iv---team)
  - [V - License](#v---license)

> As part of a group project at hetic, we are responsible for redesigning and developing a portfolio. Our choice turned to [Gille Epié](http://www.gillesepie.com/).

## I - Install

```bash
git clone https://github.com/blyndusk/gilles-epie-redesign.git
# set executable our own commit message rules
chmod +x ./.githooks/commit-msg
# add custom config to the git environment
git config core.hooksPath .githooks

```

## II - Workflow Rules

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

## III - App structure

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

## IV - Team

- Maxime CHARPENTIER
- Sophia GOUNANI
- Alexandre DELALOY
- Nancy CAMPBELL
- Nino LAMOUREUX
- Jason GOUROVITCH
- Nicolas MARTIN

## V - License

Under [MIT](./LICENSE) license.