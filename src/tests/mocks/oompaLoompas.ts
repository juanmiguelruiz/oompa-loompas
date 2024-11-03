import { OompaLoompa } from 'types';

export const mockOompaLoompa1: OompaLoompa = {
  id: 1,
  first_name: 'John',
  last_name: 'Doe',
  profession: 'Developer',
  image: 'image1.jpg',
  gender: 'M',
  email: 'john@wonka.com',
  age: 25,
  country: 'Wonderland',
  height: 150,
  favorite: {
    color: 'blue',
    food: 'chocolate',
    random_string: 'test1',
    song: 'song1',
  },
};

export const mockOompaLoompa2: OompaLoompa = {
  id: 2,
  first_name: 'Jane',
  last_name: 'Smith',
  profession: 'Designer',
  image: 'image2.jpg',
  gender: 'F',
  email: 'jane@wonka.com',
  age: 28,
  country: 'Wonderland',
  height: 155,
  favorite: {
    color: 'red',
    food: 'candy',
    random_string: 'test2',
    song: 'song2',
  },
};

export const mockOompaLoompasResponse = {
  current: 2,
  total: 2,
  results: [mockOompaLoompa1, mockOompaLoompa2],
};

export const mockOompaLoompasList = [mockOompaLoompa1, mockOompaLoompa2];
