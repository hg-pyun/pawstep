import * as React from 'react';
import styles from './Navigator.module.scss';
import IconPencil from './icon/IconPencil';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ImgHome from '../assets/img/home@2x.png';
import ImgHomeGray from '../assets/img/home@2x.png';
import ImgCalendar from '../assets/img/calendar@2x.png';
import ImgCalendarGray from '../assets/img/calendar_gray@2x.png';

function Navigator(props: RouteComponentProps) {
  const { history, match } = props;

  const handleClickHomeButton = () => {};

  const handleClickWriteButton = () => {
    history.push('/write');
  };

  const handleClickCalendarButton = () => {};

  const isHome = match.path === '/';
  const isCalendar = match.path === '/calendar';

  return (
    <div className={styles.wrap}>
      <div className={styles.item_button}>
        <button onClick={handleClickHomeButton}>
          <img src={isHome ? ImgHome : ImgHomeGray} alt="home" />
        </button>
      </div>
      <div className={`${styles.item_button}`}>
        <button className={styles.write_wrap} onClick={handleClickWriteButton}>
          <IconPencil />
        </button>
      </div>
      <div className={styles.item_button}>
        <button onClick={handleClickCalendarButton}>
          <img src={isCalendar ? ImgCalendar : ImgCalendarGray} alt="calendar" />
        </button>
      </div>
    </div>
  );
}

export default withRouter(Navigator);
