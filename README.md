# Principled UI

[![NPM](https://img.shields.io/npm/v/principled-ui2.svg)](https://www.npmjs.com/package/principled-ui2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A deeply personal and specifically handy component library so I can stop making so damned many buttons.

... "buttons," of course, being a metaphor for all the fiddly, repetitive UI elements used in every project. Inputs. Modals. Dropdown menus.

You get it.

Components get added as needed and emphasize flexi-/scala-/accessi-bility.

Until declared otherwise, this library targets an audience of one -- its author. Maybe someday it'll open up.

## Install

```bash
npm install --save principled-ui2
```

## Usage

```tsx
import React, { Component } from 'react';

import MyComponent from 'principled-ui';
import 'principled-ui/dist/index.css';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## License

MIT © [phillipluther](https://github.com/phillipluther)
