angular.module('starter.controllers')

.controller('registerCtrl', function($scope, $state) {

  $scope.gotoThankYou = function(){
    $state.go("app.thank_you_register");
  }

})

;
