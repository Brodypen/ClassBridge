import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Person } from './types';

type Variables = { id: string };
type Response = Person;

export const usePerson = createQuery<Response, Variables, AxiosError>({
  queryKey: ['person'],
  fetcher: (variables) => {
    return client.post(`getPersons/${variables.id}`).then((response) => response.data);
  },
});
