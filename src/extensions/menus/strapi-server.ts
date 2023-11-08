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
    target_ua: {
      type: 'enumeration',
      enum: [
        '_blank',
        '_parent',
        '_self',
        '_top',
      ],
    },
    title_ua:{
      type: 'text'
    },
    link_ua:{
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