import { request } from '@/utils/request';
export const login = data => {
  return request(
    {
      path: '/api/user/login',
      method: 'POST',
      data: data,
    },
    false
  );
};
