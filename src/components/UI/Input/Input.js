//# Section 10. Advanced: Handling Side Effects, Using Reducers & Using the Context API

//# 127. Refactoring an Input Component
/*
import React from "react";
import classes from './Input.module.css';

const Input = (props) => {
  return (<div
    className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
      }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>)
}

export default Input;
*/

//# 128. Diving into "Forward Refs"
import React, {useRef, useImperativeHandle} from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref , () => {
    return {
      focus: activate
    }
  })
  
  return (<div
    className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
      }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref = {inputRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>)
})

export default Input;