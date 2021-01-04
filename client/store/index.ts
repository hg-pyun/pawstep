import { atom, selector } from 'recoil';
import { Record, RecordOptionType } from '../types/types';

export const recordState = atom({
  key: 'recordState',
  default: [
    // { date: new Date('2021-01-01T14:50:32'), value: 300, optionType: RecordOptionType.Food, optionValue: 1 },
    // { date: new Date('2021-01-01T17:10:32'), value: 170, optionType: RecordOptionType.Medicine, optionValue: 1 },
    // { date: new Date('2021-01-01T20:40:32'), value: 190, optionType: RecordOptionType.Medicine, optionValue: 2 },
    // { date: new Date('2021-01-02T01:30:32'), value: 250, optionType: RecordOptionType.Medicine, optionValue: 5 },
    // { date: new Date('2021-01-02T03:30:32'), value: 210, optionType: RecordOptionType.Medicine, optionValue: 1 },
    // { date: new Date('2021-01-02T06:30:32'), value: 300, optionType: RecordOptionType.Walk, optionValue: 3 },
  ] as Array<Record>,
});

export const getRecentlyRecord = selector({
  key: 'getRecentlyRecord',
  get: ({ get }) => {
    const recordList = get(recordState);
    if (recordList.length > 0) {
      return recordList[0];
    } else {
      return null;
    }
  },
});
