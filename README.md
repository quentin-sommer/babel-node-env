# babel-node-env

## Installation
`npm install --save @quentin-sommer/babel-node-env`

## Introduction
This CLI will compile and run your node application using babel. You don't have to worry about the plugins you need to use. You'll get every [stage 4](https://tc39.github.io/process-document/) features for free. 

It's great for experimentations and quick script development.

## Usage

Add this script in your `package.json`:
```
{
    "scripts": {
        "start": "babel-node-env YOUR_ENTRY_POINT.js"
    }
}
```

Then run `npm start` to start your app and babel will automatically compile it and run it.
