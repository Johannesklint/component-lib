const React = require('react')

function Checkbox({ id, name, value, checked, onChange, children }) {
  const ref = React.useRef()
  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange(ref)}
      />
      {children}
    </label>
  )
}

function CheckboxGroup({ className, legend, children }) {
  const initState = {
    ...React.Children.map(children, (child) => ({
      [child.props.name]: {
        checked: false,
      },
    })).reduce((acc, item) => ({ ...acc, ...item }), {}),
  }
  const [checked, setChecked] = React.useState(initState)
  return (
    <fieldset className={className}>
      {legend && legend}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...checked[child.props.name].checked,
          onChange: (ref) => () => {
            setChecked((prev) => ({
              ...prev,
              [ref.current.name]: ref.current.checked,
            }))
          },
        })
      )}
    </fieldset>
  )
}

module.exports = { CheckboxGroup, Checkbox }
