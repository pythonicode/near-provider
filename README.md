# Near Provider

## About

near-provider is a React component which provides easy access to the [NEAR protocol javascript API](https://docs.near.org/docs/api/javascript-library) in **Next JS** and **React** applications.

## Installation

<code>npm install near-provider</code>

## Usage

### Next JS

`pages/_app.js`

```js
import { NearProvider } from 'near-provider';

function MyApp({ Component, pageProps }) {
  return <NearProvider><Component {...pageProps} /></NearProvider>
}
```

`pages/index.js`

```js
import { useNear } from 'near-provider';

export default function Home() {

    const { near, wallet } = useNear();

    const signIn = () => {
        wallet.requestSignIn(
            "example-contract.testnet", // contract requesting access
            "Example App", // optional
            "http://YOUR-URL.com/success", // optional
            "http://YOUR-URL.com/failure" // optional
        );
    };

    return <button onClick={signIn}>Connect</button>
}
```

### React

`src/ParentComponent.js`

```js
import { NearProvider } from 'near-provider';

export default function ParentComponent() {
  return <NearProvider><ChildComponent/></NearProvider>
}
```

`src/ChildComponent.js`

```js
import { useNear } from 'near-provider';

export default function ChildComponent() {

    const { near, wallet } = useNear();

    const signIn = () => {
        wallet.requestSignIn(
            "example-contract.testnet", // contract requesting access
            "Example App", // optional
            "http://YOUR-URL.com/success", // optional
            "http://YOUR-URL.com/failure" // optional
        );
    };

    return <button onClick={signIn}>Connect</button>
}
```

