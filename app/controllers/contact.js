import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    message:'',
    messageValid:Ember.computed.gte('message.length', 5),
    emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isValid: Ember.computed.and('messageValid', 'emailValid'),
    isDisabled: Ember.computed.not('isValid'),
    
    actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});