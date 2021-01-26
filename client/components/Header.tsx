import * as React from 'react';
import styles from './Header.module.scss';
import ImgProfile from '@/assets/img/profile.png';

type Header = {};

function Header(props: Header) {
  return (
    <div className={styles.wrap}>
      <div>
        <span className={styles.title}>Pawstep</span>
      </div>
      <div className={styles.profile}>
        <img src={ImgProfile}/>
      </div>
    </div>
  );
}

export default Header;
