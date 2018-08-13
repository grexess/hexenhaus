import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './main.html';
import './templates/header.js';
import './templates/footer.js';
import './templates/bla.js';
import './templates/login.js';
import './templates/navigation.js';
import './templates/corsika2018.js';

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/bla');
Router.route('/register');
Router.route('/login');
Router.route('/about');
Router.route('/corsika2018');
