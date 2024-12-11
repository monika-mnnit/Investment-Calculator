import Header from "./componets/Header";
import Input from "./componets/Input";
import Result from "./componets/Result";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment : 1100,
    annualInvestment : 2000,
    expectedReturn : 10,
    duration : 6
});
const isValid = userInput.duration >= 1;
function handelOnChange(identifier, newValue) {
  setUserInput((prevInput) => {
      return {
       ...prevInput,
       [identifier] : +newValue

      }
  })
}

  return (
    <>
      <Header />
      <Input userInput = { userInput} onChange = {handelOnChange}/>
      {!isValid && <p>duration is invalid</p>}
      {isValid && <Result input = {userInput}/>}
    </>

  )
}

export default App
