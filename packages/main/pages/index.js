/* eslint-disable indent */
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

function Accordion({ children }) {
  return children
}
function AccordionItem({ children }) {
  return React.Children.map(children, (child) => {
    console.log('child.props', child.props.id)
    return React.cloneElement(child)
  })
}
function AccordionPanel({ children }) {
  return children
}

function useAccordian(ids) {
  const [state, dispatch] = useReducer(
    function reducer(state, action) {
      const { id, type } = action
      switch (type) {
        case 'CHANGE':
          return {
            ...state,
            [id]: {
              isOn: !state.isOn,
            },
          }
        default:
          throw new Error()
      }
    },
    (function initState() {
      return ids.reduce((acc, item) => {
        return { ...acc, [item]: { name: item, isOn: false } }
      }, {})
    })()
  )
  const setToggle = (id) => {
    return () => {
      dispatch({
        type: 'CHANGE',
        id,
      })
    }
  }
  return [state, setToggle]
}

export default function Index() {
  const [toggle, setToggle] = useAccordian(['first', 'second'])
  return (
    <>
      {/* <CheckboxGroup legend="legend">
        <Checkbox id="vehicle1" name="vehicle1" value="Bike">
          I'm the label
        </Checkbox>
        <Checkbox id="vehicle2" name="vehicle2" value="Car">
          I'm the label
        </Checkbox>
      </CheckboxGroup> */}
      <Input />
      <button type="submit">ko</button>
      {/* <Accordion>
        <AccordionItem>
          <button onClick={setToggle('first')}>click me</button>
          <AccordionPanel id="first">some text</AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <button onClick={setToggle('second')}>click second me</button>
          <AccordionPanel>some second text</AccordionPanel>
        </AccordionItem>
      </Accordion> */}
    </>
  )
}

/**
 * TODO:
 * Remove dist folder on build
 * Fix lint
 */
