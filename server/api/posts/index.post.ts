import postData from '~/data/posts.json';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  body.id = postData.length + 1;
  postData.push(body);
  return { message: 'success', body, statusCode: 201 };
});
