import React from 'react';
import {useField} from "formik";
import ErrorMessage from "../ErrorMesage/ErrorMessage";
import {useStyles} from "./myTextFieldStyle";


const MyTextField = ({label, errorMessage, ...props}) => {
	const style = useStyles()

  const [field, meta] = useField(props);
  return (
    <div>
      <label>
        {label}
        <input {...field} {...props} className={style.in}/>
      </label>
      {meta.touched && meta.error ? (
        <div>
         <ErrorMessage text={meta.error}/>
        </div>
      ) : null}
    </div>
  );
};

export default MyTextField