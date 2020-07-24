import React from 'react'
import Input from '@library/input'
import { isFunction } from '@library/utils'
import { useReducer } from 'react'

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

function Checkbox({ id, name, value, checked, onChange, children }) {
  return (
    <>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {children}
      </label>
    </>
  )
}

function CheckboxGroup({ legend, children }) {
  const initState = {
    ...React.Children.map(children, (child) => {
      return {
        [child.props.name]: {
          id: child.props.id,
          value: child.props.value,
          checked: child.props.checked || false,
        },
      }
    }).reduce(
      (acc, item) => ({
        ...acc,
        ...item,
      }),
      {}
    ),
  }

  function fixState(oldState, payload) {
    return Object.entries(oldState).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: {
        ...value,
        checked: false,
      },
    }), {})
  }

  function reducer(state, action) {
    const { payload, type } = action
    switch (type) {
      case 'CHANGE':
        return {
          ...fixState(state, payload),
          [payload.name]: {
            ...state[payload.name],
            checked: payload.checked,
          },
        }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <fieldset>
      {legend}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...state[child.props.name],
          onChange: (event) => {
            dispatch({
              type: 'CHANGE',
              payload: {
                name: event.target.name,
                checked: event.target.checked,
              },
            })
          },
        })
      )}
    </fieldset>
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
