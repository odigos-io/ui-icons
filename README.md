# Odigos UI Icons

This library contains the SVG icons for some Odigos UI libraries ([ui-components](https://github.com/odigos-io/ui-components), [ui-containers](https://github.com/odigos-io/ui-containers)).

## Installation

Using **npm**:

```shell
npm i @odigos/ui-icons
```

Using **yarn**:

```shell
yarn add @odigos/ui-icons
```

## Usage

Wrap your app with the theme provider from [@odigos/ui-theme](https://github.com/odigos-io/ui-theme):

```tsx
import Theme from '@odigos/ui-theme'

const AppProviders = () => {
  return (
    <Theme.Provider>
      <App />
    </Theme.Provider>
  )
}
```

Import an icon, and call it with it's props:

```tsx
import { OdigosLogo } from '@odigos/ui-icons'

const App = () => {
  return <OdigosLogo size={100} fill='#F5F5F5' />
}
```
