import publications from './publications';
import methods from './methods';

import {Accounts} from 'meteor/accounts-base';

publications();
methods();

// init accounts if none
Meteor.startup( () => {
  if(!Meteor.users.find().count()) {
    for(let i = 1; i <= 10; i ++) {
      Accounts.createUser({
        username: 'user1' + i,
        password: 'password' + i,
        email: 'user' + i +'@ekker.com',
      });
    }
  }
});
