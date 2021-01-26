export interface Record {
  id: string;
  date: Date;
  value: number;
  optionType: RecordOptionType;
  optionValue: number | null;
  memo?: string;
}

export enum RecordOptionType {
  None = 'none',
  Medicine = 'medicine',
  Food = 'food',
  Walk = 'walk',
}

export interface SequenceChartData {
  x: Date;
  y: number;
}

export enum ColorType {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Warning = 'warning',
}
