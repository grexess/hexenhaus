import {
  Template
} from 'meteor/templating';
import {
  ReactiveVar
} from 'meteor/reactive-var';

import './main.html';

Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/register');
Router.route('/login');
Router.route('/about');

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

Template.navigation.events({

  'click .icon' (event) {
    event.preventDefault();
    var x = $('#myTopnav');

    if (x.hasClass("topnav")) {
      if (x.hasClass("responsive")) {
        x.removeClass("responsive");
      } else {
        x.addClass("responsive");
      }
    } else {
      x.addClass("topnav");
    }
  },

  'click .navEvent' (event) {

    var x = $('#myTopnav');
    if (x.hasClass("responsive")) {
      x.removeClass("responsive");
    }
  }

});