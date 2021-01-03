import { ColorType } from '../types/types';

export const getTextColorClass = (value: number) => {
  let colorType = ColorType.Primary;
  if (value >= 250) {
    colorType = ColorType.Warning;
  } else if (value <= 50) {
    colorType = ColorType.Danger;
  }

  return `${colorType}_color`;
};
