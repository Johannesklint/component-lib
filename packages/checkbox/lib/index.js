const React = require('react')

function Checkbox({ id, name, value, checked, onChange, children }) {
  return (
    <React.Fragment>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        {children}
      </label>
    </React.Fragment>
  )
}

function CheckboxGroup({ className, legend, children }) {
  const initState = {
    ...React.Children.map(children, (child) => {
      return {
        [child.props.name]: {
          id: child.props.id,
          value: child.props.value,
          checked: child.props.checked || false,
        },
      }
    }).reduce(
      (acc, item) => ({
        ...acc,
        ...item,
      }),
      {}
    ),
  }

  function fixState(oldState) {
    return Object.entries(oldState).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          ...value,
          checked: false,
        },
      }),
      {}
    )
  }

  function reducer(state, action) {
    const { payload, type } = action
    switch (type) {
      case 'CHANGE':
        return {
          ...fixState(state, payload),
          [payload.name]: {
            ...state[payload.name],
            checked: payload.checked,
          },
        }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <fieldset className={className}>
      {legend && legend}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...state[child.props.name],
          onChange: (event) => {
            dispatch({
              type: 'CHANGE',
              payload: {
                name: event.target.name,
                checked: event.target.checked,
              },
            })
          },
        })
      )}
    </fieldset>
  )
}

module.exports = { CheckboxGroup, Checkbox }
