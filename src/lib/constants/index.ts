export const APP_DOMAIN =
  process.env.NODE_ENV === 'production'
    ? 'https://linkleaf.app'
    : 'http://localhost:3000';

export const SHOW_BACKGROUND_SEGMENTS = new Set([
  'pricing',
  'help',
  'blog',
  '(blog-post)',
  'login',
  'register',
  'privacy',
  'terms',
]);
