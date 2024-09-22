import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { Course } from './types';

type Variables = { id: string };
type Response = Course[];

export const useCourses = createQuery<Response, Variables, AxiosError>({
  queryKey: ['courses'],
  fetcher: (variables) => {
    return client.post(`getCourseSearch/${variables.id}`).then((response) => response.data.courses);
  },
});
