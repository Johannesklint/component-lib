import React from 'react'
import { CheckboxGroup, Checkbox } from '@library/checkbox'
import { Wrapper } from '../../src/layout'

export default function CheckboxDisplay() {
  return (
    <Wrapper>
      <CheckboxGroup legend="legend">
        <Checkbox id="something1" name="something1" value="Bike">
          I am the label
        </Checkbox>
        <Checkbox id="something2" name="something2" value="sdad">
          I am the label
        </Checkbox>
        <Checkbox id="something3" name="something3" value="Car">
          I am the label
        </Checkbox>
      </CheckboxGroup>
    </Wrapper>
  )
}
