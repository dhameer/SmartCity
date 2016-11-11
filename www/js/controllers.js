angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('landingCtrl', function($scope, $state) {

  $scope.gotoIncidents = function(){
    $state.go("app.report_incident");
  }

  $scope.gotoEmergency = function(){
    $state.go("app.local_emergency_services");
  }    

})

.controller('registerCtrl', function($scope, $state) {

  $scope.gotoThankYou = function(){
    $state.go("app.thank_you_register");
  }  

})

;
