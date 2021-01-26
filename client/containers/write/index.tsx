import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import styles from './index.module.scss';
import HeaderSub from '@/components/HeaderSub';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import CommonInput from '@/components/CommonInput';
import IconFood from '@/components/icon/IconFood';
import IconWalk from '@/components/icon/IconWalk';
import IconSyringe from '@/components/icon/IconSyringe';
import { useRecoilState } from 'recoil';
import { recordState } from '@/store';
import { Record, RecordOptionType } from '@/types/types';
import dayjs from 'dayjs';
import ImgMemo from '@/assets/img/memo.png';
import { generateUUID } from '@/commons/utility';

type Write = {
  title: string;
};

function Index(props: Write & RouteComponentProps<{ id: string }>) {
  const [recordList, setRecordList] = useRecoilState(recordState);
  const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [value, setValue] = useState('');
  const [radio, setRadio] = useState(RecordOptionType.None);
  const [memo, setMemo] = useState('');

  const [foodValue, setFoodValue] = useState('');
  const [medicineValue, setMedicineValue] = useState('');
  const [walkValue, setWalkValue] = useState('');

  const { title, history, match } = props;

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

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
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
      id: generateUUID(),
      date: new Date(`${date}T${hour}:${minute}`),
      value: Number(value),
      optionType: radio,
      optionValue: optionValue,
      memo: memo,
    };

    let newRecordList;
    if (match.params.id) {
      const updateIndex = recordList.findIndex((item) => item.id === match.params.id);
      newRecordList = [...recordList.slice(0, updateIndex), newRecord, ...recordList.slice(updateIndex + 1)];
    } else {
      newRecordList = [...recordList, newRecord];
    }

    const sortedList = newRecordList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    localStorage.setItem('pawstep-record', JSON.stringify(sortedList)); // TODO: Server가 도입되면 제거
    setRecordList(sortedList);
    history.goBack();
  };

  useEffect(() => {
    if (match.params.id) {
      const record = recordList.find((record) => record.id === match.params.id);
      console.log(record);
      setDate(dayjs(record.date).format('YYYY-MM-DD'));
      setHour(dayjs(record.date).format('HH'));
      setMinute(dayjs(record.date).format('mm'));
      setValue(record.value.toString());

      console.log(record.optionType);
      setRadio(record.optionType);

      switch (record.optionType) {
        case RecordOptionType.Food:
          setFoodValue(record.optionValue.toString());
          break;
        case RecordOptionType.Walk:
          setWalkValue(record.optionValue.toString());
          break;
        case RecordOptionType.Medicine:
          setMedicineValue(record.optionValue.toString());
          break;
      }

      setMemo(record.memo);
    }
  }, []);

  return (
    <>
      <HeaderSub title={title} onClickCancelButton={() => history.replace('/')} />
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
                  checked={radio === RecordOptionType.None}
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
                  checked={radio === RecordOptionType.Food}
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
                  checked={radio === RecordOptionType.Medicine}
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
                  checked={radio === RecordOptionType.Walk}
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
        <div className={styles.memo}>
          <div className={styles.memo_title}>
            <img src={ImgMemo} alt="Memo" />
            <span>메모</span>
          </div>
          <textarea value={memo} onChange={handleChangeMemo} />
        </div>
      </form>
      <div className={styles.submit} onClick={handleClickSubmitButton}>
        <button type={'button'}>기록하기</button>
      </div>
    </>
  );
}

export default withRouter(Index);
