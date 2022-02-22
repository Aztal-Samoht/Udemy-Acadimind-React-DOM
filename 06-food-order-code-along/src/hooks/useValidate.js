import { useState } from "react";

const useValidate = (valLogic) => {
const [value, setValue] = useState('');
const [isInitial, setIsInitial] = useState(true);

let isValid = valLogic(value);
let hasError = !isValid && !isInitial;


const onBlur = () =>{
    setIsInitial(false);
    isValid = valLogic(value) && !isInitial;
}

const onChange = (x) => {
    setValue(x.target.value);
    setIsInitial(false);
}

const reset = () => {
    setValue('');
    setIsInitial(true);
}

let inputState = {value, isValid, hasError}

return {
    inputState,
    onChange,
    onBlur,
    reset,
}
}; export default useValidate;