# babel-preset-stage-0-without-async
Use stage-0 Babel features without `transform-async-generator-functions`.

There's no need to transform `async` to `generator-functions` on Node.js `>= v7.6`.


## Installation

Installation requires installing a peer dependence.

```sh
yarn add -D babel-preset-stage-0 babel-preset-stage-0-without-async
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["stage-0-without-async"]
}
```

### Via CLI

```sh
babel script.js --presets stage-0-without-async
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  presets: ['stage-0-without-async']
});
```


## License

MIT © Cap32


