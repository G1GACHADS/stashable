# Stashable Mobile Platform

Stashable is a mobile platform that addresses the issue of insufficient storage space and indiscriminate disposal.

<!-- no toc -->
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Making a new screen & route](#making-a-new-screen-and-route)
- [Using the theme](#using-the-theme)
- [Pre-made Components](#pre-made-components)

## Architecture

```sh
.
├── assets # images (.jpg .png etc) & svg
│   ├── icons
│   └── images
└── src # Source code
    ├── components # Reusable components
    ├── constants # Constants (routes)
    ├── screens # User Interfaces
    ├── store # State management
    ├── theme # Theme configuration
    ├── api.js # Base API config
    ├── app.jsx # App entrypoint
    └── navigator.jsx # Routes config
```

## Getting Started

- Clone Repo
- Open your terminal then install the dependencies

  ```
  npm install
  ```

  > Make sure you open your terminal in the project's directory

- Start the app

  ```
  npm start
  ```

## Making a new screen and route

1. Head to `./src/screens`
2. Create a new folder with your screen name (ex: `./src/screens/profile`)
3. Create an `index.jsx` file inside the folder
4. Create your screen component

```js
// ./src/screens/profile/index.jsx
import { ScrollView, StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'

export function ProfileScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.venti.md}
            mb="15"
          >
            This is the profile page
          </Text>
        </Container>
      </ScrollView>
    </>
  )
}

export default MainScreen
```

5. Create a new route go to `./src/constants/routes.js`
6. Create a new constant
```js
// ./src/constants/routes.js
export const profileRoute = 'profileRoute'
export default {
    ... // other routes
    profileRoute
}
```
7. Create a new navigation component to the profile page go to `./src/navigator.jsx` inside this piece of code

```js
import ProfileScreen from './screens/profile'

...
      {isAuthenticated ? (
        // User is signed in
        <>
          <Stack.Screen
            name={route.mainPageRoute}
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          // Your new screen nav
          <Stack.Screen
            name={route.profileRoute}
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
...
```

Read more about navigation [here](https://reactnavigation.org/docs/getting-started)

## Using the theme

Theme configurations are located in `src/theme/index.js`

```ts
export const colors = {
  black: '#2b2c34',
  primary: '#E45858',
  primaryDark: '#8E3636',
  secondary: '#6246EA',
  ... // see figma
}

export const typography = {
  weight: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    semiBold: 'Poppins_600SemiBold',
    bold: 'Poppins_700Bold',
  },
  venti: {
    sm: '28px',
    md: '30px',
    lg: '32px',
    xl: '34px',
    ...
  },
  grande: {
    ... // see figma
  },
  tall: {
    ... // see figma
  },
}

export default { colors, typography }
```

First, import `useTheme()` from `styled-components/native`

```js
import { useTheme } from 'styled-components/native'
```

Then, in your component for example:

```js
const PokemonElementsPanel = () => {
  const theme = useTheme()
  return <Text color={theme.colors.primary}>Fire</Text>
}
```

## Pre-made Components

<!-- no toc -->
- [Container](#container)
- [Button](#button)
- [Text](#text)
- [Input](#input)
- [Label](#label)

### Container

Wraps it's content with a fixed padding of `15px`

Example usage:

```js
import Container from './components/container'

function ExampleContainerUsage() {
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  )
}
```

### Button

Reusable button component

Example usage:

```js
import Button from './components/button'
import IconGoogle from './components/icons/icon-google'

function ExampleButtonUsage() {
  return (
    <>
      <Button title="Button" onPress={() => console.log('CLICKED!')} />
      <Button title="Small Button" sm />
      <Button title="I am disabled" disabled />

      <Button loading />

      <Button title="Blue" titleColor="blue" />

      <Button
        stroke
        strokeColor="black"
        title="Bordered"
      />

      <Button
        backgroundColor="purple"
        color="white"
      />

      <Button icon={<IconGoogle />} title="Log in with Google" />
    </>
  )
}
```

Button Props:
| Prop Name       | Description                        | Type            |
| --------------- | ---------------------------------- | --------------- |
| sm              | Button is small                    | `boolean`       |
| disabled        | Button is disabled                 | `boolean`       |
| loading         | Show a loading spinner only        | `boolean`       |
| loadingColor    | Loading spinner color              | `string`        |
| title           | Button text                        | `string`        |
| titleColor      | Button text color                  | `string`        |
| stroke          | Button has a stroke / border       | `boolean`       |
| strokeColor     | Button stroke color                | `string`        |
| icon            | Button icon component              | `JSX Component` |
| backgroundColor | Button color                       | `string`        |
| rippleColor     | Ripple effect color (Android only) | `string`        |
| onPress         | Click event                        | `function`      |

### Text

Custom text component

Example usage:

```js
import { useTheme } from 'styled-components/native'
import Text from './components/text'

function ExampleTextUsage() {
  const theme = useTheme()
  return (
    <View>
      <Text>Hello</Text>
      <Text color={theme.colors.secondary}>Hello</Text>
      <Text
        color={colors.black}
        weight={typography.weight.semiBold}
        size={typography.venti.md}
      >
        Find Storage Room At Stashable
      </Text>
      <Text capitalize>I am capitalized</Text>
      <Text textAlign="right">Right aligned</Text>
      <Text textAlign="left">Left aligned</Text>
      <Text padding="10px 10px">With Padding</Text>
      <Text margin="10px 10px">With Margin</Text>

      <Text ml="10px" mt="5px">
        Margin Left: 10px, Margin Top: 5px
      </Text>
      <Text mr="15px" mb="7px">
        Margin Right: 15px, Margin Bottom: 7px
      </Text>
    </View>
  )
}
```

Text Props:

| Prop Name  | Description                | Data Type        |
| ---------- | -------------------------- | ---------------- |
| color      | Color of the text          | `string`         |
| weight     | Weight of the text font    | `string`         |
| size       | Size of the text           | `string`         |
| capitalize | Text should be capitalized | `boolean`        |
| padding    | Padding of the text        | `css padding`    |
| margin     | Margin of the text         | `css margin`     |
| textAlign  | Text alignment             | `css text-align` |
| mb         | Margin Bottom              | `string`         |
| mt         | Margin Top                 | `string`         |
| ml         | Margin Left                | `string`         |
| mr         | Margin Right               | `string`         |
| pb         | Padding Bottom             | `string`         |
| pt         | Padding Top                | `string`         |
| pl         | Padding Left               | `string`         |
| pr         | Padding Right              | `string`         |

### Input

Form input text

Example usage:

```js
import { useState } from 'react'
import Input from './components/input'

function ChatBoxInput() {
    const [message, setMessage] = useState('')

    return (
      <Input
        value={message}
        placeholder="Hello!"
        onChangeText={setMessage}
      />
    )
}
```

Input props: Read https://reactnative.dev/docs/textinput.html

### Label

Form Label

Example usage:

```js
import { useState } from 'react'
import Label from './components/label'
import Input from './components/input'

function EmailInputBox() {
    const [email, setEmail] = useState('')

    return (
      <Label>Email</Label>
      <Input
        value={email}
        placeholder="briantracy@mail.com"
        onChangeText={setEmail}
      />
    )
}
```