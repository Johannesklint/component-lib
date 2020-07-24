## Component library

### Installation

```jsx
  clone repo
```

### Usage

#### Checkbox

Can be used alone or together with `CheckboxGroup`

```jsx
import { CheckboxGroup, Checkbox } from '@library/checkbox'

function App() {
  return (
    <Checkbox id="vehicle1" name="vehicle1" value="Bike">
      I'm a bike
    </Checkbox>
  )
}

function AppWithCheckboxGroup() {
  return (
    <CheckboxGroup legend="Here's some text">
      <Checkbox id="vehicle1" name="vehicle1" value="Bike">
        I'm a bike
      </Checkbox>
      <Checkbox id="vehicle2" name="vehicle2" value="Car">
        I'm car
      </Checkbox>
    </CheckboxGroup>
  )
}
```
#### Input

```jsx
import { Input } from '@library/input'

function App() {
  return (
    <Input type="text" placeholder="placeholder" />
  )
}

```
