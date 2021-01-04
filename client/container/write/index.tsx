import * as React from 'react';
import styles from './index.module.scss';
import HeaderSub from '../../components/HeaderSub';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import CommonInput from '../../components/CommonInput';
import IconFood from '../../components/icon/IconFood';
import IconWalk from '../../components/icon/IconWalk';
import IconSyringe from '../../components/icon/IconSyringe';

function Index(props: RouteComponentProps) {
  const { history } = props;

  const handleClickSubmitButton = () => {
    // submit
    history.goBack();
  };

  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <HeaderSub onClickBackButton={handleClickBackButton} />
      <form className={styles.form}>
        <div className={styles.form_item}>
          <div className={styles.date_title}>
            날짜
          </div>
          <input type={'date'}/>
        </div>
        <div className={`${styles.form_item} ${styles.half}`}>
          <div className={styles.time}>
            <CommonInput label={'시간(Hour)'} placeholder={'03'} />
          </div>
          <div className={styles.time}>
            <CommonInput label={'분(Minute)'} placeholder={'20'} />
          </div>
        </div>
        <div className={styles.form_item}>
          <CommonInput label={'혈당 (mg/dL)'} placeholder={'150'} />
        </div>
        <div className={styles.options}>
          <div className={styles.options_title}>
            <strong>추가 입력</strong>
          </div>
          <div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input type="radio" id="none" name="category" defaultChecked />
                <label htmlFor="none">
                  <span>입력하지 않기</span>
                </label>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input type="radio" id="food" name="category" />
                <label htmlFor="food">
                  <span className={styles.icon}>
                    <IconFood />
                  </span>
                  <span className={styles.icon_name}>식사</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput style={{ textAlign: 'right' }} />
                </div>
                <span className={styles.unit}>g</span>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input type="radio" id="medicine" name="category" />
                <label htmlFor="medicine">
                  <span className={styles.icon}>
                    <IconSyringe />
                  </span>
                  <span className={styles.icon_name}>주사</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput style={{ textAlign: 'right' }} />
                </div>
                <span className={styles.unit}>단위</span>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input type="radio" id="walk" name="category" />
                <label htmlFor="walk">
                  <span className={styles.icon}>
                    <IconWalk />
                  </span>
                  <span className={styles.icon_name}>산책</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput style={{ textAlign: 'right' }} />
                </div>
                <span className={styles.unit}>분</span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.submit} onClick={handleClickSubmitButton}>
        <button type={'button'}>기록하기</button>
      </div>
    </>
  );
}

export default withRouter(Index);
