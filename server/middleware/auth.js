export default defineEventHandler(async (event) => {
  const token = event.headers.authorization?.split(' ')[1]; // "Bearer TOKEN" 형식

  if (!token) {
    // return createError({ statusCode: 401, message: 'No token provided' });
    console.log('토큰 없음');
  }

  try {
    const user = await verifyToken(token);
    event.context.user = user;
  } catch (error) {
    // return createError({ statusCode: 401, message: 'Invalid token' });
    console.log('토큰 없음');
  }
});
