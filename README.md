# Odigos UI Icons

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

Wrap your app with the theme provider from [`@odigos/ui-theme`](https://github.com/odigos-io/ui-theme):

```tsx
import { Theme } from '@odigos/ui-theme'

const AppProviders = () => {
  const darkMode = true

  return (
    <Theme.Provider darkMode={darkMode}>
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
