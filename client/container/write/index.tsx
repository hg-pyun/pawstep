import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import styles from './index.module.scss';
import HeaderSub from '../../components/HeaderSub';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import CommonInput from '../../components/CommonInput';
import IconFood from '../../components/icon/IconFood';
import IconWalk from '../../components/icon/IconWalk';
import IconSyringe from '../../components/icon/IconSyringe';
import { useRecoilState } from 'recoil';
import { recordState } from '../../store';
import { Record, RecordOptionType } from '../../types/types';
import dayjs from 'dayjs';

function Index(props: RouteComponentProps) {
  const [recordList, setRecordList] = useRecoilState(recordState);
  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [value, setValue] = useState('');
  const [radio, setRadio] = useState(RecordOptionType.None);

  const [foodValue, setFoodValue] = useState('');
  const [medicineValue, setMedicineValue] = useState('');
  const [walkValue, setWalkValue] = useState('');

  const { history } = props;

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleChangeHour = (e: ChangeEvent<HTMLInputElement>) => {
    setHour(e.target.value);
  };

  const handleChangeMinute = (e: ChangeEvent<HTMLInputElement>) => {
    setMinute(e.target.value);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value as RecordOptionType);
  };

  const handleChangeFoodValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodValue(e.target.value);
  };

  const handleChangeMedicineValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMedicineValue(e.target.value);
  };

  const handleChangeWalkValue = (e: ChangeEvent<HTMLInputElement>) => {
    setWalkValue(e.target.value);
  };

  const handleClickSubmitButton = () => {
    let optionValue = null;

    switch (radio) {
      case RecordOptionType.Food:
        optionValue = Number(foodValue);
        break;
      case RecordOptionType.Medicine:
        optionValue = Number(medicineValue);
        break;
      case RecordOptionType.Walk:
        optionValue = Number(walkValue);
        break;
    }

    const newRecord: Record = {
      date: new Date(`${date}T${hour}:${minute}`),
      value: Number(value),
      optionType: radio,
      optionValue: optionValue,
    };

    const newRecordList = [...recordList, newRecord].sort((a, b) => b.date.getTime() - a.date.getTime());
    setRecordList(newRecordList);
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
          <div className={styles.date_title}>날짜</div>
          <input type={'date'} value={date} onChange={handleChangeDate} />
        </div>
        <div className={`${styles.form_item} ${styles.half}`}>
          <div className={styles.time}>
            <CommonInput
              type="number"
              label={'시간(Hour)'}
              placeholder={'12'}
              value={hour}
              onChange={handleChangeHour}
            />
          </div>
          <div className={styles.time}>
            <CommonInput
              type="number"
              label={'분(Minute)'}
              placeholder={'30'}
              value={minute}
              onChange={handleChangeMinute}
            />
          </div>
        </div>
        <div className={styles.form_item}>
          <CommonInput
            type="number"
            label={'혈당 (mg/dL)'}
            placeholder={'150'}
            value={value}
            onChange={handleChangeValue}
          />
        </div>
        <div className={styles.options}>
          <div className={styles.options_title}>
            <strong>추가 입력</strong>
          </div>
          <div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input
                  type="radio"
                  id="none"
                  name="category"
                  value={RecordOptionType.None}
                  onChange={handleChangeRadio}
                  defaultChecked
                />
                <label htmlFor="none">
                  <span>입력하지 않기</span>
                </label>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input
                  type="radio"
                  id="food"
                  name="category"
                  value={RecordOptionType.Food}
                  onChange={handleChangeRadio}
                />
                <label htmlFor="food">
                  <span className={styles.icon}>
                    <IconFood />
                  </span>
                  <span className={styles.icon_name}>식사</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput style={{ textAlign: 'right' }} value={foodValue} onChange={handleChangeFoodValue} />
                </div>
                <span className={styles.unit}>g</span>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input
                  type="radio"
                  id="medicine"
                  name="category"
                  value={RecordOptionType.Medicine}
                  onChange={handleChangeRadio}
                />
                <label htmlFor="medicine">
                  <span className={styles.icon}>
                    <IconSyringe />
                  </span>
                  <span className={styles.icon_name}>주사</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput
                    style={{ textAlign: 'right' }}
                    value={medicineValue}
                    onChange={handleChangeMedicineValue}
                  />
                </div>
                <span className={styles.unit}>단위</span>
              </div>
            </div>
            <div className={styles.form_item}>
              <div className={styles.radio_item}>
                <input
                  type="radio"
                  id="walk"
                  name="category"
                  value={RecordOptionType.Walk}
                  onChange={handleChangeRadio}
                />
                <label htmlFor="walk">
                  <span className={styles.icon}>
                    <IconWalk />
                  </span>
                  <span className={styles.icon_name}>산책</span>
                </label>
                <div className={styles.input_box}>
                  <CommonInput style={{ textAlign: 'right' }} value={walkValue} onChange={handleChangeWalkValue} />
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
