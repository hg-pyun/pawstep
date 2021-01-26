import { ColorType } from '@/types/types';

export const getTextColorClass = (value: number) => {
  let colorType = ColorType.Primary;
  if (value >= 250) {
    colorType = ColorType.Warning;
  } else if (value <= 50) {
    colorType = ColorType.Danger;
  }

  return `${colorType}_color`;
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
