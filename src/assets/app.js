$(document).ready(function() {
  // FIREBASE CONFIG
  var config = {

  };
  // INITIALIZE FIREBASE
  firebase.initializeApp(config);
  // CHECK IF USER IS SIGNED IN
  var currentPath = $(location)[0].pathname;
  firebase.auth().onAuthStateChanged(function(user) {
    if(user && currentPath === '/index.html') {
      $(location).attr('href', 'auth.html');
    } else if(!user && currentPath === '/auth.html') {
      $(location).attr('href', 'index.html');
    }
  });
  // SIGN IN THE USER
  $('#si-btn').on('click', function() {
    var email = $('#si-email').val().trim();
    var password = $('#si-password').val().trim();
    if(email && password) {
      // ADD USER TO DATABASE
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
          $(location).attr('href', 'auth.html');
        }).catch(function(error) {
          alert(error.message);
        });
    }
  });
  // SIGN UP THE USER
  $('#su-btn').on('click', function() {
    var email = $('#su-email').val();
    var password = $('#su-password').val();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function() {
        $(location).attr('href', 'auth.html');
      }).catch(function(error) {
        alert(error.message);
      });
  });
  // SIGN OUT THE USER
  $('#sign-out').on('click', function() {
    firebase.auth().signOut()
      .then(function() {
        $(location).attr('href', 'index.html');
      }).catch(function(error) {
        alert(error.message);
      });
  });

  /*****************
  JAVASCRIPT FOR CSS
  ******************/
  // open modals
  $('.modal').modal();
  $('#logo-icon').css('font-size', '40px');
});