
export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
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