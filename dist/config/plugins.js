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
    // ...
});
