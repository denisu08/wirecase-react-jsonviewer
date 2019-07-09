# wirecase-react-piechart

> Wirecase JSON Viewer Component. View JSON in beautiful tabular format.

[![NPM](https://img.shields.io/npm/v/wirecase-react-piechart.svg)](https://www.npmjs.com/package/wirecase-react-piechart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/wirecase-react-piechart.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wirecase-react-piechart
[download-image]: https://img.shields.io/npm/dm/wirecase-react-piechart.svg?style=flat-square
[download-url]: https://npmjs.org/package/wirecase-react-piechart

## Install

```bash
npm install --save wirecase-react-piechart
```

[![wirecase-react-piechart](https://nodei.co/npm/wirecase-react-piechart.png?downloads=true)](https://npmjs.org/package/wirecase-react-piechart)

## Usage

```jsx
import React, { Component } from 'react';

import WirecaseReactPiechart from 'wirecase-react-piechart';

class Example extends Component {
  render() {
    return (
      <WirecaseReactPiechart
        json={[
          {
            task: 'Learn React',
            done: true,
          },
          {
            task: 'Write Book',
            done: false,
          },
        ]}
      />
    );
  }
}
```

# Demo

[http://denisu08.github.io/wirecase-react-piechart](http://denisu08.github.io/wirecase-react-piechart/)

# JSFiddle Example

[http://jsfiddle.net/denisu08/61fwqcg5/](http://jsfiddle.net/denisu08/61fwqcg5/)

# What

![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-piechart/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-piechart/master/pic2.png)

## License

MIT © [denisu08](https://github.com/denisu08)
