"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'polishchyk.a.v@gmail.com',
                defaultReplyTo: 'polishchyk.a.v@gmail.com',
                testAddress: 'polishchyk.a.v@gmail.com',
            },
        },
    },
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                chair: {
                    field: 'seo_url',
                    references: 'Title',
                },
                event: {
                    field: 'seo_url',
                    references: 'Title',
                },
                new: {
                    field: 'seo_url',
                    references: 'Title',
                },
                science: {
                    field: 'seo_url',
                    references: 'Title',
                },
                specialty: {
                    field: 'seo_url',
                    references: 'Title',
                },
                applicant: {
                    field: 'seo_url',
                    references: 'Title',
                },
                contact: {
                    field: 'seo_url',
                    references: 'Title',
                },
                "history-of-the-institute": {
                    field: 'seo_url',
                    references: 'Title',
                },
                home: {
                    field: 'seo_url',
                    references: 'Title',
                },
                sp: {
                    field: 'seo_url',
                    references: 'Title',
                },
                student: {
                    field: 'seo_url',
                    references: 'Title',
                },
            },
        },
    },
    // ...
});
