// ./src/extensions/menus/strapi-server.js`
'use strict';

module.exports = plugin => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes[ 'menu-item' ].schema.attributes;

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    model_name: {
      type: 'enumeration',
      enum: [
        'applicant',
        'chair',
        'contact',
        'event',
        'history-of-the-institute',
        'home',
        'new',
        'science',
        'sp',
        'specialty',
        'student',
      ],
    },
    target_en: {
      type: 'enumeration',
      enum: [
        '_blank',
        '_parent',
        '_self',
        '_top',
      ],
    },
    title_en:{
      type: 'text'
    },
    url_en:{
      type: 'text'
    },
  };

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes[ 'menu-item' ].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  };

  return plugin;
};