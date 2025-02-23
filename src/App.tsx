import React from 'react';
import './App.scss';
import Input, {InputType} from "./Input";
import inputTexts from "./inputTexts";
import { validateEmail, validatePostalCode, validateName } from "./inputValidators";

function App() {
  return (
    <div className="App">
        <Input
            inputName={inputTexts?.email?.inputName}
            optional={false}
            error={inputTexts?.email?.error}
            placeholder={inputTexts?.email?.placeholder}
            validate={validateEmail}
            type={InputType.Email}
            id={inputTexts?.email?.id}
        />
        <Input
            inputName={inputTexts?.postalCode?.inputName}
            optional={false}
            error={inputTexts?.postalCode?.error}
            placeholder={inputTexts?.postalCode?.placeholder}
            validate={validatePostalCode}
            id={inputTexts?.postalCode?.id}
        />
        <Input
            inputName={inputTexts?.firstName?.inputName}
            optional={true}
            error={inputTexts?.firstName?.error}
            placeholder={inputTexts?.firstName?.placeholder}
            validate={validateName}
            id={inputTexts?.firstName?.id}
        />
    </div>
  );
}

export default App;
