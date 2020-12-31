import * as React from 'react';
import styles from './Navigator.module.scss';
import IconHome from './icon/IconHome';

type Navigator = {};

function Navigator(props: Navigator) {
  return (
    <div className={styles.wrap}>
      <div className={styles.item_button}>
        <button>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.80472 9.46732H1V3.79961V1.6626H8.80472V9.46732Z"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M21.4409 9.46732H13.6362V3.79961V1.6626H21.4409V9.46732Z"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M8.80472 21.0814H1V15.5066V13.3696H8.80472V21.0814Z"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M21.4409 21.0814H13.6362V15.5066V13.3696H21.4409V21.0814Z"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={`${styles.item_button} ${styles.on}`}>
        <button>
          <IconHome/>
        </button>
      </div>
      <div className={styles.item_button}>
        <button>
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.1496 24.1745C18.3074 24.1745 23.2992 19.1826 23.2992 13.0249C23.2992 6.86709 18.3074 1.87524 12.1496 1.87524C5.99185 1.87524 1 6.86709 1 13.0249C1 19.1826 5.99185 24.1745 12.1496 24.1745Z"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M7.50391 12.3745L11.5921 16.4627L17.7244 9.30835"
              stroke="#6F6D6D"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navigator;
