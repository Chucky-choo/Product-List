import React from 'react';
import {useField} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import ErrorMessage from "../ErrorMesage/ErrorMessage";


const useStyles = makeStyles({
  in: {
    background: 'linear-gradient(45deg, #FDC830, #F37335);',
    color: '#000000',
    width: 300,
    height: 20,
    border: "none",
    borderRadius: 6,
    padding: '12px 20px',
    fontSize: 20,
    margin: '8px 0',

    '&:focus': {
      background: '#ffffff',
    },

    '&::placeholder' :{
      color: '#000d18',
    }
  },
})


const MyTextField = ({label, errorMessage, ...props}) => {
  const c = useStyles()

  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <label>
        {label}
        <input {...field} {...props} className={c.in}/>
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