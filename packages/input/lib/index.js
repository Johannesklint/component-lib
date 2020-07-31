const React = require('react')
const { isFunction } = require('@library/utils')

function Input({ handleOnChange, id, label, ...props }) {
  const [value, setValue] = React.useState('')

  function onChange(event) {
    setValue(event.target.value)
    if (isFunction(handleOnChange)) {
      handleOnChange(event)
    }
  }

  return (
    <label htmlFor={id}>
      {label}
      <input {...props} id={id} value={value} onChange={onChange} />
    </label>
  )
}

module.exports = Input
