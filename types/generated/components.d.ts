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
    title: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    question: Attribute.String & Attribute.Required;
    send: Attribute.String & Attribute.Required;
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
    Phones: Attribute.RichText & Attribute.Required;
    Secretary: Attribute.RichText & Attribute.Required;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    contacts: Attribute.Component<'footer.contacts'> & Attribute.Required;
    contact_form: Attribute.Component<'footer.contact-form'> &
      Attribute.Required;
    social_media: Attribute.Component<'footer.social-media', true> &
      Attribute.Required;
    Meta: Attribute.String & Attribute.Required;
    Copyright: Attribute.RichText & Attribute.Required;
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
    Image: Attribute.Media & Attribute.Required;
    Description: Attribute.RichText & Attribute.Required;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SpDegre extends Schema.Component {
  collectionName: 'components_sp_degres';
  info: {
    displayName: 'degre';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    sp_pr: Attribute.Component<'sp.speciality-program', true> &
      Attribute.Required;
  };
}

export interface SpSpecialityProgram extends Schema.Component {
  collectionName: 'components_sp_speciality_programs';
  info: {
    displayName: 'Speciality-Program';
    description: '';
  };
  attributes: {
    specialty: Attribute.Relation<
      'sp.speciality-program',
      'oneToOne',
      'api::specialty.specialty'
    >;
    program: Attribute.Text & Attribute.Required;
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
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'sp.degre': SpDegre;
      'sp.speciality-program': SpSpecialityProgram;
    }
  }
}
