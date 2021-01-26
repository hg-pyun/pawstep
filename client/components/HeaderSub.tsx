import * as React from 'react';
import styles from './HeaderSub.module.scss';

type HeaderSub = {
  title?: string;
  onClickCancelButton?: any;
  onClickConfirmButton?: any;
};

function HeaderSub(props: HeaderSub) {
  const { title, onClickCancelButton, onClickConfirmButton } = props;
  return (
    <div className={styles.container}>
      <button onClick={onClickCancelButton}>취소</button>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <button className={!onClickConfirmButton && styles.hide} onClick={onClickConfirmButton}>화인</button>
    </div>
  );
}

export default HeaderSub;
