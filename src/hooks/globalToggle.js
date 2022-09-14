import React from 'react'
// Context has been created
const ButtonContext = React.createContext(false)
// Provider
const ButtonProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false)
  const toggleFunction = () => {
    setToggle(toggle => !toggle)
  }
  return (
    <ButtonContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </ButtonContext.Provider>
  )
}
export { ButtonContext, ButtonProvider }
