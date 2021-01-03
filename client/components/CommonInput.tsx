import * as React from 'react';
import styles from './CommonInput.module.scss';
import { useState } from 'react';

type CommonInput = {
  label?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

function CommonInput(props: CommonInput) {
  const { label, ...inputProps } = props;
  const [isFocus, setIsFocus] = useState(false);
  return (
    <>
      {label && <label className={inputProps.required && styles.required}>{label}</label>}
      <div className={`${styles.input_box} ${isFocus && styles.focus}`}>
        <input {...inputProps} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
      </div>
    </>
  );
}

export default CommonInput;
