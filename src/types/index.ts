export enum Gender {
  M = 'Man',
  F = 'Woman',
}

export type OompaLoompa = {
  first_name: string;
  last_name: string;
  favorite: {
    color: string;
    food: string;
    random_string: string;
    song: string;
  };
  gender: keyof typeof Gender;
  image: string;
  profession: string;
  email: string;
  age: number;
  country: string;
  height: number;
  id: number;
};

export type OompaLoompasResponse = {
  results: OompaLoompa[];
  total: number;
  current: number;
};
