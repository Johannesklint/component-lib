import React from 'react'
import { Wrapper } from '../../src/layout'
import Props from '../../src/props'
import Input from '@library/input'

function InputDisplay() {
  return (
    <Wrapper>
      <div>
        <Input placeholder="placeholder" label="this is a input" />
        <Props
          props={{
            placeholder: 'string',
            label: 'string',
            handleOnChange: 'function',
            id: 'number',
          }}
        />
      </div>
    </Wrapper>
  )
}

export default InputDisplay
