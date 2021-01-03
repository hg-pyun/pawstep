import * as React from 'react';
import styles from './Navigator.module.scss';
import IconHome from './icon/IconHome';
import IconPencil from './icon/IconPencil';
import IconCalendar from './icon/IconCalendar';

type Navigator = {};

function Navigator(props: Navigator) {
  return (
    <div className={styles.wrap}>
      <div className={styles.item_button}>
        <button>
          <IconHome />
        </button>
      </div>
      <div className={`${styles.item_button}`}>
        <button className={styles.write_wrap}>
          <IconPencil />
        </button>
      </div>
      <div className={styles.item_button}>
        <button>
          <IconCalendar />
        </button>
      </div>
    </div>
  );
}

export default Navigator;
