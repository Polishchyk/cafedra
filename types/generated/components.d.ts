import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Title: Attribute.String;
    target: Attribute.String;
    URL: Attribute.String;
  };
}

export interface FooterContactForm extends Schema.Component {
  collectionName: 'components_footer_contact_forms';
  info: {
    displayName: 'Contact form';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    email: Attribute.String;
    question: Attribute.String;
    send: Attribute.String;
  };
}

export interface FooterContacts extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Contacts';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Address: Attribute.RichText & Attribute.Required;
    Phones: Attribute.RichText;
    Secretary: Attribute.RichText;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    contacts: Attribute.Component<'footer.contacts'>;
    contact_form: Attribute.Component<'footer.contact-form'>;
    social_media: Attribute.Component<'footer.social-media', true> &
      Attribute.Required;
    Meta: Attribute.String;
    Copyright: Attribute.RichText;
  };
}

export interface FooterSocialMedia extends Schema.Component {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social media';
    description: '';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
  };
}

export interface HeaderMenuItems extends Schema.Component {
  collectionName: 'components_header_menu_items';
  info: {
    displayName: 'menu_items';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    URL: Attribute.String;
  };
}

export interface HeaderMenu extends Schema.Component {
  collectionName: 'components_header_menus';
  info: {
    displayName: 'menu';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    items: Attribute.Component<'header.menu-items', true> & Attribute.Required;
    logo: Attribute.Media & Attribute.Required;
    item: Attribute.Component<'header.menu-items', true>;
  };
}

export interface HomePageHistorySection extends Schema.Component {
  collectionName: 'components_home_page_history_sections';
  info: {
    displayName: 'history-section';
    description: '';
  };
  attributes: {
    history_item: Attribute.Component<'home-page.item', true>;
    history_link: Attribute.Component<'button.button'>;
  };
}

export interface HomePageHomeSlider extends Schema.Component {
  collectionName: 'components_home_page_home_sliders';
  info: {
    displayName: 'Home slider';
    description: '';
  };
  attributes: {
    Slide: Attribute.Component<'home-page.slide', true>;
  };
}

export interface HomePageItem extends Schema.Component {
  collectionName: 'components_home_page_items';
  info: {
    displayName: 'History item';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface HomePageSlide extends Schema.Component {
  collectionName: 'components_home_page_slides';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    Title: Attribute.String;
    Button_text: Attribute.String;
    button_url: Attribute.String;
    button_target: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'footer.contact-form': FooterContactForm;
      'footer.contacts': FooterContacts;
      'footer.footer': FooterFooter;
      'footer.social-media': FooterSocialMedia;
      'header.menu-items': HeaderMenuItems;
      'header.menu': HeaderMenu;
      'home-page.history-section': HomePageHistorySection;
      'home-page.home-slider': HomePageHomeSlider;
      'home-page.item': HomePageItem;
      'home-page.slide': HomePageSlide;
    }
  }
}
