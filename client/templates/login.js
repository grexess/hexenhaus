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
        Router.go("home");
      }
    });
  },

  'click .message a': function (event) {
    event.preventDefault();
    $('form').animate({
      height: "toggle",
      opacity: "toggle"
    }, "slow");
  }
});