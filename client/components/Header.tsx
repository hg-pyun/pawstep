import * as React from 'react';
import styles from './Header.module.scss';
import ImgTitle from '@/assets/img/title.png';
import ImgProfile from '@/assets/img/profile.png';

type Header = {};

function Header(props: Header) {
  return (
    <div className={styles.wrap}>
      <div>
        <img src={ImgTitle} alt={'PAWSTEP'} />
      </div>
      <div className={styles.profile}>
        <img src={ImgProfile} alt={'profile'} />
      </div>
    </div>
  );
}

export default Header;
