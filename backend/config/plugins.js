module.exports = ({ env }) => ({
    'preview-button': {
        config: {
            contentTypes: [
                {
                    uid: 'api::page.page',
                    published: {
                        url: 'https://wegov.nyc/{slug}',
                    },
                    draft: {
                        url: 'https://wegov.nyc/api/preview',
                        query: {
                            type: 'api::page.page',
                            slug: '{slug}',
                            secret: env('STRAPI_PREVIEW_SECRET', 'wegov-preview-secret'),
                        },
                    },
                },
            ],
        },
    },
});
