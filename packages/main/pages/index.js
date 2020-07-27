/* eslint-disable indent */
import React, { useState, useReducer } from 'react'
import Input from '@library/input'
import { CheckboxGroup, Checkbox } from '@library/checkbox'
import { Radio, RadioGroup } from '@library/radiogroup'

export default function Index() {
  return (
    <>
      <CheckboxGroup legend="legend">
        <Checkbox id="something1" name="something1" value="Bike">
          I'm the label
        </Checkbox>
        <Checkbox id="something2" name="something2" value="sdad">
          I'm the label
        </Checkbox>
        <Checkbox id="something3" name="something3" value="Car">
          I'm the label
        </Checkbox>
      </CheckboxGroup>
      <RadioGroup>
        <Radio id="vehicle1" name="vehicle1" value="Bike">
          I'm the label
        </Radio>
        <Radio id="vehicle2" name="vehicle2" value="Car">
          I'm the label
        </Radio>
        <Radio id="vehicle3" name="vehicle3" value="adsda">
          I'm the label dsds
        </Radio>
      </RadioGroup>
    </>
  )
}

/**
 * TODO:
 * Remove dist folder on build
 * Fix lint
 */

/**
 *
 * TOGGLEBAR
 *
 */
