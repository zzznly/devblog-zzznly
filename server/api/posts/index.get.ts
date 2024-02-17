import postData from '~/data/posts.json';

export default defineEventHandler((event) => {
  send(event, postData);
  return postData;
});
