/**
* @ngdoc service
* @name playalongservicesApp.customerIoHelper
* @description
* # customerIoHelper
* Service in the playalongservicesApp.
*/
function customerIoHelper() {
  const identifyUser = function(userModel) {
    if (!userModel || !userModel.uid || !window._cio) { return false; }
    window._cio.identify({
      // Required attributes
      id: userModel.uid,           // Unique id for the currently signed in user in your application.
      email: userModel.email || '', // Email of the currently signed in user.
      created_at: userModel.creationDate || Date.now(),   // Timestamp in your system that represents when
      // the user first signed up. You'll want to send it
      // as seconds since the epoch.

      // Optional (these are examples. You can name attributes what you wish)
      firstName: userModel.firstName || '',       // Add any attributes you'd like to use in the email subject or body.
      lastName: userModel.lastName || '',
      userType: userModel.userType || 'normal',      // To use the example segments, set this to 'free' or 'premium'.
    });

    return true;
  };
  return {
    identifyUser,
  };
}

export default customerIoHelper;
