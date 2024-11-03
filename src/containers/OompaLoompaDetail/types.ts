import { ReactElement } from 'react';

export interface ExtraInfo {
  [key: string]: {
    label: string | number;
    value: string | number | ReactElement;
    component?: ReactElement;
  };
}
