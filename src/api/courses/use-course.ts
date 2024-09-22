import type { AxiosError } from 'axios';
import { createQuery } from 'react-query-kit';

import { client } from '../common';
import type { CourseInfo } from './types';

type Variables = { id: string };
type Response = CourseInfo;

export const useCourse = createQuery<Response, Variables, AxiosError>({
  queryKey: ['courses'],
  fetcher: (variables) => {
    return client
      .get(`getCourse/${variables.id}`)
      .then((response) => response.data);
  },
});
