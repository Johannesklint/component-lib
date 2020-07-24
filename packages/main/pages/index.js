import React, { useReducer } from 'react'
import Input from '@library/input'
import { CheckboxGroup, Checkbox } from '@library/checkbox'
import { isFunction } from '@library/utils'

function Button({ type, onClick, children, className }) {
  function handleClick() {
    if (isFunction) {
      onClick()
    }
  }

  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default function Index() {
  return (
    <>
      <CheckboxGroup legend="legend">
        <Checkbox id="vehicle1" name="vehicle1" value="Bike">
          I'm the label
        </Checkbox>
        <Checkbox id="vehicle2" name="vehicle2" value="Car">
          I'm the label
        </Checkbox>
      </CheckboxGroup>
    </>
  )
}
