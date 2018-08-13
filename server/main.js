import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
/* 
if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    
    return user;
  })
}


Meteor.methods({
  addInitialRoles: function (element) {
    Roles.addUsersToRoles(user._id, ['active', 'admin'],'everyone');
    //add user to role "inactive"
    //Roles.addUsersToRoles(user._id, 'inactive', 'everyone');
  }
}) */

Meteor.methods({
  addInitialRoles: function (userID) {
    
    //register administrator account
    //Roles.addUsersToRoles(userID, ['active', 'admin'],'everyone');
    
    //add user to role "inactive"
    Roles.addUsersToRoles(userID, 'inactive', 'everyone');
  },
  
  sendEmail: function (email) {

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: "admin@hexenhaus.online",
      from: "admin@hexenhaus.online",
      subject: "[INFO] Neue Hexenhaus-Registrierung",
      text: "Neue Registrierung mit email-Adresse: " + email
    });
  },

});

