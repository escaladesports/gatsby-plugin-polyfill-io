# gatsby-plugin-polyfill-io

A Gatsby plugin to polyfill your site with [Polyfill.io](https://polyfill.io/v2/docs/).

## Installation

With npm:

```bash
npm install --save gatsby-plugin-polyfill-io
```

Or with Yarn:

```bash
yarn add gatsby-plugin-polyfill-io
```

## Implementation

```javascript
// In your gatsby-config.js
plugins: [`gatsby-plugin-polyfill-io`]
```

## Options

To include [Polyfill.io options](https://polyfill.io/v2/docs/api):

```javascript
plugins: [
   {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: [`Array.prototype.map`, `fetch`],
      },
   },
]
```

Additional options:

- `minified`: Request a minified polyfill bundle (default: `true`)

```javascript
plugins: [
   {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
         features: `default`,
         minified: false
      },
   },
]
```