import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Course } from './types';

type Variables = { id: string };
type Response = Course[];

export const useReminders = createQuery<Response, Variables, AxiosError>({
  queryKey: ['reminders'],
  fetcher: (variables) => {
    return client.get(`hwDue/${variables.id}`).then((response) => response.data.courses);
  },
});
