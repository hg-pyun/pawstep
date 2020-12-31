import * as React from 'react';
import styles from './CommonButton.module.scss';

type CommonButton = {

} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function CommonButton(props: CommonButton) {
  const { children, ...otherProps } = props;
  return <button className={styles.common} {...otherProps}>{children}</button>;
}

export default CommonButton;
