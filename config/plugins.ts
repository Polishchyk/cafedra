export default ({env}) => (
  {
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
        page: {
          field: 'seo_url',
          references: 'Title',
        },
        'news-category': {
          field: 'seo_url',
          references: 'Title',
        }
      },
    },
  },
  menus: {
    config: {
      maxDepth: 3,
      layouts: {
        menuItem: {
          link: [
            {
              input: {
                label: 'Model Name',
                name: 'model_name',
                type: 'select',
                options: [
                  {label:'Applicant',value: 'applicant'},
                  {label:'Chair',value: 'chair'},
                  {label:'Contact',value: 'contact'},
                  {label:'Event',value: 'event'},
                  {label:'History of the institute',value: 'history-of-the-institute'},
                  {label:'Home',value: 'home'},
                  {label:'New',value: 'new'},
                  {label:'Science',value: 'science'},
                  {label:'Specialty Page',value: 'sp'},
                  {label:'Specialty',value: 'specialty'},
                  {label:'Student',value: 'student'},
                ],
              },
              grid: {
                col: 6,
              },
            },
          ],
          link_ua: [
            {
              input: {
                label: 'Title',
                name: 'title_ua',
                type: 'text'
              },
            },
            {
              input: {
                label: 'URL',
                name: 'url_ua',
                type: 'text'
              },
            },
            {
              input: {
                label: 'Target',
                name: 'target_ua',
                type: 'select',
                options: [
                  {
                    label: '_blank',
                    value: '_blank',
                  },
                  {
                    label: '_parent',
                    value: '_parent',
                  },
                  {
                    label: '_self',
                    value: '_self',
                  },
                  {
                    label: '_top',
                    value: '_top',
                  },
                ],
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Model Name',
                name: 'model_name',
                type: 'select',
                options: [
                  {label:'Applicant',value: 'applicant'},
                  {label:'Chair',value: 'chair'},
                  {label:'Contact',value: 'contact'},
                  {label:'Event',value: 'event'},
                  {label:'History of the institute',value: 'history-of-the-institute'},
                  {label:'Home',value: 'home'},
                  {label:'New',value: 'new'},
                  {label:'Science',value: 'science'},
                  {label:'Specialty Page',value: 'sp'},
                  {label:'Specialty',value: 'specialty'},
                  {label:'Student',value: 'student'},
                ],
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
  // ...
});