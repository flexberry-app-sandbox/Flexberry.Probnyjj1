import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probnyjj-город-l');
  this.route('i-i-s-probnyjj-город-e',
  { path: 'i-i-s-probnyjj-город-e/:id' });
  this.route('i-i-s-probnyjj-город-e.new',
  { path: 'i-i-s-probnyjj-город-e/new' });
  this.route('i-i-s-probnyjj-здание-l');
  this.route('i-i-s-probnyjj-здание-e',
  { path: 'i-i-s-probnyjj-здание-e/:id' });
  this.route('i-i-s-probnyjj-здание-e.new',
  { path: 'i-i-s-probnyjj-здание-e/new' });
});

export default Router;
