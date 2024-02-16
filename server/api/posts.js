import postData from '~/data/posts.json';

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    send(event, postData);
    return postData;
  }
  if (event.method === 'POST') {
    const body = await readBody(event);
    body.id = postData.length + 1;
    postData.push(body);
    send(event, body, 201);
    return { message: 'success', body };
  }
});
