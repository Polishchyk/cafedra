
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
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        chair: {
          field: 'site_url',
          references: 'Title',
        },
        event: {
          field: 'site_url',
          references: 'Title',
        },
        new: {
          field: 'site_url',
          references: 'Title',
        },
        science: {
          field: 'site_url',
          references: 'Title',
        },
        specialty: {
          field: 'site_url',
          references: 'Title',
        },
        applicant: {
          field: 'site_url',
          references: 'Title',
        },
        contact: {
          field: 'site_url',
          references: 'Title',
        },
        "history-of-the-institute": {
          field: 'site_url',
          references: 'Title',
        },
        home: {
          field: 'site_url',
          references: 'Title',
        },
        sp: {
          field: 'site_url',
          references: 'Title',
        },
        student: {
          field: 'site_url',
          references: 'Title',
        },
      },
    },
  },
  // ...
});