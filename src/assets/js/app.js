$(document).ready(function() {
  // FIREBASE CONFIG
  var config = {
    apiKey: 'AIzaSyD-r4wUfuLYmzPIzjYBCjFq8cYYlBX3exg',
    authDomain: 'fir-auth-b8391.firebaseapp.com',
    databaseURL: 'https://fir-auth-b8391.firebaseio.com',
    projectId: 'fir-auth-b8391',
    storageBucket: '',
    messagingSenderId: '1005599541893'
  };
  // INITIALIZE FIREBASE
  firebase.initializeApp(config);
  // CHECK CURRENT PATH
  var currentPath = $(location)[0].pathname;
  // CHECK IF USER IS SIGNED IN
  firebase.auth().onAuthStateChanged(function(user) {
    if(user && (currentPath === '/index.html' || currentPath === '/' )) {
      // REDIRECT IF AUTHENTICATED
      $(location).attr('href', 'auth.html');
    } else if(!user && currentPath === '/auth.html') {
      // REDIRECT IF NOT AUTHENTICATED
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
  // parallax
  $('.parallax').parallax();
  // change font size for icons
  $('#logo-icon').css('font-size', '40px');
  // get current year
  var currentYear = new Date().getFullYear();
  $('#current-year').html(currentYear);
});