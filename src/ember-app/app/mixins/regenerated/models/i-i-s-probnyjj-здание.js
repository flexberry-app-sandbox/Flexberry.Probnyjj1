import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  поЭтажей: DS.attr('number'),
  город: DS.belongsTo('i-i-s-probnyjj-город', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-probnyjj-здание.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поЭтажей: {
    descriptionKey: 'models.i-i-s-probnyjj-здание.validations.поЭтажей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-probnyjj-здание.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-probnyjj-здание', {
    номер: attr('Номер', { index: 0 }),
    город: belongsTo('i-i-s-probnyjj-город', 'Город', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-probnyjj-здание', {
    номер: attr('Номер', { index: 0 }),
    город: belongsTo('i-i-s-probnyjj-город', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
