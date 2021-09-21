import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    margin: '0 auto',
    padding: 0,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bolder',
  },
  redLine: {
    width: '100%',
    height: 2,
    background: '#c32b48',
    marginBottom: 10,
  }
})


const ErrorMessage = ({text}) => {
  const c = useStyles()
  return (
    <div>
      <Typography align='center' className={c.error}>
        {text}
      </Typography>
      <div className={c.redLine}></div>
    </div>
  );
};

export default ErrorMessage;
