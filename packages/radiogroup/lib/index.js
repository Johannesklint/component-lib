const React = require('react')

function Radio({ id, name, value, checked, onChange, children }) {
  const ref = React.useRef()
  return (
    <label htmlFor={id}>
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange(ref)}
      />
      {children}
    </label>
  )
}

function RadioGroup({ className, children }) {
  const initState = {
    ...React.Children.map(children, (child) => ({
      [child.props.name]: {
        checked: false,
      },
    })).reduce((acc, item) => ({ ...acc, ...item }), {}),
  }
  const [state, setState] = React.useState(initState)

  return (
    <fieldset className={className}>
      {React.Children.map(children, (child) => {
        const { name } = child.props
        return React.cloneElement(child, {
          checked: name === state[name] && state[name].checked,
          key: name,
          name: name,
          id: name,
          onChange: (ref) => () => {
            setState({ [ref.current.name]: ref.current.name })
          },
        })
      })}
    </fieldset>
  )
}

module.exports = { RadioGroup, Radio }
