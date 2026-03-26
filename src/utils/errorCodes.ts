export const ERROR_CODES = {
  INTERNAL_SERVER: { status: 500, message: 'Internal Server Error' },
  USER_EXISTS: { status: 400, message: 'User already exists' },
  USER_NOT_FOUND: {
    status: 404,
    message: 'API endpoint not found',
  },
  INVALID_CREDENTIALS: { status: 401, message: 'Invalid credentials' },
  UNAUTHORIZED: { status: 401, message: 'Unauthorized' },
};
