import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    user.score = 0;
     //add user to role "inactive"
     Roles.addUsersToRoles(user._id, 'inactive', 'everyone');
    return user;
  })
}
