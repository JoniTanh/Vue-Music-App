# Vue Music App

## About

The Vue Music App is a dynamic and user-friendly platform designed for music enthusiasts. Built with Vue 3 and Vite, this app provides a seamless experience for users to engage with music in various ways. Whether you're looking to explore new tunes, manage your music library, or connect with other music lovers, this app offers a range of features to enhance your music experience.

## Features

- `User Authentication:` Secure sign-in and sign-out functionality.
- `Registration:` Easy user registration process.
- `Music Playback:` Listen to a wide range of music.
- `Music Download:` Option to download your favorite tracks.
- `User Interaction:` Engage with the community by commenting on tracks.
- `Content Management:` Users can delete or modify their own songs.

## Technologies Used

- `Tailwind:` For stylish and responsive design.
- `Pinia:` State management made simple.
- `ESLint:` Ensuring code quality and consistency.
- `Firebase:` Robust backend for user authentication, database, and storage.
- `Howler.js:` For handling audio functionalities.
- `Internationalization (i18n):` Making the app accessible to a global audience.
- `Deployment:` Easily deployable on platforms like Vercel for hobby projects.
- `Testing:` Comprehensive testing using Vitest, including unit, snapshot, and end-to-end tests.

## Background Images

Created using Leonardo.Ai: https://app.leonardo.ai/

## Firebase

Firebase features in use:

- `Firestore Database:` For managing app data.
- `Authentication:` User authentication services.
- `Storage:` Cloud storage for user data.

For more information, visit https://firebase.google.com/

Firebase Cloud Firestore Rules:

```text
allow read: if true;
allow write: if request.auth.uid == resource.data.uid;
allow create: if request.auth != null;
allow delete: if request.auth.uid == resource.data.uid;
```

Firebase Storage Rules:

```text
allow read: if true;
allow write: if request.auth != null &&
    request.resource.contentType == "audio/mpeg" &&
	request.resource.size < 10 * 1024 * 1024;
allow delete: if request.auth != null;
```

Firebase Configuration:

Create a `includes/firebase.js` file and include your Firebase configuration:

```javascript
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
