const React = require('react')

module.exports = Input

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
