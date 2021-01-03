import * as React from 'react';
import styles from './index.module.scss';
import HeaderSub from '../../components/HeaderSub';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import CommonInput from '../../components/CommonInput';

function Index(props: RouteComponentProps) {
  const { history } = props;

  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <HeaderSub onClickBackButton={handleClickBackButton} />
      <form className={styles.form}>
        <div className={styles.form_item}>
          <CommonInput label={'시간'} placeholder={'10:30'}/>
        </div>
        <div className={styles.form_item}>
          <CommonInput label={'혈당'} placeholder={'150 mg/dl'}/>
        </div>
      </form>
    </>
  );
}

export default withRouter(Index);
