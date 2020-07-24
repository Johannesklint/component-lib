const React = require('react')
const { isFunction } = require('@library/utils')

function Input(props) {
  const [value, setValue] = React.useState('')

  function onChange(event) {
    setValue(event.target.value)
    if (isFunction(props.handleOnChange)) {
      props.handleOnChange(event)
    }
  }

  return <input {...props} value={value} onChange={onChange} />
}

module.exports = Input
