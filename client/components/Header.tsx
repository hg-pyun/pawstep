import * as React from 'react';
import styles from './Header.module.scss';

type Header = {};

function Header(props: Header) {
  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.title}>Pawstep</span>
      </div>
      <div className={styles.profile}>
        <img src='https://via.placeholder.com/35x35' />
      </div>
    </div>
  );
}

export default Header;
