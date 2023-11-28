import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probnyjj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probnyjj',
          title: 'Probnyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probnyjj-город-l': IISProbnyjjГородLForm,
    'i-i-s-probnyjj-здание-l': IISProbnyjjЗданиеLForm,
    'i-i-s-probnyjj-город-e': IISProbnyjjГородEForm,
    'i-i-s-probnyjj-здание-e': IISProbnyjjЗданиеEForm
  },

});

export default translations;
