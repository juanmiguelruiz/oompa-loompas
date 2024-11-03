import { OompaLoompasResponse } from 'types';

const API_URL = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

const getOompaLoompas = async (page = 1): Promise<OompaLoompasResponse> => {
  const response = await fetch(`${API_URL}?page=${page}`);
  return response.json();
};

export const OompaLoompasService = {
  getOompaLoompas,
};
