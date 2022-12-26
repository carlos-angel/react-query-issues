import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { Label } from '../interfaces';

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get('/labels');
  return data;
};

export default function useLabels() {
  const labelsQuery = useQuery(['labels'], getLabels);

  return labelsQuery;
}
