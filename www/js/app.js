// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })


    .state('app.landing', {
      url: '/landing',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/landing.html',
          controller: 'landingCtrl'
        }
      }
    })

    .state('app.register', {
      url: '/register',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl'
        }
      }
    })   

    .state('app.thank_you_register', {
      url: '/thank_you_register',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/thank_you.html',
          controller: 'registerCtrl'
        }
      }
    }) 

    .state('app.report_incident', {
      url: '/report_incident',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/report_incident.html',
          controller: 'incidentCtrl'
        }
      }
    })   

    .state('app.report_incident_pothole', {
      url: '/report_incident_pothole',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/report_incident_pothole.html',
          controller: 'incidentCtrl'
        }
      }
    })  

    .state('app.incident_thank_you', {
      url: '/incident_thank_you',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/incident_thank_you.html',
          controller: 'incidentCtrl'
        }
      }
    }) 

    .state('app.local_emergency_services', {
      url: '/local_emergency_services',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/local_emergency_services.html',
          controller: 'emergencyCtrl'
        }
      }
    }) 

    .state('app.other_emergency_services', {
      url: '/other_emergency_services',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/other_emergency_services.html',
          controller: 'other_emergency_servicesCtrl'
        }
      }
    }) 


    .state('app.mayors_message_list', {
      url: '/mayors_message_list',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/mayors_message_list.html',
          controller: 'mayorsMessageCtrl'
        }
      }
    })  

    .state('app.mayors_message', {
      url: '/mayors_message',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/mayors_message.html',
          controller: 'mayorsMessageCtrl'
        }
      }
    })                                    

;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/landing');
});
