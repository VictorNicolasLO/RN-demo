import {useState} from 'react';

function useMultipleTextFields(properties: string[]) {
  const [inputsValues, setInputsValues] = useState<any>({});
  function createOnSetValue(property: string) {
    return (ev: any) => {
      const newInputData: any = {};
      newInputData[property] = ev;
      setInputsValues({...inputsValues, ...newInputData});
    };
  }
  const inputs: any = {};
  function clear() {
    setInputsValues({});
  }

  properties.forEach(prop => {
    inputs[prop] = {
      onChangeText: createOnSetValue(prop),
      value: inputsValues[prop],
    };
  });

  return {clear, inputs};
}

export default useMultipleTextFields;
