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

Template.register.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    });
    Router.go('home');
  }
});

Template.login.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        swal('Oops...', error.reason, 'error');
      } else {
        $('#home').removeClass('inactive').addClass('active');
        Router.go("home");
      }
    });
  }
});

