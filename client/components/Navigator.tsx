import * as React from 'react';
import styles from './Navigator.module.scss';
import IconHome from './icon/IconHome';
import IconPencil from './icon/IconPencil';
import IconCalendar from './icon/IconCalendar';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type Navigator = {};

function Navigator(props: RouteComponentProps) {
  const { history } = props;

  const handleClickHomeButton = () => {};

  const handleClickWriteButton = () => {
    history.push('/write');
  };

  const handleClickCalendarButton = () => {};

  return (
    <div className={styles.wrap}>
      <div className={styles.item_button}>
        <button onClick={handleClickHomeButton}>
          <img src="../assets/img/home@2x.png" alt="home" />
        </button>
      </div>
      <div className={`${styles.item_button}`}>
        <button className={styles.write_wrap} onClick={handleClickWriteButton}>
          <IconPencil />
        </button>
      </div>
      <div className={styles.item_button}>
        <button onClick={handleClickCalendarButton}>
          <img src="../assets/img/calendar@2x.png" alt="calendar" />
        </button>
      </div>
    </div>
  );
}

export default withRouter(Navigator);
