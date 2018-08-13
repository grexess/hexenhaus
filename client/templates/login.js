import './login.html';

Template.login.events({
  'click #loginBtn': function (event) {
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
  },

  /* Create a new user account*/
  'click #registerBtn': function (event) {
    event.preventDefault();
    var email = $('[name=registeremail]').val();
    var password = $('[name=registerpwd]').val();
    var passwordconfirm = $('[name=confirm-registerpwd]').val();

    Accounts.createUser({
      email: email,
      password: password
    }, function (error) {
      if (error) {
        swal('Oops...', error.reason, 'error');
      } else {
        swal("Account created!", "Please wait for approval mail!", "success");
        $('#home').removeClass('inactive').addClass('active');

        Meteor.call('addInitialRoles', Meteor.user()._id);
        Meteor.call('sendEmail', email);
        Router.go("home");
      }
    });
  },

  /* Switch between login and registration formular */
  'click .message a': function (event) {
    event.preventDefault();
    $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "slow");
  }
});