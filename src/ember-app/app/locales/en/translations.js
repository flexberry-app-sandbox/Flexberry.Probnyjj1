import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbnyjjГородLForm from './forms/i-i-s-probnyjj-город-l';
import IISProbnyjjЗданиеLForm from './forms/i-i-s-probnyjj-здание-l';
import IISProbnyjjГородEForm from './forms/i-i-s-probnyjj-город-e';
import IISProbnyjjЗданиеEForm from './forms/i-i-s-probnyjj-здание-e';
import IISProbnyjjГородModel from './models/i-i-s-probnyjj-город';
import IISProbnyjjЗданиеModel from './models/i-i-s-probnyjj-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probnyjj-город': IISProbnyjjГородModel,
    'i-i-s-probnyjj-здание': IISProbnyjjЗданиеModel
  },

  'application-name': 'Probnyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probnyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probnyjj',
          title: 'Probnyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        проба: {
          caption: 'Проба',
          title: 'Проба',
          'i-i-s-probnyjj-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-probnyjj-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'new-город': {
            caption: 'NewГород',
            title: 'NewГород',
            'i-i-s-probnyjj-город-l': {
              caption: 'ГородL',
              title: 'Город'
            }
          },
          'new-здание': {
            caption: 'NewЗдание',
            title: 'NewЗдание',
            'i-i-s-probnyjj-здание-l': {
              caption: 'ЗданиеL',
              title: 'Здание'
            }
          }
        },
        город: {
          caption: 'Город',
          title: 'Город',
          'i-i-s-probnyjj-город-l': {
            caption: 'ГородL',
            title: 'Город'
          }
        },
        здание: {
          caption: 'Здание',
          title: 'Здание',
          'i-i-s-probnyjj-здание-l': {
            caption: 'ЗданиеL',
            title: 'Здание'
          }
        },
        probnyjj: {
          caption: 'Probnyjj',
          title: 'Probnyjj',
          'i-i-s-probnyjj-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-probnyjj-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probnyjj-город-l': IISProbnyjjГородLForm,
    'i-i-s-probnyjj-здание-l': IISProbnyjjЗданиеLForm,
    'i-i-s-probnyjj-город-e': IISProbnyjjГородEForm,
    'i-i-s-probnyjj-здание-e': IISProbnyjjЗданиеEForm
  },

});

export default translations;
