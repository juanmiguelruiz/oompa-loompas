import { OompaLoompaDetail, OompaLoompasListResponse } from 'types';

const API_URL = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

const getOompaLoompasList = async (page = 1): Promise<OompaLoompasListResponse> => {
  const response = await fetch(`${API_URL}?page=${page}`);
  return response.json();
};

const getOompaLoompaById = async (id: number): Promise<OompaLoompaDetail> => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const OompaLoompasService = {
  getOompaLoompasList,
  getOompaLoompaById,
};
