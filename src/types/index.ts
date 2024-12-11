export enum Gender {
  M = 'Man',
  F = 'Woman',
}

export type OompaLoompaDetail = {
  first_name: string;
  last_name: string;
  description?: string;
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
  quota: string;
  random_string: string;
};

export type OompaLoompa = OompaLoompaDetail & {
  id: number;
};

export type OompaLoompasListResponse = {
  results: OompaLoompa[];
  total: number;
  current: number;
};
