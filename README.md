# wirecase-react-jsonviewer

> Wirecase JSON Viewer Component. View JSON in beautiful tabular format.

[![NPM](https://img.shields.io/npm/v/wirecase-react-jsonviewer.svg)](https://www.npmjs.com/package/wirecase-react-jsonviewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/wirecase-react-jsonviewer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/wirecase-react-jsonviewer
[download-image]: https://img.shields.io/npm/dm/wirecase-react-jsonviewer.svg?style=flat-square
[download-url]: https://npmjs.org/package/wirecase-react-jsonviewer

## Install

```bash
npm install --save wirecase-react-jsonviewer
```

[![wirecase-react-jsonviewer](https://nodei.co/npm/wirecase-react-jsonviewer.png?downloads=true)](https://npmjs.org/package/wirecase-react-jsonviewer)

## Usage

```jsx
import React, { Component } from 'react';

import WirecaseReactJSONViewer from 'wirecase-react-jsonviewer';

class Example extends Component {
  render() {
    return (
      <WirecaseReactJSONViewer
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

[http://denisu08.github.io/wirecase-react-jsonviewer](http://denisu08.github.io/wirecase-react-jsonviewer/)

# JSFiddle Example

[http://jsfiddle.net/denisu08/61fwqcg5/](http://jsfiddle.net/denisu08/61fwqcg5/)

# What

![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-jsonviewer/master/pic1.png)
![alt pic](https://raw.githubusercontent.com/denisu08/wirecase-react-jsonviewer/master/pic2.png)

## License

MIT © [denisu08](https://github.com/denisu08)
