import { OompaLoompa, OompaLoompaDetail, OompaLoompasListResponse } from 'types';

const API_URL = 'https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas';

const getOompaLoompasList = async (page = 1): Promise<OompaLoompasListResponse> => {
  const response = await fetch(`${API_URL}?page=${page}`);
  const data = await response.json();
  return {
    current: data.current,
    total: data.total,
    results: data.results.map((oompa: OompaLoompa) => ({
      id: oompa.id,
      first_name: oompa.first_name,
      last_name: oompa.last_name,
      image: oompa.image,
      gender: oompa.gender,
      profession: oompa.profession,
    })),
  };
};

const getOompaLoompaById = async (id: number): Promise<OompaLoompaDetail> => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const OompaLoompasService = {
  getOompaLoompasList,
  getOompaLoompaById,
};
