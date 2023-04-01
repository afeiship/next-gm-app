# next-gm-app
> Tampermonkey app base.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add -S @jswork/next-gm-app
```

## usage
```js
import '@jswork/next-gm-app';

nx.declare({
    extends: nx.GmApp,
    methods: {
        // your methods...
    }
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-gm-app/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-gm-app
[version-url]: https://npmjs.org/package/@jswork/next-gm-app

[license-image]: https://img.shields.io/npm/l/@jswork/next-gm-app
[license-url]: https://github.com/afeiship/next-gm-app/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-gm-app
[size-url]: https://github.com/afeiship/next-gm-app/blob/master/dist/next-gm-app.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-gm-app
[download-url]: https://www.npmjs.com/package/@jswork/next-gm-app
