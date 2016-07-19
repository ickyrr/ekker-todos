import {Meteor} from 'meteor/meteor';

const authenticate = () => {
  let userSubs = Meteor.subscribe('users.current');
  if(userSubs.ready()) {
    const user = Meteor.user();
    return {
      user,
    };
  }
};

export default authenticate;
