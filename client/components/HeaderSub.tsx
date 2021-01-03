import * as React from 'react';
import styles from './HeaderSub.module.scss';
import IconBackArrow from './icon/IconBackArrow';

type HeaderSub = {
  onClickBackButton: any;
};

function HeaderSub(props: HeaderSub) {
  const { onClickBackButton } = props;
  return (
    <div className={styles.container}>
      <button onClick={onClickBackButton}>
        <IconBackArrow />
      </button>
    </div>
  );
}

export default HeaderSub;
