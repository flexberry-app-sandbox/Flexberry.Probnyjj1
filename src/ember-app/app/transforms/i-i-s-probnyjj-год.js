import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ГодEnum from '../enums/i-i-s-probnyjj-год';

export default FlexberryEnum.extend({
  enum: ГодEnum,
  sourceType: 'IIS.Probnyjj.Год'
});
