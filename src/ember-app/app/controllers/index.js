import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.проба.caption'),
          title: i18n.t('forms.application.sitemap.проба.title'),
          children: [{
            link: 'i-i-s-probnyjj-город-l',
            caption: i18n.t('forms.application.sitemap.проба.i-i-s-probnyjj-город-l.caption'),
            title: i18n.t('forms.application.sitemap.проба.i-i-s-probnyjj-город-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-probnyjj-здание-l',
            caption: i18n.t('forms.application.sitemap.проба.i-i-s-probnyjj-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.проба.i-i-s-probnyjj-здание-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.проба.new-город.caption'),
            title: i18n.t('forms.application.sitemap.проба.new-город.title'),
            children: [{
              link: 'i-i-s-probnyjj-город-l',
              caption: i18n.t('forms.application.sitemap.проба.new-город.i-i-s-probnyjj-город-l.caption'),
              title: i18n.t('forms.application.sitemap.проба.new-город.i-i-s-probnyjj-город-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.проба.new-здание.caption'),
            title: i18n.t('forms.application.sitemap.проба.new-здание.title'),
            children: [{
              link: 'i-i-s-probnyjj-здание-l',
              caption: i18n.t('forms.application.sitemap.проба.new-здание.i-i-s-probnyjj-здание-l.caption'),
              title: i18n.t('forms.application.sitemap.проба.new-здание.i-i-s-probnyjj-здание-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.город.caption'),
          title: i18n.t('forms.application.sitemap.город.title'),
          children: [{
            link: 'i-i-s-probnyjj-город-l',
            caption: i18n.t('forms.application.sitemap.город.i-i-s-probnyjj-город-l.caption'),
            title: i18n.t('forms.application.sitemap.город.i-i-s-probnyjj-город-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.здание.caption'),
          title: i18n.t('forms.application.sitemap.здание.title'),
          children: [{
            link: 'i-i-s-probnyjj-здание-l',
            caption: i18n.t('forms.application.sitemap.здание.i-i-s-probnyjj-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.здание.i-i-s-probnyjj-здание-l.title'),
            icon: 'tasks',
            children: null
          }]
        }
      ]
    };
  }),
})