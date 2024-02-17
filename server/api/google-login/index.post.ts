import { OAuth2Client } from 'google-auth-library';

// get runtime config variables
const config = useRuntimeConfig();

// create google client
const googleClientId = config.googleClientId;
const client = new OAuth2Client(googleClientId);

// API event handler
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = body.token;

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No token or invalid token provided.',
    });
  }
  const user = verify(token).catch(console.error);
  return user;
});
/**
 * @description Verifies JSON Web Token and returns user data if token is valid
 * @param token JSON Web Token from Google
 * @returns
 */
const verify = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: googleClientId,
  });
  const payload = ticket.getPayload();
  return payload;
};
