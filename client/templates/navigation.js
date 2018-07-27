import './navigation.html';

Template.navigation.events({

    'click .icon'(event) {
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
  
    'click .navEvent'(event) {
  
      var x = $('#myTopnav');
      if (x.hasClass("responsive")) {
        x.removeClass("responsive");
      }

      $('.navEvent').removeClass("active").addClass('inactive');
      $(event.currentTarget).addClass("active");

    },
  
    'click .logout': function (event) {
      event.preventDefault();
      Meteor.logout();
      $('.navEvent').removeClass("active").addClass('inactive');
      $('#login').addClass("active");
      Router.go('login');
    }
  });