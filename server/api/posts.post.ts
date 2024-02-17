import { navigateTo, useRequestHeaders } from 'nuxt/app';
import postData from '~/data/posts.json';

export default defineEventHandler(async (event) => {
  const { authorization } = useRequestHeaders(['authorization']);
  const token = authorization?.split(' ')[1];
  console.log('token', token);
  // if (!token || !verifyToken(token)) {
  //   // 토큰이 없거나 검증에 실패한 경우
  //   return send(event, { message: 'Unauthorized' }, '401');
  // }
  if (!token) {
    // await navigateTo('/login');
    return { message: 'Unauthorized', statusCode: 401 };
  }
  const body = await readBody(event);
  body.id = postData.length + 1;
  postData.push(body);
  return { message: 'success', body, statusCode: 201 };
});

// JWT 토큰을 검증 or 다른 방식으로 인증 토큰의 유효성 검사
// const verifyToken = (token: string) => {
//   return token === 'SECRET_TOKEN';
// };
