module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL', 'http://localhost:3000')],
      async handler(uid, { documentId, locale, status }) {
        const clientUrl = env('CLIENT_URL', 'http://localhost:3000');
        const previewSecret = env('PREVIEW_SECRET', 'test-secret');

        // Resolve document to get slug
        const document = await strapi.documents(uid).findOne({ documentId });
        const slug = document?.slug;

        // Determine path based on Content Type
        let pathname = '/';
        if (uid === 'api::page.page') {
          if (slug && slug !== 'home') {
            pathname = `/${slug}`;
          }
        }

        // Construct the preview URL pointing to Next.js API route
        const url = new URL('/api/preview', clientUrl);
        url.searchParams.append('secret', previewSecret);
        url.searchParams.append('slug', pathname);
        url.searchParams.append('type', uid);
        url.searchParams.append('locale', locale);
        url.searchParams.append('status', status);

        return url.toString();
      },
    },
  },
});
