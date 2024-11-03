import { OompaLoompa } from 'src/types';
import { Email, ColorBox } from './styles';
import { ExtraInfo } from './types';

export function categorizeExtraInfo(data: OompaLoompa): ExtraInfo {
  const { age, height, country, email, favorite } = data;
  return {
    email: {
      label: 'Email',
      value: <Email href={`mailto:${email}`}>{email}</Email>,
    },
    age: { label: 'Age', value: age },
    height: { label: 'Height', value: `${height} cm` },
    country: { label: 'Country', value: country },
    color: {
      label: 'Favorite Color',
      value: favorite.color,
      component: <ColorBox color={favorite.color} />,
    },
    food: { label: 'Favorite Food', value: favorite.food },
  };
}
