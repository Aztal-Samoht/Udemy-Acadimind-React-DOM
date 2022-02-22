import useValidate from "../hooks/useValidate";

const BasicForm = (props) => {
  const {
    inputState: firstState,
    onChange: onFirstChange,
    onBlur: onFirstBlur,
    reset: resetFirst
  } = useValidate(x => x.trim() !== '')

  const firstClassString = firstState.hasError ? 'form-control invalid' : 'form-control'
  
  const {
    inputState: lastState,
    onChange: onLastChange,
    onBlur: onLastBlur,
    reset: resetLast
  } = useValidate(x => x.trim() !== '')

  const lastClassString = lastState.hasError ? 'form-control invalid' : 'form-control'
  
  const {
    inputState: emailState,
    onChange: onEmailChange,
    onBlur: onEmailBlur,
    reset: resetEmail
  } = useValidate(x => x.includes('@'))

  const emailClassString = emailState.hasError ? 'form-control invalid' : 'form-control'
  
  let formIsValid = firstState.isValid && lastState.isValid && emailState.isValid//TODO: add other inputs
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(firstState.value + '\n' + lastState.value + '\n' + emailState.value)
    resetFirst();
    resetLast();
    resetEmail();
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstClassString}>
          <label htmlFor='name'>First Name</label>
          <input onChange={onFirstChange} onBlur={onFirstBlur} value={firstState.value} type='text' id='name' />
        </div>
        <div className={lastClassString}>
          <label htmlFor='name'>Last Name</label>
          <input onChange={onLastChange} onBlur={onLastBlur} value={lastState.value} type='text' id='name' />
        </div>
      </div>
      <div className={emailClassString}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={onEmailChange} onBlur={onEmailBlur} value={emailState.value} type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
