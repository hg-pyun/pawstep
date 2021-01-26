import { atom, selector } from 'recoil';
import { Record, RecordOptionType } from '../types/types';

// TODO: Server가 도입되면 제거
const localStorageData = JSON.parse(localStorage.getItem('pawstep-record')) || [];

export const recordState = atom({
  key: 'recordState',
  default: localStorageData as Array<Record>,
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
