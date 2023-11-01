# Vue Music App

Huom! README.md sisältö tulee muuttumaan.

This template should help get you started developing with Vue 3 in Vite.

- sisään ja uloskirjautuminen
- rekisteröinti
- voi kuunnella ja ladata musiikkia
- voi kommentoida
- voi poistaa ja muokata vain omia kappaleitansa

- Tailwind
- Pinia
- ESLint
- Firebase
- Howler.js
- Internationalization: i18n
- Voi deployjata esim. Vercel hobby projekteja ilmasiks
- Testing: Vitest: Unit, Snapshot, End-to-End (E2E)

Vaihtaako mahdollisesti Options API -> Composition API?

Background Imaget luotu hyödyntäen Leonardo.Ai:
https://app.leonardo.ai/

Firebase

Firebasesta käytössä:

- Firestore Database
- Authentication
- Storage

https://firebase.google.com/

Määritä Firebasen Cloud Firestore säännöt esim. seuraavasti:

```text
allow read: if true;
allow write: if request.auth.uid == resource.data.uid;
allow create: if request.auth != null;
allow delete: if request.auth.uid == resource.data.uid;
```

Määritä Firebasen Storage-säännöt esim. seuraavasti:

```text
allow read: if true;
allow write: if request.auth != null &&
    request.resource.contentType == "audio/mpeg" &&
	request.resource.size < 10 * 1024 * 1024;
allow delete: if request.auth != null;
```

Luo seuraavanlainen includes/firebase.js -tiedosto, jonne laitat omat firebaseConfig tiedot:

```javascript
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  appId: ''
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
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
