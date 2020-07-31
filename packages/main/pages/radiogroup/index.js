import React from 'react'
import { Radio, RadioGroup } from '@library/radiogroup'
import { Wrapper } from '../../src/layout'
import Props from '../../src/props'

function RadioGroupDisplay() {
  return (
    <Wrapper>
      <div>
        <RadioGroup>
          <Radio id="vehicle1" name="vehicle1" value="Bike">
            I am the label
          </Radio>
          <Radio id="vehicle2" name="vehicle2" value="Car">
            I am the label
          </Radio>
          <Radio id="vehicle3" name="vehicle3" value="adsda">
            I am the label
          </Radio>
        </RadioGroup>
        <Props
          props={{
            children: 'node',
          }}
        >
          RadioGroup
        </Props>
        <Props
          props={{
            children: 'node',
            id: 'string',
            name: 'string',
            value: 'string',
          }}
        >
          Radio
        </Props>
      </div>
    </Wrapper>
  )
}

export default RadioGroupDisplay
