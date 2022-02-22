const MealInput = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>{props.name}</label>
      <input onChange={props.onChange} onBlur={props.onBlur} type='text' id={props.name} />
    </div>
  );
};
export default MealInput;
